"use client";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
    const reviews = [
        {
            id: 1,
            reviewTitle: "My first review",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is text of reiveiw....",
            rate: 8,
            author: "Author of review",
            reviewLikes: 10,
            reviewRate: 3
        },
        {
            id: 4,
            reviewTitle: "My review 2",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is text of reiveiw....",
            rate: 8,
            author: "Author of review",
            reviewLikes: 10,
            reviewRate: 5
        },
        {
            id: 3,
            reviewTitle: "My review 3",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is text of reiveiw....",
            rate: 8,
            author: "Author of review",
            reviewLikes: 10,
            reviewRate: 1
        },
        {
            id: 5,
            reviewTitle: "My review 4",
            itemTitle: "Forrest Gump",
            category: "movies",
            tags: ["tag1", "tag2", "tag3"],
            text: "This is __text__ of reiveiw....",
            rate: 8,
            author: "Author of review",
            reviewLikes: 10,
            reviewRate: 2
        },
    ]

    return (
        <main className="vh-100">
            <div style={{ marginTop: "100px" }}>
                <div className="container">
                    <h1 className="display-3 mb-5">HOME PAGE</h1>
                    <Reviews reviews={reviews} />
                </div>
            </div>
        </main>
    );
}
