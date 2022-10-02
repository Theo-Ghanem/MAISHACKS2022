import React from 'react'

export default function NewUploadFile() {
   
  return (

        <form action='http://localhost:5000/upload' method='POST' encType='multipart/form-data'>
            <input type="file" name="file"/>
            <input type="submit"/>
        </form>
    
  )
}
