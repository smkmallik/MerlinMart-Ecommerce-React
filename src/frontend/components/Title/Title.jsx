import React from 'react';
import './Title.css'

const Title = (props) => {
    const {title} = props;
    return (
        <h3 className='title'>
            {title}
        </h3>
    )
}

export default Title;