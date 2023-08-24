import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faSearch, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import ThemeButton from "./ThemeButton";


library.add(faCheckSquare, faCoffee, faSearch, faCircleHalfStroke)

export default function Header() {
    

    return (
        <header style={{position:"fixed", top: "0", left: "0", right: "0"}} className="bg-body shadow">
            <div className="container d-flex justify-content-between align-items-center py-3">
                <div>
                    <Link href={"/"} className="nav-link">    
                        <h3 className="mb-0"><strong>HOME</strong></h3>
                    </Link>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex me-5">
                        <Link href={"/register"} className="nav-link">
                            <strong>Sign up</strong> 
                        </Link>
                        <p className="m-0">&nbsp;or&nbsp;</p>
                        <Link href={"/login"} className="nav-link">
                            <strong>Login</strong>
                        </Link>
                    </div>
                    {/* <div className="d-flex me-5">
                        <Link href={"/profile"} className="nav-link me-2">
                            Sign up
                        </Link>
                    </div> */}
                    <div className="me-4">
                        <InputGroup>
                            <Form.Control
                                placeholder="Find an overview"
                                aria-label="Find an overview"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </Button>
                        </InputGroup>
                    </div>
                    <div>
                        <ThemeButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
