import { Component, state } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Futsal extends Component {
    state = {
        futsals: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/futsal/fetch")
            .then((response) => {
                this.setState({
                    futsals: response.data.data.reverse()
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    
    render() {
        const token = localStorage.getItem('token')
        if (!token) {
            window.location.href = '/login'
        }
        return (
            <div>
                <section id="portfolio" className="portfolio futsals">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-lg-9 col-sm-12">
                            <div className="section-title" data-aos="fade-left">
                                <h2>Futsal</h2>
                                <p>Here, you can browse through all the futsals and update the approval in their details page.</p>
                            </div>
                        </div>
                    </div>  
                    </div>
                    </section>  
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row futsaladmin">
                    {
                        this.state.futsals.map((futsal, i) => {
                            return (
                                <div className="col-md-5">
                                    <div className="row p-2 bg-white border rounded">
                                        <div className="col-md-4 mt-1"><img className="img-fluid img-responsive rounded product-image" src={'http://localhost:8080/image/' + futsal.image} alt="Futsal"/></div>
                                        <div className="align-items-center align-content-center col-md-8 border-left mt-1"> 
                                        <h5>{futsal.name}</h5>
                                        <Link to={'/futsaladmin/fetch/' + futsal._id}><i className="bx bx-link">Details</i></Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
            </div>
        )
    }
}
export default Futsal;