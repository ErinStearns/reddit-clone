import React from 'react'
import PostItem from './PostItem';
import './Posts.css';

export default function Posts() {
    const posts = [
        {
            upvote: 97,
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "What type of mango variety is this?",
            comment_count: 27,
            user: "thenlurbel",
            subreddit: "askreddit",
        },
        {
            upvote: 39,
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Questions about new wallet",
            comment_count: 54,
            user: "theindependentonline",
            subreddit: "politics",
        },
         {
            upvote: 1067,
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Amazing customer supports for child",
            comment_count: 708,
            user: "thepez",
            subreddit: "gaming",
        },
        {
            upvote: 19,
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "I saw enola holmes (the movie) and now i want to read something similar",
            comment_count: 7,
            user: "cronaldo",
            subreddit: "soccer",
        },
        {
            upvote: 5309,
            image: `https://picsum.photos/id/${Math.floor(Math.random() * 50)}/400/300`,
            title: "Jorge Jesus to Riben Dias: You're leaving a club that is much bigger than Manchester City",
            comment_count: 1284,
            user: "lionelandresmessi",
            subreddit: "nba",
        },
    ]
    return (
        <div className="posts">
            {posts.map(post => (
                <PostItem post={post} />
            ))}
        </div>
    )
}
