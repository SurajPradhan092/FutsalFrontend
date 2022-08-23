import { Component, state, registerUser, registerhandler } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Register extends Component {
    state = {
        fname: "",
        lname: "",
        username: "",
        password: "",
        email: "",
        phone: "",
        userType: "Player",
        checkRegister: false
    }

   registerUser = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   registerhandler = (e) => {
       e.preventDefault();
       axios.post("http://localhost:8080/player/register", this.state)
       .then((response) => {
            console.log(response)
            this.setState({ 
                checkRegister: true
            })
       })
       .catch((err) => {
            console.log(err)
       })
   }
    render() {
        if(this.state.checkRegister === true){
            return <Redirect to='/login'/>
        }
        return (
            <div class="container register">
                <div class="row py-5 mt-4 align-items-center">
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="assets/img/login.svg" alt="Register" class="img-fluid mb-3 d-none d-md-block" />
                        <h1>Create an Account</h1>
                    </div>
                    <div class="col-md-7 col-lg-6 ml-auto">
                        <form action="#">
                            <div class="row">

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="firstName" type="text" name="fname"
                                    value={this.state.fname} onChange={this.registerUser} required
                                    placeholder="First Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-6 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="lastName" type="text" name="lname" 
                                    value={this.state.lname} onChange={this.registerUser} required
                                    placeholder="Last Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="username" type="text" name="username" 
                                    value={this.state.username} onChange={this.registerUser} required
                                    placeholder="User Name" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-lock text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="password" type="password" name="password" 
                                    value={this.state.password} onChange={this.registerUser} required
                                    placeholder="Password" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class='bx bxs-envelope text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="email" type="email" name="email" 
                                    value={this.state.email} onChange={this.registerUser} required
                                    placeholder="Email Address" class="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div class="input-group col-lg-12 mb-4">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="bx bxs-phone text-muted"></i>
                                        </span>
                                    </div>
                                    <select id="countryCode" name="countryCode" style={{'max-width': 80}} class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                                        <option value="">+977</option>
                                    </select>
                                    <input id="phoneNumber" type="tel" name="phone" 
                                    value={this.state.phone} onChange={this.registerUser}
                                    placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3" />
                                </div>

                                

                                <div class="form-group col-lg-12 mx-auto mb-0">
                                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.registerhandler}>Create your Account</button>
                                </div>

                                <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Already Registered?<a href="/login" class="text-primary ml-2">Login</a></p>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;