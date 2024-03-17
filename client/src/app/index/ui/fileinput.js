// FileInput.js
'use client'
import './fileinput.css';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { toast } from 'react-toastify'

const fileTypes = ["txt"]; // Only allow txt files

function DragDrop() {
    const [file, setFile] = useState(null);
  
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

    // function that handles submission from the html div defined below
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {                                // if no file selected, don't continue
            console.log('No file selected');
            return;
        }

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
                    console.log('Prompt details stored successfully');
                    console.log(data)
                    showToastStoreSuccess();
                    showToastData(data);
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
        };
        fileReader.readAsText(file);        // read the file as text
    };


    return (
        <div style={{ marginTop: '10px' }}>
            <h2 className="font-bold text-2xl">Input Text File</h2>
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Click or Drag and Drop a .txt file!"
                labelStyle={{ color: 'white' }}
                maxSize={5}
                onDrop={(file) => console.log("File dropped:", file)}
            />
            <button type="submit" className="submitButton" onClick={handleSubmit} style={{ marginTop: '15px' }}>
                Submit
            </button>
        </div>
    );
}    
export default DragDrop;
