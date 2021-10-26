import React, {useState} from 'react';
import {Rating} from "@mui/material";
import {useDispatch} from "react-redux";
import {LikeContainer} from "./styles/LikesStyles";
import {setLikes} from "../../actions/userActions";

const Likes = ({id, likes}) => {

    const [value, setValue] = useState(likes);
    const dispatch = useDispatch();

    return (
        <LikeContainer>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    dispatch(setLikes(id, newValue));
                }}
            />
        </LikeContainer>
    );
};

export default Likes;