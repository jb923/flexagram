import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentsFeed from './CommentsFeed';

import { baseUrl } from "../config";

const Feed = props => {
    const userId = window.localStorage.getItem("flexagram/authentication/USER_ID")
    const userName = window.localStorage.getItem("flexagram/authentication/username");
    if (props.feedData.length === 0) return null;
    const feedArr = Object.values(props.feedData.postList);


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
                            <div className='icon__heart'>
                                <FavoriteIcon className="icon__heart--icon" />
                            </div>
                            <div className='likes_num'>{post.LikesNum} likes</div>
                        </div>
                        <div className='commentsFeed-container'>
                            <Link to="/profile/:userId" className="comment__userLink"><div className='commentsFeed__user'>{post.user_info.username}</div></Link>
                            <div className='commentsFeed__description'>{post.description}</div>
                        </div>
                        <CommentsFeed postId={post.id} {...props}/>
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