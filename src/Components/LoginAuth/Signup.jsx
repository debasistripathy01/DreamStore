import "./signup.css"
import {
    Heading,
    Text,
    Button, Box, Image
} from '@chakra-ui/react'
import { NavbarLoginSingup } from "./NavbarLoginSingup"



function Signup() {


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
                    <div >
                        <form>
                            <div>
                                <label>* Full Name</label>
                                <input type='text' />
                            </div>
                            <div>
                                <label>* Email address</label>
                                <input type='email' />
                            </div>
                            <div>
                                <label>* Confirm Email address</label>
                                <input type='email' />
                            </div>
                            <div>
                                <label>* Password</label>
                                <input type='password' />
                            </div>
                            <div>
                                <label>* Confirm Password</label>
                                <input type='password' />
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
                                <button>CONTINUE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup