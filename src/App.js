import { Route, Switch } from 'react-router-dom'
import MainNavigation from './components/layout/MainNavigation'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favourites'
import AllmeetupsPage from './pages/AllMeetups'

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact={true}>
          <AllmeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
