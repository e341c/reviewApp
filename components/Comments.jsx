import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useSession } from "next-auth/react";

library.add(faBars);

export default function Comment({ id }) {
    const { data, isLoading, error } = useSWR(
        "/api/comment",
        async () => {
            const res = await axios.get(`/api/comment/${id}`);
            return res.data;
        },
        { refreshInterval: 100 }
    );

    const { data: session } = useSession();

    const [commentId, setCommentId] = useState("");
    const [commentValue, setCommentValue] = useState("");

    if (data?.length === 0) {
        return (
            <div className="shadow py-5 px-1 rounded">
                <h5 className="m-0 ms-5">No comments yet</h5>
            </div>
        );
    }


    const handleEdit = (commentId, comment) => {
        setCommentId(commentId);
        setCommentValue(comment);
    };

    const handleCancel = async () => {
        setCommentValue("");
        setCommentId("");
    };

    const body = {
        comment: commentValue,
        reviewId: id,
        authorId: session?.user.id,
    };

    const handleSubmit = async () => {
        const res = await axios.post(`/api/comment/edit/${commentId}`, body);
        setCommentValue("");
        setCommentId("");
    };

    return (
        <div className="shadow rounded p-3">
            <p className="px-3">
                <strong>{data?.length} Comments</strong>
            </p>
            <div className="px-3">
                <h4 className="mb-4">User comments</h4>
                <div className="px-3">
                    {data?.map((item) => (
                        <div className="mb-5 row">
                            <div className="col">
                                <div className="row">
                                    <Link href={`/profile/${item.authorId._id}`} className="col text-decoration-none">
                                        <strong>{item.authorId.name}</strong>
                                    </Link>

                                    {session?.user.id === item.authorId._id && (
                                        <Dropdown className="col col-auto">
                                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                                <FontAwesomeIcon icon="fa-solid fa-bars" className="me-1" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleEdit(item._id, item.comment)}>Edit</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    )}
                                </div>

                                <p className="mt-3 mb-3">{item.comment}</p>
                                {commentId === item._id && (
                                    <Form.Group className="mb-3" controlId="desc">
                                        <Form.Label className="d-flex justify-content-between align-items-center">
                                            <strong>Edit comment</strong>
                                            <Button variant="danger" onClick={handleCancel}>
                                                <FontAwesomeIcon icon="fa-solid fa-xmark" /> Close
                                            </Button>
                                        </Form.Label>
                                        <Form.Control
                                            name="comment"
                                            value={commentValue}
                                            as="textarea"
                                            className="mb-3"
                                            rows={3}
                                            style={{ resize: "none" }}
                                            maxLength={400}
                                            placeholder="Enter your comment"
                                            onChange={(e) => setCommentValue(e.target.value)}
                                        />
                                        <Button variant="primary" onClick={handleSubmit}>
                                            Edit comment
                                        </Button>
                                    </Form.Group>
                                )}
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}