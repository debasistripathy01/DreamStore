import "./signup.css"
import {
    Heading,
    Text,
    Button, Box, Image, useToast
} from '@chakra-ui/react'
import { NavbarLoginSingup } from "./NavbarLoginSingup"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signup } from "../../Redux/login/action"
import axios from "axios"



function Signup() {
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, serconfirmEmail] = useState("")
    const [confirmPass, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const toast = useToast()
    
    const [open, setOpen] = useState(false);
    const [error, changeError] = useState("");
    const toggle = () => {
      setOpen(!open);
    };
    // const [user, setUser] = useState({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setUser({ ...user, [name]: value });
    // };
  
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name,
            email,
            password,
        }
        console.log(payload)
        fetch("https://lucky-pink-underclothes.cyclic.app/user/signup",{
            method : "POST",
            body : JSON.stringify(payload),
            headers:{
                "Content-type" :"application/json"
            }
        }).then(res=>res.json())
        .then((res)=>{
            console.log(res.user.name)
            if (res.mess==="Registred") {
                
                toast({
                    title: "Account created.",
                    description: "Successfully Created your Account",
                  status: "success",
                  position: "top",
                  duration: 3000,
                  isClosable: true,
                });
                navigate("/login");
              }
        })
        .catch(err=>console.log(err))
      };

    return (
        <div className="mainSignup">
            <NavbarLoginSingup/>
            <div>
                <div className="form">
                    <Heading className="head">About You</Heading>
                    <Text>Sign Up With</Text>
                    <Box display={"flex"} gap="40px" marginBottom={"60px"}>
                        <Button className="button">
                            <Image boxSize='25px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" />
                            <Text>Facebook</Text>
                        </Button>
                        <Button className="button">
                            <Image boxSize='25px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
                            <Text>Google</Text>
                        </Button>
                    </Box>
                    <hr />
                    
                    <Text>Or create an email account</Text>
                    <div className="input">
                        <form>
                            <div>
                                <label>* Full Name</label>
                                <input type='text' value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div>
                                <label>* Email address</label>
                                <input type='email' value={email} name="email" onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label>* Confirm Email address</label>
                                <input type='email' value={confirmEmail} onChange={(e)=>serconfirmEmail(e.target.value)}  />
                            </div>
                            <div>
                                <label>* Password</label>
                                <input type='password'  value={password} name="password" onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div>
                                <label>* Confirm Password</label>
                                <input type='password' value={confirmPass} onChange={(e)=>setConfirmPassword(e.target.value)} />
                            </div>
                            <div>
                                <label>Cell Phone Number (Optional)</label>
                                <input type='number' />
                                <p>We will use this number to send occasional promotional messages.</p>
                            </div>
                            <div className="referral">
                                <label>Referral Code (Optional)</label>
                                <input type='text' />
                                <p>* Your referrals discount is automatically applied at cart</p>
                            </div>
                                <h3>Loyalty Reward program</h3>
                            <div className="checkBox">
                                <input type="checkbox"/>
                                <label>Include me in the Dermstore Rewards program Read our terms of use.</label>
                            </div>
                            <div>
                                <button className="button" onClick={handleSubmit}>CONTINUE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup