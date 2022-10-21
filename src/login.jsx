   import './singup.css'

const Login = ()=> {
    return(
        <div>
            <div className="mainconter">
            <img src={require("./assets/PathMedium.png")}/>
                <section className="section1">
                <h1>Login</h1>
                <input placeholder="Email address" className="input" ></input>
                <br/>
                <input placeholder="Password" className="input"></input>
                
                <section className="section2">
                    <div className="orengBox">
                        <span className="span1">Login to your account</span>
                    </div>
                    <div className="account">
                    <span className="span1">Don’t have an account?</span>
                    <span className="span2">Sign Up</span>

                    </div>

                </section>
                </section>

            </div>
            
        </div>
    );
}

export default Login;