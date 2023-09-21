import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faXmark);

export default function SearchBar({url}) {
    const [search, setSearch] = useState('')
    
    const { data, error, isLoading } = useSWR(url, async () => {
        const res = await axios.get(`${url}?search=${search}`);
        return res.data;
    }, { refreshInterval: 100 });
    
    return (
        <InputGroup className="me-3">
            <span class="input-group-text text-secondary" id="basic-addon1">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <Form.Control placeholder="Find a review" value={search} aria-label="Find a review" aria-describedby="basic-addon2" onChange={(e) => setSearch(e.target.value)} />
            <Button variant="outline-secondary" class="input-group-text text-secondary" id="basic-addon1" onClick={(e) => setSearch("")}>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </Button>
        </InputGroup>
    );
}
