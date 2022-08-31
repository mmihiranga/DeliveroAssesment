import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FcGoogle } from 'react-icons/fc';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { register } from '../redux/Users'
import { gapi } from 'gapi-script'
import Axios from '../ServerConfig';
import { FacebookButton,GoogleButton,ManualRegisterButton } from './Button/CustomBtn';

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
    }
});




const Login = () => {
    const classes = useStyles();
    const clientId = "380810221970-6p2h323ibdoknuaddgrb432skkdm157o.apps.googleusercontent.com"
    const navigate = useNavigate()
    const dispatch = useDispatch();
    

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, []);


    const responseFacebook = (response) => {
        console.log("FB", response);
    }


    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS!", res.profileObj)
        if (res.profileObj) {
            const userDetails = {
                username: res.profileObj.name,
                email: res.profileObj.email,
                phone:res.profileObj.googleId,
                password: res.profileObj.googleId,
                image: res.profileObj.imageUrl,
            }
            Axios.post('/user/getUserDetails', userDetails)
                .then(function (response) {
                    if (response.data.length === 0) {
                        Axios.post('/user/register', userDetails)
                            .then(function (results) {
                                console.log(results)
                                const user = {
                                    username: results.data.username,
                                    email: results.data.email,
                                    phone:results.data.phone,
                                    password: results.data.password,
                                    image: results.data.image,
                                }
                                sessionStorage.setItem("token",JSON.stringify( user));
                                dispatch(register(response.data))
                                navigate("/");
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    } else {
                        console.log(response)
                        const user = {
                            username: response.data.username,
                            email: response.data.email,
                            phone:response.data.phone,
                            password: response.data.password,
                            image: response.data.image,
                        }
                        sessionStorage.setItem("token",JSON.stringify( user));
                        dispatch(register(response.data))
                        navigate('/')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED!", res)
    }



    

    return (
        <div>
            <div className={classes.loginContainer}>
                <h2 className={classes.titleLog}>Sign Up or Login</h2>
                <FacebookLogin
                    appId="728817248189489"
                    callback={responseFacebook}
                    fields="name,email,picture"
                    render={renderProps => (
                        <FacebookButton onClick={renderProps.onClick} variant="contained" startIcon={<FacebookRoundedIcon />}>Continue With Facebook</FacebookButton>
                    )}
                />

                <GoogleLogin
                    clientId={clientId}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" startIcon={<FcGoogle />}>Continue With Google</GoogleButton>
                    )}
                    buttonText="Login"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
                />

                <div className={classes.loginContainerLine}><div className={classes.loginHR}></div> <span>or</span> <div className={classes.loginHR}></div></div>
                <ManualRegisterButton variant="contained" onClick={() => navigate('/register')} startIcon={<MailOutlineSharpIcon />}>Continue With Email</ManualRegisterButton>
                <p className={classes.termsAndConditions}>By continuing you agree to our  <a href="google.com" target="_blank" className={classes.linkTxt}>T&Cs</a>. Please also check out our <a href="google.com" target="_blank" className={classes.linkTxt}>Privacy Policy</a>. We use your data to offer you a personalised experience and to better understand and improve our services. <a href="google.com" target="_blank" className={classes.linkTxt}>For more information see here</a>.</p>
            </div>
        </div>
    )
}

export default Login