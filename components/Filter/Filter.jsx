import { Button, Form } from "react-bootstrap";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import Tags from "./Tags";
import { useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Filter({ url, getReviews, getQuery }) {
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.get(API_URL + `${url}?category=${category}&search=${search}&tags=${tags}`);
        
        getReviews(res.data);

        getQuery(search)
    };

    return (
        <div className="col col-auto mb-3">
            <Form onSubmit={handleSubmit} className="row">
                <Tags getTags={(result) => {setTags(result)}} />
                <Categories getCategory={(result) => {setCategory(result)}} />
                <SearchBar getSearch={(result) => {setSearch(result)}} />
                <Form.Group >
                    <Button variant="primary" type="submit" >Search</Button>
                </Form.Group>
            </Form>
        </div>
    );
}
