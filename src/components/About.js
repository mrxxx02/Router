import React from 'react';
import { Link,} from 'react-router-dom';

const About = () => {
  return (
    <div className="App">
      <div className='margin'>
        <h1>Tentang Band Hope Flakes</h1>
        <br></br>
        Kami adalah band yang dibentuk pada tahun 2022. Kami terdiri dari 5 anggota
        yaitu 
        <p>Maisa (Vokal), Ryan (Vokal 2 & Bass), Adib (Gitar), Naufal (Gitar), dan Rizky (drum).</p>
        <a class="nav-link" ><Link to="http://localhost:3000/">Back</Link></a>
      </div>
  </div>

  );
};
export default About;