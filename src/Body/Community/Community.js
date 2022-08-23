import { Component, state, insertPost, postHandler } from "react";
import axios from 'axios';
import ShowPost from './ShowPost';
import {Redirect} from 'react-router-dom';

class Community extends Component {
    state = {
        post: "",
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        checkRegister: false
    }
    insertPost = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    postHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/post/add", this.state,this.state.config)
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
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/login'
        }
        if(this.state.checkRegister === true){
            return <Redirect to='/Community'/>
        }
        return (
            <div className="container mt-4 mb-5 ">
                <div className="d-flex justify-content-center row posts">
                    <div className="col-md-8">
                        <div className="feed p-2">
                            <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                               
                                <div className="input-group col-lg-8 mb-4 mt-4">
                                   
                                    <input id="post" type="text" name="post" 
                                    value={this.state.post} onChange={this.insertPost} required
                                    placeholder="Whats on your mind?" className="form-control bg-white border-0" />
                                </div>
                                <div className="form-group col-lg4 mx-auto mb-0">
                                <button classNameName="btn btn-md btn-primary btn-block text-uppercase" type="submit" onClick={this.postHandler}>Post</button>
                                </div>
                            </div>
                            <ShowPost></ShowPost>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Community;