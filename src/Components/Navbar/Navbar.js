import React, {useContext} from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { ThemeContext } from '../../Contexts/ThemeContext';

const Navbar = () => {
    const allContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);

    console.log(authContext);

    const {isLightTheme, darkTheme, lightTheme} = allContext;
    const {isAuthenticated, toogleAuth} = authContext;

    const theme = isLightTheme ? lightTheme : darkTheme;

    const myStyle = {
        background: theme.ui,
        color: theme.syntax
    }

    return (
        <nav style={myStyle}>
            <h1>Context App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contract</li>
            </ul>
        </nav>
    );
};

export default Navbar;