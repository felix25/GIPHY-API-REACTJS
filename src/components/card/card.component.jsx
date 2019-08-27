import React from 'react';
import './cad.style.css';
export const Card = props =>(
    <div className="card">
        <figure>
            <img src={props.giphy.images.fixed_height.url} />
        </figure>
    </div>
)