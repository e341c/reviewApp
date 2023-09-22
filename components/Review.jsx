import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Review({main, reviewData: data }) {
    const [tags, setTags] = useState(JSON.parse(JSON.stringify(data?.tags)));
    const { data: session, status } = useSession();

    return (
        <div className="mb-5" key={data._id}>
            <div className="d-flex">
                <Link href={`/review/${data?._id}`} className="text-decoration-none text-body mt-2 me-3">
                    <div style={{ maxWidth: "150px" }}>
                        <img src={data?.img} alt="" className="object-fit-cover w-100 h-auto" style={{ minWidth: "70px" }} />
                    </div>
                </Link>
                <div className="w-75" style={{minWidth: "180px"}}>
                    <Link href={`/review/${data._id}`} className="text-decoration-none text-body">
                        <h2>{data?.titleReview}</h2>
                        <h4>{data?.titleItem}</h4>
                        <p>{data?.category?.name}</p>
                        <p>
                            {tags?.map((item) => {
                                const parseItem = JSON.parse(item);
                                return parseItem.name + " ";
                            })}
                        </p>
                        {main ? (<ReactMarkdown>{data?.desc?.substring(0, 200) + "..."}</ReactMarkdown>) 
                            : (<ReactMarkdown>{data?.desc}</ReactMarkdown>)
                        }
                        
                        <p>Rate: {data?.rating}</p>
                    </Link>
                    <div className="d-flex justify-content-between">
                        <p>Review likes: {data?.likes?.length}</p>
                        {data?.author?.name && (
                            <p>
                                Author: &nbsp;
                                <Link href={data?.author?._id === session?.user?.id ? "/profile" : `/profile/${data?.author?._id}`} className="text-primary">
                                    {data?.author.name}
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <hr className="w-100" />
        </div>
    );
}
