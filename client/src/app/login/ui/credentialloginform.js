'use client'
import {signIn} from "next-auth/react";

export default function CredentialLogin(){
    return(
        <form onsubmit={() => signIn(undefined, {callbackUrl: "/profile"})}>
            <input type="email" placeholder="Email" className="email" />
            <input type="password" placeholder="Password" className="password" />
            <button type="submit" className="button email">Log in your email</button>
        </form>
    )
}