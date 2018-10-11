import React from "react"

const SVG = ({
    fill = "#000",
    width = "100%",
    className = ""
}) => (

    <svg
      width={width}
      viewBox="0 0 28 32"
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ""}`}>
      <path fill={fill} d="M13.4936 17.2425C13.5268 17.2425 13.5599 17.2425 13.5996 17.2425C13.6129 17.2425 13.6262 17.2425 13.6394 17.2425C13.6593 17.2425 13.6858 17.2425 13.7057 17.2425C15.6473 17.2094 17.2178 16.5268 18.3774 15.2214C20.9287 12.3454 20.5046 7.4152 20.4582 6.94471C20.2925 3.41272 18.6226 1.72292 17.2443 0.934355C16.2172 0.344585 15.0177 0.0265065 13.6792 0H13.6328C13.6262 0 13.6129 0 13.6063 0H13.5665C12.831 0 11.3864 0.119279 10.0014 0.907848C8.6098 1.69642 6.91338 3.38621 6.74771 6.94471C6.70133 7.4152 6.27722 12.3454 8.82847 15.2214C9.98151 16.5268 11.552 17.2094 13.4936 17.2425ZM8.51702 7.11038C8.51702 7.0905 8.52365 7.07062 8.52365 7.05736C8.74233 2.30607 12.1153 1.79582 13.5599 1.79582H13.5864C13.5996 1.79582 13.6195 1.79582 13.6394 1.79582C15.4286 1.83558 18.4702 2.56451 18.6756 7.05736C18.6756 7.07724 18.6756 7.09712 18.6823 7.11038C18.6889 7.15676 19.1528 11.6629 17.0455 14.0352C16.2105 14.9762 15.0973 15.4401 13.6328 15.4533C13.6195 15.4533 13.6129 15.4533 13.5996 15.4533C13.5864 15.4533 13.5798 15.4533 13.5665 15.4533C12.1087 15.4401 10.9888 14.9762 10.1604 14.0352C8.05978 11.6761 8.5104 7.15014 8.51702 7.11038Z"/>
      <path fill={fill} d="M27.2174 25.4198C27.2174 25.4132 27.2174 25.4066 27.2174 25.3999C27.2174 25.3469 27.2108 25.2939 27.2108 25.2343C27.171 23.9222 27.0848 20.8541 24.2089 19.8733C24.189 19.8667 24.1625 19.8601 24.1426 19.8534C21.154 19.0914 18.669 17.3684 18.6425 17.3486C18.2383 17.0636 17.6817 17.163 17.3967 17.5672C17.1118 17.9715 17.2112 18.5281 17.6154 18.8131C17.728 18.8926 20.3654 20.7281 23.6655 21.5764C25.2095 22.1264 25.3818 23.7764 25.4282 25.2873C25.4282 25.3469 25.4282 25.3999 25.4348 25.4529C25.4414 26.0493 25.4017 26.9704 25.2957 27.5006C24.2221 28.1102 20.0142 30.2175 13.6129 30.2175C7.23809 30.2175 3.00367 28.1036 1.92353 27.4939C1.8175 26.9638 1.77111 26.0427 1.78437 25.4463C1.78437 25.3933 1.79099 25.3403 1.79099 25.2806C1.83738 23.7698 2.00967 22.1197 3.55368 21.5697C6.85374 20.7215 9.49114 18.8793 9.60379 18.8064C10.008 18.5215 10.1074 17.9648 9.82247 17.5606C9.53753 17.1564 8.98089 17.057 8.57666 17.3419C8.55016 17.3618 6.07842 19.0847 3.07656 19.8468C3.05005 19.8534 3.03017 19.8601 3.01029 19.8667C0.134336 20.8541 0.0481901 23.9222 0.00843032 25.2276C0.00843032 25.2873 0.00843017 25.3403 0.00180353 25.3933C0.00180353 25.3999 0.00180353 25.4066 0.00180353 25.4132C-0.0048231 25.7578 -0.0114496 27.5271 0.339762 28.415C0.406028 28.5873 0.525308 28.7331 0.684347 28.8325C0.883146 28.9651 5.64769 32 13.6195 32C21.5914 32 26.3559 28.9584 26.5547 28.8325C26.7071 28.7331 26.833 28.5873 26.8993 28.415C27.2306 27.5337 27.224 25.7644 27.2174 25.4198Z"/>
    </svg>

)

export default SVG