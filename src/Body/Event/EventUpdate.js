import { Component, state, inputHandler, eventUpdate } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class EventUpdate extends Component {
    state = {
        name: "",
        location: "",
        phone: "",
        description: "",
        date: "",
        fee: "",
        id: this.props.match.params.id,
        checkRegister: false,
        config:{
            headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/event/fetch/" + this.state.id)
          .then((response) => {
            this.setState({
              name: response.data.data.name,
              location: response.data.data.location,
              phone: response.data.data.phone,
              description: response.data.data.description,
              date: response.data.data.date,
              fee: response.data.data.fee
            })
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    inputHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    eventUpdate = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:8080/event/update", this.state,this.state.config)
        .then((response)=>{
            console.log(this.state.fee)
            this.setState({ 
                checkRegister: true
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        if(this.state.checkRegister === true){
            return <Redirect to='/profile'/>
        }
        return (
            <div className="container register">
                <div className="row py-5 mt-4 align-items-center">
                    <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <h1>Update your Events</h1><br/>
                        <p>Here you can update the details of your Event.</p>
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
                                        <i className='bx bx-play text-muted'></i>
                                        </span>
                                    </div>
                                    <input id="date" type="text" name="date" min="0"
                                    value={this.state.date} onChange={this.inputHandler} required
                                    placeholder="Event Date" className="form-control bg-white border-left-0 border-md" />
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
                                <button classNameName="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.eventUpdate}>Update your Event</button>
                                </div>

                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventUpdate;