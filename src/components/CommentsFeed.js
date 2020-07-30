import React from 'react';

const CommentsFeed = props => {



    return (
        <>
            <div className='commentsFeed-container'>
                <div className='commentsFeed__comments'>comment1</div>
            </div>
            <form className='addComments'>
                <input type='text' className='form__comment' placeholder="Add a comment..."/>
                <button className='post__button'>Post</button>
            </form>
        </>
    )
}

export default CommentsFeed;