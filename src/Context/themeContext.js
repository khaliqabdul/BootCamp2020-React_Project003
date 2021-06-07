import React from 'react'

const themeContext = React.createContext(["light", () => {}]);
const plusAmount = React.createContext();

export default themeContext;
export {plusAmount};

