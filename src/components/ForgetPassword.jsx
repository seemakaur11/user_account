import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { auth } from '../Firebase';

const Container = styled.div`
   .btn1 {
        align-items: center;
        height: 40px;
        width: 187px;
        background-color: orangered;
        color: white;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        margin-left: 545px;
        margin-top: 5px;
        text-align: center;
        cursor: pointer;
    }
    `
const InputFieldData = styled.div`
    width: 350px;
    height: 50px;
    margin: 10px 0px;

    border-radius: 40px;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5)
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
        color: rgb(51, 51, 51);

    }
    .data {
    width: 310px;
    height: 42px;
    border-radius: 5px;
    font-size: 20px;
    padding: 5px;
    padding-left: 16px;
    margin-left: 500px;
    }
    `
const Title = styled.div`
     text-align: center;
     margin-top: 113px;
     font-size: 50px;
     font-weight: bold;
    `
const Paragraph = styled.div`
    text-align: center;
    color: rgb(51, 51, 51);
    line-height: 26px;
    padding: 10px;
    `

const ForgetPassword = () => {
    const [state, setState] = useState({ email: '' })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    const inputChange = (e) => {
        setState({ email: e.target.value })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await auth.sendPasswordResetEmail(state.email);
            alert("Email verification link sent!");
            setState({ email: '' })
        }
        catch (error) {
            alert(`Error --> ${error.message} ErrorCode -->${400}`)
        }
    }
    return (
        <Container>
            <Title>Forgot Your Password ?</Title>
            <Paragraph>Please enter the email address you used to create the account,<br /> and we’ll send you an activation code to reset your password.</Paragraph>
            <form onSubmit={handleSubmit}>
                <InputFieldData>
                    <input type="text" name="email" label="email" placeholder='email' className="data" onChange={inputChange} value={state.email} />
                </InputFieldData>
                <button type="submit" onClick={(e) => handleSubmit} className="btn1">SEND VERIFY LINK</button>
            </form>
        </Container>
    )
}

export default ForgetPassword;

