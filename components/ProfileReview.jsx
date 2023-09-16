import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function ProfileReview({ reviewData, id }) {
    const [tags, setTags] = useState([])

    console.log(reviewData);

    const {data: session, status} = useSession()

    if(reviewData.length > 0){
        setTags(JSON.parse(JSON.stringify(reviewData.tags)))
    }

    return (
        <div className="mb-5">
            <div className="d-flex justify-content-between">
                <Link
                    href={`/review/${reviewData?._id}`}
                    className="text-decoration-none text-body d-flex"
                >
                    <div className="me-5 mt-2">
                        <img
                            src={reviewData?.img}
                            alt=""
                            className="object-fit-cover"
                            style={{
                                width: "156px",
                                height: "231px",
                                background: "red",
                            }}
                        />
                    </div>

                    <div className="w-75">
                        <h2>{reviewData?.titleReview}</h2>
                        <h4>{reviewData?.titleItem}</h4>
                        <p>{reviewData?.category?.name}</p>
                        <p>
                            {tags.map(item => {
                                const parseItem = JSON.parse(item)
                                return parseItem.name + ' '
                            })}
                        </p>
                        <ReactMarkdown>
                            {reviewData?.desc?.substring(0, 200) + "..."}
                        </ReactMarkdown>
                        <p>Rate: {reviewData?.rating}</p>
                        <div className="d-flex justify-content-between">
                            <p>Review likes: {reviewData?.likes}</p>
                        </div>
                    </div>
                </Link>
                {id === session?.user.id && 
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        More actions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href={`/review/edit/${reviewData?._id}`}>Edit</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className="text-danger" href={`/review/delete/${reviewData?._id}`}>Delete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>}
            </div>

            <hr className="w-100" />
        </div>
    );
}
