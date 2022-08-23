import { Component, state } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Event extends Component {
    state = {
        events: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/event/fetch", this.state.config)
            .then((response) => {
                this.setState({
                    events: response.data.data.reverse()
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
        var approved = []
        for( var i = 0; i < this.state.events.length; i++){
            
            const approve = this.state.events[i].approve
            if (approve === true){
                approved.push( this.state.events[i])
               
            }
        }
        var events = approved.map((event, i) => {

            return (
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={i}>
                    <div className="portfolio-wrap">
                        <img src={'http://localhost:8080/image/' + event.image} className="img-fluid" alt="Event" />
                        <div className="portfolio-info">
                            <h4>{event.name}</h4>
                            <p>{event.location}</p>
                            <div className="portfolio-links">
                                <Link to={'/event/fetch/' + event._id}><i className="bx bx-link"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <section id="portfolio" className="portfolio futsals">
                <div className="container">

                    <div className="row mb-3">
                        <div className="col-lg-9 col-sm-12">
                            <div className="section-title" data-aos="fade-left">
                                <h2>Event</h2>
                                <p>Here, you can browse through all the events that are going to take place.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <a className="get-started" href="/event-register">Register your Event</a>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {
                            events
                        }
                    </div>

                </div>
            </section>
        )
    }
}
export default Event;