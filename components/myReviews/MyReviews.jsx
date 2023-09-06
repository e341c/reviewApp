import MyReview from "./MyReview";

export default function MyReviews({reviews}) {

    return (
        <section className="container mb-5" >
            {reviews.map(item => <MyReview reviewData={item} />)}
        </section>
    );
}
