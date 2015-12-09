import './globals'
import 'babel-polyfill'
import Router from './components/router'
import ReactDom from 'react-dom'


ReactDom.render(<Router/>, document.getElementById('main'))
