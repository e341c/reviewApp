"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import useSWR from "swr";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import User from "@/components/User";

export default function Profile({params}) {
    const {data: session, status} = useSession()

    const { data, error, isLoading } = useSWR(`/api/admin`, async () => {
        const res = await axios.get(`/api/admin`)
        return res.data
    })

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error.message}</p>
    }

    return (
        <div>
            <div className="row">
            <div className="col col-md-4 mb-4">
                    <div className="p-3 shadow rounded">
                        <p>Admin</p>
                        <p>{session?.user.email}</p>
                        <p>Users: <strong> {data?.length} </strong> </p>
                        <Button variant="outline-danger" onClick={() => signOut()}>Log Out</Button>
                    </div>
                </div>

                <div className="col">
                    <div className="mb-4 d-flex justify-content-between">
                        <h1 className="me-3">Users</h1>
                        <div>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Find an user"
                                    aria-label="Find an user"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                    {data?.length === 0 && <p>There are no users here yet</p>}
                    {data?.map(item => <User data={item} /> )}
                </div>
            </div>
        </div>
    );
}