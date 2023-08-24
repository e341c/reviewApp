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
import { useState } from "react";

export default function Review() {
    const [multiSelections, setMultiSelections] = useState([]);
    const [rating, setRating] = useState(0);

    const options = ["asd", "movies", "fun"];

    const handleRating = (rate) => {
        setRating(rate);

        // other logic
    };

    const onPointerEnter = () => console.log("Enter");
    const onPointerLeave = () => console.log("Leave");
    const onPointerMove = (value, index) => console.log(value, index);

    return (
        <main>
            <Header />
            <Form style={{ marginTop: "100px" }}>
                <div className="container d-flex justify-content-center">
                    <Figure>
                        <Figure.Image
                            width={156}
                            height={231}
                            alt="156x231"
                            src="holder.js/171x180"
                        />
                        <div
                            style={{
                                width: "156px",
                                height: "231px",
                                background: "red",
                            }}
                            className="me-5 mt-2"
                        ></div>
                        <Figure.Caption>Your image</Figure.Caption>
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
                            variant="secondary"
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
