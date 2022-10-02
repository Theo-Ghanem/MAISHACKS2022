#app/main.py

from urllib import response
from flask_cors import CORS, cross_origin
from flask import Flask, flash, request, redirect, url_for, session, jsonify
import os
from numpy import append
from utils.similarities import getSimilarity
from utils.parseDocx import parseDocx
from werkzeug.utils import secure_filename
import openai
from io import BytesIO
from utils.insertKeys import finishResume
from utils.parseDescription import getKeywords


app = Flask(__name__)
CORS(app)
# flask_cors.CORS(app, expose_headers='Authorization')
@app.route("/")
def home_view():
    return "<h1>Hello World!</h1>"


@app.route('/similarity', methods = ['POST'])
@cross_origin()
def similarity():
    data = getSimilarity(request.json['words'], request.json['sentences'])
    return jsonify(data)

@app.route('/insertKeys', methods = ['POST'])
@cross_origin
def insertKeys():
    response = []
    for i in range(len(request.json)):
        fixedPhrase = finishResume(request.json[i]['words'], request.json[i]['paragraph'])
        response.append(fixedPhrase)
    
    return jsonify(response)
@app.route('/description', methods = ['POST'])
@cross_origin()
def parseDesc():
    des = request.json['description']
    response = getKeywords(des)
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

# @app.route('/upload', methods = ['GET', 'POST'])
# def fileUpload():
#    if request.method == 'POST':
#       f = request.files['file']
#       f.save(secure_filename(f.filename))
#       text = parseDocx('')
#       return text

@app.route('/upload', methods=['POST'])
@cross_origin()
def uploadResume():
    # d = {}
    file = request.files
    return file
    # try:
        
    #     file = request.files['file_from_react']
    #     filename = file.filename
    #     print(f"Uploading file {filename}")
    #     file_bytes = file.read()
    #     file_content = BytesIO(file_bytes).readlines()
    #     print(file_content)
    #     d['status'] = 1

    # except Exception as e:
    #     print(f"Couldn't upload file {e}")
    #     d['status'] = 0

    # return parseDocx(filename)


# if __name__ == "__main__":
#     app.secret_key = os.urandom(24)
#     app.run(debug=True,host="0.0.0.0",use_reloader=False)


