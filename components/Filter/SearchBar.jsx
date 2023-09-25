"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";


export default function SearchBar({ url, getSearch }) {
    const [query, setQuery] = useState("");

    getSearch(query);

    return (
        <Form.Group className="col col-auto mb-3">
            <Form.Label>Enter review title, text, author or comment</Form.Label>
            <InputGroup>
                <InputGroup.Text className="text-secondary">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputGroup.Text>
                <Form.Control placeholder="Find a review" value={query} aria-label="Find a review" aria-describedby="basic-addon2" onChange={(e) => setQuery(e.target.value)} />
                <Button
                    variant="outline-secondary"
                    className="input-group-text "
                    id="basic-addon3"
                    onClick={() => {
                        setQuery("");
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </InputGroup>
        </Form.Group>
    );
}
