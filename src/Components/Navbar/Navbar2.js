// Accessing context value another way

import React, {useContext} from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const Navbar2 = () => {
    return (
        <ThemeContext.Consumer>
            {
                (context) => {
                    const allContext = context;
                    console.log(allContext);

                    const {isLightTheme, darkTheme, lightTheme} = allContext;

                    console.log("isLightTheme: ", isLightTheme);
                    console.log("darkTheme: ", darkTheme);
                    console.log("lightTheme: ", lightTheme);

                    const theme = isLightTheme ? lightTheme : darkTheme;

                    const myStyle = {
                        background: theme.ui,
                        color: theme.syntax
                    };

                    return (<nav style={myStyle}>
                            <h1>Context App</h1>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contract</li>
                            </ul>
                        </nav>)
                }
            }
        </ThemeContext.Consumer>
    );
};

export default Navbar2;