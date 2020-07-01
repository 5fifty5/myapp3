import React from 'react';

const logo = require('./Chicago1970.jpg');

export default function HouseMusic(){
    return(
        <div>
            <h1>House Music</h1>
            <img src={logo} width="300" />
        </div>
    )
}