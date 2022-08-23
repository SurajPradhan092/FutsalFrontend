import { Component, state } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

class Futsal extends Component {
    state = {
        futsals: []
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
        if(!token){
            window.location.href = '/login'
        }
        var approved = []
        for( var i = 0; i < this.state.futsals.length; i++){
            
            const approve = this.state.futsals[i].approve
            if (approve === true){
                approved.push( this.state.futsals[i])
               
            }
        }
        var futsals = approved.map((futsal, i) => {

            return (
                
                <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={i}>
                    <div className="portfolio-wrap">
                        <img src={'http://localhost:8080/image/' + futsal.image} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>{futsal.name}</h4>
                            <p>{futsal.address}</p>
                            <div className="portfolio-links">
                                <Link to={'/futsal/fetch/' + futsal._id}><i className="bx bx-link"></i></Link>
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
                                <h2>Futsal</h2>
                                <p>Here, you can browse through all the futsals registered in our website. And you can book the futsal of your choice</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12">
                            <a className="get-started" href="/futsal-register">Register your Futsal</a>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {
                            futsals
                        }
                    </div>

                </div>
            </section>
        )
    }
}
export default Futsal;