import React from 'react';
import { Link } from 'react-router-dom';
// TODO: add a method for deleting updates that only renders when a user is logged in--check how I did it for the combo translator
// TODO: add a link to a full page for the update
// props should give us the title, creation date, and update date of an date
// TODO: determine if an update should 
function UpdateListCard (props) {
    // We'll only render the date of the last update if it was 
    const renderUpdate = (props.createdAtReadable !== updatedAtReadable);

    return (
        <div className = "combo-list-card card col-8 my-2 py-2">
            <h3>{props.title}</h3>
            <h5>Posted: {props.createdAtReadable}</h5>
            {renderUpdate && <h5>Last updated: {props.updatedAtReadable}</h5>}
        </div>
    )
}
