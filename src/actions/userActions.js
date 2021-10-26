import {api_key3, base_url} from '../utils/constant';

export const SET_MOVIE = 'SET_MOVIE';
export const CHANGE_MOVIES = 'CHANGE_MOVIES';
export const SET_GENRES = 'SET_GENRES';

export const changeMovies = (movies) => ({
    type: CHANGE_MOVIES,
    payload: movies
})

export const setGenres = (genres) => ({
    type: SET_GENRES,
    payload: genres
})

export const setMovie = (movie) => ({
    type: SET_MOVIE,
    payload: movie
})

export const fetchMovies = () => {
    return (dispatch) => {
        fetch(`${base_url}movie/top_rated?api_key=${api_key3}&language=en-US&page=1`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Unknown error");
            })
            .then(data => {
                dispatch(changeMovies(data.results));
                localStorage.setItem('movies', JSON.stringify(data.results));
            })
            .catch(e => console.log(e));
    }
}

export const fetchGenre = () => {
    return (dispatch) => {
        fetch(`${base_url}genre/movie/list?api_key=${api_key3}&language=en-US`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Unknown error");
            })
            .then(data => {
                dispatch(setGenres(data.genres));
                localStorage.setItem('genres', JSON.stringify(data.genres));
            })
            .catch(e => console.log(e));
    }
}

const checkId = (arrMovies, id) => {
    const flag = false;
    for (let i = 0; i < arrMovies.length; i++) {
        if(arrMovies[i].id === id) {
            return !flag;
        }
    }
    return flag;
}

export const appendMovie = (movie) => {
    return (dispatch) => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        // generating a random id
        const random =  () => Math.floor(Math.random() * 10000);
        let id = random();
        while (!checkId(movies, id)) {
            id = random();
        }
        // generating a random id
        movie.id = id;
        movies.push(movie);
        dispatch(changeMovies(movies));
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

export const setLikes = (id, value) => {
    return (dispatch) => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === id) {
                movies[i].likes = value;
            }
        }
        dispatch(changeMovies(movies));
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

export const overwriteMovie = (id, title, release_date, overview, backdrop_path, newGenres) => {
    return (dispatch) => {
        const movies = JSON.parse(localStorage.getItem('movies'));
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].id === id) {
                movies[i].title = title;
                movies[i].release_date = release_date;
                movies[i].overview = overview;
                movies[i].backdrop_path = backdrop_path;
                const genres = JSON.parse(localStorage.getItem('genres'));
                const remGenres = [];
                for(let i = 0; i < genres.length; i++) {
                    if(newGenres.includes(genres[i].name)) {
                        remGenres.push(genres[i].id)
                    }
                }
                movies[i].genre_ids = remGenres;
                dispatch(setMovie(movies[i]));
            }
        }
        dispatch(changeMovies(movies));
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}