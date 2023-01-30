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



function Signup() {
    
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmEmail, serconfirmEmail] = useState("")
    const [confirmPass, setConfirmPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toast = useToast()
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(password!==confirmPass || email!==confirmEmail){
            toast({
                title: "Worng Credentials",
                description: "Credentials Doesn't match",
                status: "error",
                position: "top",
                duration: 2000,
                isClosable: true,
              });
        }
        else if(password.length < 5){
            toast({
                title: "Enter a secure Password",
                description: "Password to Short",
                status: "error",
                position: "top",
                duration: 2000,
                isClosable: true,
              });
        }
        else if(email&&password){
            toast({
                title: "Welcome ",
                description: "Successfully Signup ",
                status: "success",
                position: "top",
                duration: 1000,
                isClosable: true,
              });
            dispatch(signup({email,password})).then((r)=>{

                localStorage.setItem("email",email)
                localStorage.setItem("pass",password)
                localStorage.setItem("name",name)

                navigate("/login")

            })
        }
    }

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
                                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div>
                                <label>* Email address</label>
                                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div>
                                <label>* Confirm Email address</label>
                                <input type='email' value={confirmEmail} onChange={(e)=>serconfirmEmail(e.target.value)}  />
                            </div>
                            <div>
                                <label>* Password</label>
                                <input type='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
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