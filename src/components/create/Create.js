import React, {useState} from 'react';
import {CreateContainer} from "./styles/CreateStyles";
import {home} from "../../utils/constant";
import {useHistory} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {appendMovie} from "../../actions/userActions";

const Create = ({genresData}) => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [genres, setGenres] = useState('');
    const [image, setImage] = useState('');
    const [overview, setOverview] = useState('');

    const dispatch = useDispatch();

    const handleClickLogin = () => {
        dispatch(appendMovie(getItem()));
        setName('');
        setYear('');
        setGenres('');
        setImage('');
        setOverview('');
        history.push(home);
    }

    const remGenres = (genresData, genres) => {
        const rem = [];
        if(genres) {
            for (let i = 0; i < genresData.length; i++) {
                if (genres.includes(genresData[i].name)) {
                    rem.push(genresData[i].id)
                }
            }
        }
        return rem;
    }

    const getItem = () => {
        return         {
            title: name,
            release_date: year,
            genre_ids: remGenres(genresData, genres),
            backdrop_path: image.substring(32) || 'https://image.tmdb.org/t/p/w500//iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
            overview,
        }
    }

    return (
        <CreateContainer>
            <Container>
                <Row>
                    <Col md={{span: 6, offset: 3}} xs={12} className='item'>
                        <h1 className='h1'>Create Movie</h1>
                        <input
                            placeholder="Name"
                            onChange={event => setName(event.target.value)}
                            type='text'
                            value={name}
                        />
                        <input
                            placeholder="Year"
                            onChange={event => setYear(event.target.value.trim())}
                            type='date'
                            value={year}
                        />
                        <input
                            placeholder="Genres -> Drama, Crime..."
                            onChange={event => setGenres(event.target.value)}
                            type='text'
                            value={genres}
                        />
                        <textarea
                            placeholder="Image -> zero or real picture TMDB"
                            onChange={event => setImage(event.target.value.trim())}
                            value={image}
                        />
                        <textarea
                            placeholder="Overview"
                            onChange={event => setOverview(event.target.value)}
                            value={overview}
                        />
                        <button onClick={handleClickLogin}>Create</button>
                        <button onClick={() => {
                            history.push(home);
                        }
                        }>Home page
                        </button>

                    </Col>
                </Row>
            </Container>
        </CreateContainer>
    );
}

const mapStateToProps = state => ({
    genresData: state.genres
})

export default connect(mapStateToProps)(Create);