"use client";
import axios from "axios";
import useSWR from "swr";
import Review from "@/components/Review";
import { useState } from "react";
import Filter from "@/components/Filter/Filter";
import Sort from "@/components/Sort/Sort";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Home() {
    const [reviews, setReviews] = useState([])
    const [query, setQuery] = useState('')
    const [sortedItems, setSortedItems] = useState()

    const { data, error, isLoading } = useSWR(
        API_URL + "/api/review/",
        async () => {
            const res = await axios.get(API_URL + `/api/review/`);
            setReviews(res.data)
            return res.data;
        },
        { 
            revalidateOnMount: true,
            revalidateOnFocus: false,
        }
    );

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.log(error);
        return <p>Something went wrong. Try to reload page</p>
    }

    return (
        <div className="vh-100">
            <div>
                <div className="row mb-4">
                    <h1 className="display-3 col col-auto" >HOME PAGE</h1>
                    <div className="col col-auto">
                        <Filter url={'/api/review'} getQuery={(result) => {setQuery(result)}} getReviews={(result) => {setReviews(result)}} />
                    </div>
                    <Sort reviews={reviews} getSort={(result) => {setSortedItems(result)}}/>
                </div>
                
                {sortedItems?.length === 0 && <p>There are no reviews here yet</p>}
                {sortedItems && sortedItems?.map((item) => <Review main={true} data={item} key={item._id} highlight={query} />)}    
            </div>
        </div>
    );
}
