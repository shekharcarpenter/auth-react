import React, {Component} from 'react';
import API from "../Services/API";

class Dashboard extends Component {
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            publicId: "",
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            salt: "",
            profileCompleted: true,
            skills: [
                "Typescript",
                "NestJS",
                "ExpressJS",
                "AngularJS",
                "Typescript",
                "ReactJS",
                "ExpressJS",
                "AngularJS"
            ],
            skill_data:[]
        }
        this.user_event()
    }

    user_event(event) {


        let url = 'user/profile'

        this.api.GetApi(url)
            .then(res => {
                if (res.request.status === 200) {
                    let response_data = JSON.parse(res.request.response)
                    this.setState({
                        data: response_data,
                    })
                } else {
                    let err = JSON.parse(res.request.response)
                    window.alert(err['message'])
                }
            }).catch(error => {
            console.log("_____________________", error)
        });
    }

    render() {

        return (
            <>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-12"}>

                            <div className="limiter">
                                <div className="container-login100 ">
                                    <div className="wrap-login100">

                                        <div className="login100-form validate-form">
                                            <span className="login100-form-title ">User Profile</span>

                                            <div className="textContent col-md-12">
                                                <div className="col-md-6">
                                                    <span>Email :</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="">{this.state.data.username}</span>
                                                </div>

                                            </div>

                                            <div className="textContent col-md-12">
                                                <div className="col-md-6">
                                                    <span>First Name :</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="">{this.state.data.firstName}</span>
                                                </div>

                                            </div>


                                            <div className="textContent col-md-12">
                                                <div className="col-md-6">
                                                    <span>Last Name :</span>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="">{this.state.data.lastName}</span>
                                                </div>

                                            </div>




                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;