import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')

application = get_asgi_application()


# removed inbox. uncomment all code below to enable
# import os
# from django.core.asgi import get_asgi_application
# from channels.routing import ProtocolTypeRouter, URLRouter
# from channels.auth import AuthMiddlewareStack
# from channels.layers import get_channel_layer
# # from inbox.routing import websocket_urlpatterns
# # from inbox.middleware import JWTAuthMiddleware
# from call_center.routing import websocket_urlpatterns

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')

# application = ProtocolTypeRouter({
#     "http": get_asgi_application(),
#     "websocket":
#         AuthMiddlewareStack(
#             URLRouter(websocket_urlpatterns)
#         )
# })

# channel_layer = get_channel_layer()


# # original config with inbox. (to revisit)
# # application = ProtocolTypeRouter({
# #     "http": get_asgi_application(),
# #     "websocket": JWTAuthMiddleware(
# #         AuthMiddlewareStack(
# #             URLRouter(websocket_urlpatterns)
# #         )
# #     ),
# # })