import {useState} from 'react';
import Register from '../Auth/Register';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login =()=>{

    

    const [getValue,setValue]=useState({
        mailID:"",
        password:""
    });

    let {mailID,password}=getValue;
   

    const onSubmitHandler =(e)=>{

        let obj ={
            mailID:getValue.mailID,
            password:getValue.password
        }

        e.preventDefault();
        axios.post('http://localhost:3000/posts',obj).then((result)=>{
          console.log(result);
        }).catch((error)=>{
          console.log(error);
        })
    }

    const onChangeHandler=(event)=>{
       
        setValue({...getValue,[event.target.name]:event.target.value})
                
    }

   

    return(
        <div className="full">
        <div className="login">
            <form className ="form" name="Login">
                <h2>Login to your Account</h2>
                <input name="mailID" placeholder="abcd@gmail.com" onChange={onChangeHandler} value={mailID}></input><br/>
                <input name="password" placeholder="********" onChange={onChangeHandler} value={password}></input><br/>
                <button type="submit" onClick={onSubmitHandler}>Login</button>
                <p>New user? <Link to='/Register'>Register here</Link></p>
            </form>
            <Route path="/register" exact component={Register}/>
        </div>
        </div>
    )

}

export default Login;