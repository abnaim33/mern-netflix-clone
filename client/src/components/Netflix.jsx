import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BackgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { getGenres } fro../store/storeore'
import axios from 'axios'
import { fetchMovies, getGenres } from '../store/store'
import Slider from './Slider'

const Netflix = () => {
    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false)
    const movies = useSelector((state) => state.netflix.movies);
    const genres = useSelector((state) => state.netflix.genres);
    const genresLoaded = useSelector((state) => state.netflix.genresLoaded)

    console.log(movies, 'movies')

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())

    }, [])


    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ type: "all" }));
            console.log('genresLoaded')
        }
    }, [genresLoaded]);

    // https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

    console.log(genresLoaded, 'genres')
    return (
        <Container>
            <Navbar isScrolled={isScrolled} />

            <div className="hero">
                <img src={BackgroundImage} alt="background"
                    className='background-image' />

                <div className="container">
                    <div className="logo">
                        <img src={MovieLogo} alt="" />
                    </div>

                    <div className="buttons flex">
                        <button className="flex j-center a-center"
                            onClick={() => navigate('/player')}>
                            <FaPlay /> Play
                        </button>

                        <button className="flex j-center a-center">
                            <AiOutlineInfoCircle /> More Info
                        </button>
                    </div>
                </div>

            </div>

            <Slider movies={movies} />

        </Container>
    )
}

const Container = styled.div`
background-color:black;
.hero{
position:relative;
.background-image{
    filter:brightness(60%)
}
    img{
        height:100vh;
        width:100vw;
    
    }
    .container{
        position:absolute;
        bottom:5rem;
        .logo{
            img{
                height:100%;
                width:100%;
                margin-left:5rem
            }
        }
        .buttons{
            margin:5rem;
            gap:2rem;
            button{
                font-size:1.4rem;
                border-radius:0.2rem;
                gap:1rem;
                padding:0.5rem;
                padding-left:2rem;
                padding-right:2.4rem;
                border:none;
                cursor:pointer;
                transition:0.3s ease-in-out;
                &:hover{
                    opacity:0.8;
                }
                &:nth-of-type(2){
                    background-color:rgba(109,109,120,0.7);
                    color:white;
                    svg{
                        font-size:1.8rem;
                    }
                }
            }
        }
    }
}`

export default Netflix