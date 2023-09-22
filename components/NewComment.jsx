import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function NewComment({ id }) {
    const [commentValue, setCommentValue] = useState("");
    const { data: session } = useSession();

    const body = {
        comment: commentValue,
        reviewId: id,
        authorId: session?.user.id,
    };

    const handleComment = async () => {
        const res = await axios.post(`/api/comment/${id}`, body);
        setCommentValue("");
    };

    return (
        <div className="shadow p-3 rounded mb-3">
            {session && (
                <Form.Group className="mb-3 p-3" controlId="desc">
                    <Form.Label>Your comment</Form.Label>
                    <Form.Control
                        name="commentValue"
                        value={commentValue}
                        as="textarea"
                        className="mb-3"
                        rows={3}
                        style={{ resize: "none" }}
                        maxLength={400}
                        placeholder="Enter your comment"
                        onChange={(e) => setCommentValue(e.target.value)}
                    />
                    <Button variant="primary" onClick={handleComment}>
                        Send comment
                    </Button>
                </Form.Group>
            )}
            {!session && (
                <div className="p-3">
                    <p className="m-0">Only registered users can leave a comment.&nbsp;
                    <Link href={"/register"} className="d-inline nav-link text-primary">
                        <strong>Sign up</strong>
                    </Link>
                    &nbsp;or&nbsp;
                    <Link href={"/login"} className="d-inline nav-link text-primary">
                        <strong>Login</strong>
                    </Link>
                    </p>
                </div>
            )}
        </div>
    );
}
