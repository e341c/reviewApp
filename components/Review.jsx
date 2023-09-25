import { useSession } from "next-auth/react";
import Link from "next/link";
import Highlighter from "react-highlight-words";
import ReactMarkdown from "react-markdown";

export default function Review({main, data, highlight }) {
    const { data: session, status } = useSession();

    return (
        <div className="mb-5">
            <div className="d-flex" >
                <Link href={`/review/${data?._id}`} className="text-decoration-none text-body mt-2 me-3" >
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
                            {data?.tags.map((item) => {
                                return <span className="rbt-token p-1">{item + " "}</span>
                            })}
                        </p>
                            {main ? (
                                <div className="mb-3">
                                    <Highlighter
                                    highlightClassName="bg-warning"
                                    searchWords={[highlight]}
                                    autoEscape={true}
                                    textToHighlight={data?.desc?.substring(0, 200) + "..."}
                                    />
                                </div>
          
                            ) : (
                                <ReactMarkdown>{data?.desc}</ReactMarkdown>
                            )}
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
