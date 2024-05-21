'use client';

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Image from "next/image";
import Menu from "@/app/ui/Menu";
import Footer from "@/app/ui/Footer";
import Link from "next/link";

// Définir l'interface pour les objets image
interface Image {
    title: string;
    link: string;

}


// Définir l'interface pour les résultats de l'API
interface ApiResponse {
    items: Image[];
}
let start = 1;
const count = 10;

const App: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [initialLoaded, setInitialLoaded] = useState<boolean>(false);
    const [query, setQuery] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const fetchImages = async (query: string, start: number, count: number): Promise<Image[]> => {
        setLoading(true);
        setError(null);

        await new Promise(resolve => setTimeout(resolve, 1000));


        let response = null;

        try {
            response = await axios.get<ApiResponse>(`/api/search`, {
            params: { query, start, count }});


        }   catch (error) {
            setError('Error fetching images');
        } finally {
            setLoading(false);
        }

        return response.data.items;

    };


    const loadInitialImages = async () => {
        setLoading(true);
        const initialImages = await fetchImages(query, start, count);
        setImages(initialImages);
        setLoading(false);
        setInitialLoaded(true);
    };

    const loadMoreImages = async () => {
        setLoading(true);
        const newImages = await fetchImages(query, images.length+1, count);
        setImages(prevImages => [...prevImages, ...newImages]);
        setLoading(false);
    };

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    return (
        <main className=" ">
            <div className=" p-1 w-full flex  flex-col items-center  justify-center mt-36 mx-auto">
                <Menu/>


                        <div className=" flex flex-col p-2 items-center  justify-center " >
                            <div>
                                <input  className="  border border-gray-300 "
                                type="text"
                                value={query}
                                onChange={handleQueryChange}
                                placeholder="Enter search query"
                            />
                            </div><div>
                            <button onClick={loadInitialImages}
                                    className="bg-white mt-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                    disabled={loading || !query || !query}
                            >
                                {loading ? 'Loading...' : 'Search'}
                                {error && <p>{error}</p>}<br/>
                            </button>
                        </div>
                        </div>

                <div className="flex flex-wrap">
                {images.map((image, index) => (
                    <div key={index} className="p-2 bg-gray-200 font-thin flex flex-col items-center m-1 w-60 border-2 border-gray-500">
                    <Link href={image.link} target="_blank">
                        <Image src={image.link} alt={image.title} width={200} height={200} />
                    </Link>
                        <p>{image.title}</p>

                    </div>
                ))}
                </div>

                {initialLoaded && images.length > 0 && (
                    <div className="flex mt-3 justify-center">
                <button onClick={loadMoreImages} disabled={loading}>
                    {loading ? 'Loading...' : 'Load More'}
                    {error && <p>{error}</p>}<br/>
                </button></div>
                )}
            </div>
                <Footer/>

        </main>
    );
};

export default App;
