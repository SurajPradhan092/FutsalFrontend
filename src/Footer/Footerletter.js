import { Component } from "react";

class Footerletter extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Feedback of Website</h4>
            <p>Let us know your experience in using our website</p>
                <form action="" method="post">
                    <input type="text" name="feedback"/>
                    <input type="submit" value="Feedback"/>
                </form>
            </div>
        )
    }
}
export default Footerletter;