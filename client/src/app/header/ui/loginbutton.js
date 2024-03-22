'use client'

export default function Page() {
    return (
        <button type="submit" className="submitButton" onClick={() => window.location.href='/login'}>Login</button>
    );
}
