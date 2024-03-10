// TextInput Component
// Uses React's useState hook

'use client'    // React only works on client components, so need to specify this is a client component

import { useState } from 'react';
import { toast } from 'react-toastify'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function InputForm() {
    // promptDetails = state variable; setPromptDetails = setter function, '' = initial value of prompt
    const [promptDetails, setPromptDetails] = useState('');

    // define toast messages
    const showToastStoreSuccess = () => toast('Prompt details stored successfully');
    const showToastStoreFail = () => toast('Error storing prompt details');
    const showToastError = (error) => toast('Error:', error);

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
                console.log('Prompt details stored successfully');
                showToastStoreSuccess();
            } else {
                console.log('Error storing prompt details');
                showToastStoreFail();
            }

        } catch (error) {
            console.error('Error:', error);
            showToastError(error);
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
                    value={promptDetails}
                    onChange={(e) => setPromptDetails(e.target.value)}
                    placeholder="Enter description of website to generate:"
                />
                <br></br>
                <button type="submit" className="submitButton">Submit</button>
            </form>
        </div>
    )
}   