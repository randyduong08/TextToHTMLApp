"use client"

import './headerlayout.css'
import LoginButton from './ui/loginbutton'
import RegisterButton from './ui/registerbutton'
import SignOutButton from './ui/signoutbutton'
import Logo from './ui/logo'
import { useSession, signOut } from "next-auth/react";

export default function Page(){
    const { session, status } = useSession();
    return(
        <div className='navbar'>
                <Logo />
            <div className='right-items'>
                { status !== "authenticated" ? 
                    (
                        <>
                            <RegisterButton/>
                            <LoginButton/>
                        </>
                    )
                    :
                    (
                        <SignOutButton/>
                    )
                }
            </div>
        </div>
    )
}