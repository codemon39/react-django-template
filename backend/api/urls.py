from rest_framework import routers

from backend.api.views import ProductViewSet

router = routers.DefaultRouter()
router.register('products', ProductViewSet)

urlpatterns = router.urls
