import React, { useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';

import { baseUrl } from "../config";


const Like = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const postId = props.postId;
    const [error, setError] = useState("");


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
            const LikesNum = data.postLikes.length
        } else {
            setError("Post already liked!");
        }
    }
    return (
        <>
            {/* <div className='icon-container'> */}
            <div className='icon__heart'>
            <FavoriteIcon className="icon__heart--icon" onDoubleClick={handlePostLikes}/>
            </div>
                {/* <div className='likes_num'>{postId.LikesNum} likes</div> */}
            {/* </div> */}
        </>
    )
}



export default Like;