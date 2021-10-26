import React from 'react';
import {Image} from "react-bootstrap";
import {ItemContainer} from "./styles/ItemStyles";
import Likes from "../likes/Likes";

const Item = ({movie, image, genres}) => {

    return (
        <ItemContainer>
            <div className='imageDiv'>
                <Image className='image' src={image} alt='image'/>
            </div>
            <Likes id={movie.id} likes={movie.likes ? movie.likes : 0}/>
            <div>
                <h4>{movie.title}</h4>
                <div><span>Year:</span> {movie.release_date}</div>
                <div className='genres'>
                    <span>Genres:</span>
                    {genres.map((item, index) => (<div className='genre' key={index}>{`${item}`}</div>))}
                </div>
                <div>
                    <div><span>Overview:</span></div>
                    {movie.overview}
                </div>
            </div>
        </ItemContainer>
    );
};

export default Item;