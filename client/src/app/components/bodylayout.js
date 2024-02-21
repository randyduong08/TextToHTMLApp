// BodyLayout Component

import './bodylayout.css'
import FileInput from './ui/fileinput'
import FileOutput from './ui/fileoutput'
import HTMLPreview from './ui/htmlpreview'
import TextInput from './ui/textinput'

export default function Page() {
    return (
        <div className='container'>
            <div className='left-column'>
                <h1>Input</h1>
                <TextInput />
                <FileInput />
            </div>
            <div className='right-column'>
                <h1>Output</h1>
                <HTMLPreview />
                <FileOutput />
            </div>
        </div>
    )
}