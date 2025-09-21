export const go = (id) => {
    return {
        type: 'GO',
        payload: id
    }
}

export const checkWinner = () => {
    return {
        type: 'CHECKWINNER'
    }
}

export const restart = () => {
    return {
        type: 'RESTART'
    }
}