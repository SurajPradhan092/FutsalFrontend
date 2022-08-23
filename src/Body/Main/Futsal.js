import{Component} from "react";
class Futsal extends Component{
    
    render(){
        return(
            <section id="services" className="services section-bg">
            <div className="container">
      
              <div className="row">
                <div className="col-lg-4">
                  <div className="section-title" data-aos="fade-right">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-stretch">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                        <h4>Futsal</h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                      </div>
                    </div>
      
                    <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4>Events</h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                      </div>
                    </div>
      
                    <div className="col-md-6 d-flex align-items-stretch mt-4">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                        <h4>Community</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                      </div>
                    </div>
      
                    <div className="col-md-6 d-flex align-items-stretch mt-4">
                      <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4>Booking</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
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
export default Futsal;