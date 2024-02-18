from flask import Flask, request, jsonify
from flask_cors import CORS

import firebase_admin
from firebase_admin import db,credentials

cred = credentials.Certificate("firebase_cred.json")
firebase_admin.initialize_app(cred, {"databaseURL": "https://h4h2024-300a6-default-rtdb.firebaseio.com/"})

app = Flask(__name__)
CORS(app)


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


if __name__ == '__main__':
    app.run(debug=True)

db.reference("/user/Srivarsha_GC").update({"password":"Var","events":"abc"})