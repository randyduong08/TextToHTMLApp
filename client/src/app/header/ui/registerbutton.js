'use client'

export default function Page() {

    // using window.location.href as temp workaround... bypassing nextJS benefits
    return (
        <button type="submit" className="submitButton" onClick={() => window.location.href = '/registration'}>Register</button>
    );
}
