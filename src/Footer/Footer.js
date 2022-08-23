import { Component } from "react";
import Footercontact from './Footercontact';
import Footerlinks from './Footerlinks';
import Footerservices from './Footerservices';
import Footerletter from './Footerletter';
import Footercopyright from './Footercopyright';
import Footersocial from './Footersocial';

class Footer extends Component {

    render() {
        return (
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <Footercontact></Footercontact>


                            <Footerlinks></Footerlinks>

                            <Footerservices></Footerservices>

                            <Footerletter></Footerletter>

                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">

                    <Footercopyright></Footercopyright>
                    <Footersocial></Footersocial>
                </div>
            </footer>
        )
    }
}
export default Footer;