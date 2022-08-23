import { Component } from "react";

class Footerlinks extends Component {
    render() {
        return (
            <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                <li><i className="bx bx-chevron-right"></i>Terms of service</li>
                <li><i className="bx bx-chevron-right"></i> Privacy policy</li>
            </ul>
        </div>
        )
    }
}
export default Footerlinks;