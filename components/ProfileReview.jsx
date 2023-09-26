import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import Highlighter from "react-highlight-words";

export default function ProfileReview({ data, id, highlight }) {
    const {data: session, status} = useSession()

    return (
        <div className="mb-5" >
            <div>
                <div className="row">
                    <Link
                        href={`/review/${data?._id}`}
                        className="col text-decoration-none text-body d-flex "
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
                                {data?.tags.map((item) => {
                                    return <span className="rbt-token p-1">{item + " "}</span>
                                })}
                            </p>

                            <div className="mb-3">
                                <Highlighter
                                highlightClassName="bg-warning"
                                searchWords={[highlight]}
                                autoEscape={true}
                                textToHighlight={data?.desc?.substring(0, 200) + "..."}
                                />
                            </div>

                            <p>Rate: {data?.rating}</p>
                            <div className="d-flex justify-content-between">
                                <p>Review likes: {data?.likes.length}</p>
                            </div>
                        </div>
                    </Link>
                    {(id === session?.user.id || session?.user.admin) && 
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
