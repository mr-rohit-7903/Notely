import React, { useState } from 'react';
import './Folders.css'; 
import FolderIcon from '../assets/images/folder.png'; 
import NewFolder from '../assets/images/new-folder.png'; 

function Folders() {
    const [folders, setFolders] = useState([
        { id: 1, name: 'Personal' },
        { id: 2, name: 'Work' },
        { id: 3, name: 'Ideas' },
        { id: 4, name: 'New Folder' }
    ]);

    const handleDelete = (id) => {
        setFolders(folders.filter(folder => folder.id !== id));
    };

    const handleCreate = () => {
        const newFolder = {
        id: Date.now(),
        name: `New Folder ${folders.length + 1}`
        };
        setFolders([...folders, newFolder]);
    };

    return (
        <div className="folders-page">
            <h2>Your Folders</h2>
            <div className="folders-container">
                <div className="folder-card create-folder" onClick={handleCreate}>
                    <img src={NewFolder} alt="New Folder" />
                    <span>Create Folder</span>
                </div>
                {folders.map(folder => (
                    <div key={folder.id} className="folder-card">
                        <img src={FolderIcon} alt="Folder" />
                        <span>{folder.name}</span>
                        <button onClick={() => handleDelete(folder.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Folders;
