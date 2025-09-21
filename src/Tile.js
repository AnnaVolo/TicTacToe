import React from 'react';

const Tile = ({value}) => {
    return (
        <div style={{border: '1px solid black'}}>
            {value}
        </div>
    );
};

export default Tile;