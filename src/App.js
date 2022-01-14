import { Route } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favourites'
import AllmeetupsPage from './pages/AllMeetups'

function App() {
  return (
    <div>
      <Route path="/">
        <AllmeetupsPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favourites">
        <FavoritesPage />
      </Route>
    </div>
  )
}

export default App
