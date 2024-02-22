// TextInput Component
import './textinput.css';
export default function TextInput() {
    return (
        <div classname="container">
            <h2>Enter description of website to generate:</h2>
            <textarea rows="25" cols="100">
            Example: Generate a video player website with a red play button.
            </textarea>
        </div>
    )
}   