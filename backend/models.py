from django.db import models
from django.utils import timezone


class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField(max_length=5000)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    archived = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.name

    def delete(self, using=None, keep_parents=False):
        self.archived = timezone.now()
        self.save(using=using)
