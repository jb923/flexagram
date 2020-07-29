import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

const IconBar = props => {

    return (
        <>
            <div className='icon-container'>
                <div className='icon__heart'>
                    <FavoriteIcon className="icon__heart--icon" />
                </div>
            </div>
        </>
    )
}

export default IconBar;