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
import { useRouter } from "next/navigation";

export default function Profile({params}) {
    const {id} = params
    const {data: session, status} = useSession()

    const router = useRouter();

    if(id === session?.user.id){
        router.push('/profile')
    }

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
                        <h1>{data[0]?.name} reviews</h1>
                    </div>
                    {data[1].length === 0 && <p>There are no reviews here yet</p>}
                    {data[1]?.map(item => <ProfileReview reviewData={item} id={id}/>)}
                </div>
                
                <div className="w-25">
                    <div className="p-3 shadow rounded">
                        <img src="/images/avatar.jpeg" alt="" className="img-fluid rounded mb-3" />
                        <p>{data[0]?.name}</p>
                        <p>{data[0]?.email}</p>
                        <p> <strong> {data[1]?.length} </strong> reviews </p>
                        <p><FontAwesomeIcon icon={faHeart} />&nbsp;<strong>120</strong>&nbsp;likes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}