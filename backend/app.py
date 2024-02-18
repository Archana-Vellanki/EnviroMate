from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import firebase_admin
from firebase_admin import db, credentials

cred = credentials.Certificate("firebase_cred.json")
firebase_admin.initialize_app(
    cred, {"databaseURL": "https://h4h2024-300a6-default-rtdb.firebaseio.com/"})

app = Flask(__name__)
CORS(app)

activities = []

# @app.route('/', methods=['POST'])


@app.route('/login', methods=['POST'])
def login():
    # In a real application, you would validate the username and password
    # against a database or some other form of authentication.
    data = request.json
    print(data)
    if data['username'] == 'admin' and data['password'] == 'password':
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid username or password'}), 401


@app.route('/new-activity', methods=['POST'])
def create_activity():
    data = request.json
    print(data)
    # Extract individual fields from the activity data
    event_name = data['newActivity'].get('eventName')
    event_description = data['newActivity'].get('eventDescription')
    event_date = data['newActivity'].get('eventDate')
    event_time = data['newActivity'].get('eventTime')
    location = data['newActivity'].get('location')
    audience = data['newActivity'].get('audience')

    # Create a new activity dictionary
    activity = {
        'eventName': event_name,
        'eventDescription': event_description,
        'eventDate': event_date,
        'eventTime': event_time,
        'location': location,
        'audience': audience
    }
    activities.append(activity)
    if event_name != None:
        print("if")
        db.reference("/"+event_name).update({"event_desc": event_description, "event_date": event_date,
                                             "event_time": event_time, "event_loc": location, "event_aud": audience})
        return jsonify({'message': event_name + ' Activity created successfully'})
    else:
        print("else")
        return jsonify({'error': 'Invalid activity name'}), 400

    # return jsonify({'message': 'Activity created successfully'})
    # activity_name = data['newActivity']


if __name__ == '__main__':
    app.run(debug=True)
