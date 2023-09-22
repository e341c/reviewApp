"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { Button } from "react-bootstrap";
import ProfileReview from "@/components/ProfileReview";

export default function Profile({ params }) {
    const { data: session, status } = useSession();

    const id = session?.user.id;

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
                <div className="col col-md-3 mb-4" style={{minWidth:"260px"}}>
                    <h1 className="mb-4">Your profile</h1>
                    <div className="p-4 shadow rounded">
                            <p>{session?.user.name}</p>
                            <p>{session?.user.email}</p>
                            <p>
                                Reviews:&nbsp;<strong> {data[1]?.length} </strong>
                            </p>
                            <p>
                                Likes:&nbsp;
                                <strong>{likes.length}</strong>&nbsp;
                                <FontAwesomeIcon icon={faHeart} />
                            </p>
                            {id === session?.user.id && (
                                <Button variant="outline-danger" onClick={() => signOut()}>
                                    Log Out
                                </Button>
                            )}
                    </div>
                </div>

                <div className="col" style={{minWidth:"70%"}}>
                    <div className="mb-4 d-flex justify-content-between">
                        <h1>Your reviews</h1>
                        {id === session?.user.id && (
                            <div className="pt-2">
                                <Link href={"/review/add"} className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPlus} style={{ width: "14px", height: "16px" }} />
                                    &nbsp; Add new
                                </Link>
                            </div>
                        )}
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
