// FileInput.js
'use client'
import './fileinput.css';
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["txt"]; // Only allow txt files

function DragDrop() {
  const [file, setFile] = useState(null);
  
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div style={{ marginTop: '10px' }}> {/* Add margin top to the div containing the FileUploader */}
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        label="Click, or Drag and Drop a text file!"
        labelStyle={{ color: 'white' }} // Apply white color to the label text
        maxSize={5} // Maximum file size allowed in MB
        onDrop={(file) => console.log("File dropped:", file)}
      />
    </div>
  );
}

export default DragDrop;
