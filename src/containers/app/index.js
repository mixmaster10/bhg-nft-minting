import { Suspense, lazy } from "react"
import Loading from "components/loading"

const AppRouter = lazy(() => import("router"))

const App = () => (
  <Suspense fallback={<Loading />}>
    <AppRouter />
  </Suspense>
)

export default App
