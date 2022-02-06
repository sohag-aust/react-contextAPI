import React, { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';

const ThemeToggle = () => {

    const {toogleTheme} = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toogleTheme}>Toogle The Theme</button>
        </div>
    );
};

export default ThemeToggle;