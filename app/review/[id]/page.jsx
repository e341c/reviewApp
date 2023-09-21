'use client'
import Comment from "@/components/Comments";
import NewComment from "@/components/NewComment";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";

export default function Review({params}) {
    const {id} = params
    const router = useRouter();
    const [tags, setTags] = useState([]);
    
    const { data, error, isLoading } = useSWR(`/api/review/${id}`, async () => {
        const res = await axios.get(`/api/review/${id}`)
        setTags(JSON.parse(JSON.stringify(res.data.tags)))
        return res.data
    }, { refreshInterval: 100 });

    if(isLoading){
        return <p>Loading...</p>
    }

    if(error){
        console.log(error);
        return <p>{error.message}</p>
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
                        {tags?.map((item) => {
                            const parseItem = JSON.parse(item);
                            return parseItem.name + " ";
                        })}
                    </p>
                    <p>Author rate: {data?.rating}</p>
                    <div className="row">
                        <p className="col col-auto me-auto">Likes: {data?.likes}</p>
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
            <hr className="w-100" />
            <div>
                <NewComment id={id} />
                <Comment id={id} />
            </div>
        </div>
    );
}
