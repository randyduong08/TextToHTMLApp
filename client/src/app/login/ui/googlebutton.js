'use client'    // React only works on client components, so need to specify this is a client component

import {signIn} from "next-auth/react";

export default function LoginButton(){
    const handleSignIn = async () => {
        await signIn('google');
    };
    return (
        <button className="button google" 
            onClick={handleSignIn} //After we attempt sign in with google, return to index page
        >
            <img src="Google Login Icon.png" alt="Google Login Icon" width="5%" height="5%"/>Log in with Google
        </button>
    )
}