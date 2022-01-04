import React from 'react'
import "./index.css"
import GoogleIcon from "../svg/GoogleIcon";
import GithubIcon from "../svg/GithubIcon";
import FacebookIcon from "../svg/FacebookIcon";

function index(props) {

    const {type, ...args} = props;

    return (
        <div className='containerx'>
            <div className='socials'>
                <span className='mid'><GoogleIcon /></span>
            </div>
            <div className='socials'>
                <span className='mid'><GithubIcon /></span>
            </div>
            <div className='socials'>
                <span className='mid'><FacebookIcon /></span>
            </div>
        </div>
    )
}

export default index
