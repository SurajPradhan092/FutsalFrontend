import{Component} from "react";
class Whyus extends Component{
    
    render(){
        return(
            <section id="why-us" className="why-us">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right">
            <div className="content">
              <h3>Why Choose our website for Futsal and events?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
              </p>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-football"></i>
                    <h4>Futsal</h4>
                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bxs-calendar-event"></i>
                    <h4>Events</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bxs-news"></i>
                    <h4>Community</h4>
                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
        )
    }
}
export default Whyus;