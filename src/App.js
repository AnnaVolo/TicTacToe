import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Tile from "./Tile";
import React, {useEffect, useRef, useState} from "react";
import {checkWinner, restart} from "./actions";
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';
import Slide from "@mui/material/Slide";


function App() {
    const board = useSelector((state) => state.board);
    const winner = useSelector((state) => state.winner);
    const winnerColor = useSelector((state) => state.winnerColor);

     useEffect(() => {

        // Trigger animation once the component is mounted
        winner ? setChecked(true) : setChecked(false);
        }, [winner]);


    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(checkWinner())

    },[board, dispatch]);

    const [checked, setChecked] = useState(false);

    const containerRef = useRef(null);
    return (
        <div >
            <Box sx={{ width: '100%' }}>
                <Typography
                    variant="h2"
                    align="center"
                    sx={{
                        backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textFillColor: 'transparent',
                    }}
                >
                    Tic Tac Toe
                </Typography>
            </Box>
            <Box  ref={containerRef} style={{height: '30px', overflow: "hidden" }}>
                <Slide direction="right"
                       in={checked}
                       mountOnEnter
                       unmountOnExit
                       container={containerRef.current}
                       timeout={800}>
                    <Typography
                        color={winnerColor}
                        variant="h5"
                        align="center"
                        gutterBottom
                        >
                        {winner}
                    </Typography>
                </Slide>
            </Box>

            {/*<h2 style={{height: '30px', textAlign: 'center', margin: '0'}}>{winner}</h2>*/}
            <div className="App" style={{width: "300px", height: "300px", display: "grid", gridTemplateColumns: "auto auto auto"}}>
                {board.map((value, index) => (
                    <Tile id={index} value={value} key={index} />
                ))}
            </div>
            <Box textAlign='center'>
            <Button onClick={()=>dispatch( restart() )}
                    variant="contained"
                    sx={{
                        minWidth: "200px",
                        fontSize: "18px",
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        margin: '50px auto',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                        },
                    }}>Restart</Button>
            </Box>
        </div>

  );
}

export default App;
