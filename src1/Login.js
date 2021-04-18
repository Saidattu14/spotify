import React from 'react';
import './Login.css';
import {loginUrl, getTokenFromUrl } from './spotify'

function Login() {
    return (
        <div className='login'>
         
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />
            {/* redirects the user to the login page */}
            <a href={loginUrl}>Login with Spotify</a> 
        </div>
    )
}

export default Login