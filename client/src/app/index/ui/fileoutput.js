export default function Page() {
    return (
        <div className="mt-2 flex-auto">
            <div className="mt-1 mb-2 flex-auto">
                <a href="http://localhost:8000/generated-page/">
                    <button type="submit" className="submitButton" style={{ width: '172px' }}>Preview Page</button>
                </a>
            </div>
            <h2 className="font-bold text-2xl">Download Generated HTML File</h2>
            <a href="/sampleoutput.html" download="sampleoutput.html">
                <button type="submit" className="submitButton">Download Output</button>
            </a>
        </div>
    )
}
