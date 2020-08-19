import React, { useState, useEffect } from "react";
import { Redirect} from 'react-router-dom';
import Dropzone from 'react-dropzone-uploader'

import Navbar from './Navbar';

import { baseUrl } from "../config";

const Upload = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const [feedData, setfeedData] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [description, setDescription] = useState(false);
    const [inputText, setInputText] = useState("");
    const [fileUrl, setFileUrl] = useState("")


    useEffect(() => {
        if (userId) {
            (async () => {
                const res = await fetch(`${baseUrl}/api/home/${userId}`);
                const data = await res.json();
                setfeedData(data);
            })();
        }
    }, [userId]);


    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/api/profileinfo/${userId}`);
            const userInfo = await res.json();
            setUserInfo(userInfo);
        })();
    }, [userId]);


    const handleInput = event => {
        setInputText(event.target.value);
    }


    const getUploadParams = async ({ meta: { name } }) => {
        const res = await fetch(`${baseUrl}/api/aws/upload/${name}`);
        const { fields, url, fileUrl } = await res.json();
        setFileUrl(fileUrl);
        return { fields, meta: { fileUrl: fileUrl }, url: url }
    }

    const handleChangeStatus = ({ meta, file }, status) => {
        setDescription(true);
    }

    const handleSubmit = async (files, allFiles) => {
        allFiles.forEach(f => f.remove());
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, postimgurl: fileUrl, description: inputText }),
        }
        await fetch(`${baseUrl}/api/posts`, options);
        setDescription(false);
        props.history.push("/home");
    }

    if (!localStorage.getItem("flexagram/authentication/token")) {
        return <Redirect to="/" />
    } else {
        return (
            <>
                <Navbar userInfo={userInfo} {...props}/>
                <div className='dropzone__container'>
                    <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    onSubmit={handleSubmit}
                    accept="image/*,audio/*,video/*"
                    inputContent={(files, extra) => (extra.reject ? "Cannot upload this file" : "Drag an image or click to select a file")}
                    styles={{
                        dropzone: { border: "1px dotted rgba(0, 0, 0)", padding: "150px", margin: "100px auto 0px auto", width: "600px", height: "400px", textAlign: "center", fontSize: "20px", backgroundColor: "#FFFFFF"},
                        dropzoneReject: { borderColor: "red", backgroundColor: "#FFCCCB", padding: "150px" },
                        dropzoneActive: { borderColor: "green", backgroundColor: "#ADD8E6", },
                        input: { display: "none" },
                        inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
                        previewImage: { width: "600px", alignSelf: "center", marginTop: "-100px" },
                        submitButtonContainer: { display: "flex", justifyContent: "center" },
                        submitButton: { padding: "10px 30px 10px 30px", marginTop: "100px", marginBottom: "0px", backgroundColor: "#66FFFF", borderRadius: "4px", color: "#000000", fontWeight: "bold" },
                        inputLabelWithFiles: { display: "none" }
                    }}
                    submitButtonContent="Upload"
                    />
                </div>
                {description ? <textarea className="upload__description" rows="3" cols="40" wrap="soft" value={inputText} onChange={handleInput} placeholder="Add a description..." /> : null}
            </>
        );
    }
    // return (
    //     <>
    //         <Navbar userInfo={userInfo} {...props}/>
    //         <div className='dropzone__container'>
    //             <Dropzone
    //             getUploadParams={getUploadParams}
    //             onChangeStatus={handleChangeStatus}
    //             onSubmit={handleSubmit}
    //             accept="image/*,audio/*,video/*"
    //             inputContent={(files, extra) => (extra.reject ? "Cannot upload this file" : "Drag an image or click to select a file")}
    //             styles={{
    //                 dropzone: { border: "1px dotted rgba(0, 0, 0)", padding: "150px", margin: "100px auto 0px auto", width: "600px", height: "400px", textAlign: "center", fontSize: "20px", backgroundColor: "#FFFFFF"},
    //                 dropzoneReject: { borderColor: "red", backgroundColor: "#FFCCCB", padding: "150px" },
    //                 dropzoneActive: { borderColor: "green", backgroundColor: "#ADD8E6", },
    //                 input: { display: "none" },
    //                 inputLabel: (files, extra) => (extra.reject ? { color: "red" } : {}),
    //                 previewImage: { width: "600px", alignSelf: "center", marginTop: "-100px" },
    //                 submitButtonContainer: { display: "flex", justifyContent: "center" },
    //                 submitButton: { padding: "10px 30px 10px 30px", marginTop: "100px", marginBottom: "0px", backgroundColor: "#66FFFF", borderRadius: "4px", color: "#000000", fontWeight: "bold" },
    //                 inputLabelWithFiles: { display: "none" }
    //             }}
    //             submitButtonContent="Upload"
    //             />
    //         </div>
    //         {description ? <textarea className="upload__description" rows="3" cols="40" wrap="soft" value={inputText} onChange={handleInput} placeholder="Add a description..." /> : null}
    //     </>
    // );
}

export default Upload;