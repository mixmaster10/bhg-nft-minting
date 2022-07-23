import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Dashboard from "pages/dashboard"

import { ROUTERS } from "configurations"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTERS.DASHBOARD} component={Dashboard} />
    </Switch>
  </Router>
)

export default AppRouter
