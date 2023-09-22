"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/navigation";
import Review from "@/components/Review";
import ProfileReview from "@/components/ProfileReview";

export default function Profile({ params }) {
    const { id } = params;
    const { data: session, status } = useSession();

    const router = useRouter();

    if (id === session?.user.id) {
        router.push("/profile");
    }

    const { data, error, isLoading } = useSWR(`/api/profile/${id}`, async () => {
        const res = await axios.get(`/api/profile/${id}`);
        return res.data;
    }, { refreshInterval: 100 });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error);
        return <p>Something went wrong. Try to reload page</p>
    }

    const likes = []

    data[1]?.filter(item => {
        if(item.likes.length > 0){
            likes.push(...item.likes) 
        }
    })

    return (
        <div>
            <div className="row" style={{ marginTop: "80px" }}>
                <div className="col col-md-3 mb-4">
                    <h1 className="mb-4">{data[0]?.name}'s profile</h1>
                    <div className="p-3 shadow rounded">
                        <p>{data[0]?.name}</p>
                        <p>{data[0]?.email}</p>
                        <p>
                            <strong> {data[1]?.length} </strong> reviews
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faHeart} />
                            &nbsp;<strong>{likes.length}</strong>&nbsp;likes
                        </p>
                    </div>
                </div>

                <div className="col" style={{ minWidth: "70%" }}>
                    <div className="mb-4">
                        <h1>{data[0]?.name} reviews</h1>
                    </div>
                    {data[1].length === 0 && <p>There are no reviews here yet</p>}
                    {data[1]?.map((item) => (
                        <ProfileReview reviewData={item} id={id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
