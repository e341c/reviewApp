"use client";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Rating } from "react-simple-star-rating";
import { Typeahead } from "react-bootstrap-typeahead";
import { useState, useRef, useEffect } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Review from "@/components/Review";
import Loading from "@/components/Loading";

export default function EditReview({ params }) {
    const { id } = params;

    const inputRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const [upload, setUpload] = useState(false);
    const [preview, setPreview] = useState(null);
    const [imgPreview, setImgPreview] = useState();
    const [tagsOptions, setTagsOptions] = useState([]);

    const [data, setData] = useState();
    const [error, setError] = useState(false);

    const [titleReview, setTitleReview] = useState();
    const [titleItem, setTitleItem] = useState();
    const [tags, setTags] = useState([]);
    const [rating, setRating] = useState(0);
    const [desc, setDesc] = useState();
    const [category, setCategory] = useState();
    const [file, setFile] = useState(null);

    const { data: session, status } = useSession();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setImgPreview(URL.createObjectURL(e.target.files[0]));
    };

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    const handleRating = (rate) => {
        setRating(rate);
    };

    const bodyFormData = new FormData();

    bodyFormData.append("titleReview", titleReview);
    bodyFormData.append("titleItem", titleItem);
    bodyFormData.append("category", category);
    bodyFormData.append("desc", desc);
    bodyFormData.append("rating", rating);
    bodyFormData.append("likes", 0);
    bodyFormData.append("file", file);
    tags.forEach((item) => {
        bodyFormData.append("tags", JSON.stringify(item));
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpload(true);

        try {
            const res = await axios.post(`/api/review/edit/${id}`, bodyFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            setUpload(false);
            if (res.status === 201) router.push("/");
        } catch (err) {
            setError(err);
            console.log(err);
            setUpload(false);
        }
    };

    useEffect(() => {
        const getAllData = async () => {
            setUpload(true);
            try {
                const categoriesData = await axios.get("/api/category").then((responce) => responce.data);
                setCategories(categoriesData);
                const tagsData = await axios.get("/api/tags").then((responce) => responce.data);
                setTagsOptions(tagsData);
                const res = await axios.get(`/api/review/${id}`).then((responce) => responce.data);
                setData(res);
                setTitleReview(res.titleReview);
                setTitleItem(res.titleItem);
                setCategory(res.category._id);
                setDesc(res.desc);
                setTags(res.tags.map((item) => JSON.parse(item)));
                setRating(res.rating);
                setImgPreview(res.img)
                setUpload(false);
            } catch (err) {
                console.log(err);
                setError(err.message);
                setUpload(false);
            }
        };

        getAllData();
    }, []);

    return (
        <main>
            {preview && (
                <div className="container position-absolute top-0 start-0 end-0 bottom-0 z-2 bg-body pb-5">
                    <Review reviewData={body} />
                    <Button variant="secondary" className="mb-5" onClick={(e) => setPreview(false)}>
                        Close preview
                    </Button>
                </div>
            )}
            <Form onSubmit={handleSubmit}>
                {upload && <Loading />}
                <div className="row">
                    <div className="col col-auto mt-2 mb-4">
                        <div style={{ maxWidth: "150px", minHeight: "200px" }} className="mb-4 p-2 rounded overflow-hidden border">
                            <img alt="" src={imgPreview} className="object-fit-cover w-100 h-auto" />
                        </div>
                        <input ref={inputRef} type="file" accept="image/*" name="image" id="selectFile" hidden onChange={handleFileChange} />
                        <Button onClick={handleButtonClick} className="w-100" variant="primary">
                            Edit image
                        </Button>
                    </div>

                    <div className="col" style={{ minWidth: "80%" }}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h2>Title of review</h2>
                            </Form.Label>
                            <Form.Control type="text" value={titleReview} name="titleReview" placeholder="Enter title of your review" onChange={(e) => setTitleReview(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h4>Title of movie, book, game, etc</h4>
                            </Form.Label>
                            <Form.Control type="text" value={titleItem} name="titleItem" placeholder="Enter title of movie, book, game, etc..." onChange={(e) => setTitleItem(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Choice category</Form.Label>
                            <InputGroup>
                                <Form.Select name="category" aria-label="category" onChange={(e) => setCategory(e.target.value)}>
                                    {categories.map((item) => (
                                        <option selected={item._id === category} value={item._id} key={item.key}>
                                            {item.name}
                                        </option>
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
                            <Form.Control name="desc" as="textarea" rows={4} value={desc} maxLength={4096} placeholder="Text of review" onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-4 d-flex flex-column">
                            <Form.Label>Your grade from 0 - 10</Form.Label>
                            <Rating size={25} iconsCount={10} initialValue={rating} onClick={handleRating} />
                        </Form.Group>
                        {error && <p className="text-danger">{error.message}</p>}
                        <div>
                            <Button variant="secondary" className="me-3 mb-3" onClick={(e) => setPreview(true)}>
                                Preview
                            </Button>
                            <Button type="submit" variant="primary" className="mb-3 shadow-sm" style={{ width: "180px" }}>
                                Submit
                            </Button>
                            {error && <p className="text-danger mt-3">{error.message}</p>}
                        </div>
                    </div>
                </div>
            </Form>
        </main>
    );
}
