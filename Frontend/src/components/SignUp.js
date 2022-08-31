import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Axios from '../ServerConfig';
import { register } from '../redux/userRedux'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ForgetPasswordButton,ManualRegisterButton} from './Button/CustomBtn';

const useStyles = makeStyles({
    loginContainer: {
        maxWidth: "400px",
        margin: "0 auto",
        padding: "64px 16px",
    },
    titleLog: {
        color: "#3d3d3d",
        fontSize: "21.5px",
    },
    loginContainerLine: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
        color: "#585c5c",
    },
    loginHR: {
        width: "170px",
        height: "1px",
        backgroundColor: "#d1d1d1",
    },
    termsAndConditions: {
        fontSize: "14.2px",
        color: "#585c5c",
        WebkitFontSmoothing: "subpixel-antialiased",
        WebkitTextSizeAdjust: "100%",
    },
    linkTxt: {
        color: "#00ccbc",
    },

    label: {
        fontSize: '18px',
        lineHeight: '22px',
        fontWeight: 400,
    },
    input: {

        flex: 1,
        height: '48px',
        boxSizing: 'border-box',
        fontSize: '16px',
        lineHeight: '24px',
        padding: '12px 16px',
        border: '1px solid #e8ebeb',
        borderRadius: '4px',
        boxShadow: 'inset 0 2px 4px rgb(0 0 0 / 5 %)',
        width: '400px',
        margin: '15px 0'
    }
});



const SignUp = () => {
    const classes = useStyles();
    const [toggleRegister, setToggleRegister] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "", phone:"",image:"" })
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const emailCheck = async () => {
        setToggle(true)
        if (userDetails) {
            try{
                const response = await Axios.post('/user/getUserDetails', userDetails)
                if (response.data.length !== 0) {
                    console.log("user already exists")
                    setToggleRegister(true);
                }
            } catch(error){
                console.log(error)
            }
        }
    }
   

    const userLogin = async () => {
       try {
        const response = await Axios.post('/user/validateUser', userDetails)
        console.log(response)
        dispatch(register(response.data))
        const user = {
            username: response.data.username,
            email: response.data.email,
            phone: response.data.phone,
            image: response.data.image,
        }
        sessionStorage.setItem("token", JSON.stringify(user));
        navigate('/')

        } catch (error) {
        console.log(error)
        }
    }

    const userRegister = async () => {
        try {
            const response = await Axios.post('/user/register', userDetails)
            console.log(response)
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div className={classes.loginContainer}>
                <h2 className={classes.titleLog}>Sign Up or Login</h2>
                {!toggle ?
                    <>
                        <div className={classes.label}>
                            Email Address
                        </div>
                        <input placeholder='e.g. name@example.com' className={classes.input} type="email" name="email" onChange={handleChange} />

                        <ManualRegisterButton variant="contained" onClick={() => emailCheck()} >Continue </ManualRegisterButton>
                    </>
                    :
                    <>
                        {!toggleRegister ?
                            <div>
                                <div className={classes.label}>
                                    Userame
                                </div>
                                <input placeholder='username' className={classes.input} type="text" name="username" onChange={handleChange} />

                                <div className={classes.label}>
                                    Phone Number
                                </div>
                                <input placeholder='+94' className={classes.input} type="text" name="phone" onChange={handleChange} />

                                <div className={classes.label}>
                                    Password
                                </div>
                                <input className={classes.input} placeholder='password' type="password" name="password" onChange={handleChange} />
                                <ManualRegisterButton variant="contained" onClick={() => userRegister()}>Register </ManualRegisterButton>
                            </div>
                            :
                            <div>
                                <div className={classes.label}>
                                    Password
                                </div>
                                <input className={classes.input} type="password" name="password" onChange={handleChange} />
                                <ManualRegisterButton variant="contained" onClick={() => userLogin()}>Login </ManualRegisterButton>
                            </div>
                        }
                    </>
                }
                <ForgetPasswordButton variant="contained" >Forget Password?</ForgetPasswordButton>
            </div>
        </div>
    )
}

export default SignUp