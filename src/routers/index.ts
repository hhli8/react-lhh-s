import { Suspense, lazy } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const home = lazy(() => import('@/pages/Home'))
const mine = lazy(() => import('@/pages/Mine'))
const msg = lazy(() => import('@/pages/Msg'))

export default () => (
  <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/mine" component={mine} />
        <Route path="/msg" component={msg} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </BrowserRouter>
)
