
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TimelineIcon from '@mui/icons-material/Timeline';


const listItems = (draws) => {

        if(draws.length > 0) {
            return(
                draws.map((draw) => {
                    return (
                        <ListItem key={draw.id}>
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={draw.draw_title}
                        />
                    </ListItem>
                    )
                }
            )
        )
    }
    else {
        return (<h3>No drawings yet</h3>)
    }
}

const DrawingList = () => {

    const [draws, getDraws] = useState('');

    // Set backend url as global
    const url = "http://localhost:8000/draws/api"


    useEffect(() => {
        getAllDraws();
    },[]);


    const getAllDraws = () => {
        axios.get(`${url}`)
            .then(response => {
                getDraws(response.data);
            })
            .catch(error => alert(`Error: ${error}`));
    }

    return(
        <div>
            <List>
                {listItems(draws)}
            </List>
        </div>
    )

}

export default DrawingList;