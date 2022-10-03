import React from 'react'

export default function NewUploadFile() {
   
  return (
        <form  action='http://localhost:5000/upload' method='POST' encType='multipart/form-data'>
            <input class="inputfile" id = "file1" type="file" name="file"/>
            <label for="file1">Choose a file</label>
            <input class="inputfile" id = "file2" type="submit"/>
            <label for="file2">Submit a file</label>
        </form>
    
  )
}
