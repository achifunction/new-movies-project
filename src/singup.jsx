
 import './singup.css'
 const Singup =() => {
    
    return(
        <div>
            <div className="mainconter">
            <img src={require("./assets/PathMedium.png")}/>
                <section className="section1">
                <h1>Sing Up</h1>
                <input placeholder="Email address" className="input" ></input>
                <br/>
                <input placeholder="Password" className="input"></input>
                <br/>
                <input placeholder="Repeat Password" className="input"></input>
                
                <section className="section2">
                    <div className="orengBox">
                        <span className="span1">Create an account</span>
                    </div>
                    <div className="account">
                    <span className="span1">Alread have an account?</span>
                    <span className="span2">Login</span>
                    </div>

                </section>
                </section>

            </div>
            
        </div>
    );
}

export default Singup;