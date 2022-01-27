from rest_framework import viewsets

from backend.api.serializers import ProductSerializer
from backend.models import Product


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
