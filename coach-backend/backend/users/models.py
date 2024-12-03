from typing import ClassVar

from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db.models import CharField, EmailField
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from .managers import UserManager


class EncryptedUserManager(BaseUserManager):
    """Custom manager for the User model."""
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    """Custom User model."""

    USER_TYPE_CHOICES = [
        ("User", _("Coach")),
        ("Client", _("Client")),
    ]

    fullname = CharField(_("Full Name"), max_length=255, default="John Doe")
    user_type = CharField(_("User Type"), max_length=50, choices=USER_TYPE_CHOICES, default="Client")
    phone_number = models.CharField(_("Phone Number"), max_length=20, blank=True)
    email = EmailField(_("Email Address"), unique=True)
    username = None  # Remove the default username field
    profile_info = models.TextField(_("Profile Information"), blank=True)
    user_image = models.ImageField(
        _("User Image"),
        upload_to="user_images/",
        null=True,
        blank=True,
    )
    email_verified = models.BooleanField(_("Email Verified"), default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects: ClassVar[UserManager] = UserManager()

    def get_absolute_url(self) -> str:
        """Get URL for user's detail view."""
        return reverse("users:detail", kwargs={"pk": self.id})

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
