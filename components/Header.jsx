"use client";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee, faSearch, faCircleHalfStroke, faXmark } from "@fortawesome/free-solid-svg-icons";
import ThemeButton from "./ThemeButton";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import { usePathname } from 'next/navigation'

library.add(faCheckSquare, faCoffee, faSearch, faCircleHalfStroke, faXmark);

export default function Header() {
    const path = usePathname()

    const { data: session, status } = useSession();

    const id = session?.user.id;
    // console.log(path);
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.js')
    }, [])

    return (
        <nav class="navbar fixed-top navbar-expand-lg bg-body shadow z-3">
            <div class="container">
                <Link href={"/"} className="navbar-brand">
                    <h3 className="mb-0">
                        <strong>HOME</strong>
                    </h3>
                </Link>

                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {status === "unauthenticated" && (
                                <div className="d-flex me-5 align-items-center">
                                    <Link href={"/register"} className="nav-link">
                                        <strong>Sign up</strong>
                                    </Link>
                                    <p className="m-0">&nbsp;or&nbsp;</p>
                                    <Link href={"/login"} className="nav-link">
                                        <strong>Login</strong>
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li class="nav-item">
                            {status === "authenticated" && (
                                <Link href={`/profile`} className="nav-link me-2">
                                    <strong>Profile</strong>
                                </Link>
                            )}
                        </li>
                        <li class="nav-item">
                            {session?.user.admin && (
                                <Link href={`/admin`} className="nav-link me-2">
                                    <strong>Admin</strong>
                                </Link>
                            )}
                        </li>
                    </ul>
                    <div className="d-flex">
                        <SearchBar url={path === '/' && '/api/review' || path === '/profile' && `/api/profile/${id}` } />
                        <ThemeButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}
