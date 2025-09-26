from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from . import views

router = DefaultRouter()
router.register(r'menu', views.MenuViewSet)
router.register(r'booking/tables', views.BookingViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('', include(router.urls)),
]