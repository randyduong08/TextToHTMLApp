'use client'
import { useState } from 'react';

export default function RegisterForm(){
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault(); 
    //     try {
    //         const response = await fetch('http://localhost:8000/api/auth/register/', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify( {email, password1: password, password2: password}), //turn email and password into json?
    //         });
    //         if (response.ok) {
    //             console.log('Prompt details stored successfully');
    //         } else {
    //             console.log('Error storing prompt details');
    //         }
    //         const data = await response.json();
    //         console.log('Prompt details saved:', data);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return(
        // <form onSubmit={() => console.log("Register form submitted...")}>
        //     <input type="email" placeholder="Email" className="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        //     <input type="password" placeholder="Password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        //     <button type="submit" className="button email">Register using your email</button>
        // </form>
        <form onSubmit={() => console.log("Register form submitted...")}>
            <input type="email" placeholder="Email" className="email" />
            <input type="password" placeholder="Password" className="password" />
            <button type="submit" className="button email">Register using your email</button>
        </form>
    );
}