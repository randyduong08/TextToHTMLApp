// TextInput Component
// Uses React's useState hook

'use client'    // React only works on client components, so need to specify this is a client component

import { useState } from 'react';

export default function InputForm() {
    // prompt = state variable; setPrompt = setter function, '' = initial value of prompt
    const [prompt, setPrompt] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/store_prompt/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userID: '0', prompt: prompt }), // set userID to 0 TEMPORARILY
        });
        if (response.ok) {
            console.log('Prompt stored successfully');
        } else {
            console.log('Error storing prompt');
        }
    };

    return (
        <div>
            <h2>Input Text</h2>
            <form onSubmit={handleSubmit}>
                <textarea rows="25" cols="100"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter description of website to generate:"
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}   