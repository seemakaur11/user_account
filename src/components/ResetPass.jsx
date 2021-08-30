import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.div `
text-align: center;
justfi-content:center;
`
const ResetField = styled.div`
text-align: center;
margin-left: 530px;
padding: 5px;
width: 225px;
height: 25px;
border-radius: 8px;
`

 function ResetPass() {
    return (
        <MainDiv>
            <form >
                <h1>Reset Password</h1>
                    <ResetField>
                        <input type='text' name="email" placeholder='email'/>
                    </ResetField>
                    <ResetField>
                        <input type='password' name="password" placeholder='Password' />
                    </ResetField>
                    <ResetField>
                        <input type='password' name="confirm_password" placeholder='confirm_password' />
                    </ResetField>
                    <input type='submit' value='reset' className='btn' />                  
                    </form>
        </MainDiv>
    )
}
export default ResetPass;