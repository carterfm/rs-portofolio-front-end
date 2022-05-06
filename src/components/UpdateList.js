import React from 'react';
import UpdateListCard from './UpdateListCard.js';


// We should be passed all the updates we'll need to render the UpdateListCards for this page as a prop called updates
function UpdateList({updates}){
    const renderUpdateListCards = (up) => {
        const updateListCards = [];
        
        for (let i = updates.length - 1; i >= 0; i--){
            updateListCards.push(<UpdateListCard update={up[i]}/>);
        }
        return updateListCards;
    }

    return (
        <div className="row justify-content-center my-2 row-2">
            <h2 className="col-12 text-center">Updates</h2>
            {renderUpdateListCards(updates)}
        </div>

    )

}

export default UpdateList;