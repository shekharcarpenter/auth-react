import React, {Component} from 'react';
import API from "../Services/API";


class Step1 extends Component {
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',

            form_errors: {
                first_name: null,
                last_name: null,
            }
        }

        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
        this.update_event = this.update_event.bind(this);


    }
    firstNameChangeHandler(event) {

        this.setState({first_name: event.target.value});
        this.resetFormErrors('first_name')
    }

    lastNameChangeHandler(event) {
        this.setState({last_name: event.target.value});
        this.resetFormErrors('last_name')


    }
    resetFormErrors(input_to_reset) {
        let formErrors = this.state.form_errors
        formErrors[input_to_reset] = null
        this.setState({form_errors: formErrors});
        console.log(this.state.form_errors)


    }
    update_event(event) {

        let data = {
            firstName: this.state.first_name,
            lastName: this.state.last_name,
        }

        let url = 'user/basic/profile'
        console.log("_____________________", data)

            this.api.AuthPostApi(data, url)
                .then(res => {
                    if (res.request.status === 201) {
                        this.props.history.push('/step2')
                        // alert("success")
                    } else {
                        let err = JSON.parse(res.request.response)
                        console.log("=======================", res.request.status)
                        window.alert(err['message'])
                    }
                }).catch(error => {
                console.log("_____________________", error)
                window.alert('server error contact to administration+++++++++++') //todo : error message
            });
        }


    render() {
        return (
            <>
            <div className={'page-container'}>
                <h2>Update Profile</h2>
            </div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>

                        <div className="limiter">
                            <div className="container-login100 ">
                                <div className="wrap-login100" >

                                    <div className="login100-form validate-form" onSubmit={this.update_event}>
                                        <div className="wrap-input100 validate-input ">
                                            <span className="label-input100">First Name</span>
                                            <input className="input100" type="text" name="first_name"
                                                   placeholder="First Name" value={this.state.first_name}
                                                   onChange={this.firstNameChangeHandler}/>
                                            <span className="focus-input100 " data-symbol="	&#xf007;"/>
                                            {/*{this.state.error_password}</span>*/}


                                            {/*{this.state.form_errors.username ? (*/}
                                            {/*    this.state.form_errors.username.map(error => (*/}
                                            {/*        <span className="error_out">{error} </span>*/}
                                            {/*    ))*/}
                                            {/*) : null}*/}

                                        </div>


                                        <div className="wrap-input100 validate-input">
                                            <span className="label-input100">Last Name</span>
                                            <input className="input100" type="text" name="last_name"
                                                   placeholder="Last Name" value={this.state.last_name}
                                                   onChange={this.lastNameChangeHandler}/>
                                            <span className="focus-input100" data-symbol="&#xf007;"/>
                                            {/*{this.state.form_errors.password ? (*/}
                                            {/*    this.state.form_errors.password.map(error => (*/}
                                            {/*        <span className="error_out">{error} </span>*/}
                                            {/*    ))*/}
                                            {/*) : null}*/}
                                        </div>

                                        <div className="container-login100-form-btn">
                                            <div className="wrap-login100-form-btn">
                                                <div className="login100-form-bgbtn"/>
                                                <button type={"submit"} onClick={this.update_event}
                                                        className="login100-form-btn">Submit
                                                </button>
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

export default Step1;