import React from 'react'
import "./index.css";

function index(props) {
    const { text, ...args } = props;
    
    return (
        <div>
            <button className='button'>{text}</button>
        </div>
    )
}

export default index

