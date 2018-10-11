import React from "react"

const SVG = ({
    fill = "#000",
    width = "100%",
    className = ""
}) => (

    <svg
        width={width}
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <path fill={fill}d="M38.3333 16.6667H24.1667C23.6667 16.6667 23.3333 16.3333 23.3333 15.8333V1.66667C23.3333 0.666667 22.6667 0 21.6667 0H18.3333C17.3333 0 16.6667 0.666667 16.6667 1.66667V15.8333C16.6667 16.3333 16.3333 16.6667 15.8333 16.6667H1.66667C0.666667 16.6667 0 17.3333 0 18.3333V21.6667C0 22.6667 0.666667 23.3333 1.66667 23.3333H15.8333C16.3333 23.3333 16.6667 23.6667 16.6667 24.1667V38.3333C16.6667 39.3333 17.3333 40 18.3333 40H21.6667C22.6667 40 23.3333 39.3333 23.3333 38.3333V24.1667C23.3333 23.6667 23.6667 23.3333 24.1667 23.3333H38.3333C39.3333 23.3333 40 22.6667 40 21.6667V18.3333C40 17.3333 39.3333 16.6667 38.3333 16.6667Z" />
    </svg>

)

export default SVG