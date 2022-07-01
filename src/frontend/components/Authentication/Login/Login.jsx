import {React} from 'react';
import {Link} from 'react-router-dom';
import Title from '../../Title/Title';

import './Login.css';

const Login = () => {
    return (
        <main className='login'>
            <div className='login__title'>
                <Title title='Login' />
            </div>
            <div className='login__formContainer'>
            <form className='login__form'>
                <div className='login__emailContainer'>
                    <label>Enter your Email ID</label>
                    <input 
                        type="email"
                        placeholder='Enter email'
                        className='login__input'
                        required
                    />
                </div>
                <div className='login__passwordContainer'>
                    <label>Enter your Password</label>
                    <input type="password"
                        placeholder='Enter password'
                        className='login__input'
                        required
                    />
                </div>
                <button type='submit'>
                    Login
                </button>
                <button type='submit'>
                    Login as a guest
                </button>
                <div className='login__footerContainer'>
                    <span>Don't have an account</span>
                    <Link to='/signup'>
                        Create One
                    </Link>
                </div>
                <div className='login__footerContainer'>
                    <span>Forgot Password?</span>
                    <Link to='/reset'>
                        Reset Here
                    </Link>
                </div>
            </form>
            </div>
        </main>
    )
}

export {Login};