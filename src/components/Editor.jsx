import React from 'react';
import './Editor.css';

function Editor() {
    
    const handleCommand = (command) => {
        document.execCommand(command, false, null);
    };

    const handleFontChange = (e) => {
        document.execCommand('fontName', false, e.target.value);
    };

    return (
        <div className="editor">
            <div className="toolbar">
                <select onChange={handleFontChange} defaultValue="Arial">
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                </select>

                <button className="toolbar-button" onClick={() => handleCommand('bold')}><b>B</b></button>
                <button className="toolbar-button" onClick={() => handleCommand('italic')}><i>I</i></button>
                <button className="toolbar-button" onClick={() => handleCommand('underline')}><u>U</u></button>

                <div className="save">Save</div>
            </div>

            <div
                className="textarea"
                contentEditable={true}
                spellCheck={true}
            >
            </div>
        </div>
    );
}
export default Editor;  