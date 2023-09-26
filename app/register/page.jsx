"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [error, setError] = useState();
    const [matchError, setMatchError] = useState()

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const matchPassword = e.target[3].value;

        if(password !== matchPassword){
            setMatchError("Password does not match")
        }

        if(password === matchPassword){
            setMatchError()
            const body = {
                name,
                email,
                password
            }
    
            try {
                const res = await axios.post("/api/auth/register", body)
                res.status === 201 &&
                    router.push("/login?success=Account has been created");
            } catch (err) {
                setError(err);
                console.log(err);
            }
        }
    };

    return (
        <main className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Form
                onSubmit={handleSubmit}
                className="mt-5 mb-5 p-4 d-flex flex-column align-items-center bg-body shadow-lg"
                style={{ border: "0", borderRadius: "8px", minWidth: "340px" }}
            >
                <h3 className="mb-3">Sign up</h3>

                <Form.Group className="mb-3 w-100">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required/>
                </Form.Group>

                <Form.Group className="mb-3 w-100">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-4 w-100">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                    {matchError && <p style={{fontSize:"13px"}} className="text-danger m-0 mt-1"> {matchError} </p> }
                </Form.Group>
               
                <Form.Group className="mb-4 w-100">
                    <Form.Label className="d-flex">Repeat password </Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Repeat password"
                    />
                    {matchError && <p style={{fontSize:"13px"}} className="text-danger m-0 mt-1"> {matchError} </p> }
                </Form.Group>
                
                {error && <p className="text-danger"> Something went wrong </p> }
                <Button
                    className="mb-4 w-100 shadow-sm"
                    variant="primary"
                    type="submit"
                >
                    Sign up
                </Button>

                <p>
                    Alreade have an account?&nbsp;
                    <Link href={"/login"}>
                        <strong>Login now</strong>
                    </Link>
                </p>
            </Form>
        </main>
    );
}
