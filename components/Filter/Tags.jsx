import "react-bootstrap-typeahead/css/Typeahead.css";
import axios from "axios";
import useSWR from "swr";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Tags({ url, getTags }) {
    const [tags, setTags] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);

    const { data, error, isLoading } = useSWR(
        API_URL + "/api/tags",
        async () => {
            const res = await axios.get(`/api/tags`);
            setTagsOptions(
                res.data.map((item) => {
                    return item.name;
                })
            );
            return res.data;
        },
        { revalidateOnMount: true, revalidateOnFocus: false }
    );

    getTags(tags);

    return (
        <Form.Group className="col col-auto mb-3">
            <Form.Label>Choice tags</Form.Label>
            <Typeahead id="basic-typeahead-multiple" labelKey="name" multiple onChange={setTags} options={tagsOptions} placeholder="Choose several tags..." selected={tags} className="text-body" />
        </Form.Group>
    );
}
