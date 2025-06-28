from django.http import JsonResponse
from inertia import render


def users_list(request):
    try:
        # Тестовые данные
        test_users = [{'id': 1, 'username': 'testuser'}]

        # Вариант 1: Чистый JsonResponse для проверки
        # return JsonResponse({
        #     'component': 'Users',
        #     'props': {'users': test_users},
        #     'url': '/users/',
        #     'version': None
        # })

        # Вариант 2: Стандартный render Inertia
        return render(request, 'Users', props={'users': test_users})

    except Exception as e:
        print(f"Error in users_list: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)