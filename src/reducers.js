const initialState={
    board: Array(9).fill(null),
    isOTurn: false,
    winner: null

}
export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GO':{
            if (state.board[action.payload]===null){
                const newBoard = [...state.board];
                let player;
                if ( state.isOTurn === false ) player = 'X'
                else player = 'O';
                console.log(player)
                newBoard[action.payload]=player;
                return {
                    ...state,
                    board: [...newBoard],
                    isOTurn: !state.isOTurn

                }
            }else {
                return state;
            }

        }
        case 'CHECKWINNER':{
            const winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
            let win='';
            for (let i= 0; i < winners.length; i++) {
                const a = state.board[winners[i][0]];
                const b = state.board[winners[i][1]];
                const c = state.board[winners[i][2]];
                if (a===b && b===c && a!==null) {
                    win = 'The winner is: '+ a;
                }
            }
            return {
                ...state,
                winner: win}
        }
        case 'RESTART':{

            return {
                ...state,
                board: Array(9).fill(null),
                isOTurn: false,
                winner: null
            }
        }
        default: {
            return state;
        }
    }
}