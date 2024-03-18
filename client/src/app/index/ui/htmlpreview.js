// HTMLPreview Component

'use client'    // React only works on client components, so need to specify this is a client component

import { useState, useEffect } from 'react';
import { useHtmlContent } from '../../context/HtmlContentContext';

export default function Page() {
    const { htmlContent } = useHtmlContent();
    const [iframeSrc, setIframeSrc] = useState('/sampleoutput.html');

    useEffect(() => {
        if (htmlContent) {
            const htmlSrc = `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`;
            setIframeSrc(htmlSrc);
        }
    }, [htmlContent]);

    return (
        <div>
            <h2 className="mt-4 font-bold text-2xl">Generated Web Page Preview</h2>
            {/* <embed type="text/html" src="/sampleoutput.html" width="90%" height="380"></embed> */}
            <iframe src={iframeSrc} width="90%" height="380"></iframe>
        </div>
    )
}
