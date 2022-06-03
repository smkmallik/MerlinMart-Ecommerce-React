import {React} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import Title from '../../Title/Title';

const Signup = () => {
    return (
        <main className='signup'>
            <div className='signup__heading'>
                <Title title='Sign up' />
            </div>
            <div className='signup__formContainer'>
                <form className='signup__form'>
                    <div>
                        <label htmlFor="">
                            Enter your First Name: 
                        </label>
                        <input 
                            type="text"
                            placeholder='Enter your first name'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Enter your Last Name: </label>
                        <input 
                            type="text"
                            placeholder='Enter your last name'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Enter your Email ID: </label>
                        <input 
                            type="email"
                            placeholder='Enter your email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Enter your Password: </label>
                        <input 
                            type="password"
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm your Password: </label>
                        <input 
                            type="password"
                            placeholder='Confirm your password'
                            required 
                        />
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">
                            Accept Terms and Conditions
                        </label>
                    </div>

                    <button>Sign up</button>

                    <div>
                        <span>Already have an account?</span>
                        <Link to='/signin'>Login here</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export {Signup};