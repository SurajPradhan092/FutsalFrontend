import { Component } from "react";
class Count extends Component {

    render() {
        return (
            <section id="counts" className="counts">
                <div className="container">

                    <div className="row counters">

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">50 +</span>
                            <p>Futsals</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">20 +</span>
                            <p>Events</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">1,463 +</span>
                            <p>Users</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                            <span data-toggle="counter-up">4</span>
                            <p>Payment Partners</p>
                        </div>

                    </div>

                </div>
            </section>
        )
    }
}
export default Count;