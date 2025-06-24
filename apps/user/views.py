from inertia import render
from django.views import View


class LoginView(View):
    def get(self, request):
        return render(request, 'Login', props={
            'title': 'Страница входа',
        })
