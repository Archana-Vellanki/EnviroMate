from flask import Flask, request, jsonify
from flask_cors import CORS

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
