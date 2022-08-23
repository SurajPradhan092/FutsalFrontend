import { Component, state, deleteEvent } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class YourEvent extends Component {
    state = {
        events: [],
        checkUpdate: false,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    deleteEvent = (eid) => {
        axios.delete('http://localhost:8080/event/delete/' + eid, this.state.config)
            .then((response) => {
                this.setState({ 
                checkUpdate: true
            })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    componentDidMount() {
        axios.get("http://localhost:8080/event/fetchuser", this.state.config)
            .then((response) => {
                this.setState({
                    events: response.data.data
                })
                console.log(response)
                console.log(this.state.events.length)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        if (this.state.checkUpdate === true)
        {
            window.location.href = './profile'
        }
        if (this.state.events) {
            var yourEvent =
                this.state.events.map((event, i) => {
                    return (
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-12">
                                    <strong>{i + 1}. {event.name}</strong>
                                </div>
                                <div class="col-sm-12">
                                    <span><Link class="get-button" to={'/event/fetch/' + event._id}>View</Link></span>
                                    <span><Link class="get-button" to={'/event/update/' + event._id}>Update</Link></span>
                                    <span> <button class="get-button" onClick={this.deleteEvent.bind(this, event._id)}>Delete</button></span>
                                </div>

                            </div>
                        </div>
                    )
                })

        }
        else {
            yourEvent =
                <div class="card-body">
                    <div className="row">
                        <div class="col-sm-12">
                            <strong>You have {this.state.events.length} Events registered</strong>
                        </div>
                    </div>
                </div>


        }

        return (

            <div class="container">
                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    {
                        yourEvent
                    }
                </div>

            </div>

        )
    }
}
export default YourEvent;