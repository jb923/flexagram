// import React from 'react';
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// const Post = props => {
//     const userId = window.localStorage.getItem("flexagram/authentication/USER_ID")
//     if (props.feedData.length === 0) return null;
//     const feedArr = Object.values(props.feedData.postList);

//     return (
//         <div className="feed__container" key={post}>
//             <div className="feed__user--container">
//                 <div className='feedUser__icon'> <img className='feed__userimg' src={post.user_info.profileimgurl} alt='user__img'/></div>
//                 <div className='feedUser__user'>{post.user_info.username}</div>
//             </div>
//             <div className='image-container'> 
//                     <div className='image'><img src={post.postimgurl} alt="feed-img"/> </div>
//             </div>
//             <div className='icon-container'>
//                 <div className='icon__heart'>
//                     <FavoriteIcon className="icon__heart--icon" />
//                 </div>
//                 <div className='likes_num'>{post.LikesNum} likes</div>
//             </div>
//             <div className='commentsFeed-container'>
//                 <div className='commentsFeed__user'>{post.user_info.username}</div>
//                 <div className='commentsFeed__comments'>{post.description}</div>
//             </div>
//             <form className='addComments'>
//                 <input type='text' className='form__comment' placeholder="Add a comment..."/>
//                 <button className='post__button'>Post</button>
//             </form>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         posts: state.props,
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchNotifications: (userId) => dispatch(fetchNotifications(userId)),
//     };
// };

// export default connect (
//     mapStateToProps,
//     mapDispatchToProps,
// )(
//     Post
// );