import data from './data';
import React, { useState } from 'react';
import './styles.css';

export default function Accordian() {

    const [selected, setSelected] = useState(null);

    function handelOnClick(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return <div className='wrapper'>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(dataItem =>
                        <div onClick={() => handelOnClick(dataItem.id)} className='item'>
                            <div className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                    <div className='content'>{dataItem.answer}</div>
                                    : null
                            }
                        </div>)
                    : <div>Empty data</div>
            }
        </div>

    </div>;
}