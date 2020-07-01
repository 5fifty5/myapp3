import React from 'react';

const logo = require('./Lagos.jpg');

export default function AfroBeats(){
    return(
        <div>
            <h1>AfroBeats</h1>
            <img src={logo} width="300" />
        </div>
    )
}