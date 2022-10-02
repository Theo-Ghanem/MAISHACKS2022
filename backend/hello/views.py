from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting
from utils.parseDocx import parseDocx
# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})

def upload(request):
    return parseDocx(request.body.resume)
