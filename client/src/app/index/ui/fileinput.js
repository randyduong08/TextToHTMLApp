// FileInput.js

import './fileinput.css';
import React from 'react'
import { useDrag } from 'react-dnd'
export default function Page() {
  return (
    <div className="container">
      <h1>Submit a text file</h1>
      {/* Apply the file input styles to this input element */}
      <input type="file" id="myfile" name="myfile" accept="text/plain" />
    </div>
  );
}