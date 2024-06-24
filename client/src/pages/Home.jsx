import {useEffect, useState} from 'react';
import BtnMenu from './components/BtnMenu.jsx';
import {fetchInstagramPosts} from "../assets/helpers/functions.js";
import {Carousel, ThemeProvider} from "@material-tailwind/react";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const {data} = await fetchInstagramPosts();
                setPosts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar posts: {error.message}</div>;
    }

    return (
        <ThemeProvider>
            <div className="homeContainer">
                <div className="w-full text-center py-2">
                    <h1 className="text-3xl font-bold mb-4">Quer conhecer nossos pratos?</h1>
                    <BtnMenu/>
                </div>
                <h1 className="text-center text-xl mt-4">Fique por dentro do que está acontecendo no nosso Instagram!</h1>
                {posts.length && (
                    <Carousel className="rounded-xl h-[500px] w-[500px]">
                        {posts.map((post) => (
                            <img
                                key={post.id}
                                src={post.media_url}
                                alt={post.caption}
                                className="h-full w-full object-cover"
                            />
                        ))}
                    </Carousel>
                )}
            </div>
        </ThemeProvider>
    );
}
