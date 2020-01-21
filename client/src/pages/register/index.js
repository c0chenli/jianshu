import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Form, Button } from "./style";
import {registerUser} from './store/actionCreators'
import { withRouter } from "react-router-dom";
import TextFieldGroup from "./TextFieldGroup";


class Register extends Component {
    constructor() {
        super();
        this.state ={
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); // Form bind:
    }

    /* componentDidMount() {
         if(this.props.auth.isAuthenticated) {
             this.props.history.push("/dashboard");
         }
     }*/

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onChange(e) { // e is an event parameter
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            errors: {}
        };
        console.log('Done submit',newUser);
        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;

        return (

            <LoginWrapper>

                <LoginBox>
                    <Form noValidate onSubmit={this.onSubmit}>
                        <TextFieldGroup
                            placeholder="用户名"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            error={errors.name}
                        />

                        <TextFieldGroup
                            placeholder="邮箱"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                            //info="This Site Uses Gravatar So If You Want A Profile Image, Use A Gravatar Email"
                        />

                        <TextFieldGroup
                            placeholder="密码"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />

                        <TextFieldGroup
                            placeholder="确认密码"
                            name="password2"
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            error={errors.password2}
                        />

                        <Button type="submit" className="btn btn-info btn-block mt-4" />
                    </Form>
                </LoginBox>
            </LoginWrapper>


        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

