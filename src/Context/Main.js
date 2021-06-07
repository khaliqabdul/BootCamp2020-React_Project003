import React, { useContext } from "react";
import AppTheme from "./Colors";
import themeContext, {plusAmount} from "./themeContext";

function Main(){
    const theme = useContext(themeContext)[0];
    const currentTheme = AppTheme[theme]

    const amount = useContext(plusAmount)
    return(
        <main style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.color}`
            }}>
            <h1>Heading 1 {theme}</h1>
            <h2>Rs {amount}</h2>
            <input type="text" />
        </main>
    )
}
export default Main;