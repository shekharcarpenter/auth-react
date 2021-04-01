

import React,{Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";
import Signin from "../Component/signin";
import Signup from "../Component/signup";
import Step1 from "../Component/step1";
import Step2 from "../Component/step2";
import Dashboard from "../Component/dashboard";


export class Routs extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path='/signin' component={Signin}/>
                        <Route path='/signup' component={Signup}/>
                        <Route path='/step1' component={Step1}/>
                        <Route path='/step2' component={Step2}/>
                        <Route path='/dashboard' component={Dashboard}/>
                        <Redirect to="/signin" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}