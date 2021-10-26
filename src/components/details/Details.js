import React from 'react';
import {connect} from "react-redux";
import {DetailsContainer} from "./styles/DetailsStyles";
import {Col, Container, Row} from "react-bootstrap";
import {edit, home} from "../../utils/constant";
import {useHistory} from "react-router-dom";
import Item from "../item/Item";

const Details = ({movie, genres}) => {

    const history = useHistory();
    const image = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;

    const getGenres = (movie, genres) => {
        const genreIds = movie.genre_ids;
        const genre = [];
        if(genreIds) {
            for (let i = 0; i < genres.length; i++) {
                if (genreIds.includes(genres[i].id)) {
                    genre.push(genres[i].name)
                }
            }
        }
        return genre;
    }

    return (
        <DetailsContainer>
            <div className='header'>
                <h1>Movie Details</h1>
            </div>
            <Container>
                <Row>
                    <Col md={{span: 4, offset: 4}} xs={12} className='item'>
                        <button onClick={() => history.push(edit)}>Edit</button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 4}} xs={12} className='item'>
                        <Item image={image} movie={movie} genres={getGenres(movie, genres)}/>
                    </Col>
                    <Row>
                        <Col md={{span: 4, offset: 4}} xs={12} className='item'>
                            <button className='button_home' onClick={() => history.push(home)}>Home page</button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </DetailsContainer>
    )
}

const mapStateToProps = state => ({
    movie: state.movie,
    genres: state.genres
})

export default connect(mapStateToProps)(Details);