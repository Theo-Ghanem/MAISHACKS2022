from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Greeting, File
from .utils.forms import UploadFileForm
from .utils.parseDocx import parseDocx
from .utils.similarities import getSimilarity
import logging
from django.core.files.storage import default_storage, FileSystemStorage   
from django.core.files.base import ContentFile

logger = logging.getLogger('app_api')
# Create your views here.
def index(request):
    return HttpResponse('Hello from Python!')
    # return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

@csrf_exempt 
def similarity(request):
    if request.method == 'POST':
        jsonBody = json.loads(request.body.decode('utf-8'))
        words = jsonBody['words']
        sentences = jsonBody['sentences']
        similarity = getSimilarity(words, sentences)
        return HttpResponse(similarity)
    return None

@csrf_exempt 
def get_file(request):
    logger.info(request.FILES['profile_pic'])
    myfile = request.FILES['profile_pic']
    fs = FileSystemStorage()
    filename = fs.save(myfile.name, myfile)
    uploaded_file_url = fs.url(filename)
    obj = File.objects.create(image=uploaded_file_url)
    if obj:
        return JsonResponse({"code":200,"msg":"success"})
    else:
        return JsonResponse({"code":500,"msg":"server error"})

# def upload(request):
#     # resp = JsonResponse(parseDocx(request.body.resume))
#     resp = {}
#     if(request.method == 'POST'):
#         form = UploadFileForm(request.POST, request.FILES)
#         if form.is_valid():
#             logger.info("form is valid")
#             logger.info(request.FILES['file'])
       
#         jsonBody = json.loads(request.body.decode('utf-8'))
#         logger.info(json.dumps(jsonBody, separators=(',', ':')))
#         resp = jsonBody["resume"]
#         # resp['Access-Control-Allow-Origin'] = '*'
#         print(resp)
#     return HttpResponse(resp)