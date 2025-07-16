from django.shortcuts import render
from inertia import render as inertia_render


def index(request):
    return inertia_render(
        request,
        'Home',
        props={
            'message': 'Добро пожаловать!'
        }
    )
