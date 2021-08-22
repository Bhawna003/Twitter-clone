import React, { useEffect, useState } from 'react'
import './Feed.css'
import tweetbox from './tweetbox'
//import post from './post'
import db from './firebase'


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    //console.log(posts)

    return (
        <div className = "feed">
            <div className = "feed__header">
                <h2>Home</h2>
            </div>

            <tweetbox />
            
                {posts.map(post => (
                <post 
                key = {post.text}
                displayName = {post.displayName}
                username = {post.username}
                verified = {post.verified}
                text = {post.text}
                image = {post.image}
                avatar = {post.avatar}
            />
            ))}
               
        </div>
    )
}
export default Feed