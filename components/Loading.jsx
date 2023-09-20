export default function Loading() {
    return (
        <div className="w-100 h-100 position-absolute z-2 d-flex justify-content-center align-items-center">
            <div className="w-75 py-4 px-5 bg-primary rounded d-flex justify-content-center align-items-center">
                <p className="m-0 text-light">Loading...please wait</p>
            </div>
        </div>
    );
}