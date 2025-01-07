"""
ASGI config for backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/dev/howto/deployment/asgi/

"""

import os
import sys
from pathlib import Path

from django.core.asgi import get_asgi_application

BASE_DIR = Path(__file__).resolve(strict=True).parent.parent
sys.path.append(str(BASE_DIR / "backend"))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.local")

django_application = get_asgi_application()

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from .tokenauth_middleware import TokenAuthMiddleware
from chat import routing


application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AllowedHostsOriginValidator(
        TokenAuthMiddleware(
            URLRouter(
                routing.websocket_urlpatterns
            )
        )
    ),
})