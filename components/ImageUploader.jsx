"use client";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import useMutation from "@/hooks/useMutation";
import useQuery from "@/hooks/useQuery";

const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
const URL = "http://localhost:3001/images";

const ImageUploader = () => {
    const {
        mutate: uploadImage,
        isLoading: uploading,
        error: uploadError,
    } = useMutation({ url: URL });

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        console.log(file);

        if (!validFileTypes.find((type) => type === file.type)) {
            console.log("File must be in JPG/PNG format");
            return;
        }

        const form = new FormData();
        form.append("image", file);

        await uploadImage(form);
    };

    return (
        <div>
            <input type="file" onChange={handleUpload} />
            <button>Upload</button>
            <Form.Group controlId="formFile">
                <Form.Control type="file" hidden ref={inputRef} onChange={handleFileChange}/>
                <Button onClick={handleButtonClick} className="w-100" variant="primary">Choose image</Button>
            </Form.Group>
        </div>
    );
};

export default ImageUploader;
