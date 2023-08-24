import ReactMarkdown from 'react-markdown'

export default function Review() {
    const text = `Text **of review (with markdown formation) Lorem ipsum, dolor
    sit amet consectetur adipisicing elit. Sunt, expedita
    .....**`

    return (
        <section className="container d-flex" style={{ marginTop: "100px" }}>
            <div style={{width: "156px", height: "231px", background: "red"}} className="me-5 mt-2">
                <img src="" alt="" />
            </div>
            <div className="w-75">
                <h2>Title of review</h2>
                <h4>Title of movie, book, game, etc</h4>
                <p>Group, category (movie, book, game and etc)</p>
                <p>Tags (with auto complete)</p>
                <ReactMarkdown>
                    {text}
                </ReactMarkdown>
                <div>Grade: of MOVIE 0 - 10</div>
                <p>Author</p>
            </div>
        </section>
    );
}
