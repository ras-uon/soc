from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello from the polls index")