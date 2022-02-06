import React, {useContext} from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const BookList = () => {
    const allContext = useContext(ThemeContext);
    console.log(allContext);

    const {isLightTheme, darkTheme, lightTheme} = allContext;

    console.log("isLightTheme: ", isLightTheme);
    console.log("darkTheme: ", darkTheme);
    console.log("lightTheme: ", lightTheme);

    const theme = isLightTheme ? lightTheme : darkTheme;

    const myStyle = {
        background: theme.bg,
        color: theme.syntax
    }

    return (
        <div className="book-list" style={myStyle}>
            <ul>
                <li style={{background: theme.ui}} >The way of kings</li>
                <li style={{background: theme.ui}} >The name of the wind</li>
                <li style={{background: theme.ui}} >The final empire</li>
            </ul>
        </div>
    );
};

export default BookList;