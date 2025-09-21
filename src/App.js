import logo from './logo.svg';
import './App.css';
import Tile from "./Tile";

function App() {
    const board = Array(9).fill('x');
    console.log(board);
    return (
        <>
            <h1>Tic Tac Toe</h1>
            {console.log(board)}
            <div className="App" style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
                {board.map((value, index) => (
                    <Tile value={value} key={index} />
                ))}
            </div>
        </>

  );
}

export default App;
