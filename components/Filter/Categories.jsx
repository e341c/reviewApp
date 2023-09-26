import axios from "axios";
import useSWR from "swr";
import { Form, InputGroup } from "react-bootstrap";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Categories({ url, getCategory }) {
    const {
        data: categories,
        error,
        isLoading,
    } = useSWR(
        API_URL + "/api/category",
        async () => {
            const res = await axios.get(`/api/category`);
            return res.data;
        },
        {
            revalidateOnMount: true,
            revalidateOnFocus: false,
        }
    );

    return (
        <Form.Group className="col col-auto mb-3">
            <Form.Label>Choice category</Form.Label>
            <InputGroup>
                <Form.Select
                    name="category"
                    placeholder="Choice category"
                    aria-label="category"
                    onChange={(e) => {
                        getCategory(e.target.value);
                    }}
                >
                    <option value={""}>
                        All categories
                    </option>
                    {categories?.map((item) => (
                        <option value={item.name} key={item._id}>
                            {item.name}
                        </option>
                    ))}
                </Form.Select>
            </InputGroup>
        </Form.Group>
    );
}
