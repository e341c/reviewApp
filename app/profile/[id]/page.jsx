"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProfileReview from "@/components/ProfileReview";
import { useState } from "react";
import Filter from "@/components/Filter/Filter";

export default function Profile({ params }) {
    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState()
    const [query, setQuery] = useState('')

    const { id } = params;
    const { data: session, status } = useSession();

    const router = useRouter();

    if (id === session?.user.id) {
        router.push("/profile");
    }

    const { data, error, isLoading } = useSWR(`/api/profile/${id}`, async () => {
        const res = await axios.get(`/api/profile/${id}`);
        const user = await axios.get(`/api/profile/user/${id}`)
        setReviews(res.data)
        setUser(user.data)
        return res.data;
    }, {
        revalidateOnFocus: false,
        revalidateOnMount: true
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error);
        return <p>Something went wrong. Try to reload page</p>
    }

    const likes = []

    reviews?.filter(item => {
        if(item.likes.length > 0){
            likes.push(...item.likes) 
        }
    })

    return (
        <div>
            <div className="row" style={{ marginTop: "80px" }}>
                <div className="row">
                    <h3 className="mb-4">{user?.name}'s profile</h3>
                    <div className="col col-md-3 mb-4">
                        <div className="p-3 shadow rounded">
                            <p>{user?.name}</p>
                            <p>{user?.email}</p>
                            <p>
                                <strong> {reviews?.length} </strong> reviews
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faHeart} />
                                &nbsp;<strong>{likes.length}</strong>&nbsp;likes
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <Filter url={`/api/profile/${id}`} getQuery={(result) => {setQuery(result)}} getReviews={(result) => {setReviews(result)}} />
                    </div>
                </div>

                <div className="col" style={{ minWidth: "70%" }}>
                    <div className="mb-4">
                        <h3>{user?.name} reviews</h3>
                    </div>
                    {reviews.length === 0 && <p>There are no reviews here yet</p>}
                    {reviews?.map((item) => (
                        <ProfileReview data={item} id={id} highlight={query}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
