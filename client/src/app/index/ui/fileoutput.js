export default function Page() {
    return (
        <div className="mt-16">
            <h2 className="font-bold text-2xl">Download Generated HTML File</h2>
            <a href="/sampleoutput.html" download="sampleoutput.html">
                <button type="submit" className="submitButton">Download Output</button>
            </a>
        </div>
    )
}
