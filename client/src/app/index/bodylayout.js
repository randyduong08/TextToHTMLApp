// BodyLayout Component

import './bodylayout.css'
import FileInput from './ui/fileinput'
import FileOutput from './ui/fileoutput'
import HTMLPreview from './ui/htmlpreview'
import TextInput from './ui/textinput'
import SubmitButton from './ui/submitbutton'
import Footer from '../footer/footerlayout';
import Header from '../header/headerlayout';

export default function Page() {
    return (
        <div className='container'>
            <Footer />
            <Header />
            <div className='left-column'>
                <h1></h1>
                <TextInput />
                <FileInput />
            </div>
            <div className='right-column'>
                <h1></h1>
                <HTMLPreview />
                <FileOutput />

            </div>
        </div>
    )
}