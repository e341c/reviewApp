import { useSession } from "next-auth/react";
import ReactMarkdown from "react-markdown";

export default function Review({ data }) {

    return (
        <div className="mb-5">
            <div className="d-flex">
                <div style={{ maxWidth: "150px" }} className="mt-2 me-3">
                    <img src={data?.img} alt="" className="object-fit-cover w-100 h-auto" style={{ minWidth: "70px" }} />
                </div>

                <div className="w-75" style={{ minWidth: "180px" }}>
                    <h2>{data?.titleReview}</h2>
                    <h4>{data?.titleItem}</h4>
                    <p>{data?.category?.name}</p>
                    <p>
                        {data?.tags.map((item) => {
                            return <span className="rbt-token p-1">{item + " "}</span>;
                        })}
                    </p>
                    <ReactMarkdown>{data?.desc}</ReactMarkdown>
                    <p>Rate: {data?.rating}</p>

                    <div className="d-flex justify-content-between">
                        <p>Review likes: {data?.likes?.length}</p>
                        {data?.author?.name && (
                            <p>
                                Author: &nbsp;
                                {data?.author.name}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <hr className="w-100" />
        </div>
    );
}
