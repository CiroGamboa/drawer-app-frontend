
import React, { useState, useEffect } from 'react';

const data = [
    {
        "State": "Uttar Pradesh",
        "Capital": "Lucknow"
    },
    {
        "State": "Gujarat",
        "Capital": "Gandhinagar"
    },
    {
        "State": "Karnataka",
        "Capital": "Bengaluru"
    },
    {
        "State": "Punjab",
        "Capital": "Chandigarh"
    },
    {
        "State": "Maharashtra",
        "Capital": "Mumbai"
    }
]
const DrawingList = () => {

    const [draws, getDraws] = useState([])

    // Set backend url as global
    const url = "http://localhost:5000"



    const listItems = data.map((element) => {
            return (
                <ul type="disc">
                    <li style={{ 
                        fontWeight: 'bold', 
                        color: 'red' }}
                    >
                        {element.State}
                    </li>
                    <li>{element.Capital}</li>
                </ul>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}

export default DrawingList;