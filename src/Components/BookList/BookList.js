import React, {useContext} from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { ThemeContext } from '../../Contexts/ThemeContext';

const BookList = () => {
    const allContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);

    console.log('AuthContext: ', authContext);

    const {isLightTheme, darkTheme, lightTheme} = allContext;
    const {isAuthenticated, toogleAuth} = authContext;

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
                            <li style={{background: theme.ui}} >The way of kings</li>
                            <li style={{background: theme.ui}} >The name of the wind</li>
                            <li style={{background: theme.ui}} >The final empire</li>
                        </ul>
                    </div>
                    <button onClick={toogleAuth}>LogOut</button>
                </> : <button onClick={toogleAuth}>Login</button>
            }
        </>
    );
};

export default BookList;