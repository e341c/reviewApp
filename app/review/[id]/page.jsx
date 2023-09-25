'use client'
import Comment from "@/components/Comments/Comments";
import LikeToggle from "@/components/LikeToggle";
import NewComment from "@/components/Comments/NewComment";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";
import Loading from "@/components/Loading";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Review({params}) {
    const {id} = params
    const router = useRouter();
    const [likes, setLikes] = useState([])
    
    const { data, error, isLoading } = useSWR(`/api/review/`, async () => {
        const res = await axios.get(API_URL + `/api/review/${id}`)
        setLikes(res.data.likes)
        return res.data
    }, { refreshInterval: 1000 });

    if(isLoading){
        return <div className="vh-100"> <Loading /> </div>
    }

    if(error){
        console.log(error);
        return <p>Something went wrong. Try to reload page</p>
    }

    if(!data){
        router.push('/')
    }

    return (
        <div className="mb-5">
            <div className="row">
                <div className="col col-auto mb-3" style={{ maxWidth: "150px" }}>
                    <img src={data?.img} alt="" className="object-fit-cover w-100 h-auto" style={{ minWidth: "70px" }} />
                </div>
                <div className="col w-75" style={{minWidth: "240px"}}>
                    <h2>{data?.titleReview}</h2>
                    <h4>{data?.titleItem}</h4>
                    <p>Category:&nbsp;{data?.category.name}</p>
                    <p>
                        {data?.tags?.map((item) => {
                            item + ''
                        })}
                    </p>
                    <p>Author rate: {data?.rating}</p>
                    <div className="row">
                        <p className="col col-auto me-auto">Likes: {data?.likes.length}</p>
                        <p className="col col-auto">Review written by&nbsp;
                            <Link href={`/profile/${data?.author?._id}`} className='text-primary'>
                                {data?.author?.name}
                            </Link> 
                        </p>
                    </div>
                </div>
            </div> 
                <h4>Review:</h4>
                <ReactMarkdown className="mt-4">{data?.desc}</ReactMarkdown>
                <LikeToggle likes={likes} id={id} />
            <hr className="w-100" />
            <div>
                <NewComment id={id} />
                <Comment id={id} />
            </div>
        </div>
    );
}
