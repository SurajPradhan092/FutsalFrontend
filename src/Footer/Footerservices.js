import { Component } from "react";

class Footerservices extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                    <li><i className="bx bx-chevron-right"></i> <a href="/Futsal">Futsal</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="/Event">Events</a></li>
                    <li><i className="bx bx-chevron-right"></i> <a href="/Community">Community</a></li>
                </ul>
            </div>
        )
    }
}
export default Footerservices;