console.log('this is test')
let decLiteral: number = 6;
console.log(decLiteral)

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
// import Routes from './routers'
import { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
const home = lazy(() => import('./pages/Home'))
// const msg = lazy(() => import('./pages/Msg'))
// const msg = import('./pages/Msg') //  'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
console.log(home)
console.log(ReactDOM)
ReactDOM.render(
  <div>asda</div>,
  document.getElementById('root')
)
//ReactDOM.render(
//<Provider store={configureStore()}>
//    <Routes />
//</Provider>,
//document.getElementById('root'),
//)