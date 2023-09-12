import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import { Rating } from 'react-simple-star-rating';

export default function Review({reviewData}) {
    console.log(reviewData);

    return (
        <Link href={"/review"} className='text-decoration-none text-body' >
            <div className="mb-5" >
                <div className='d-flex'>
                    <div className="me-5 mt-2">
                        <img src="" alt="" style={{width: "156px", height: "231px", background: "red"}}/>
                    </div>
                    <div className="w-75">
                        <h2>{reviewData?.titleReview}</h2>
                        <h4>{reviewData?.titleItem}</h4>
                        <p>{reviewData?.category.name}</p>
                        <p>
                            {reviewData.tags.map(item => (
                                item.name + ' '
                            ))}
                        </p>
                        <ReactMarkdown>
                            {reviewData?.desc}
                        </ReactMarkdown>
                        <p>Rate: {reviewData?.rating}</p>
                        <div className='d-flex justify-content-between'>
                            <p>Review likes: {reviewData?.likes}</p>
                            <p>{reviewData?.author.name}</p>
                        </div>
                    </div>
                </div>
                <hr className='w-100' />
            </div>
        </Link>
    );
}
