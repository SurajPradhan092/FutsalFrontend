import { Component, state } from "react";
import axios from 'axios';

class EventDetail extends Component {
  state = {
    events: [],
    id: this.props.match.params.id,
    config: {
      headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
  }
  }
  componentDidMount() {
    axios.get("http://localhost:8080/event/fetch/" + this.state.id, this.state.config)
      .then((response) => {
        this.setState({
          events: [response.data.data]
        })
        console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  render() {
    return (
      <section id="portfolio-details" className="portfolio-details single-detail">
        {
          this.state.events.map((event) => {
            return (
              <div className="container">

                <div className="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">

                  <div className="owl-carousel portfolio-details-carousel">
                    <img src={'http://localhost:8080/image/' + event.image} className="img-fluid" alt="Event" />
                  </div>

                  <div className="portfolio-info">
                    <h3>Event information</h3>
                    <ul>
                      <li><strong>Name</strong>: {event.name}</li>
                      <li><strong>Address</strong>: {event.location}</li>
                      <li><strong>Date</strong>: {event.date}</li>
                      <li><strong>Phone</strong>: {event.phone}</li>
                      <li><strong>Entry Fee</strong>: {event.fee}</li>
                    </ul>
                  </div>

                </div>

                <div className="portfolio-description">
                  <h2>Description of {event.name}</h2>
                  <p>
                    {event.description}
                  </p>
                </div>
              </div>
            )
          })
        }
      </section>
    )
  }
}
export default EventDetail;