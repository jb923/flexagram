import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';



const ProfilePosts = props => {
    const posts = Object.values(props.feedArray);
    
    
    return (
        <div className="profile__posts--outer">
        <div className="profile__posts--container">
            {posts.map(post => {
                return (
                    <div className="profile__post">
                    <div to={`/posts/${post.id}`} className="profile__link" >
                        <img className="profile__post--img" src={post.postimgurl} alt="post-img" />
                        <div className="profile__post--info">
                            <div className="profile__post--like"><FavoriteIcon className="profile__heart--icon" />{post.numLikes}</div>
                            <div className="profile__post--comment"><ChatBubbleIcon className="profile__comment--icon" />{post.numComments}</div>
                        </div>
                    </div>
                </div>
                );
            })}
        </div>
    </div>
    )
}

export default ProfilePosts;