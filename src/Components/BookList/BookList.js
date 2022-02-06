import React, {useContext} from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { BooksContext } from '../../Contexts/BooksContext';

const BookList = () => {
    const allContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    const booksContext = useContext(BooksContext);

    console.log('AuthContext: ', authContext);

    const {isLightTheme, darkTheme, lightTheme} = allContext;
    const {isAuthenticated, toogleAuth} = authContext;
    const {books, setBooks} = booksContext;

    const theme = isLightTheme ? lightTheme : darkTheme;

    const myStyle = {
        background: theme.bg,
        color: theme.syntax
    }

    return (
        <>
            {
                isAuthenticated ? <>
                    <div className="book-list" style={myStyle}>
                        <ul>
                            {
                                books?.map(book => <>
                                    <li key={book.id} style={{background: theme.ui}}> {book.title} </li>
                                </>)
                            }
                        </ul>
                    </div>
                    <button onClick={toogleAuth}>LogOut</button>
                </> : <button onClick={toogleAuth}>Login</button>
            }
        </>
    );
};

export default BookList;