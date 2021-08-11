import React from 'react'
import Header from './Header';
import './Main.css';
import Posts from './Posts';


export default function () {
    return (
        <div className="main">
            <Header />
            <Posts />
        </div>
    )
}
