from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField()
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    archived = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def delete(self, using=None, keep_parents=False):
        if not self.archived:
            self.archived = True
            self.save(using=using)
