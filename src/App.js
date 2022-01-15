import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favourites'
import AllmeetupsPage from './pages/AllMeetups'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllmeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
