import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
	typography: {
	  allVariants: {
		fontFamily: 'Kumbh Sans',
		textTransform: 'none',
		fontSize: 16,
	  },
	},
	palette: {
		primary: {
		  light: 'hsl(26, 100%, 55%)',
		  main: 'hsl(26, 100%, 55%)',
		  dark: 'hsl(26, 100%, 55%)',
		  contrastText: '#fff',
		},
	},
  });

export const Global = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Kumbh Sans';
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
        background-color: hsl(26, 100%, 55%);
        color: hsl(0, 0%, 100%);
        border: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        padding: 10px;
        border-radius: 8px;
        font-size: 14px;
    }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	<ThemeProvider theme={theme}>
    <App />
	<Global/>
	</ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
