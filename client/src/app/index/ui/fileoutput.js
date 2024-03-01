// FileOutput Component

export default function Page() {
    return (
        <div>
            <h2>Download Generated HTML File</h2>
            <a href="/sampleoutput.html" download="sampleoutput.html">
            <button type="submit" className="submitButton">Download Output</button>

            </a>
        </div>
    )
}