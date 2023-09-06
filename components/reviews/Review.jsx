import Link from 'next/link';
import ReactMarkdown from 'react-markdown'
import { Rating } from 'react-simple-star-rating';

export default function Review({reviewData}) {
    const text = `Text **of review (with markdown formation) Lorem ipsum, dolor
    sit amet consectetur adipisicing elit. Sunt, expedita
    .....**`


    return (
        <Link href={"/review"} className='text-decoration-none text-body' key={reviewData.id}>
            <section className="mb-5" >
                <div className='d-flex'>
                    <div className="me-5 mt-2">
                        <img src="" alt="" style={{width: "156px", height: "231px", background: "red"}}/>
                    </div>
                    <div className="w-75">
                        <h2>{reviewData.reviewTitle}</h2>
                        <h4>{reviewData.itemTitle}</h4>
                        <p>{reviewData.category}</p>
                        <p>{reviewData.tags}</p>
                        <ReactMarkdown>
                            {reviewData.text}
                        </ReactMarkdown>
                        <p>Rate: {reviewData.rate}</p>
                        <div className='d-flex justify-content-between'>
                            <Rating readonly size={25} initialValue={reviewData.reviewRate} />
                            <p>{reviewData.author}</p>
                        </div>
                        
                    </div>
                </div>
                <hr className='w-100' />
            </section>
        </Link>
        
    );
}
