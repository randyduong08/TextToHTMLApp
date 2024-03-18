// FileOuput Component

'use client'    // React only works on client components, so need to specify this is a client component

import { useState, useEffect } from 'react';
import { useHtmlContent } from '../../context/HtmlContentContext';

export default function Page() {
    const { htmlContent } = useHtmlContent();
    const [downloadSrc, setDownloadSrc] = useState('/sampleoutput.html');

    useEffect(() => {
        if (htmlContent) {
            const htmlSrc = `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
            setDownloadSrc(htmlSrc);
        }
    }, [htmlContent]);

    return (
        <div className="mt-16">
            <h2 className="font-bold text-2xl">Download Generated HTML File</h2>
            <a href={downloadSrc} download="generated_page.html">
                <button type="submit" className="submitButton">Download Output</button>
                <label class="ml-2">generated_page.html</label>
            </a>
        </div>
    )
}
