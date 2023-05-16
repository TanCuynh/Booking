import React from 'react'
import './signupStep2.css'

const SignupStep2 = () => {
    return (
        <>
            <div class="signup2Container">
                <div class="signup2Header">
                    <div class="signup2Title">
                        <h2>Create password</h2>
                    </div>
                </div>
                <div className="signup2Content">
                    <span>Use at least 8 characters, including uppercase, lowercase letters and numbers.</span>
                </div>
                <div class="signup2Signup">
                    <div className="signup2Password">
                        <span>Password</span>
                        <input required="" type="password" className="signup2PasswordInput" placeholder="Enter your password" />
                    </div>
                    <div className="signup2Password">
                        <span>Password</span>
                        <input required="" type="password" className="signup2PasswordInput" placeholder="Confirm your password" />
                    </div>
                    <span>By logging in or creating an account, you agree to our Terms and Conditions and Privacy Policy.</span>
                    <button class="signup2SignupBtn">Sign up</button>
                </div>
            </div>
        </>
    )
}

export default SignupStep2