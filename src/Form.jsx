import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullname:"",
        username:"",
        password:"",
    });

    let inputHandler=(event)=> {
        setFormData((currData)=>{
            return{...currData, [event.target.name]: [event.target.value]};
        });
    };

    let handleSumit= (event)=>{
        event.preventDefault();
        setFormData({
        fullname:"",
        username:"",
        password:"",
        });
    };
    return(
        <form onSubmit={handleSumit}>
            <label htmlFor="fullname">Full Name : </label>
            <input type="text" 
            placeholder="Enter Full Name"
            value={formData.fullname}
            id="fullname"
            name="fullname"
            onChange={inputHandler}/>
            <br />
            <label htmlFor="username">Username : </label>
            <input type="text" 
            placeholder="Enter Username"
            value={formData.username}
            name="username" id="username"
            onChange={inputHandler} />
            <br />
            <label htmlFor="password">Password : </label>
            <input type="password" 
            placeholder="Enter Password"
            value={formData.password}
            name="password" id="password"
            onChange={inputHandler} />
            <br />
            <button >Submit</button>
        </form>
    )
}

