import React, {useContext} from 'react';
import themeContext from './themeContext';

function ThemeToggler(){
    const [themeMode, setThemeMode] = useContext(themeContext)
    const plusAmount = useContext(themeContext)
    return(
        <div style= {{cursor: "pointer"}} onClick={()=>{setThemeMode(themeMode === "light" ? `dark` : `light`)}}>
            <span title="switch theme">
                {themeMode === "light" ? "🌙" : "☀️"}
            </span>
            <p>{plusAmount}</p>
        </div>
    )
}
export default ThemeToggler;