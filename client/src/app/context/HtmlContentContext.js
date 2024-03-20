
// context to store the html content of the page, and to share it between components

'use client'    // React only works on client components, so need to specify this is a client component

import { createContext, useContext, useState } from 'react';

const HtmlContentContext = createContext();

export const useHtmlContent = () => useContext(HtmlContentContext);

export const HtmlContentProvider = ({ children }) => {
    const [htmlContent, setHtmlContent] = useState('');

    return (
        <HtmlContentContext.Provider value={{ htmlContent, setHtmlContent }}>
            {children}
        </HtmlContentContext.Provider>
    );
};