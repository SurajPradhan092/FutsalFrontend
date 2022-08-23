import { Component } from "react";

class Footercopyright extends Component {
    render() {
        return (
            <div className="mr-md-auto text-center text-md-left">
                <div className="copyright">
                    &copy; Copyright <strong><span>Futsal</span></strong>. All Rights Reserved
                </div>
                <div className="credits">

                    Designed by <a href="https://github.com/SurajPradhan092">suraj</a>
                </div>
            </div>
          
        )
    }
}
export default Footercopyright;