#app/main.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.similarities import getSimilarity

app = Flask(__name__)
CORS(app)

@app.route("/")
def home_view():
        return "<h1>Hello World!</h1>"


@app.route('/similarity', methods = ['POST'])
def similarity():
    data = getSimilarity(request.json['words'], request.json['sentences'])
    return jsonify(data)