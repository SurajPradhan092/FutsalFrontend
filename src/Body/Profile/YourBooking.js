import { Component, state, deleteBooking } from "react";
import axios from 'axios';
import Moment from 'react-moment';

class YourBooking extends Component {
    state = {
        bookings: [],
        checkDelete: false,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    deleteBooking = (bid) => {
        axios.delete('http://localhost:8080/futsalbook/delete/' + bid, this.state.config)
            .then((response) => {
                this.setState({
                    checkDelete: true
                })
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    componentDidMount() {
        axios.get("http://localhost:8080/futsalbookget", this.state.config)
            .then((response) => {
                this.setState({
                    bookings: response.data.data

                })
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        if(this.state.checkDelete === true){
            window.location.href = '/profile'
        }
        if (this.state.bookings) {
            var yourBooking =
                this.state.bookings.map((booking, i) => {
                    return (
                        <div class="col-md-6 card-body">
                            <div className="row">
                                <div class="col-sm-12">
                                    <strong>{i + 1}. {booking.futsalname}</strong> booked for <Moment format="YYYY/MM/DD">{booking.date}</Moment>, {booking.time}
                                </div>
                                <div class="col-sm-12">
                                    <span>  <button class="get-button" onClick={this.deleteBooking.bind(this, booking._id)}>Delete</button></span>
                                </div>

                            </div>
                        </div>
                    )
                })

        }
        else {
            yourBooking =
                <div class="card-body">
                    <div className="row">
                        <div class="col-sm-12">
                            <strong>You have {this.state.bookings.length} Bookings</strong>
                        </div>
                    </div>
                </div>


        }

        return (

            <div class="container">
                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    {
                        yourBooking
                    }
                </div>

            </div>

        )
    }
}
export default YourBooking;