"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Review from "@/components/Review";

export default function Profile() {
    const {data, status} = useSession()
    const reviews = [
        {
            id: 1,
            reviewTitle: "My first review",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is text of reiveiw....",
            rate: 8,
            author: "Erik",
            reviewLikes: 10,
            reviewRate: 3
        },
        {
            id: 4,
            reviewTitle: "My review 2",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is text of reiveiw....",
            rate: 8,
            author: "Erik",
            reviewLikes: 10,
            reviewRate: 5
        },
        {
            id: 3,
            reviewTitle: "My review 3",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is text of reiveiw....",
            rate: 8,
            author: "Erik",
            reviewLikes: 10,
            reviewRate: 1
        },
        {
            id: 5,
            reviewTitle: "My review 4",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is __text__ of reiveiw....",
            rate: 8,
            author: "Erik",
            reviewLikes: 10,
            reviewRate: 3
        },
    ]

    console.log(data, status);
    
    return (
        <div>
            <div className="d-flex" style={{marginTop: "100px" }}>
                <div className="me-5 w-75">
                    <div className="mb-4 d-flex justify-content-between">
                        <h1>Your reviews</h1>
                        <div>
                            <Link href={"/review/add"} className="btn btn-primary">
                                <FontAwesomeIcon icon={faPlus} style={{width: "14px", height: "16px"}}/>
                                &nbsp;
                                Add new
                            </Link>
                        </div>
                    </div>
                    {reviews.map(item => <Review reviewData={item} key={item.id}/>)}
                </div>
                {data && 
                <div className="w-25">
                    <div className="p-3 shadow rounded">
                        <img src="/images/avatar.jpeg" alt="" className="img-fluid rounded mb-3" />
                        <p>{data.user.name}</p>
                        <p>{data.user.email}</p>
                        <p> <strong> {reviews.length} </strong> reviews </p>
                        <p><FontAwesomeIcon icon={faHeart} />&nbsp;<strong>120</strong>&nbsp;likes</p>
                        <DropdownButton variant="primary" title="More actions">
                            <Dropdown.Item href="#/action-1">Edit profile</Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => signOut()}>Log Out</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}
