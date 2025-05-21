import React, { useState } from 'react';
import './Notes.css'; 
import NoteIcon from '../assets/images/notes.jpg'; 
import NewNote from '../assets/images/create-notes.jpg'; 

function Notes() {
    const [notes, setNotes] = useState([
        { id: 1, name: 'Personal' },
        { id: 2, name: 'Work' },
        { id: 3, name: 'Ideas' },
        { id: 4, name: 'Tmkc' }
    ]);

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const handleCreate = () => {
        const newNote = {
            id: Date.now(),
            name: `New Note ${notes.length + 1}`
        };
        setNotes([...notes, newNote]);
    };

    return (
        <div className="notes-page">
            <h2>Your Notes</h2>
            <div className="notes-container">
                <div className="note-card create-note" onClick={handleCreate}>
                    <img src={NewNote} alt="New Note" />
                    <span>Create Note</span>
                </div>
                {notes.map(note => (
                    <div key={note.id} className="note-card">
                        <img src={NoteIcon} alt="Note" />
                        <span>{note.name}</span>
                        <button onClick={() => handleDelete(note.id)}>🗑️</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notes;
