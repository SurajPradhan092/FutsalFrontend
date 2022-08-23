import{Component} from "react";
import Hero from "./Hero";
import About from './About';
import Partners from './Partners';
import Count from './Count';
import Whyus from './Whyus';
import Futsal from './Futsal';
import Contact from './Contact';
class Main extends Component{
    
    render(){
        return(
            <main id="main">
                <Hero></Hero>
                <Partners></Partners>
                <About></About>
                <Count></Count>
                <Whyus></Whyus>
                <Futsal></Futsal>
                <Contact></Contact>
            </main>
        )
    }
}
export default Main;