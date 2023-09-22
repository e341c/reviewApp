import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import useSWR from "swr";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default function Categories({ getCategoryName }) {
    const { data, error, isLoading } = useSWR(
        "/api/category",
        async () => {
            const res = await axios.get(`/api/category`);
            return res.data;
        },
        { refreshInterval: 1000 }
    );

    const handleCategory = (name) => {
        getCategoryName(name)
    };

    return (
        <div>
            <Dropdown.Item href="#">
                <strong>Categories</strong>
            </Dropdown.Item>
            <Dropdown.Divider />
            {data?.map((item) => (
                <Dropdown.Item onClick={() => handleCategory(item.name)}>
                    <strong className="text-primary"> {item.name} </strong>
                </Dropdown.Item>
            ))}
        </div>
    );
}
