import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Tile from "./Tile";
import {useEffect} from "react";
import {checkWinner, restart} from "./actions";
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';


function App() {
    const board = useSelector((state) => state.board);
    const winner = useSelector((state) => state.winner);
    console.log(board);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(checkWinner())

    },[board, dispatch]);
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
            <h2 style={{height: '30px', textAlign: 'center', margin: '0'}}>{winner}</h2>
            <div className="App" style={{width: "300px", height: "300px", display: "grid", gridTemplateColumns: "auto auto auto"}}>
                {board.map((value, index) => (
                    <Tile id={index} value={value} key={index} />
                ))}
            </div>
            <Box textAlign='center'>
            <Button onClick={()=>dispatch( restart() )}
                    variant="contained"
                    sx={{
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        margin: '50px auto',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)', // Optional: hover effect
                        },
                    }}>Restart</Button>
            </Box>
        </div>

  );
}

export default App;
