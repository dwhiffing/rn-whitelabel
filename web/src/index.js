import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

const THEMES = {
  redlabel: {
    palette: {
      primary: {main: '#d21f3c'},
      secondary: {main: '#d21f3c'},
    },
  },
  greenlabel: {
    palette: {
      primary: {main: '#45704d'},
      secondary: {main: '#45704d'},
    },
  },
}

const selectedTheme = window.location.hash
  ? window.location.hash.replace('#', '').toLowerCase()
  : 'redlabel'

const theme = createMuiTheme(THEMES[selectedTheme])

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
