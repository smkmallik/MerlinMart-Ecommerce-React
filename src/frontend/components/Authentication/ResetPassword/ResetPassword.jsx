import {React} from 'react';
import {Link} from 'react-router-dom';
import Title from '../../Title/Title';

import './ResetPassword.css';

const ResetPassword = () => {
    return (
        <main className='reset'>
            <div className='reset__heading'>
                <Title title='Reset Password' />
            </div>
            <div className='reset__formContainer'>
                <form action="" className='reset__form'>
                    <input 
                        type="email" 
                        placeholder='Enter email'
                        required
                    />
                    <button>
                        Reset
                    </button>
                    <div className='reset__footer'>
                        <span>Already have an account?</span>
                        <Link to='/signin'>
                            Login here
                        </Link>
                    </div>
                </form>
            </div>
        </main>
    )
}

export {ResetPassword};