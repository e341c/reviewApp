import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function ProfileReview({ reviewData: data, id }) {
    const {data: session, status} = useSession()
    const [tags, setTags] = useState(JSON.parse(JSON.stringify(data?.tags)))

    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="mb-5">
            <div>
                <div className="row">
                    <Link
                        href={`/review/${data?._id}`}
                        className="col text-decoration-none text-body d-flex justify-content-between"
                    >
                        <div className="mt-2 me-3" style={{maxWidth:"150px"}}>
                            <img
                                src={data?.img}
                                alt=""
                                className="object-fit-cover w-100 h-auto"
                                style={{minWidth:"70px"}}
                            />
                        </div>

                        <div style={{minWidth: "180px"}}>
                            <h2>{data?.titleReview}</h2>
                            <h4>{data?.titleItem}</h4>
                            <p>{data?.category?.name}</p>
                            <p>
                                {tags?.map(item => {
                                    const parseItem = JSON.parse(item)
                                    return parseItem.name + ' '
                                })}
                            </p>
                            <ReactMarkdown>
                                {data?.desc?.substring(0, 200) + "..."}
                            </ReactMarkdown>
                            <p>Rate: {data?.rating}</p>
                            <div className="d-flex justify-content-between">
                                <p>Review likes: {data?.likes}</p>
                            </div>
                        </div>
                    </Link>
                    {id === session?.user.id && 
                    <Dropdown className="col col-auto">
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            More actions
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href={`/review/edit/${data?._id}`}>Edit</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger" onClick={() => axios.delete(`/api/review/delete/${data?._id}`)}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
                </div>
            </div>

            <hr className="w-100" />
        </div>
    );
}
