import React, { useState } from 'react'
import BackgroundImage from './BackgroundImage'
import Header from './Header'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../utils/firebase'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const handleSignIn = async () => {
        try {
            const { email, password } = formValues
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (err) {
            console.log(err)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/")
    })

    return (
        <Container>
            <BackgroundImage />
            <div className="content">
                <Header login />

                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited Movies, TV Shows and More</h1>
                        <h4>Watch anywhere, Cancel anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart memvership</h6>
                    </div>

                    <form className="form" onSubmit={handleSignIn}>
                        <input type="text" value={formValues.email}
                            onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                            placeholder="Enter your email address" name="email" />

                        {
                            showPassword && <input type="password" value={formValues.password}
                                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                                placeholder='password' name="password" id="" />

                        }

                        {
                            !showPassword && <button type='submit'
                                onClick={() => setShowPassword(true)}>Get Started</button>
                        }


                    </form>

                    {showPassword && <button onClick={handleSignIn}>Log In</button>}

                </div>
            </div>

        </Container>
    )
}

const Container = styled.div`
position:relative;
overflow:hidden;
.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
height:100vh;
width:100vw;
display:grid;
grid-template-rows:15vh 85vh;
.body{
    gap:1rem;
    text-align:center;
    font-size:2rem;
    h1{
        padding:0 25rem
    }
    .form{
        display:grid;
        grid-template-columns:${((showPassword) => showPassword ? "1fr 1fr" : "2fr 1fr")}
        width:60%;
        input{
            color:black;
            border:none;
            padding:1rem;
            font-size:1.2rem;
            border:1px solid black;
            &:focus{
                outline:none
            }
            button{
                padding:0.5rem 1rem;
                background-color:#e50914;
            border:none;
            cursor:pointer;
            color:white;
            border-radius:0.2rem;
            font-weight:bolder;
            font-size:1.05rem
            }

         
        }
    }
    button{
        padding:0.5rem 1rem;
        background-color:#e50914;
    border:none;
    cursor:pointer;
    color:white;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem
    }
}
}
`

export default Signup