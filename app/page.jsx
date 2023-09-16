"use client";
import Review from "@/components/Review";
import axios from "axios";
import useSWR, { preload } from 'swr'

export default function Home() {
    const { data, error, isLoading } = useSWR('/api/review', async () => {
        const res = await axios.get('/api/review')
        return res.data
    })

    console.log(data);
        
    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        console.log(error);
        return <p>{error.message}</p>
    }

    if(data.length === 0){
        return <p>There are no reviews here yet</p>
    }

    return (
        <div className="vh-100">        
            <h1 className="display-3 mb-5">HOME PAGE</h1>
            {data?.map(item => <Review reviewData={item}/>)}
        </div>
    );
}
