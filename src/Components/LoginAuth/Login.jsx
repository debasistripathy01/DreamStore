import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./login.css"
import {
  // Heading,
  Text,
  Button, Box, Image, useToast
} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../../Redux/login/action"
import { NavbarLoginSingup } from "./NavbarLoginSingup"
import axios from "axios"


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  const [error, changeError] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8085/user/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.message === "login successful") {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.name);
          toast({
            title: "Welcome Back",
            description: "Successfully Logged In",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          navigate("/");
        } 
      })
      .catch((err) => {
        console.log(err.message);
        return toast({
          title: "Error",
          description: "Authentication Failed, Try Again",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      });
  };


  return (
    <div>
      <NavbarLoginSingup />
      <div className="main">
        <div className="mainDiv">
          <h1>Existing Customers</h1>
          <div>
            <label>* Email address</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>* Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <h3><u>FORGOTTEN YOUR PASSWORD?</u></h3>
          </div>
          <div>
            <button className="buttoncontinue" onClick={handleSubmit}>LOGIN TO YOUR ACCOUNT</button>
          </div>
          <div>
            <h3>Or, Continue with</h3>
          </div>
          <Box display={"flex"} gap="40px" marginTop="60px" marginBottom={"60px"} >
            <Button className="button">
              <Image boxSize='25px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" />
              <Text>Facebook</Text>
            </Button>
            <Button className="button">
              <Image boxSize='25px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
              <Text>Google</Text>
            </Button>
          </Box>
        </div>
        <div className="mainDiv">
          <h1>New Customers</h1>
          <Link to="/signup">
            <button className="buttoncontinue">CONTINUE</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export { Login }



{/* <form onSubmit={handleSubmit}>
                <div>
                    <label>User Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>User Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form> */}