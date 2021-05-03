import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';

import Axios from "axios";
import { Characters } from './component/Characters';
import { Search } from './component/Search';


const App = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [findCharacter, setFindCharacter] = useState(true);
    const [query, setQuery] = useState('');


    useEffect(() => {
        const fetchItem = async () => {
            try {
                const { data } = await Axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
                console.log(data);
                setItems(data);
                setLoading(false);
                if (data.length === 0 ) {
                    setFindCharacter(false);
                }
            } catch (err) {
                console.log(err, "Error")
            }
        }
        fetchItem();
    }, [query])


    return (
        <div className="container">
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <Characters items={items} isLoading={isLoading} findCharacter={findCharacter} />
        </div>
    )
}

export default App;
