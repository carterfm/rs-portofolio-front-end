import React from 'react';
import { Link } from 'react-router-dom';
// TODO: add a method for deleting updates that only renders when a user is logged in--check how I did it for the combo translator
// props should give us the title, creation date, and update date of an date
// TODO: determine if an update should 
function UpdateListCard ({update}) {
    const renderUpdate = (update.createdAtReadable !== update.updatedAtReadable);

    return (
        <div className = "combo-list-card card col-8 my-2 py-2">
            {/* TODO:  add a link to the page for the update, once you've set it up*/}
            <h3>{update.title}</h3>
            <p>{update.body}</p>
            <p>Posted: {update.createdAtReadable}</p>
            {renderUpdate && <p>Last updated: {update.updatedAtReadable}</p>}
        </div>
    )
}

export default UpdateListCard;