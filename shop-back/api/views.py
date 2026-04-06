from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']
    ordering_fields = ['name', 'price']
    ordering = ['name']

    def get_queryset(self):
        queryset = Product.objects.all()

        category = self.request.query_params.get('category')
        is_active = self.request.query_params.get('is_active')

        if category:
            queryset = queryset.filter(category_id=category)

        if is_active is not None:
            if is_active.lower() == 'true':
                queryset = queryset.filter(is_active=True)
            elif is_active.lower() == 'false':
                queryset = queryset.filter(is_active=False)

        return queryset

    @action(detail=False, methods=['get'])
    def active(self, request):
        queryset = Product.objects.filter(is_active=True)

        category = request.query_params.get('category')
        if category:
            queryset = queryset.filter(category_id=category)

        search = request.query_params.get('search')
        if search:
            queryset = queryset.filter(name__icontains=search)

        ordering = request.query_params.get('ordering')
        if ordering in ['name', '-name', 'price', '-price']:
            queryset = queryset.order_by(ordering)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)