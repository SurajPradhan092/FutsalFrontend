import { Component, state, deleteFutsal } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class YourFutsal extends Component {
    state = {
        futsals: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    deleteFutsal = (fid) => {
        axios.delete('http://localhost:8080/futsal/delete/' + fid, this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
    componentDidMount() {
        axios.get("http://localhost:8080/futsal/fetchuser", this.state.config)
            .then((response) => {
                this.setState({
                    futsals: response.data.data

                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        if (this.state.futsals) {
            var yourfutsal =
                this.state.futsals.map((futsal, i) => {
                    return (
                        <div class="card-body">
                            <div className="row">
                                <div class="col-sm-12">
                                    <strong>{i + 1}. {futsal.name}</strong>
                                </div>
                                <div class="col-sm-12">
                                    <span><Link class="get-button" to={'/futsal/fetch/' + futsal._id}>View</Link></span>
                                    <span>  <Link class="get-button" to={'/futsal/update/' + futsal._id}>Update</Link></span>
                                    <span>  <button class="get-button" onClick={this.deleteFutsal.bind(this, futsal._id)}>Delete</button></span>
                                </div>

                            </div>
                        </div>
                    )
                })

        }
        else {
             yourfutsal =
                <div class="card-body">
                    <div className="row">
                        <div class="col-sm-12">
                            <strong>You have {this.state.futsals.length} futsals registered</strong>
                        </div>
                    </div>
                </div>


        }

        return (

            <div class="container">
                <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                    {
                        yourfutsal
                    }
                </div>

            </div>

        )
    }
}
export default YourFutsal;