import { useSession } from 'next-auth/react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'

export default function Review({reviewData}) {
    const jsonTags = JSON.parse(JSON.stringify(reviewData.tags))
    const {data: session, status} = useSession()

    return (
        <div className="mb-5" >
            <div className='d-flex'>
                <Link href={`/review/${reviewData?._id}`} className='text-decoration-none text-body' >
                    <div className="me-5 mt-2">
                        <img src={reviewData?.img} alt="" className='object-fit-cover' style={{width: "156px", height: "231px", background: "red"}}/>
                    </div>
                </Link>
                <div className="w-75">
                    <Link href={`/review/${reviewData._id}`} className='text-decoration-none text-body' >
                        <h2>{reviewData?.titleReview}</h2>
                        <h4>{reviewData?.titleItem}</h4>
                        <p>{reviewData?.category?.name}</p>
                        <p>
                            {jsonTags.map(item => {
                                const parseItem = JSON.parse(item)
                                return parseItem.name + ' '
                            })}
                        </p>
                        <ReactMarkdown>
                            {reviewData?.desc?.substring(0, 200) + "..."}
                        </ReactMarkdown>
                        <p>Rate: {reviewData?.rating}</p>
                    </Link>
                    <div className='d-flex justify-content-between'>
                        <p>Review likes: {reviewData?.likes}</p>
                        {reviewData.author.name && <p>Author: &nbsp;
                            <Link href={reviewData?.author._id === session.user.id ? '/profile' : `/profile/${reviewData?.author?._id}`} className='text-primary'>
                                {reviewData?.author.name}
                            </Link> 
                        </p>}
                    </div>
                </div>
            </div>
            <hr className='w-100' />
        </div>
    );
}
