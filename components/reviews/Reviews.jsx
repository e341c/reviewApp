import Review from "@/components/reviews/Review"

export default function Reviews({reviews}) {

    return (
        <section className="container mb-5" >
            {reviews.map(item => <Review reviewData={item} />)}
        </section>
    );
}
