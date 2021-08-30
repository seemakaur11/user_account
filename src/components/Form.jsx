import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { db, auth } from '../Firebase';

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-raduis: 40px;
    display: flex;
    align-items: center;
    justify-content: center; 
    .btn {
        width: 130px;
        height: 45px;
        outline: none;
        border: none;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;
        margin: 20px 0px;
        color: #5ab9ea;
        cursor: pointer;
        border-radius: 40px;
        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);        
    }
    .clear{
        width: 130px;
        height: 45px;
        outline: none;
        border: none;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;
        margin: 20px 0px;
        color: #5ab9ea;
        cursor: pointer;
        border-radius: 40px;
        margin-left: 27px;
        box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 1);        
    }
    .account-text {
        color: #5ab9ea;
        font-weight: 600;       
        padding-left: 6px;
    }
`

const SignInForm = styled.div`
    p, a {
        text-align: center;
        font-size: 20px;
        margin-left: 15px;
    }
`

const Title = styled.div`
    font-size: 35px;
    color: #5ab9ea;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
`
const SpanError = styled.div`
color: red;
margin-top: 65px; 
font-size: 15px;
`

const InputField = styled.div`
    width: 320px;
    height: 50px;
    margun: 10px 0px;
    background: #e0e0e0;
    border-radius: 40px;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    i {
        flex: 1.2;
        text-align: center;
        font-size: 20px;
        color: #999;
        margin-left: 23px;
    }
    input {
        flex: 5;
        width: 100%;
        color: black;
        font-size: 18px;
        font-weight: 500;
        border: none;
        outline: none;
        background: none;
        padding-left: 5px;
    }
`
const Div = styled.div`
  display:flex;
`

const validate = values => {
    const errors = {}

    if (!values.username) {
        errors.username = `Username is required`
    }
    else if (!/^[A-Za-z]+$/i.test(values.username)) {
        errors.username = 'Only alphabet characters are allowed'
    }
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Password is required'
    } else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i.test(values.password)) {
        errors.password = 'Invalid Password';
    }

    if (!values.confirm_password) {
        errors.confirm_password = 'Confirm password is required'
    }
    if (values.password !== values.confirm_password) {
        errors.confirm_password = 'Password not match'
    }
    return errors

}

const renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
        <Div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <SpanError>{error}</SpanError>))}
        </Div>
    )
}

const Form = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    const submit = data => {
        return data
    }
    return (
            <Container>
                <SignInForm>
                    <Title>Sign Up</Title>
                    <form onSubmit={handleSubmit(submit)}>
                        <InputField>
                            <i className='fa fa-user' aria-hidden='true'></i>
                            <div className="mainField">
                                <Field name="username" type="text" component={renderField} label="username" /></div>
                        </InputField>

                        <InputField>
                            <i className='fa fa-envelope' aria-hidden='true'></i>
                            <Field name="email" type="text" component={renderField} label="Email" />
                        </InputField>
                        <InputField>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                            <Field name="password" type="password" component={renderField} label="password" />

                        </InputField>
                        <InputField>
                            <i className='fa fa-lock' aria-hidden='true'></i>
                            <Field name="confirm_password" type="password" component={renderField} label="con password" />
                        </InputField>
                        <button type="submit" value='Sign Up' disabled={submitting} onClick={handleSubmit} className='btn' >Sign Up</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset} className='clear'>Clear</button>
                        <Link to='/Login'>Sign in</Link>


                    </form>
                </SignInForm>
            </Container>
    )
}

export default connect()(reduxForm({
    form: 'Form',
    validate,
    onSubmit: async (data) => {
        try {

            const username = data.username;
            const email = data.email;
            const password = data.password;

            const res = await auth.createUserWithEmailAndPassword(email, password);
            alert("create user successfully")
            await db.collection("users").add({
                uid: res.user.uid,
                username,
                authProvider: "local",
                email,
            })
        }
        catch (error) {
            alert(`Error --> ${error.message} ErrorCode -->${400}`)
        }
    }
})(Form))

