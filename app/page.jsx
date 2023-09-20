"use client";
import Review from "@/components/Review";
import axios from "axios";
import useSWR, { preload } from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function Home() {
    const [reviews, setReviews] = useState([])
    const { data, error, isLoading } = useSWR("/api/review", async () => {
        const res = await axios.get(`/api/review`);
        console.log("Ok");
        return res.data;
    }, { refreshInterval: 100 });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error);
        // return <p>{error.message}</p>;
    }

    // if (data.length === 0) {
    //     return <p>There are no reviews here yet</p>;
    // }

    return (
        <div className="vh-100">
            <h1 className="display-3 mb-5">HOME PAGE</h1>
            {data?.length === 0 && <p>There are no reviews here yet</p>}
            {data?.map((item) => (
                <Review reviewData={item} />
            ))}
        </div>
    );
}
