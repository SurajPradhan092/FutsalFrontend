import{Component} from "react";
 
class Hero extends Component{
    
    render(){
        return(
            <section id="hero" className="d-flex align-items-center full-height">
            <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
              <h1>Your New Online Presence with Futsal</h1>
              <h2>Book futsals, Navigate events, Communicate with fellow players</h2>
            </div>
          </section>
        )
    }
}
export default Hero;