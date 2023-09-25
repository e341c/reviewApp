import { Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <div className="w-100 h-100 position-absolute z-2 d-flex justify-content-center align-items-center">
            <div className="py-4 px-5 bg-primary rounded d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="light" />&nbsp;<p className="m-0 text-light">Loading... Please wait</p>
            </div>
        </div>
    );
}