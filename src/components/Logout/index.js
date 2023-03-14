import React,{useState,useEffect} from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';
import { Link,useNavigate } from 'react-router-dom';


const Logout = () => {

const navigate=useNavigate();


  const [checked,setChecked]=useState(false);

  useEffect(() => {

    if(checked){

        //console.log('Déconnexion')
        signOut(auth).then(()=>{

            console.log('Vous etes deconnecté')
            setTimeout(()=>{

                navigate('/');


            },1000);


        }).catch((error)=>{

            console.log('Oups , nous avons une erreur ! ')


        });
    }


  },[checked])

  const handleChange=event=>{
    setChecked(event.target.checked);
  }

  
  return (
    <div className="logoutContainer">

        <label className="switch">

            <input type="checkbox" checked={checked} onChange={handleChange}/>

            <span className="slider round"></span>

        </label>

      
      
    </div>
  )
}

export default Logout
