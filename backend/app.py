from flask import Flask, request, jsonify, render_template
from flask_cors import CORS

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
    activity_name = data['newActivity']
    if activity_name:
        activities.append(activity_name)
        return jsonify({'message': activity_name + ' Activity created successfully'})
    else:
        return jsonify({'error': 'Invalid activity name'}), 400


if __name__ == '__main__':
    app.run(debug=True)
