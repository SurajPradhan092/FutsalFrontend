import { Component, state, futsalUpdate } from "react";
import axios from 'axios';

class FutsalAdminDetail extends Component {
  state = {
    _id: "",
    name: "",
    address: "",
    phoneNumber: "",
    description: "",
    image: "",
    grounds: "",
    fee: "",
    userid: "",
    approve: true,
    futid: this.props.match.params.id,
    config: {
        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    }

  }
  componentDidMount() {
    axios.get("http://localhost:8080/futsal/fetch/" + this.state.futid)
      .then((response) => {
        this.setState({
            _id: response.data.data._id,
          name: response.data.data.name,
          address: response.data.data.address,
          phoneNumber: response.data.data.phoneNumber,
          description: response.data.data.description,
          image: response.data.data.image,
          grounds: response.data.data.grounds,
          fee: response.data.data.fee,
        })
      })
      .catch((err) => {
        console.log(err.response)
      })
  }

futsalUpdate = (e) => {
    e.preventDefault();

    axios.put("http://localhost:8080/futsaladmin/update", this.state, this.state.config)
        .then((response) => {
            console.log(response)
            this.setState({
                checkRegister: true
            })
        })
        .catch((err) => {
            console.log(err)
        })
}
  


  render() {
    return (
        <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row futsaladmindetail">
                        <div className="col-md-12">
                            <div className="row p-2 bg-white border rounded">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={'http://localhost:8080/image/' + this.state.image} alt="Futsal" /></div>
                                <div className="col-md-6 mt-1">
                                    <h5>{this.state.name}</h5>
                                    <div className="d-flex flex-row">
                                        <span>Address: {this.state.address}</span>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <span>Phone Number: {this.state.phoneNumber}</span>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <span>Grounds: {this.state.grounds}</span>
                                    </div>
                                    <div className="d-flex flex-row">
                                        <span>Fee: {this.state.fee}</span>
                                    </div>

                                    <p className="text-justify text-truncate para mb-0">{this.state.description}</p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="submit" onClick={this.futsalUpdate}>Approve Futsal</button></div>
                                </div>
                            </div>
                        </div>
        </div>
    </div>
    )
  }
}
export default FutsalAdminDetail;


