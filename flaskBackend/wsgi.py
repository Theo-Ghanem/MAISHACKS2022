#wsgi.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import os

from main import app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
    # app.run(debug=True, port=33507)
