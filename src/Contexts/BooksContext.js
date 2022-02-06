import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const BooksContext = createContext();
const BooksContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'The way of Kings', id: uuidv4()},
        {title: 'The name of the wind', id: uuidv4()},
        {title: 'The final empire', id: uuidv4()}
    ]);

    return (
        <BooksContext.Provider value={{
            books, setBooks
        }}>
            
            {props.children}
        </BooksContext.Provider>
    );
};

export default BooksContextProvider;