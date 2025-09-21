import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import  {go} from './actions';
import Button from '@mui/material/Button';

const Tile = ({id, value}) => {
    const dispatch = useDispatch();
    const className = value===null ? 'unclicked': 'clicked';

    return (
        <Button

            style={{margin: "5px", border: 'none', borderRadius: '6px', width: '90px', height: '90px', color: '#fff', fontSize: '60px'}}
            onClick={() => {dispatch(go(id))}}
            variant="contained"
            sx={{
                background: '#FF8E53',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                '&:hover': {
                    background: 'linear-gradient(45deg, #FE6B8B 20%,  #FF8E53 80%)',

                },
            }}
            className = {className}>
            {value}
        </Button>

    );
};

export default Tile;