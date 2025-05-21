import React from 'react';
import './Editor.css';

function Editor() {
    return (
        <div className="editor">
            <div className="toolbar">
                <select
                onChange={(e) => { document.execCommand('fontName', e.target.value);}} defaultValue="Arial">
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>

                <button className="toolbar-button">B</button>
                <button className="toolbar-button">I</button>
                <button className="toolbar-button">U</button>
            </div>
            <div
            className="textarea"
            contentEditable={true}
            spellCheck={true}
            >
            {/* User types here */}
            </div>
        </div>
    );
}
export default Editor;  