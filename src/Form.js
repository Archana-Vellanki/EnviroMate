import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import './styles.css'; // Import the CSS file
import TimePicker from './TimePicker.js';


function EventForm() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState('12:00');
  const [location, setLocation] = useState('');
  const [audience, setAudience] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { eventName, eventDate, eventTime, location, audience });
  };

  return (
    <div className='form-container'>
      <h2 className="form-title">Event Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="eventName" className="form-label">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate" className="form-label">Event Date:</label>
          <DatePicker
            id="eventDate"
            selected={eventDate}
            onChange={date => setEventDate(date)}
            dateFormat="MMMM d, yyyy"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventTime" className="form-label">Event Time:</label>
          <TimePicker 
            id="eventTime"
            value={eventTime}
            onChange={time => setEventTime(time)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-label">Location:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Park Location</option>
            <option value="City Plaza Park">City Plaza Park</option>
            <option value="The Forge Garden">The Forge Garden</option>
            <option value="Santa Clara Farmers Market">Santa Clara Farmers Market</option>
            <option value="Mission Garden">Mission Garden</option>
            <option value="Larry J. Marsalli Park">Larry J. Marsalli Park</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="audience" className="form-label">Audience:</label>
          <select
            id="audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Audience</option>
            <option value="kids">Kids</option>
            <option value="adults">Adults</option>
            <option value="all">Open to All</option>
          </select>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
}

export default EventForm;
