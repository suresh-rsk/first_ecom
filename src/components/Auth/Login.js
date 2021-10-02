import {useState} from 'react';

const Login =()=>{

    

    const [getmail,setmail]=useState({
        mailID:"",
        password:""
    });

    const onSubmitHandler =(e)=>{
        e.preventDefault();
    }

    const onChangeHandler=()=>{
        
    }

    return(
        <div className="login">
            <form className ="form" name="Login">
                <h2>Login to your Account</h2>
                <input name="mail" placeholder="abcd@gmail.com" onChange={onChangeHandler} value={getmail.mailID}></input><br/>
                <input name="password" placeholder="********" onChange={onChangeHandler} value={getmail.password}></input><br/>
                <button type="submit" onClick={onSubmitHandler}>Login</button>
            </form>
        </div>
    )

}

export default Login;