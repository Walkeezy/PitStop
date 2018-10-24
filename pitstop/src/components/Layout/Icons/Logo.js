import React from 'react'

const SVG = ({
    fill = '#FFFFFF',
    fillHighlight = '#FACF5A',
    width = '100%',
    className = ''
}) => (

    <svg
        width={width}
        viewBox="0 0 107 34"
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ""}`}>
        <path fill={fill} d="M6.012 1.052C7.02 0.859999 8.088 0.715999 9.216 0.619998C10.368 0.499999 11.52 0.439999 12.672 0.439999C13.896 0.439999 15.024 0.583999 16.056 0.872C17.112 1.136 18.024 1.556 18.792 2.132C19.584 2.708 20.196 3.452 20.628 4.364C21.06 5.252 21.276 6.32 21.276 7.568C21.276 9.44 20.952 11.012 20.304 12.284C19.656 13.532 18.792 14.552 17.712 15.344C16.656 16.112 15.444 16.664 14.076 17C12.708 17.312 11.316 17.468 9.9 17.468C9.78 17.468 9.588 17.468 9.324 17.468C9.084 17.468 8.82 17.468 8.532 17.468C8.268 17.444 8.004 17.42 7.74 17.396C7.5 17.372 7.32 17.348 7.2 17.324L5.4 26H0.72L6.012 1.052ZM8.136 13.076C8.232 13.1 8.364 13.124 8.532 13.148C8.7 13.172 8.88 13.196 9.072 13.22C9.288 13.22 9.48 13.22 9.648 13.22C9.84 13.22 9.984 13.22 10.08 13.22C10.896 13.22 11.676 13.136 12.42 12.968C13.188 12.776 13.86 12.488 14.436 12.104C15.012 11.696 15.468 11.168 15.804 10.52C16.164 9.872 16.344 9.08 16.344 8.144C16.344 7.448 16.224 6.872 15.984 6.416C15.768 5.96 15.468 5.612 15.084 5.372C14.7 5.108 14.244 4.928 13.716 4.832C13.212 4.736 12.672 4.688 12.096 4.688C11.664 4.688 11.244 4.712 10.836 4.76C10.452 4.784 10.128 4.82 9.864 4.868L8.136 13.076ZM24.581 8H29.009L25.193 26H20.765L24.581 8ZM25.265 2.888C25.265 2.096 25.517 1.484 26.021 1.052C26.549 0.619999 27.209 0.403999 28.001 0.403999C28.769 0.403999 29.417 0.619999 29.945 1.052C30.497 1.484 30.773 2.096 30.773 2.888C30.773 3.656 30.497 4.268 29.945 4.724C29.417 5.156 28.769 5.372 28.001 5.372C27.209 5.372 26.549 5.156 26.021 4.724C25.517 4.268 25.265 3.656 25.265 2.888ZM31.3079 8H33.6479L34.3679 4.616L39.0839 3.284L38.0759 8H42.2879L41.4599 11.708H37.2839L35.5199 19.844C35.3759 20.492 35.3039 21.02 35.3039 21.428C35.3039 21.956 35.4239 22.316 35.6639 22.508C35.9039 22.7 36.2639 22.796 36.7439 22.796C37.1999 22.796 37.6079 22.748 37.9679 22.652C38.3519 22.556 38.7479 22.4 39.1559 22.184V25.496C38.8919 25.64 38.5679 25.784 38.1839 25.928C37.8239 26.048 37.4279 26.144 36.9959 26.216C36.5639 26.312 36.1199 26.384 35.6639 26.432C35.2079 26.48 34.7879 26.504 34.4039 26.504C33.1799 26.504 32.2319 26.228 31.5599 25.676C30.9119 25.1 30.5879 24.236 30.5879 23.084C30.5879 22.844 30.5999 22.592 30.6239 22.328C30.6719 22.064 30.7199 21.788 30.7679 21.5L32.8559 11.708H30.4439L31.3079 8ZM58.6072 5.876C58.1512 5.588 57.4792 5.3 56.5912 5.012C55.7032 4.7 54.7192 4.544 53.6392 4.544C53.0872 4.544 52.5472 4.604 52.0192 4.724C51.4912 4.82 51.0232 4.988 50.6152 5.228C50.2072 5.468 49.8832 5.78 49.6432 6.164C49.4032 6.548 49.2832 7.004 49.2832 7.532C49.2832 8.228 49.4992 8.816 49.9312 9.296C50.3632 9.776 50.9032 10.232 51.5512 10.664C52.2232 11.072 52.9312 11.492 53.6752 11.924C54.4432 12.356 55.1512 12.86 55.7992 13.436C56.4712 14.012 57.0232 14.708 57.4552 15.524C57.8872 16.316 58.1032 17.3 58.1032 18.476C58.1032 19.892 57.8512 21.116 57.3472 22.148C56.8672 23.156 56.1712 23.984 55.2592 24.632C54.3712 25.28 53.2912 25.748 52.0192 26.036C50.7712 26.348 49.3792 26.504 47.8432 26.504C47.0032 26.504 46.1992 26.456 45.4312 26.36C44.6872 26.264 43.9912 26.144 43.3432 26C42.6952 25.856 42.1192 25.7 41.6152 25.532C41.1352 25.34 40.7512 25.16 40.4632 24.992L42.8752 20.816C43.1152 20.96 43.4272 21.116 43.8112 21.284C44.1952 21.452 44.6272 21.608 45.1072 21.752C45.6112 21.896 46.1512 22.016 46.7272 22.112C47.3032 22.208 47.8792 22.256 48.4552 22.256C49.1272 22.256 49.7632 22.208 50.3632 22.112C50.9632 21.992 51.4792 21.812 51.9112 21.572C52.3672 21.308 52.7152 20.984 52.9552 20.6C53.2192 20.216 53.3512 19.736 53.3512 19.16C53.3512 18.512 53.1352 17.96 52.7032 17.504C52.2712 17.048 51.7192 16.616 51.0472 16.208C50.3992 15.8 49.6912 15.38 48.9232 14.948C48.1792 14.492 47.4712 13.964 46.7992 13.364C46.1512 12.764 45.6112 12.044 45.1792 11.204C44.7472 10.34 44.5312 9.296 44.5312 8.072C44.5312 6.68 44.7712 5.492 45.2512 4.508C45.7552 3.524 46.4272 2.72 47.2672 2.096C48.1072 1.472 49.0912 1.016 50.2192 0.727999C51.3472 0.439999 52.5592 0.295998 53.8552 0.295998C54.5512 0.295998 55.2472 0.331999 55.9432 0.403999C56.6392 0.476 57.2992 0.584 57.9232 0.727999C58.5472 0.847999 59.1232 1.004 59.6512 1.196C60.1792 1.364 60.6232 1.556 60.9832 1.772L58.6072 5.876ZM61.1907 8H63.5307L64.2507 4.616L68.9667 3.284L67.9587 8H72.1707L71.3427 11.708H67.1667L65.4027 19.844C65.2587 20.492 65.1867 21.02 65.1867 21.428C65.1867 21.956 65.3067 22.316 65.5467 22.508C65.7867 22.7 66.1467 22.796 66.6267 22.796C67.0827 22.796 67.4907 22.748 67.8507 22.652C68.2347 22.556 68.6307 22.4 69.0387 22.184V25.496C68.7747 25.64 68.4507 25.784 68.0667 25.928C67.7067 26.048 67.3107 26.144 66.8787 26.216C66.4467 26.312 66.0027 26.384 65.5467 26.432C65.0907 26.48 64.6707 26.504 64.2867 26.504C63.0627 26.504 62.1147 26.228 61.4427 25.676C60.7947 25.1 60.4707 24.236 60.4707 23.084C60.4707 22.844 60.4827 22.592 60.5067 22.328C60.5547 22.064 60.6027 21.788 60.6507 21.5L62.7387 11.708H60.3267L61.1907 8ZM71.642 20.168C71.642 18.272 71.906 16.544 72.434 14.984C72.986 13.424 73.706 12.092 74.594 10.988C75.506 9.884 76.55 9.032 77.726 8.432C78.926 7.808 80.174 7.496 81.47 7.496C82.622 7.496 83.594 7.676 84.386 8.036C85.178 8.396 85.814 8.876 86.294 9.476C86.798 10.076 87.158 10.76 87.374 11.528C87.59 12.296 87.698 13.088 87.698 13.904C87.698 15.776 87.434 17.492 86.906 19.052C86.378 20.588 85.67 21.908 84.782 23.012C83.894 24.116 82.862 24.98 81.686 25.604C80.51 26.204 79.274 26.504 77.978 26.504C76.85 26.504 75.89 26.324 75.098 25.964C74.306 25.58 73.646 25.088 73.118 24.488C72.614 23.888 72.242 23.216 72.002 22.472C71.762 21.704 71.642 20.936 71.642 20.168ZM76.214 19.556C76.214 21.716 76.994 22.796 78.554 22.796C79.13 22.796 79.694 22.544 80.246 22.04C80.798 21.536 81.29 20.876 81.722 20.06C82.154 19.244 82.49 18.32 82.73 17.288C82.994 16.256 83.126 15.224 83.126 14.192C83.126 13.232 82.958 12.5 82.622 11.996C82.31 11.468 81.71 11.204 80.822 11.204C80.246 11.204 79.682 11.444 79.13 11.924C78.578 12.404 78.086 13.04 77.654 13.832C77.222 14.6 76.874 15.488 76.61 16.496C76.346 17.504 76.214 18.524 76.214 19.556ZM92.6693 8H95.9453L95.7653 11.168H95.9093C96.2453 10.712 96.6293 10.268 97.0613 9.836C97.4933 9.38 97.9733 8.984 98.5013 8.648C99.0293 8.312 99.5933 8.036 100.193 7.82C100.793 7.604 101.441 7.496 102.137 7.496C103.361 7.496 104.345 7.916 105.089 8.756C105.833 9.596 106.205 10.916 106.205 12.716C106.205 14.756 105.929 16.628 105.377 18.332C104.849 20.012 104.129 21.464 103.217 22.688C102.329 23.888 101.273 24.824 100.049 25.496C98.8493 26.168 97.5893 26.504 96.2693 26.504C95.6453 26.504 95.0573 26.444 94.5053 26.324C93.9533 26.204 93.5453 26.048 93.2813 25.856L91.7333 33.2H87.3413L92.6693 8ZM94.0373 22.184C94.6373 22.592 95.3093 22.796 96.0533 22.796C96.7973 22.796 97.5053 22.544 98.1773 22.04C98.8493 21.536 99.4373 20.864 99.9413 20.024C100.469 19.184 100.877 18.212 101.165 17.108C101.477 15.98 101.633 14.804 101.633 13.58C101.633 12.884 101.465 12.32 101.129 11.888C100.817 11.432 100.385 11.204 99.8333 11.204C99.4013 11.204 98.9813 11.312 98.5733 11.528C98.1653 11.744 97.7813 12.02 97.4213 12.356C97.0613 12.668 96.7373 13.028 96.4493 13.436C96.1613 13.844 95.9093 14.24 95.6933 14.624L94.0373 22.184Z" />
        <path fill={fillHighlight} d="M25.265 2.88799C25.265 2.09599 25.517 1.48399 26.021 1.05199C26.549 0.619992 27.209 0.403992 28.001 0.403992C28.769 0.403992 29.417 0.619992 29.945 1.05199C30.497 1.48399 30.773 2.09599 30.773 2.88799C30.773 3.65599 30.497 4.26799 29.945 4.72399C29.417 5.15599 28.769 5.37199 28.001 5.37199C27.209 5.37199 26.549 5.15599 26.021 4.72399C25.517 4.26799 25.265 3.65599 25.265 2.88799Z" />
    </svg>

)

export default SVG
