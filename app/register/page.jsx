"use client"
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
    return (
        <main className="w-100 vh-100 d-flex justify-content-center align-items-center">
            <Form className="p-4 d-flex flex-column align-items-center bg-body shadow-lg" style={{ border: "0", borderRadius: "8px", minWidth: "340px" }}>
                <h3 className="mb-3">Sign up</h3>

                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name"/>
                </Form.Group>

                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-4 w-100" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-4 w-100" controlId="formBasicPassword">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Repeat password" />
                </Form.Group>
                
                <Button className="mb-4 w-100 shadow-sm" variant="primary" type="submit">
                    Sign up
                </Button>

                <p>Alreade have an account? <Link href={"/login"}> <strong>Login now</strong> </Link> </p>
            </Form>
        </main>
    );
  }
