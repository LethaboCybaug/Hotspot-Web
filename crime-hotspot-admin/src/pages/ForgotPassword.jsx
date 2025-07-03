import Layout from "../components/Layout";

import {useNavigate} from "react-router-dom"

export default function ForgotPassword(){
const navigate = useNavigate();

const sendLinkToEmail = () =>{


}

return (

  <div className="centered">
    <h2>
      Forgot Password
    </h2>
    <p>Please enter your email below, we will send you a link to allow you to reset your password</p>
    <input type="email" placeholder="Email" /><br/>
      <button onClick={sendLinkToEmail}>Send</button>
  </div>

)
}