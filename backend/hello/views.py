from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Greeting
from .utils.forms import UploadFileForm
from .utils.parseDocx import parseDocx
import logging
from django.core.files.storage import default_storage    
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
def upload(request):
    # resp = JsonResponse(parseDocx(request.body.resume))
    resp = {}
    if(request.method == 'POST'):
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            logger.info("form is valid")
            logger.info(request.FILES['file'])
       
        jsonBody = json.loads(request.body.decode('utf-8'))
        logger.info(json.dumps(jsonBody, separators=(',', ':')))
        resp = jsonBody["resume"]
        # resp['Access-Control-Allow-Origin'] = '*'
        print(resp)
    return HttpResponse(resp)
