// FileOutput Component

export default function Page() {
    return (
        <div>
            <h2>Download Generated HTML File</h2>
            <a href="/sampleoutput.html" download="sampleoutput.html">
                <button>Download Sample Output</button>
            </a>
        </div>
    )
}