import { Component, state, logout } from "react";
import axios from 'axios';
class Header extends Component {
  state = {
    username: "",
    imagepp: "",
    config: {
        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }
}
componentDidMount() {
    axios.get("http://localhost:8080/profile", this.state.config)
        .then((response) => {
            this.setState({
                username: response.data.data.username,
                imagepp: response.data.data.imagepp
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
}
  logout = () =>{
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    if (localStorage.getItem('token') && localStorage.getItem('userType') === 'Admin'){
      var menu =
        <ul className="navbar-nav ml-auto navbar-center">
          <li className="nav-item">
            <a className="nav-link" href="/FutsalAdmin">FutsalAdmin</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/EventAdmin">EventsAdmin</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={'http://localhost:8080/image/' + this.state.imagepp} width="30" height="30" className="rounded-circle" alt="User Profile"/>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/profile">Profile</a>
              <a className="dropdown-item " href="/" onClick={this.logout}>Log Out</a>
            </div>
          </li>
        </ul>
    }
    else if (localStorage.getItem('token')){
      menu =
        <ul className="navbar-nav ml-auto navbar-center">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Futsal">Futsal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Event">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Community">Community</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={'http://localhost:8080/image/' + this.state.imagepp} width="30" height="30" alt="User Profile" className="rounded-circle" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/profile">Profile</a>
              <a className="dropdown-item " href="/" onClick={this.logout}>Log Out</a>
            </div>
          </li>
        </ul>
    }
    else {
      menu =
        <ul className="navbar-nav ml-auto navbar-center">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Futsal">Futsal</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Event">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/Community">Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link get-started" href="/login">Login</a>
          </li>
        </ul>
    }
    return (
      <div className="navigationbar">

        <nav className="navbar navbar-expand-lg fixed-top text-center">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="assets/img/futsallogo.png" height="50" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

              <i className='bx bx-menu' style={{ color: "#009970" }}></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {menu}
            </div>
          </div>
        </nav>

      </div>

    )
  }
}
export default Header;