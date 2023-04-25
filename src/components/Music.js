import React from 'react';
import { Link,} from 'react-router-dom';


const Music = () => {
  return (
    <div className="App">
       <div className='margin'>
      <h1>Album Kami</h1>
      <p>Kami telah merilis 2 Single yaitu "Tak Tentu Arah" pada 2022 dan "Tawa Berakhir Duka" pada 2023.</p>
      <p>Kedua lagu tersebut dapat kalian dengar di berbagai platform musik, dan jangan lupa untuk melihat Video Clip yang ada di Akun Youtube Official Hope Flakes</p>
      <a class="nav-link" ><Link to="http://localhost:3000/">Back</Link></a>
      </div>
    </div>
  );
};

export default Music;