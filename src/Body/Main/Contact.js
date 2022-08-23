import { Component } from "react";
class Contact extends Component {

    render() {
        return (

            <section id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className="section-title">
                                <h2>Contact</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                            <iframe title="Futsal Headquaters Location" height= '270px' width='100%' style={{border:0}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
                            <div className="info mt-4">
                                <i className="icofont-google-map"></i>
                                <h4>Location:</h4>
                                <p>Jadibuti - 32, Narephate, Kathmandu 44600, Nepal</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mt-4">
                                    <div className="info">
                                        <i className="icofont-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>mail@futsal.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info w-100 mt-4">
                                        <i className="icofont-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+977 9860684975</p>
                                    </div>
                                </div>
                            </div>

                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validate"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validate"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validate"></div>
                                </div>
                                <div className="text-center"><button className="get-started" type="submit">Send Message</button></div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
export default Contact;