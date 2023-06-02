import React from 'react';
import './bookingstep3.css';
import { useNavigate } from 'react-router';
const urlImg = 'https://s3-alpha-sig.figma.com/img/5f55/d09f/18aadee9cb62e55adf11ff1b4186dc1d?Expires=1685923200&Signature=MLwlXmLHDEq5rjz6eGEqW79zh7FvHiroceVMC3AbNE0DtJcdYi0GDnxUAfRrpPPWlZNW9ZPcTi9UZ6bOHwASNfSWl4iJCVCI6fc~n6TS73Zp~PCJS2zVs-PwwiiixVQJ9~4RWdcLxYGkzxCcuu9a~u2uTLAYTO16yIiPugb5yW~4ZDuTz-iYYbsnmBYnjlFBh9XSplF4lSbDKz6vuh5GvSQlLfIP0GJkWNyyEnU8Z73T-Bmci8IP2qxWBI3rujutE8PHOOIV~OMJOmL8CxXxsUKG5uEuI~NGl8mxmdp2b6JAYM9pHQlsqApzaB8g6WdsYlK-ef7l-Qn3PmGsdOTTuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
const BookingStep3 = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    return (
        <div>
            <nav>   
                <ul className='step-list'>
                    <li className='step-item step-item-image'></li>
                    <li className='step-item step-item-image'></li>
                    <li className='step-item step-item-image'></li>
                </ul>
            </nav>

            <div className='header-layout'>
                <h1 className="complex-text">Yay! Complete</h1>
            </div>

            <div className='body-layout'>
                <img src={ urlImg } alt="" />
            </div>
            <div>
                <p className='miss'>We will inform you via email later <br/> once the transaction has been accepted</p>
            </div>

            <div className="button-container">
                <button onClick={ handleClick } className="home-button">
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default BookingStep3;