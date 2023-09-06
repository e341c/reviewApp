"use client";
import Header from "@/components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Figure from "react-bootstrap/Figure";
import { Rating } from "react-simple-star-rating";
import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useRef } from "react";
import 'react-bootstrap-typeahead/css/Typeahead.css';

export default function Review() {
    const [multiSelections, setMultiSelections] = useState([]);
    const inputRef = useRef(null);
    const [rating, setRating] = useState(0);
    const [file, setFile] = useState(null)

    const options = ["asd", "movies", "fun"];

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

    const onPointerEnter = () => console.log("Enter");
    const onPointerLeave = () => console.log("Leave");
    const onPointerMove = (value, index) => console.log(value, index);

    return (
        <main>
            <Form style={{ marginTop: "100px" }}>
                <div className="container d-flex justify-content-center">
                    <Figure className="me-5 mt-2">
                        <div
                            style={{
                                width: "156px",
                                height: "231px",
                            }}
                            className="mb-3 border rounded overflow-hidden"
                        >
                            <Figure.Image
                                alt=""
                                src={file}
                                className="object-fit-cover"
                                style={{
                                    width: "156px",
                                    height: "231px",
                                }}
                            />
                        </div>
                        <Form.Group controlId="formFile">
                            <Form.Control type="file" hidden ref={inputRef} onChange={handleFileChange}/>
                            <Button onClick={handleButtonClick} className="w-100" variant="primary">Choose image</Button>
                        </Form.Group>
                    </Figure>

                    <div className="w-50">
                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h2>Title of review</h2>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="reviewTitle"
                                placeholder="Enter title of your review"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h4>Title of movie, book, game, etc</h4>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name="reviewedItemTitle"
                                placeholder="Enter title of movie, book, game, etc..."
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Choice category</Form.Label>
                            <InputGroup>
                                <Form.Select name="group" aria-label="category">
                                    <option>
                                        Group, category (movie, book, game and
                                        etc)
                                    </option>
                                    <option value="1">Movie</option>
                                    <option value="2">Book</option>
                                    <option value="3">Game</option>
                                </Form.Select>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Enter tags for your review</Form.Label>
                            <Typeahead
                                id="basic-typeahead-multiple"
                                labelKey="name"
                                multiple
                                onChange={setMultiSelections}
                                options={options}
                                placeholder="Choose several tags..."
                                selected={multiSelections}
                                className="text-body"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Your review</Form.Label>
                            <Form.Control
                                    name="text"
                                    as="textarea"
                                    rows={4}
                                    style={{ resize: "none" }}
                                    placeholder="Text of review (with markdown formation) Lorem ipsum,
                                dolor sit amet consectetur adipisicing elit. Sunt,
                                expedita incidunt accusantium dolores ipsam praesentium
                                et! Nesciunt iusto at, deleniti voluptas nihil vitae non
                                necessitatibus autem a, odit minus consequuntur!"
                                />
                        </Form.Group>

                        <Form.Group className="mb-4 d-flex flex-column">
                            <Form.Label>Your grade from 0 - 10</Form.Label>
                            <Rating
                                size={25}
                                iconsCount={10}
                                onClick={handleRating}
                                onPointerEnter={onPointerEnter}
                                onPointerLeave={onPointerLeave}
                                onPointerMove={onPointerMove}
                                /* Available Props */
                            />
                        </Form.Group>

                        <Button
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
