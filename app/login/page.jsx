"use client"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Nav } from "react-bootstrap";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
    const {data, status} = useSession()

    console.log(data, status);

    const router = useRouter()

    if(status === "loading"){
        return <div>Loading...</div>
    }

    if(status === "authenticated"){
        router.push('/')
    }

    return (
        <main className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <div className="p-4 d-flex flex-column align-items-center body-bg shadow-lg" style={{ border: "0", borderRadius: "8px", minWidth: "340px" }}>
                <Form>
                    <h3 className="mb-3">Sign in</h3>
                    <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className="mb-4 w-100" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button className="mb-3 w-100 shadow-sm" variant="primary" type="submit">
                        Submit
                    </Button>

                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <hr style={{width:"7rem"}} />
                        <strong className="mx-3">OR</strong>
                        <hr style={{width:"7rem"}} />
                    </div>
                </Form>
                    <div className="mb-4 d-flex">
                        <Nav.Item className="mx-4" onClick={() => signIn("google")}>
                            <Nav.Link href={"#"} > <FontAwesomeIcon icon={faGoogle} size="2xl"/> </Nav.Link>
                        </Nav.Item>
                    
                        <Nav.Item className="mx-4" onClick={() => signIn("facebook")}>
                            <Nav.Link href={"#"} > <FontAwesomeIcon icon={faFacebook} size="2xl"/> </Nav.Link>
                        </Nav.Item>
                    </div>
            
                    <p>Don't have an account? <Link href={"/register"}> <strong>Signup now</strong> </Link> </p>
            </div>
        </main>
    );
}
