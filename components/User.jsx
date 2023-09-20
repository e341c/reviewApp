import Link from "next/link";

export default function User({data}){
    return (
        <Link href={`/profile/${data?._id}`} className="text-decoration-none text-body">
            <div className="shadow p-3 pt-4 rounded mb-3">
                <p>ID: <strong>{data?._id}</strong> </p>
                <p>Name: <strong>{data?.name}</strong> </p>
                <p>Email: <strong>{data?.email}</strong> </p>
                <p className="mb-0"> {data?.admin ? <strong>Admin</strong> : <strong>Not admin</strong> } </p>
                <hr className="mt-4" />
            </div>
        </Link>
    )
}