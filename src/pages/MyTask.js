import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyTask.css';
import SimpleMap from '../content/map';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getDownloadURL, ref } from 'firebase/storage';
import storage from '../firebase_setup/firebase';
import GPS from '../content/gps';

const points = [
  { name: "1", position: { lat: 43.634657, lng: -79.522378 } },
  { name: "2", position: { lat: 43.642567, lng: -79.387054 } },
  { name: "3", position: { lat: 43.725600, lng: -79.452700 } },
  { name: "4", position: { lat: 43.754300, lng: -79.517300 } },
  { name: "5", position: { lat: 43.592760, lng: -79.643437 } },
]

function MyTask() {
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate();
  const today = new Date();

  const navigateCamera = () => {
    const lat = document.getElementById("lat");
    const long = document.getElementById("long");
    navigate('home');
    // we are not proud of this but time is running out
    if ((lat === points[1]["position"][0] || lat === points[2]["position"][0] || lat ===points[3]["position"][0] || lat === points[4]["position"][0] || lat === points[5]["position"][0])&& 
    (long === points[1]["position"][1] || long === points[2]["position"][1] || long === points[3]["position"][1] || long === points[4]["position"][1] || long === points[5]["position"][1])){
      navigate('home');
    }
    else{
      navigate('home');
      alert("You are not at this location.")  
      
    }

  };
  const user = getAuth().currentUser;
  if (user !== null) {
    var monthSelected = date.getMonth();
    var daySelected = date.getDate();
    /* also doesnt work
    try{
    var change = document.getElementById('taskcomplete');
    change.setAttribute('className', 'text-null');
    if (date.getDate() > today.getDate()) {
      change.setAttribute('className', 'text-center')
;    } else {
      change.setAttribute('className', 'text-null');
    }
    
    }catch(e)
    {
      console.log(e);
    }
    */
    getDownloadURL(ref(storage, `gs://berealocated-58df8.appspot.com/files/${user.email}/${monthSelected}${daySelected}.png`))
      .then((url) => {
        var img = document.getElementById('view');
        img.setAttribute('src', url);
        img.setAttribute('className', "image-style");
      })
      .catch((error) => {
        var img = document.getElementById('view');
        img.setAttribute('src', null);
        img.setAttribute('className', "null-style");
        // Handle any errors
        img = null;
      });

  }



  return (
    <div>

      <div className="body-text-center"> ⭐ Today is {today.toDateString()} ⭐</div>
      <div className="task-header">Upcoming Tasks</div>
      <div className="body-text">View completed and today's assigned location on a map.</div>
      <SimpleMap />
      <div  className='text-center'>Your current location is</div><GPS></GPS><button className="button-camera" onClick={navigateCamera}>Take a picture</button>
      <div className="calendar-container">
        <div className="task-header">My Previous Tasks</div>
        <Calendar className="e.calendar" onChange={setDate} value={date} />
      </div>
      <div id="taskcomplete" className='text-center'>
        If you completed the task on {date.toDateString()}, your image will appear below:
        <img id="view" className='image-style' alt=" Nothing Here"></img>
      </div>
    </div>
  );
}
export default MyTask;