import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import  {go} from './actions';
import Button from '@mui/material/Button';

const Tile = ({id, value}) => {
    const dispatch = useDispatch();
    const isOTurn = useSelector((state) => state.isOTurn);
    const board = useSelector((state) => state.board);
    const winner = useSelector((state) => state.winner);

    const [className, setClassName] = React.useState('');
    const handleClick = () => {
        if (board[id] === null && winner === null){
            dispatch(go(id));
            const aClassName = isOTurn ? 'clickedX' : 'clickedO';
            setClassName(aClassName);
        }
    }
    return (
        <Button
            style={{margin: "5px", borderRadius: '6px', width: '90px', height: '90px',  fontSize: '60px'}}
            onClick={handleClick}
            variant="contained"
            sx={{
                background: 'none',
                border: '1px solid #FF8E53',
                borderColor: '#FF8E53',
                color: '#FE6B8B',
                padding: '10px 20px',
                borderRadius: '5px',
                '&:hover': {
                    background: 'linear-gradient(45deg, #FE6B8B 20%,  #FF8E53 80%)',
                    color: '#fff',
                    border: 'red solid #000'
                },
            }}
            className = {className}>
            {value}
        </Button>

    );
};

export default Tile;