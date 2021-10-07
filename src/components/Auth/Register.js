import {useState} from 'react';
import Login from '../Auth/Login'
import {Route} from 'react-router'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register =()=>{

    const [getValue,setValue]=useState({
        username:"",
        mailID:"",
        password:"",
        confirmPassword:""
    });

    let {username,mailID,password,confirmPassword}=getValue;

    const onSubmitHandler =(e)=>{

        e.preventDefault();
       
        let obj ={
            username:getValue.username,
            mailID:getValue.mailID,
            password:getValue.password
        }

        
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
        <div className="login">
        <form className ="form" name="Login">
            <h2>Create your Account</h2>
            <input name="username" placeholder="name" onChange={onChangeHandler} value={username}></input><br/>
            <input name="mailID" placeholder="abcd@gmail.com" onChange={onChangeHandler} value={mailID}></input><br/>
            <input name="password"  type="password" placeholder="********" onChange={onChangeHandler} value={password}></input><br/>
            <input name="confirmPassword" type="password" placeholder="********" onChange={onChangeHandler} value={confirmPassword}></input><br/>
           
            <button type="submit" onClick={onSubmitHandler}>Register</button>
            <p>Already a user?<Link to='/login'>Sign In</Link></p>
        </form>
        <Route path='/login' exact component={Login}/>
    </div>
    )

}

export default Register;