"use client";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import { Rating } from "react-simple-star-rating";
import { useState, useRef, useEffect, use } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Preview from "@/components/Preview"
import Loading from "@/components/Loading";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function AddReview() {
    const router = useRouter();
    const inputRef = useRef(null);
    const [categories, setCategories] = useState([]);
    const [upload, setUpload] = useState(false);
    const [previewReview, setPreviewReview] = useState(null);
    const [imgPreview, setImgPreview] = useState();
    const [validation, setValidation] = useState();

    const [tags, setTags] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);

    const [titleReview, setTitleReview] = useState();
    const [titleItem, setTitleItem] = useState();
    const [rating, setRating] = useState(0);
    const [desc, setDesc] = useState();
    const [category, setCategory] = useState();
    const [file, setFile] = useState(null);

    const [error, setError] = useState();

    const { data: session, status } = useSession();

    const preview = {
        titleReview,
        titleItem,
        category,
        tags: tags.map(item => {return item.name}),
        desc,
        likes: [],
        author: session?.user.id,
        rating,
        img: imgPreview,
    };

    const checkValidation = () => {
        setValidation(false)

        if (categories != "" && tags.length > 0 && rating > 0 && file != null && titleReview != "" && titleItem != "" && desc != "") {
            setValidation(true);
        }
    };

    const bodyFormData = new FormData();

    bodyFormData.append("titleReview", titleReview);
    bodyFormData.append("titleItem", titleItem);
    bodyFormData.append("category", category);
    bodyFormData.append("desc", desc);
    bodyFormData.append("author", session?.user.id);
    bodyFormData.append("rating", rating);
    bodyFormData.append("likes", 0);
    bodyFormData.append("file", file);
    tags.forEach((item) => {
        bodyFormData.append("tags", item.name);
    });

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

    const handlePreviewOpen = () => {
        setPreviewReview(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }; 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation) {
            setUpload(true);

            try {
                const res = await axios.post(API_URL + "/api/review/add", bodyFormData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*",
                    },
                });
                if(res.status === 400){
                    setError(res.message)
                }
                const addTags = await axios.post("/api/tags", tags)
                setUpload(false);
                if (res.status === 201) router.push("/");
            } catch (err) {
                setError(err);
                console.log(err);
                setUpload(false);
            }
        }
    };

    useEffect(() => {
        const getCategory = async () => {
            try {
                const res = await axios.get("/api/category").then((responce) => responce.data);
                setCategories(res);
            } catch (err) {
                setError(err);
                console.log(err);
            }
        };
        getCategory();

        const getTags = async () => {
            try {
                const res = await axios.get("/api/tags").then((responce) => responce.data);
                setTagsOptions(res);
            } catch (err) {
                setError(err);
                console.log(err);
            }
        };
        getTags();
    }, []);

    return (
        <main>
            {previewReview && (
                <div className="container position-absolute top-0 start-0 end-0 bottom-0 z-2 bg-body pb-5">
                    <Preview data={preview} />
                    <Button variant="secondary" className="mb-5" onClick={(e) => setPreviewReview(false)}>
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
                            Choose image
                        </Button>
                    </div>

                    <div className="col" style={{ minWidth: "80%" }}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h2>Title of review</h2>
                            </Form.Label>
                            <Form.Control required type="text" name="titleReview" placeholder="Enter title of your review" onChange={(e) => setTitleReview(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                <h4>Title of movie, book, game, etc</h4>
                            </Form.Label>
                            <Form.Control required type="text" name="titleItem" placeholder="Enter title of movie, book, game, etc..." onChange={(e) => setTitleItem(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Choice category</Form.Label>
                            <InputGroup>
                                <Form.Select required name="category" aria-label="category" onChange={(e) => setCategory(e.target.value)}>
                                    <option selected disabled>Choose category</option>
                                    {categories.map((item) => (
                                        <option value={item._id} key={item.key}>
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
                                allowNew
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
                            <Form.Control name="desc" as="textarea" rows={4} required maxLength={4096} placeholder="Text of review" onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-4 d-flex flex-column">
                            <Form.Label>Your grade from 1 - 10</Form.Label>
                            <Rating size={25} iconsCount={10} onClick={handleRating} />
                        </Form.Group>
                        {error && <p className="text-danger">{error.message}</p>}
                        {validation == false && <p className="text-danger">Fill all fields</p>}
                        <div className="mb-5">
                            <Button variant="secondary" className="me-3 mb-3" onClick={handlePreviewOpen}>
                                Preview
                            </Button>
                            <Button type="submit" variant="primary" className="shadow-sm mb-3" style={{ width: "180px", minWidth: "120px" }} onClick={checkValidation}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </main>
    );
}
