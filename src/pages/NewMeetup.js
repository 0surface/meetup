import React from 'react'
import NewMeetupform from '../components/meetups/New MeetupForm'

const NewMeetupPage = () => {
  const { REACT_APP_FIREBASEAPIURL } = process.env

  const addMeetupHandler = (meetupData) => {
    let postUrl = REACT_APP_FIREBASEAPIURL + '/meetups.json'

    fetch(postUrl, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'content-type': 'application/json',
      },
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupform onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
