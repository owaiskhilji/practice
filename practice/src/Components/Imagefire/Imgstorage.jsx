import React, { useState } from 'react'
import { storage,ref,uploadBytesResumable, getDownloadURL, } from "../../Config/Firebase";
export default function Getimage() {
  const  [images,setimages] = useState("") 
  function handle(e){
    const file = e.target.files[0];
    setimages(file);
  const mountainsRef = ref(storage, `image/${file.name}`);
  const uploadTask = uploadBytesResumable(mountainsRef,file);
    uploadTask.on('state_changed',
    (snapshot) => {
 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      console.log("stg>>>",error)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setimages(downloadURL)
        console.log('File available at', downloadURL);
      });
    }
  )};
  return ( <div>
      <input type='file' onChange={handle}/>
      </div>


  )
  }