'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Rating } from "react-simple-star-rating";
import useSWR from "swr";

export default function Review({params}) {
    const {id} = params
    const router = useRouter();

    const { data, error, isLoading } = useSWR(`/api/review/${id}`, async () => {
        const res = await axios.get(`/api/review/${id}`)
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

    if(!data){
        router.push('/')
    }

    return (
        <div className="mb-5">
            <div className="d-flex">
                <div className="me-5 mt-2">
                    <img
                        src={data?.img}
                        alt=""
                        style={{
                            width: "156px",
                            height: "231px",
                            background: "red",
                        }}
                        className='object-fit-cover'
                    />
                </div>
                <div className="w-75">
                    <h2>{data?.titleReview}</h2>
                    <h4>{data?.titleItem}</h4>
                    <p>{data?.category.name}</p>
                    <p>{data?.tags.map((item) => item.name + " ")}</p>
                    <ReactMarkdown>{data?.desc}</ReactMarkdown>
                    <p>Rate: {data?.rating}</p>
                    <div className="d-flex justify-content-between">
                        <p>Review likes: {data?.likes}</p>
                        <p>Author: &nbsp;
                            <Link href={`/profile/${data?.author._id}`} className='text-primary'>
                                {data?.author.name}
                            </Link> 
                        </p>
                    </div>
                </div>
            </div>
            <hr className="w-100" />
        </div>
    );
}
