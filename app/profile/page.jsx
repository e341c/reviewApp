"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { Button } from "react-bootstrap";
import ProfileReview from "@/components/ProfileReview";

export default function Profile({params}) {
    const {data: session, status} = useSession()

    const id = session?.user.id

    console.log(session);

    const { data, error, isLoading } = useSWR(`/api/profile/${id}`, async () => {
        const res = await axios.get(`/api/profile/${id}`)
        return res.data
    })

    console.log(data);

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        console.log(error);
        return <p>{error.message}</p>
    }

    return (
        <div>
            <div className="d-flex" style={{marginTop: "100px" }}>
                <div className="me-5 w-75">
                    <div className="mb-4 d-flex justify-content-between">
                        <h1>Your reviews</h1>
                        {id === session?.user.id &&
                            <div>
                                <Link href={"/review/add"} className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPlus} style={{width: "14px", height: "16px"}}/>
                                    &nbsp;
                                    Add new
                                </Link>
                            </div>}
                    </div>
                    {data[1].length === 0 && <p>There are no reviews here yet</p>}
                    {data[1]?.map(item => <ProfileReview reviewData={item} id={id}/>)}
                </div>
                
                <div className="w-25">
                    <div className="p-3 shadow rounded">
                        <img src="/images/avatar.jpeg" alt="" className="img-fluid rounded mb-3" />
                        <p>{session?.user.name}</p>
                        <p>{session?.user.email}</p>
                        <p> <strong> {data[1]?.length} </strong> reviews </p>
                        <p><FontAwesomeIcon icon={faHeart} />&nbsp;<strong>120</strong>&nbsp;likes</p>
                        {id === session?.user.id && 
                        <Button variant="outline-danger" onClick={() => signOut()}>Log Out</Button>}
                    </div>
                </div>
            </div>
        </div>
    );
}