import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TimelineIcon from '@mui/icons-material/Timeline';
import {getAllDraws} from '../api/drawCrud';


const listItems = (draws) => {

        if(draws.length > 0) {
            return(
                draws.map((draw) => {
                    return (
                        <ListItem key={draw.id}>
                                <ListItemIcon>
                                    <TimelineIcon />
                                </ListItemIcon>
                                <Link to={"draws/" + draw.id} state={{savedDraw:draw, mode:"edit"}}>
                                    <ListItemText
                                        primary={draw.title}
                                    />
                                </Link>
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

    useEffect(() => {
        getAllDraws(getDraws);
    },[]);

    return(
        <div>
            <List>
                {listItems(draws)}
            </List>
        </div>
    )

}

export default DrawingList;