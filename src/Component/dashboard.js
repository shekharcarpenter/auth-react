import React, {Component} from 'react';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className={'page-container'}>
                    <h2>User Profile</h2>
                </div>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-md-12"}>

                            <div className="limiter">
                                <div className="container-login100 ">
                                    <div className="wrap-login100" >

                                        <div className="login100-form validate-form" >
                                            <div className="wrap-input100 validate-input ">
                                                <span className="label-input100">First Name</span>
                                                <input className="input100" type="text" name="first_name"
                                                       placeholder="First Name"
                                                      />
                                                <span className="focus-input100 " data-symbol="	&#xf007;"/>

                                            </div>


                                            <div className="wrap-input100 validate-input">
                                                <span className="label-input100">Last Name</span>
                                                <input className="input100" type="text" name="last_name"
                                                       placeholder="Last Name"
                                                      />
                                                <span className="focus-input100" data-symbol="&#xf007;"/>

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