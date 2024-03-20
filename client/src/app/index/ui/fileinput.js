// FileInput.js

'use client'

import './fileinput.css';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from 'react-toastify'
import { useHtmlContent } from '../../context/HtmlContentContext';

const fileTypes = ["txt"]; // Only allow txt files

function DragDrop() {
    const [file, setFile] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(false);
  
    const handleChange = (file) => {
        setFile(file);
    };

    // define toast messages for user visibility
    const showToastStoreSuccess = (response) => toast.success('Prompt details stored successfully', response);
    const showToastStoreFail = () => toast.error('Error storing prompt details');
    const showToastError = (error) => toast.error('Error: ' + error);
    const showToastData = (data) => {
        const stringData = '[' + data.join(']; [') + ']';
        toast.info('Tokens: \n' + stringData);
    }
    
    const { setHtmlContent } = useHtmlContent();    // get the setHtmlContent function from the context

    // function that handles submission from the html div defined below
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {                                // if no file selected, don't continue
            console.log('No file selected');
            return;
        }
        setButtonDisabled(true); //Disable button after user clicks submit
        // read file content and send a POST request to the server using the read text
        const fileReader = new FileReader(); // fileReader to read from textfile
        fileReader.onload = async (e) => {
            const fileText = e.target.result; // get the text from the file
            // send the text to the server
            try {
                const response = await fetch('http://localhost:8000/prompts/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ promptDetails: fileText, userID: 0 }), // set userID to 0 TEMPORARILY
                });
                if (response.ok) {
                    const data = await response.json();
                    const tokens_array = data.tokens_array;
                    const html_content = data.html_content;
                    console.log('Prompt details stored successfully');
                    console.log(tokens_array)
                    console.log('File Text:', fileText);
                    showToastStoreSuccess();
                    showToastData(tokens_array);

                    setHtmlContent(html_content);   // update the context with the generated html content
                } 
                else {
                    console.log('Error storing prompt details');
                    showToastStoreFail();
                }
            } 
            catch (error) {
                console.error('Error:', error);
                showToastError(error);
            }
            setButtonDisabled(false); //Re-enable button after submit request is handled
        };
        fileReader.readAsText(file);        // read the file as text
    };

    return (
        <div style={{ marginTop: '34px' }}>
            <h2 className="font-bold text-2xl mb-2">Input Text File</h2>
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Click or Drag and Drop a .txt file!"
                labelStyle={{ color: 'white' }}
                maxSize={5}
                onDrop={(file) => console.log("File dropped:", file)}
            />
            <button type="submit" className="submitButton" disabled={buttonDisabled} onClick={handleSubmit} style={{ marginTop: '10px' }}>
                Submit
            </button>
            <img src="/loading_ring.svg" alt="Spinner" className={buttonDisabled ? "w-10 h-10 inline mx-2" : "w-10 h-10 inline mx-2 invisible"}></img>
        </div>
    );
}    
export default DragDrop;
