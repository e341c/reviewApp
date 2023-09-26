"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { signIn, useSession } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { data: session, status } = useSession();

    const router = useRouter();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "authenticated") {
        router.push("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        signIn("credentials", {
            email,
            password,
        });
    };

    return (
        <main className="w-100 h-100 d-flex justify-content-center align-items-center">
            <div
                className="mt-5 p-4 d-flex flex-column align-items-center body-bg shadow-lg"
                style={{ border: "0", borderRadius: "8px", minWidth: "340px" }}
            >
                <Form onSubmit={handleSubmit}>
                    <h3 className="mb-3">Sign in</h3>
                    <Form.Group
                        className="mb-3 w-100"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group
                        className="mb-4 w-100"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button
                        className="mb-3 w-100 shadow-sm"
                        variant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>

                    <div className="mb-2 d-flex align-items-center justify-content-between">
                        <hr style={{ width: "7rem" }} />
                        <strong className="mx-3">OR</strong>
                        <hr style={{ width: "7rem" }} />
                    </div>
                </Form>
                <div className="mb-4 d-flex">
                    <Button variant="link text-body" className="mx-3" onClick={() => signIn("google")}>    
                        <FontAwesomeIcon icon={faGoogle} size="2xl" />
                    </Button>

                    <Button variant="link text-body" className="mx-3" onClick={() => signIn("facebook")}>    
                        <FontAwesomeIcon
                                    icon={faFacebook}
                                    size="2xl"
                                />
                    </Button>
                </div>

                <p>
                    Don't have an account?&nbsp;
                    <Link href={"/register"}>
                        <strong>Signup now</strong>
                    </Link>
                </p>
            </div>
        </main>
    );
}
