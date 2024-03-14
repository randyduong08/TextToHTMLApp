// TextInput Component
// Uses React's useState hook

'use client'    // React only works on client components, so need to specify this is a client component

import { useState } from 'react';
import { toast } from 'react-toastify'

export default function InputForm() {
    // promptDetails = state variable; setPromptDetails = setter function, '' = initial value of prompt
    const [promptDetails, setPromptDetails] = useState('');

    // define toast messages for user visibility
    const showToastStoreSuccess = (response) => toast.success('Prompt details stored successfully', response);
    const showToastStoreFail = () => toast.error('Error storing prompt details');
    const showToastError = (error) => toast.error('Error: ' + error);
    const showToastData = (data) => {
        const stringData = '[' + data.join(']; [') + ']';
        toast.info('Tokens: \n' + stringData);
    }

    // function that handles submission from the html form defined below
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/prompts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ promptDetails, userID: 0 }), // set userID to 0 TEMPORARILY
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

    return (
        <div>
            <h2>Input Text</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    className="resize w-full h-96" // Adjusted width and height
                    value={promptDetails}
                    onChange={(e) => setPromptDetails(e.target.value)}
                    placeholder={"Enter description of website to generate.\nSeparate tokens with two new-line characters.\n\nExample:\n\nThis is the first portion of my website.\n\nThis is the second portion of my website.\n\nThis is the third portion of my website.\n\n..."}
                />
                <br></br>
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    )
}   