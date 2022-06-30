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
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase'
import NotAvailable from './NotAvailble'
const Movies = () => {

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


    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate("/");
    });

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled} />
            </div>

            <div className="data">
                {
                    movies.length ? <Slider movies={movies} /> :
                        <NotAvailable />
                }
            </div>

        </Container>
    )
}

const Container = styled.div`
.data{
    margin-top:8rem;
    .not-available:{
        text-align:center;
        
    }
}
`

export default Movies