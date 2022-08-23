import { Component, state } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import YourFutsal from './YourFutsal';
import YourEvent from './YourEvent';
import YourBooking from './YourBooking';

class Profile extends Component {
    state = {
        _id: "",
        fname: "",
        lname: "",
        username: "",
        address: "",
        phone: "",
        email: "",
        age: "",
        imagepp: "",
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/profile", this.state.config)
            .then((response) => {
                this.setState({
                    _id: response.data.data._id,
                    fname: response.data.data.fname,
                    lname: response.data.data.lname,
                    username: response.data.data.username,
                    address: response.data.data.address,
                    phone: response.data.data.phone,
                    email: response.data.data.email,
                    age: response.data.data.age,
                    imagepp: response.data.data.imagepp
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/login'
        }
        return (

            <div class="container profilee">
                <div class="main-body">
                    <div class="row gutters-sm">
                        <div class="col-md-4 mb-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <img src={'http://localhost:8080/image/' + this.state.imagepp} alt="Admin" class="rounded-circle" width="150" />
                                        <div class="mt-3">
                                            <h4>{this.state.username}</h4>
                                            <p class="text-secondary mb-1">Futsal Player</p>
                                            <Link class="get-button" to={'/profile/update'}>Edit Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8" >
                            <div class="card mb-3" style={{ height: "310px" }}>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Full Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {this.state.fname} {this.state.lname}
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {this.state.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Phone</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {this.state.phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Age</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {this.state.age}
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            {this.state.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-6 mb-3">
                            <div class="card h-100">
                                <div className="row">
                                    <div class="col-sm-12">
                                        <h3 class="d-flex align-items-center mb-1 ml-3">Your Futsals</h3>
                                    </div>
                                </div>
                                <YourFutsal></YourFutsal>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 mb-3">
                            <div class="card h-100">
                                <div className="row">
                                    <div class="col-sm-12">
                                        <h3 class="d-flex align-items-center mb-1 ml-3">Your Events</h3>
                                    </div>
                                </div>
                                <YourEvent></YourEvent>
                            </div>
                            
                        </div>
                        <div class="col-md-12 col-lg-12 mb-3">
                                <div class="card h-100">
                                    <div className="row">
                                        <div class="col-sm-12">
                                            <h3 class="d-flex align-items-center mb-1 ml-3">Your Bookings</h3>
                                        </div>
                                    </div>
                                    <YourBooking></YourBooking>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;