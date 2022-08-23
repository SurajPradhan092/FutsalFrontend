import { Component, state, commentAdd,inputHandler } from "react";
import axios from 'axios';

class SinglePost extends Component {
    state = {
        post: "",
        username: "",
        userimage: "",
        createdAt: "",
        userid: "",
        comment: "",
        comments: [],
        id: this.props.match.params.id,
        config:{
            headers: {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    inputHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        axios.get("http://localhost:8080/post/fetch/" + this.state.id)
            .then((response) => {
                this.setState({
                    post: response.data.data.post,
                    username: response.data.data.username,
                    userimage: response.data.data.userimage,
                    createdAt: response.data.data.createdAt,
                    userid: response.data.data.userid,
                    comments: response.data.data.comments

                })
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    commentAdd = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:8080/comment/add", this.state,this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>

                <div class="container mt-4 mb-5 ">
                    <div class="d-flex justify-content-center row posts">
                        <div class="col-md-8">
                            <div class="feed p-2">
                                <div class="bg-white border mt-2 mb-2">
                                    <div>
                                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src={'http://localhost:8080/image/' + this.state.userimage} alt="Post User Profile" width="45" />
                                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{this.state.username}</span><span class="text-black-50 time">{this.state.createdAt}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="p-2 px-3 ml-4"><span>{this.state.post}</span></div>

                                    </div>
                                    <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">

                                        <div class="input-group col-lg-8 mb-4 mt-4">

                                            <input id="comment" type="text" name="comment"
                                                value={this.state.comment} onChange={this.inputHandler} required
                                                placeholder="Write a comment" class="form-control bg-white border-0" />
                                        </div>
                                        <div class="form-group col-lg-4 mx-auto mb-0">
                                            <button className="btn btn-md btn-primary btn-block text-uppercase" type="submit" onClick={this.commentAdd}>Comment</button>
                                        </div>
                                        
                                    </div>

                                </div>
                                {
                            this.state.comments.map((comment, i) => {

                                return (
                                <div class="bg-white border mt-2 mb-2">
                               
                                    <div>
                                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src={'http://localhost:8080/image/' + comment.cuserimage} alt="Comment User" width="45" />
                                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{comment.cusername}</span><span class="text-black-50 time">{comment.ccreatedAt}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="p-2 px-3 ml-4"><span>{comment.comment}</span></div>

                                    </div>
                                    </div>
                                    )
                                })
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SinglePost;