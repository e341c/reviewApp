"use client";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState, FormEvent, useRef } from "react";

export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadingStatus, setUploadingStatus] = useState(false);
    const inputRef = useRef(null);

    const uploadFile = async () => {
        setUploadingStatus(true);

        try {
            let { data } = await axios.post("/api/review/add/upload",
                {
                    file: file,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );

            console.log(data, "DATA");

            setUploadingStatus(false);
            setFile(null);
        } catch (err) {
            console.log(err);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
    }

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    useEffect(() => {
        if (file) {
            uploadFile();
        }
    }, [file]);

    return (
        <div className='me-5 mt-2'>
            {uploadingStatus && <p>Loading...</p>}
            <div
                style={{
                    width: "156px",
                    height: "231px",
                }}
                className="mb-4 rounded overflow-hidden border"
            >
                <img
                    alt=""
                    src={preview}
                    className="object-fit-cover"
                    style={{
                        width: "158px",
                        height: "234px",
                        textIndent: "100vw",
                        marginLeft: "-2px",
                        marginTop: "-2px",
                    }}
                />
            </div>
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                name="image"
                id="selectFile"
                hidden
                onChange={handleFileChange}
            />
            <Button
                onClick={handleButtonClick}
                className="w-100"
                variant="primary"
            >
                Choose image
            </Button>
        </div>
    );
}
