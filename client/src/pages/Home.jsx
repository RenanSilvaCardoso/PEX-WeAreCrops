// import {useEffect, useState} from 'react';
// import { Carousel } from './components/Carousel.jsx';
import carousel from '../assets/img/carousel.jpg';
import carousel2 from '../assets/img/carousel2.jpg';
import carousel3 from '../assets/img/carousel3.jpg';
import carousel4 from '../assets/img/crops3.jpg';
import BtnMenu from './components/BtnMenu.jsx';
import { FaWhatsapp } from "react-icons/fa";
import {Link} from 'react-router-dom';
import WhatsApp from "./components/WhatsApp.jsx";
// import axios from 'axios';

function Home() {
    let slides = [carousel, carousel2, carousel3, carousel4];
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchInstagramPosts = async () => {
    //         try {
    //             const response = await axios.get('/api/instagram');
    //             setPosts(response.data.data);
    //         } catch (error) {
    //             console.error('Error fetching Instagram posts:', error);
    //         }
    //     };
    //
    //     fetchInstagramPosts();
    // }, []);

    return (
        <div className="w-full" >
            {/*<div className="md:w-4/5 m-auto flex content-center justify-center">*/}
            {/*    <Carousel slides={slides}/>*/}
            {/*</div>*/}
            <div className="w-full text-center py-4">
                <h1 className="text-3xl font-bold mb-4">Quer conhecer nossos pratos?</h1>
                <BtnMenu/>
            </div>
            {/*<div>*/}
            {/*    <h1>Instagram Posts</h1>*/}
            {/*    <div className="instagram-posts">*/}
            {/*        {posts.map(post => (*/}
            {/*            <div key={post.id} className="instagram-post">*/}
            {/*                {post.media_type === 'IMAGE' && (*/}
            {/*                    <img src={post.media_url} alt={post.caption}/>*/}
            {/*                )}*/}
            {/*                {post.media_type === 'VIDEO' && (*/}
            {/*                    <video controls>*/}
            {/*                        <source src={post.media_url} type="video/mp4"/>*/}
            {/*                    </video>*/}
            {/*                )}*/}
            {/*                <p>{post.caption}</p>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    );
}

export default Home;
