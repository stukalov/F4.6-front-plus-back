from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def rest_format(self):
        return {
            'id': self.pk,
            'name': self.name,
        }

    def __str__(self):
        return self.name


class Dish(models.Model):
    name = models.CharField(max_length=255)
    body = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='dish_category')

    def rest_format(self):
        return {
            'id': self.pk,
            'name': self.name,
            'body': self.body,
            'category': self.category.rest_format(),
        }

    def __str__(self):
        return self.name
