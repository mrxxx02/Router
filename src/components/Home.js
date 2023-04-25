import React from 'react';
import { Link,} from 'react-router-dom';


const Home = () => {
  return (
    <div className="App">
       <div className='margin'>
        <h1>Selamat Datang di Website <br></br>Band Hope Flakes</h1>
        <p>
          Kami adalah band yang berfokus pada musik Pop Punk. 
          Lahir pada 20 Oktober 2020 di Kota Medan, Indonesia. 
          Bernamakan Hope Flakes karena terdapat lirik yang dibuat dari beberapa Serpihan Harapan
        </p>
        <a class="nav-link" ><Link to="http://localhost:3000/">Back</Link></a>
      </div>
    </div>
        
  );
};

export default Home;
