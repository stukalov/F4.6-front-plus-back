from django.urls import re_path
from rest_framework.schemas import get_schema_view

from .views import index, CategoryList, DishList, DishItem

dishes_urlpatterns = [
    re_path('^$', index, name='dishes'),
    re_path('^categories', CategoryList.as_view(), name='dishes__category'),
    re_path('^dishes', DishList.as_view(), name='dishes__dish_list'),
    re_path(r'^dish/(?P<pk>[0-9]+)', DishItem.as_view(), name='dishes__dish_item'),
    re_path(r'^openapi', get_schema_view(
        title="Dishes",
        version="1.0.0"
    ), name='dishes__openapi'),
]