import { signOut } from "next-auth/react";

export default function Page() {
    return (
        <button type="submit" className="submitButton" onClick={() => {signOut();}}>Sign Out</button>
    );
}