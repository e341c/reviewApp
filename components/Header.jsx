"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Header() {
    const { data: session, status } = useSession();

    const id = session?.user.id;
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.js')
    }, [])

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body shadow" style={{zIndex:"1090"}}>
            <div className="container">
                <Link href={"/"} className="navbar-brand">
                    <h3 className="mb-0">
                        <strong>HOME</strong>
                    </h3>
                </Link>
                
                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {status === "unauthenticated" && (
                                <div className="d-flex me-3 align-items-center">
                                    <Link href={"/register"} className="nav-link text-primary">
                                        <strong>Sign up</strong>
                                    </Link>
                                    <p className="m-0">&nbsp;or&nbsp;</p>
                                    <Link href={"/login"} className="nav-link text-primary">
                                        <strong>Login</strong>
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li className="nav-item">
                            {status === "authenticated" && (
                                <Link href={`/profile`} className="nav-link text-primary me-2">
                                    <strong>Profile</strong>
                                </Link>
                            )}
                        </li>
                        <li className="nav-item">
                            {session?.user.admin && (
                                <Link href={`/admin`} className="nav-link text-primary me-2">
                                    <strong>Admin</strong>
                                </Link>
                            )}
                        </li>
                    </ul>

                    <ThemeButton />
                </div>
            </div>
        </nav>
    );
}
