"use client";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import { Rating } from "react-simple-star-rating";
import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useRef, useEffect } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Review() {
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([])
    const [tagsOptions, setTagsOptions] = useState([])
    const inputRef = useRef(null);
    const router = useRouter();

    const [titleReview, setTitleReview] = useState()
    const [titleItem, setTitleItem] = useState()
    const [tags, setTags] = useState([]);
    const [rating, setRating] = useState(0);
    const [desc, setDesc] = useState()
    const [category, setCategory] = useState()
    const [error, setError] = useState()

    const {data: session, status} = useSession()

    console.log(session, status);

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            setFile(null);
        }
    };

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            titleReview,
            titleItem,
            category,
            tags,
            img: file,
            desc,
            author: session.user.id,
            rating,
            reviewRating: 0,
            likes: 0
        }
        console.log(body);

        try {
            const res = await axios.post("/api/review/add", body);
            if(res.status === 201) router.push('/')
        } catch (err) {
            setError(err);
            console.log(err);
        }
    };

    useEffect(() => {
        const getCategory = async() => {
            try {
                const res = await axios.get('/api/review/category').then(responce => responce.data)
                setCategories(res)
            } catch (error) {
                console.log(error);
            }
        }
        getCategory()

        const getTags = async() => {
            try {
                const res = await axios.get('/api/review/tags').then(responce => responce.data)
                setTagsOptions(res)
            } catch (error) {
                console.log(error);
            }
        }
        getTags()
    },[])

    return (
        <main>
            <Form onSubmit={handleSubmit} style={{ marginTop: "100px" }}>
                <div className="d-flex justify-content-center">
                    <div className="me-5 mt-2">
                        <div
                            style={{
                                width: "156px",
                                height: "231px",
                            }}
                            className="mb-4 rounded overflow-hidden border"
                        >
                            {/* {!file && <p>Review image here</p> } */}
                            <img
                                alt=""
                                src={file}
                                className="object-fit-cover"
                                style={{
                                    width: "158px",
                                    height: "234px",
                                    textIndent: "100vw",
                                    marginLeft: '-2px',
                                    marginTop: '-2px'
                                }}
                            />
                        </div>
                        <Form.Group controlId="formFile">
                            <Form.Control
                                type="file"
                                hidden
                                ref={inputRef}
                                onChange={handleFileChange}
                            />
                            <Button
                                onClick={handleButtonClick}
                                className="w-100"
                                variant="primary"
                            >
                                Choose image
                            </Button>
                        </Form.Group>
                    </div>

                    <div className="w-50">
                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h2>Title of review</h2>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="titleReview"
                                placeholder="Enter title of your review"
                                onChange={(e) => setTitleReview(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h4>Title of movie, book, game, etc</h4>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="titleItem"
                                placeholder="Enter title of movie, book, game, etc..."
                                onChange={(e) => setTitleItem(e.target.value)}
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Choice category</Form.Label>
                            <InputGroup>
                                <Form.Select
                                    name="category"
                                    aria-label="category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option>Choose category</option>
                                    {categories.map(item => (
                                        <option value={item._id}>{item.name}</option>
                                    ))}
                                </Form.Select>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Enter tags for your review</Form.Label>
                            <Typeahead
                                id="basic-typeahead-multiple"
                                labelKey="name"
                                multiple
                                onChange={setTags}
                                options={tagsOptions}
                                placeholder="Choose several tags..."
                                selected={tags}
                                className="text-body"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="desc">
                            <Form.Label>Your review</Form.Label>
                            <Form.Control
                                name="desc"
                                as="textarea"
                                rows={4}
                                style={{ resize: "none" }}
                                placeholder="Text of review (with markdown formation) Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit. Sunt,
                                expedita incidunt accusantium dolores ipsam praesentium
                                et! Nesciunt iusto at, deleniti voluptas nihil vitae non
                                necessitatibus autem a, odit minus consequuntur!"
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 d-flex flex-column">
                            <Form.Label>Your grade from 0 - 10</Form.Label>
                            <Rating
                                size={25}
                                iconsCount={10}
                                onClick={handleRating}
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="primary"
                            className="shadow-sm"
                            style={{ width: "180px" }}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </Form>
        </main>
    );
}
