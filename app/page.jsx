"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import useSWR, { preload } from "swr";
import Review from "@/components/Review";
import Categories from "@/components/Categories";

export default function Home() {
    const router = useRouter();
    const { data, error, isLoading } = useSWR(
        "/api/review",
        async () => {
            const res = await axios.get(`/api/review/`);
            return res.data;
        },
        { refreshInterval: 100 }
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error);
        router.refresh();
    }

    return (
        <div className="vh-100">
            <div className="col">
                <h1 className="display-3 mb-5">HOME PAGE</h1>
                {data?.length === 0 && <p>There are no reviews here yet</p>}
                {data && data?.map((item) => <Review reviewData={item} />)}
            </div>
        </div>
    );
}
