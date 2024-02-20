// BodyLayout Component

import FileInput from './fileinput/page'
import FileOutput from './fileoutput/page'
import HTMLPreview from './htmlpreview/page'
import TextInput from './textinput/page'

export default function Page() {
    return (
        <div>
            <h1>&emsp;This is the Body</h1>
            <FileInput />
            <FileOutput />
            <HTMLPreview />
            <TextInput />
        </div>
    )
}