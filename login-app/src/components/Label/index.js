import React from 'react'
import "./index.css"

function index(props) {
    
    const { text, size, color} = props;
    let textSize = `${size}px`;

    return (
        <div className="label" style={{fontSize: textSize, color: color }} >
            {text}
        </div>
    )
}
 
export default index
