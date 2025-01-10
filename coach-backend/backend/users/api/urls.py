from django.urls import path
from .views import LoginView, RegisterView, GetUserView, UpdateProfileView

urlpatterns = [
    path("login/", view=LoginView.as_view(), name="login"),
    path("register/", view=RegisterView.as_view(), name="register"),
    path("profile/update/", view=UpdateProfileView.as_view(), name="updateProfile"),
    path("profile/get/", view=GetUserView.as_view(), name="getUserInfo"),
]
