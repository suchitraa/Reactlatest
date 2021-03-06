import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import * as Firebase from "firebase/app"
import config from './config';


function NewmeetupPage() {

  
  // Initialize Firebase
  Firebase.initializeApp(config.firebase);
  function addmeetuphandler(meetupdata) {
    fetch(
      'DBURL/meetup.json',
      {
        method:'POST',
        body:JSON.stringify(meetupdata),
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  return (
    <section>
      <h1>Addnewmeetup</h1>
      <NewMeetupForm onAddMeetup={addmeetuphandler} />
    </section>
  );
}

export default NewmeetupPage;
