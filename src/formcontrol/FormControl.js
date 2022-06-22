import React from "react"
import { Link } from "react-router-dom";
export const FormControl = (props) =>{
    React.useEffect(()=>{
        if(props.lastName && props.lastName.length > 0){
            if(!validateEmail(props.lastName)){
                console.log(props.lastName);
                console.log("YESS THE EMAIL IS IN VALID FORMAT");
            }
        }
    },[props.lastName]);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
   return (<React.Fragment>
        <div>
                <label >First Name</label>
                <input type="text" id="fname" value={props.firstName} name="firstname" placeholder="Your name.." />
                    <label >Last Name</label>
                    <input type="text" value={props.lastName} id="lname" name="lastname" placeholder="Your last name.."  onChange={(e,v)=>props.setLastName(v)}/>
                        <label >Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>
           <input type="submit" value="Submit" />
                    </div></React.Fragment>);
};