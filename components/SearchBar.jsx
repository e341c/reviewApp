import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import Categories from "./Categories";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

library.add(faSearch, faXmark);

export default function SearchBar({ url }) {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const { data, error, isLoading } = useSWR(
        url,
        async () => {
            const res = await axios.get(`${url}?search=${search}`);
            return res.data;
        },
        { refreshInterval: 100 }
    );

    if (error) {
        console.log(error);
        router.refresh();
    }

    return (
        <InputGroup className="me-3">
            <DropdownButton variant="outline-primary" title="" id="input-group-dropdown-1">
                <Categories getCategoryName={(name) => setSearch(name)} />
            </DropdownButton>
            <Form.Control placeholder="Find a review" value={search} aria-label="Find a review" aria-describedby="basic-addon2" onChange={(e) => setSearch(e.target.value)} />
            <Button variant="outline-secondary" className="input-group-text " id="basic-addon3" onClick={() => setSearch("")}>
                <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </Button>
        </InputGroup>
    );
}
