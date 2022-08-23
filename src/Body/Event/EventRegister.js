import { Component, state, inputHandler, fileHandler, eventAdd } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class EventRegister extends Component {
    state = {
        name: "",
        description: "",
        image: "",
        date: "",
        fee: "",
        phone: "",
        location: "",
        userid: localStorage.getItem('userid'),
        approve: false,
        checkRegister: false,
        config:{
            headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    inputHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) =>{
        this.setState({
            image: e.target.files[0]
        })
    }
    eventAdd = (e) =>{
        e.preventDefault();
        const data = new FormData()
        data.append('name', this.state.name)
        data.append('description', this.state.description)
        data.append('image', this.state.image)
        data.append('date', this.state.date)
        data.append('fee', this.state.fee)
        data.append('phone', this.state.phone)
        data.append('location',this.state.location)
        data.append('userid', this.state.userid)
        data.append('approve', this.state.approve)

        axios.post("http://localhost:8080/event/add", data,this.state.config)
        .then((response)=>{
            this.setState({ 
                checkRegister: true
            })
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        if(this.state.checkRegister === true){
            return <Redirect to='/Event'/>
        }
        return (
            <div className="container register">
                <div className="row py-5 mt-4 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <h1>Register your Event</h1><br/>
                        <p>Remember that your Event needs to be approved by our <strong>ADMIN TEAM</strong> before it is shown in the list of Registered Events.</p>
                    </div>
                    <div className="col-md-7 col-lg-6 ml-auto">
                        
                            <div className="row">

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bxs-user text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="name" type="text" name="name" 
                                    value={this.state.name} onChange={this.inputHandler} required
                                    placeholder="Name" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bx-current-location text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="location" type="text" name="location" 
                                    value={this.state.location} onChange={this.inputHandler} required
                                    placeholder="Address" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bxs-phone text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="phone" type="number" name="phone" min="0" 
                                    value={this.state.phone} onChange={this.inputHandler} required
                                    placeholder="Phone Number" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bxs-envelope text-muted'></i>Image
                                        </span>
                                    </div>
                                    <input id="image" type="file" name="image" 
                                    onChange={this.fileHandler} required
                                    placeholder="Image" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bx-play text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="date" type="string" name="date" min="0"
                                    value={this.state.date} onChange={this.inputHandler} required
                                    placeholder="Dates" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bxs-badge-dollar text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="fee" type="text" name="fee"
                                    value={this.state.fee} onChange={this.inputHandler} required
                                    placeholder="Fee" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="input-group col-lg-12 mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-white px-4 border-md border-right-0">
                                        <i className='bx bxs-message-rounded-detail text-muted'></i>
                                        </span>
                                    </div>
                                    <textarea id="description" type="description" name="description" 
                                    value={this.state.description} onChange={this.inputHandler} required
                                    placeholder="Description" className="form-control bg-white border-left-0 border-md" />
                                </div>

                                <div className="form-group col-lg-12 mx-auto mb-0">
                                <button classNameName="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.eventAdd}>Register your Futsal</button>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventRegister;