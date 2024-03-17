import React, { useEffect, useState } from "react";
import './Main.css'
import jsonFile from "./albums.json";
import Album from "./AlbumComponent/AlbumComponent";

const Main = () => {
    const [albums, setAlbums] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const toggleSongs = () => {
        setIsOpen(!isOpen);
    };
    
    function getAlbums(){
        const res = jsonFile.albums
        console.log(res)
        setAlbums(res)
    }

    useEffect(() => {
        getAlbums()
    }, [])
    
    return(
        <main className="albums-section">
            {albums.map(album => (
                <Album album={album} />
            ))}
        </main>
    );
};

export default Main;
