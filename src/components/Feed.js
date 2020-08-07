import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentsFeed from './CommentsFeed';
import Like from './Like';

import { baseUrl } from "../config";

const Feed = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID")
    const userName = window.localStorage.getItem("flexagram/authentication/username");
    if (props.feedData.length === 0) return null;
    const feedArr = Object.values(props.feedData.postList);
    // const [comment, setComment] = useState("");


    // const handleInput = event => {
    //     setComment(event.target.value);
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const options = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ userId, postId: postId, userName, content: comment }),
    //     }
    //     const res = await fetch(`${baseUrl}/api/comments`, options);
    //     if (res.ok) {
    //         setComment("");
    //     }
    // }



    return (
        <div className ="feedArr--container">
            {feedArr.reverse().map(post => {
                return (
                    <div className="feed__container" key={post}>
                        <div className="feed__user--container">
                            <div className='feedUser__icon'> <img className='feed__userimg' src={post.user_info.profileimgurl} alt='user__img'/></div>
                            <div className='feedUser__user'>{post.user_info.username}</div>
                        </div>
                        <div className='image-container'> 
                                <div className='image'><img src={post.postimgurl} alt="feed-img"/> </div>
                        </div>
                        <div className='icon-container'>
                            {/* <div className='icon__heart'>
                                <FavoriteIcon className="icon__heart--icon" />
                            </div> */}
                            <Like postId={post.id} {...props}/>
                            <div className='likes_num'>{post.LikesNum} likes</div>
                        </div>
                        <div className="comments__outer">
                            <div className='personalPost-container'>
                                <Link to="/profile/:userId" className="comment__userLink"><div className='commentsFeed__user'>{post.user_info.username}</div></Link>
                                <div className='commentsFeed__description'>{post.description}</div>
                            </div>
                            <CommentsFeed postId={post.id} {...props}/>
                        </div>
                        {/* <form className='addComments'>
                            <input type='text' className='form__comment' value={comment} onChange={handleInput} placeholder="Add a comment..."/>
                            <button className='post__button' onClick={handleSubmit}>Post</button>
                        </form> */}
                    </div>
                )
            })}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.props,
    };
};

export default connect (
    mapStateToProps,
)(
    Feed
);