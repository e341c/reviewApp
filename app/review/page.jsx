"use client";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Review() {
    return (
        <main>
            <section className="container d-flex" style={{ marginTop: "100px" }}>
                <div
                    style={{
                        width: "156px",
                        height: "231px",
                        background: "red",
                    }}
                    className="me-5 mt-2"
                >
                    <img src="" alt="" />
                </div>
                <div className="w-75">
                    <h2>Title of review</h2>
                    <h4>Title of movie, book, game, etc</h4>
                    <p>Group, category (movie, book, game and etc)</p>
                    <p>Tags (with auto complete)</p>
                    <p>
                        Text of review (with markdown formation) Lorem ipsum,
                        dolor sit amet consectetur adipisicing elit. Sunt,
                        expedita incidunt accusantium dolores ipsam praesentium
                        et! Nesciunt iusto at, deleniti voluptas nihil vitae non
                        necessitatibus autem a, odit minus consequuntur!
                    </p>
                    <div>Grade: of MOVIE 0 - 10</div>
                    <p>Reviewed by AUTHOR</p>
                </div>
            </section>
        </main>
    );
}
