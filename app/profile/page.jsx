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
import { useState } from "react";
import Filter from "@/components/Filter/Filter";
import Loading from "@/components/Loading";
import Sort from "@/components/Sort/Sort";

export default function Profile({ params }) {
    const [reviews, setReviews] = useState([])
    const [query, setQuery] = useState('')
    const [sortedItems, setSortedItems] = useState()
    
    const { data: session, status } = useSession();

    const id = session?.user.id;

    const { data, error, isLoading } = useSWR(`/api/profile/${id}`, async () => {
        const res = await axios.get(`/api/profile/${id}`);
        setReviews(res.data)
        return res.data;
    }, { 
        revalidateOnMount: true,
        revalidateOnFocus: false
    });

    if (isLoading) {
        return <div className="vh-100"> <Loading /> </div>
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
                <div className="row mb-3">
                    <h3 className="mb-4">Your profile</h3>
                    <div className="col col-md-3 mb-4" style={{minWidth:"260px"}}>
                        
                        <div className="p-4 shadow rounded">
                                <p>{session?.user.name}</p>
                                <p>{session?.user.email}</p>
                                <p>
                                    Reviews:&nbsp;<strong> {reviews?.length} </strong>
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
                    <div className="col">
                        <Filter url={`/api/profile/${id}`} getQuery={(result) => {setQuery(result)}} getReviews={(result) => {setReviews(result)}} />
                        <Sort reviews={reviews} getSort={(result) => {setSortedItems(result)}}/>
                    </div>
                </div>
            
                <div className="col" style={{minWidth:"70%"}}>
                    <div className="mb-4 d-flex justify-content-between">
                        <h3>Your reviews</h3>
                        {id === session?.user.id && (
                            <div className="">
                                <Link href={"/review/add"} className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPlus} style={{ width: "14px", height: "16px" }} />
                                    &nbsp; Add new
                                </Link>
                            </div>
                        )}
                    </div>
                    {reviews.length === 0 && <p>There are no reviews here yet</p>}
                    {sortedItems?.map((item) => (
                        <ProfileReview data={item} key={item._id} id={id} highlight={query} />
                    ))}
                </div>
            </div>
        </div>
    );
}
