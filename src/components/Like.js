import React, { useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { baseUrl } from "../config";


const Like = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const postId = props.postId;
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);


    const handlePostLikes = async (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ postId: postId, commentId: null }),
        }
        const res = await fetch(`${baseUrl}/api/like/${userId}`, options);

        if (res.status === 200) {
            const res = await fetch(`${baseUrl}/api/likes/${postId}`);
            const data = await res.json();
            const LikesNum = data.postLikes.length;
            document.querySelector(`.likes_num${postId}`).innerHTML = `${LikesNum} likes`;
        } else {
            setError("Post already liked!");
            setOpen(true);
        }
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const Alert = props => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }


    return (
        <>
            {/* <div className='icon-container'> */}
            <div className='icon__heart'>
            <FavoriteIcon className="icon__heart--icon" onDoubleClick={handlePostLikes}/>
            </div>
                {/* <div className='likes_num'>{postId.LikesNum} likes</div> */}
            {/* </div> */}
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }>
                <Alert onClose={handleClose} severity="error">{error}</Alert>
            </Snackbar>
        </>
    )
}



export default Like;