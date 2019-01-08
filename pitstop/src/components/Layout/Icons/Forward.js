import React from 'react'

const SVG = ({
    fill = '#FFFFFF',
    width = '100%',
    className = ''
}) => (

        <svg
            width={width}
            viewBox="0 0 15 24"
            xmlns="http://www.w3.org/2000/svg"
            className={`svg-icon ${className || ""}`}>
            <path fill={fill} d="M14.084 13.705c-.12.121-.254.224-.392.313L4.39 23.32a2.325 2.325 0 0 1-3.287-3.288l8.01-8.011-8.05-8.053A2.324 2.324 0 1 1 4.348.68l9.343 9.343a2.313 2.313 0 0 1 1.07 1.997c.01.609-.213 1.22-.678 1.684z" />
        </svg>

    )

export default SVG
