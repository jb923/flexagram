import React, { useState, useEffect } from "react";

import { baseUrl } from "../config";


const CommentsFeed = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID");
    const userName = window.localStorage.getItem("flexagram/authentication/username");
    const postId = props.postId;
    const [commentArr, setCommentArr] = useState("");
    const [comment, setComment] = useState("");


    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/api/comments/${postId}`);
            const data = await res.json();
            setCommentArr(data.comments);
        })();
    }, [postId]);


    const handleInput = event => {
        setComment(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, postId: postId, userName, content: comment }),
        }
        const res = await fetch(`${baseUrl}/api/comments`, options);
        if (res.ok) {
            setComment("");
            window.location.reload();
        }
    }

    if (!commentArr) return null;

    return (
        <>
            {commentArr ? (commentArr.map(comment => {
                return (
                    <div className='commentsFeed-container' key={comment}>
                        <div className='commentsFeed__user'>{comment.userName}</div>
                        <div className='commentsFeed__comments'>{comment.content}</div>
                    </div>
                );
            })) : null}
            <form className='addComments'>
                <input type='text' className='form__comment' value={comment} onChange={handleInput} placeholder="Add a comment..."/>
                <button className='post__button' onClick={handleSubmit}>Post</button>
            </form>
        </>
    )
}

export default CommentsFeed;