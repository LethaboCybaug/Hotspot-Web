import Layout from "../components/Layout";

import {useNavigate} from "react-router-dom"

export default function ResetPassword(){
  const navigate = useNavigate();

  const resetPassword = () =>{


}
  return (
    <div className="centered">
<h2>
      Reset Password
    </h2>
    <p>Please enter your email below, we will send you a link to allow you to reset your password</p>
    <input type="nPassword" placeholder="New Password" /><br/>
    <input type="ncPassword" placeholder="Confirm Password" /><br/>
      <button onClick={resetPassword}>Reset</button>
          </div>
  )
}