import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css';
export const CardList = props =>(
    <div className="card-list">
        {
            
           props.giphy.map(resp=>(
                    <Card key={resp.id} giphy={resp}/>
                )
           )
        }
    </div>
)