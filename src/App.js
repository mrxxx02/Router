import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h1>Hope Flakes</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page"><Link to="/Home"><button>Home</button></Link></a>
        <a class="nav-link" ><Link to="/About"><button>About</button></Link></a>
        <a class="nav-link"><Link to="/Music"><button>Music</button></Link></a>
       
      </div>
    </div>
  </div>
</nav>
      <Outlet />
    </div>
  );
}

export default App;
