import React, {useEffect } from 'react';
const Home = () => {
    useEffect(() => {
        return () => {
            window.scroll(0,0)
        }
    }, [])
    return (
        <h1>
            Home Page
        </h1>
    )
}

export default Home
