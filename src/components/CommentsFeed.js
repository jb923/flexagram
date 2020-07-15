import React from 'react';

const CommentsFeed = props => {

    // const handlePost = async (event) => {}

    return (
        <>
            <div className='commentsFeed-container'>
                <div className='commentsFeed__comments'>comment1</div>
            </div>
            <form className='addComments'>form
                <input type='comment' className='form__comment' placeholder="comment"/>
                <button className='post__button'>Post</button>
            </form>
        </>
    )
}

export default CommentsFeed;