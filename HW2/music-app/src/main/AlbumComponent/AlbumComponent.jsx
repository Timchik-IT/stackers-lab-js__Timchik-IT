import React, { useState } from 'react';
import '../Main.css'

const Album = ({ album }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSongs = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className="album-card" onClick={toggleSongs}>
        {album.logoUrl && <img src={album.logoUrl} alt={album.title} className="album-image" />}
        <h3 className="album-title">{album.title}</h3>
        <p className="album-artist">{album.artist}</p>
        {isOpen && (
            <div className="album-songs-list">
                {album.songs.map((song, index) => (
                    <div key={index}>{index + 1} - {song}</div>
                ))}
            </div>
        )}
    </div>
    );
};

export default Album;
