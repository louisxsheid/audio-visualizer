import './index.css';

import ReactAudioPlayer from 'react-audio-player';

import { useState, useEffect } from 'react';



import {app} from '../base';

function App() {
  const [ audioFile, setAudioFile ] = useState();
  const [ isSelected, setIsSelected] = useState(false);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      fileRef.getDownloadURL().then(url => {
        console.log('URL', url);
        setAudioFile(url);
      })
      console.log('successful upload');
    });

    setIsSelected(true);
	};
  
  return (
    <div className="flex flex-col w-full h-screen bg-red-50">
      <div className="m-auto">
      <div className="mx-auto">
      <input type="file" name="file" onChange={changeHandler} />
        <ReactAudioPlayer
          src={audioFile}
          autoPlay
          controls
        />
      </div>
      </div>
    </div>
  );
}

const getAudioFile = () => {

};

export default App;