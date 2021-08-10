import React from 'react'
import './SideNav.css';

export default function SideNav() {
    const menus = [
        { to: '/r/popular', text: "Popular"},
        { to: '/r/all', text: "All"},
        { to: '/r/random', text: "Random"}
    ]
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    ]
    return (
        <div className="sidenav">
            <div className="sidenav_logo">
                <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png" />
            </div>
            <div className="sidenav_search">
                <input type="text" name="search" placeholder="Search" />
                <i className="fas fa-search" />
            </div>
            <div className="sidenav_link">
                <ul className="sidenav_menu">
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>
                    ))}
                </ul>
                <hr />
                <ul className="sidenav_subreddit">
                    {subreddits.map(subreddit => (
                            <li><a href={`/r/${subreddit}`}>{subreddit}</a></li>
                        ))}
                </ul>
            </div>

        </div>
    )
}
