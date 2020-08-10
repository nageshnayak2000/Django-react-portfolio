from django.db import models

class Item(models.Model):
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=50)
    image = models.ImageField()
    page = models.IntegerField()

    def __str__(self):
        return self.image.url
