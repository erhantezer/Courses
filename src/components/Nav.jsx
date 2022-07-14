import logo from '../img/indir.png';
import {Link,NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img className='w-50' src={logo} alt="#" /></Link>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">

        <li className="nav-item">
          <NavLink 
          style={({isActive}) => ({ color : isActive && 'red'})}
          className="nav-link active" 
          aria-current="page" 
          to="/">
          Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
          style={({isActive}) => ({ color : isActive && 'red'})}
          className="nav-link" 
          to="/instructors" 
          aria-current="page">
          Instructors
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink 
          style={({isActive}) => ({ color : isActive && 'red'})}
          className="nav-link" 
          to="/paths" 
          aria-current="page">
          Paths
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
          style={({isActive}) => ({ color : isActive && 'red'})} 
          className="nav-link" 
          to='/contact' 
          aria-current="page">
          Contact
          </NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav