import ReactMarkdown from 'react-markdown'
import { Rating } from 'react-simple-star-rating';
import { Button } from 'react-bootstrap';

export default function MyReview({reviewData}) {

    return (
        <section className="mb-5" >
            <div className='d-flex'>
                <div className="w-25 me-5 mt-2">
                    <img src="" alt="" style={{width: "156px", height: "231px", background: "red"}}/>
                </div>
                <div className="w-100">
                    <h2>{reviewData.reviewTitle}</h2>
                    <h4>{reviewData.itemTitle}</h4>
                    <p>{reviewData.category}</p>
                    <div className='d-flex'>
                        {reviewData.tags.map(tag => <p className='me-2'>{tag}</p> )}
                    </div>
                    <ReactMarkdown>
                        {reviewData.text}
                    </ReactMarkdown>
                    <p>Rate: {reviewData.rate}</p>
                    <div className='w-100 d-flex justify-content-between'>
                        <Rating readonly size={25} initialValue={reviewData.reviewRate} />
                        <p className='mb-1'>Author: {reviewData.author}</p>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <div>
                        <Button variant="secondary" className="shadow-sm me-3">
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button variant="danger" className="shadow-sm mb-3">
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
            <hr className='w-100' />
        </section>
    );
}
