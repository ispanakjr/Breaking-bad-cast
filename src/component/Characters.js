import React from 'react'
import CharectersDetail from './CharectersDetail';
import { CircularProgress } from "@material-ui/core";

export const Characters = ({ isLoading, items, findCharacter }) => {
    return (
        isLoading ? <div className="center"><CircularProgress /></div> : (
            findCharacter ? <section className="cards">
            { items.map((card) => (<CharectersDetail card={card} />))}
        </section> : <h1 className="center">Character Not Found!</h1>
            
        )

    )
};
