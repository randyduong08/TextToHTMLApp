// TextInput Component
// Uses React's useState hook

'use client'    // React only works on client components, so need to specify this is a client component

import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function InputForm() {
    // prompt = state variable; setPrompt = setter function, '' = initial value of prompt
    const [prompt, setPrompt] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/prompt_submit/', {
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
            const data = await response.json();
            console.log('Prompt saved:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
            <h2>Input Text</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter description of website to generate:"
                />
                <br></br>
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    )
}   