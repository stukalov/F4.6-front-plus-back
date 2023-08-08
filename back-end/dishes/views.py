from django.urls import reverse
from django.http import HttpResponseRedirect
from rest_framework import serializers, generics, filters

from .models import Category, Dish


def index(request):
    return HttpResponseRedirect(reverse('dishes__openapi'))


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ['id', 'name', 'body', 'category']
        depth = 2


class DishFilter(filters.BaseFilterBackend):

    def filter_queryset(self, request, queryset, view):
        category = request.query_params.get('category')
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset

    def get_schema_operation_parameters(self, view):
        return [
            {
                'in': 'query',
                'name': 'category',
                'description': 'pass an optional id of category for filtering',
                'required': False,
                'schema': {
                    'type': 'integer',
                },
            },
        ]


class DishList(generics.ListAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    filter_backends = [DishFilter]

    # def get_queryset(self):
    #     queryset = Dish.objects.all()
    #     category = self.request.query_params.get('category')
    #     if category is not None:
    #         queryset = queryset.filter(category=category)
    #     return queryset


class DishItem(generics.RetrieveAPIView):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

