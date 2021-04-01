import React, {Component} from 'react';
import API from "../Services/API";
// import Pagination from "react-js-pagination";
// import Pagination from "../Navigations/pagination"


class Step2 extends Component {

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            selected_skills: [],
            submit_disable: false,
            isLoading: false,
            currentPage: 1,
            todosPerPage: 3,
            todos: ['a','b'],
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.skill_event()
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    // handlePageChange(pageNumber) {
    //     console.log(`active page is ${pageNumber}`);
    //     this.setState({activePage: pageNumber});
    // }
    onChangePage(skills) {
        // update state with new page of items
        this.setState({skills: skills});
    }

    skill_event(event) {


        let url = 'skills'

        this.api.GetApi(url)
            .then(res => {
                if (res.request.status === 200) {
                    // this.props.history.push('/skills')
                    let response_data = JSON.parse(res.request.response)
                    console.log("999999999999999999999999999999", res.data)
                    this.setState({
                        skills: response_data,
                        isLoading: true
                    })
                    for (let i=0; i <= (response_data).length - 1; i++) {
                        this.setState({
                            todos: this.state.selected_skills.concat(response_data[i]['skillName'])
                        })
                        console.log(response_data[i]['skillName'])
                        console.log(this.state.todos)
                    }

                } else {
                    let err = JSON.parse(res.request.response)
                    console.log("=======================", res.request.status)
                    window.alert(err['message'])
                }
            }).catch(error => {
            console.log("_____________________", error)
            window.alert('server error contact to administration+++++++++++')
        });
    }


    handleInputChange(event) {

        const target = event.target;
        console.log("++++++++++++", target.value)

        var value = target.value;


        if (target.checked) {
            this.setState({
                selected_skills: this.state.selected_skills.concat(value)
            }, this.count_input)


            // this.state.selected_skills[value] = value;
            console.log("++++++++++++", this.state.selected_skills)
        } else {

            var index = (this.state.selected_skills).indexOf(value);
            if (index > -1) {
                (this.state.selected_skills).splice(index, 1);
                this.count_input()
            }
            // this.state.selected_skills.splice(value, 1);

        }

    }

    count_input() {
        let options = this.state.selected_skills
        if (options.length >= 3 && options.length <= 8) {
            this.setState({
                submit_disable: true
            })

        } else {
            this.setState({
                submit_disable: false
            })
        }

    }

    submit() {

        let data = {
            skills: this.state.selected_skills,
        }

        let url = 'user/skills'
        console.log("_____________________", data)

        this.api.AuthPostApi(data, url)
            .then(res => {
                if (res.request.status === 201) {
                    this.props.history.push('/dashboard')
                    // alert("success")
                } else if (res.request.status === 401) {
                    this.props.history.push('/signin')
                } else {
                    let err = JSON.parse(res.request.response)
                    console.log("=======================", res.request.status)
                    window.alert(err['message'])
                }
            }).catch(error => {
            console.log("_____________________", error)
            window.alert('server error contact to administration+++++++++++')
        });

        console.warn(this.state)
        console.log(this.state.selected_skills)

    }


    render() {
        // const { todos, currentPage, todosPerPage } = this.state;
        const todos = this.state.todos
        const currentPage = this.state.currentPage
        const todosPerPage = this.state.todosPerPage
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }


        const isSubmit = this.state.submit_disable;
        const isLoading = this.state.isLoading;

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });


        return (
            <>

                <div>
                    <ul>
                        {/*{renderTodos}*/}
                    </ul>
                    {/*<ul id="page-numbers">*/}
                    {/*    {renderPageNumbers}*/}
                    {/*</ul>*/}
                </div>
                <div className={'page-container'}>
                    <h2>Select Skills</h2>
                </div>

                {isLoading ? (
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-md-12"}>

                                <div className="limiter">
                                    <div className="container-login100 ">
                                        <div className="wrap-login100  custom_body">

                                            <div className="login100-form validate-form ">
                                                <div className="custom_height">
                                                    {/*{this.state.skills.map(skill =>*/}
                                                    {/*        <span className={'singleSkill'}>*/}
                                                    {/*    <input type="checkbox" value={skill.skillName}*/}
                                                    {/*           onChange={this.handleInputChange}/>*/}
                                                    {/*    <span className={"skillValue"}>*/}
                                                    {/*    {skill.skillName}*/}
                                                    {/*    </span>*/}
                                                    {/*</span>*/}
                                                    {/*)}*/}
                                                    {renderTodos}
                                                </div>
                                                {/*<Pagination items={this.state.skills} onChangePage={this.onChangePage} />*/}

                                                <div className="container-login100-form-btn">
                                                    {renderPageNumbers}
                                                    <div className="wrap-login100-form-btn">
                                                        <div className="login100-form-bgbtn"/>
                                                        {isSubmit ? (
                                                            <button type={"submit"} onClick={() => this.submit()}
                                                                    className="login100-form-btn">Submit
                                                            </button>
                                                        ) : (

                                                            <button type={"submit"}
                                                                    className="login100-form-btn bg-disabled">Submit
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : ('')}
            </>
        );
    }
}

export default Step2;