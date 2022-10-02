#app/main.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import Flask, flash, request, redirect, url_for, session
import os
from numpy import append
from utils.similarities import getSimilarity
from utils.parseDocx import parseDocx
from werkzeug.utils import secure_filename
import openai

app = Flask(__name__)
CORS(app)

@app.route("/")
def home_view():
        return "<h1>Hello World!</h1>"


@app.route('/similarity', methods = ['POST'])
def similarity():
    data = getSimilarity(request.json['words'], request.json['sentences'])
    return jsonify(data)

@app.route('/insertKeys', methods = ['POST'])
def insertKeys():
    response = []
    for i in range(len(request.json)):
        req = insertKeys(request.json[i]['words'], request.json[i]['paragraph'])
        fixedPhrase = openai.Completion.create(model="text-davinci-002", prompt=req, temperature=0, max_tokens=100)
        response.append(fixedPhrase)
    
    return jsonify(response)
# import os
# from flask import Flask, flash, request, redirect, url_for, session
# from werkzeug.utils import secure_filename
# from flask_cors import CORS, cross_origin
# import logging

# logging.basicConfig(level=logging.INFO)

# logger = logging.getLogger('HELLO WORLD')

# UPLOAD_FOLDER = '/frontend/src/files'
# ALLOWED_EXTENSIONS = set(['docx', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# @app.route('/upload', methods=['POST'])
# def fileUpload():
#     target=os.path.join(UPLOAD_FOLDER,'test_docs')
#     if not os.path.isdir(target):
#         os.mkdir(target)
#     # logger.info("welcome to upload`")
#     file = request.files['file'] 
#     filename = secure_filename(file.filename)
#     destination="/".join([target, filename])
#     file.save(destination)
#     session['uploadFilePath']=destination
#     response="Whatever you wish to return"
#     return response

@app.route('/upload', methods = ['GET', 'POST'])
def fileUpload():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      text = parseDocx('')
      return text


# if __name__ == "__main__":
#     app.secret_key = os.urandom(24)
#     app.run(debug=True,host="0.0.0.0",use_reloader=False)

# flask_cors.CORS(app, expose_headers='Authorization')
