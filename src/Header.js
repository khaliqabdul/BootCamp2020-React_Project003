import React, { useContext } from 'react';
import themeContext from './Context/themeContext';
import AppTheme from './Context/Colors';


function Header(){
    const fvalue = useContext(themeContext)[0];
    const currentTheme = AppTheme[fvalue]
    
    return(
            
            <header style = {{
                backgroundColor: `${currentTheme.backgroundColor}`,
                color: `${currentTheme.color}`
                }}>
                <h1>Abdul khaliq Azeemi </h1>
            </header>
            
        
    )
}
export default Header;