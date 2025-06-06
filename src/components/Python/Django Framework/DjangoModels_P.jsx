import React from 'react'

export default function DjangoModels() {
  return (
    <>
      <div className="python-container">
        <h1>📊 Django Models</h1>
        
        <p>
          Django Models are Python classes that represent database tables. They provide an abstraction 
          layer for database operations and include built-in validation, relationships, and querying 
          capabilities.
        </p>

        <h2>✨ Basic Model Definition</h2>
        <pre>
          <code>
{`from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'`}
          </code>
        </pre>

        <h2>📝 Field Types</h2>
        <ul>
          <li>
            <strong>CharField:</strong> For short text
            <pre>
              <code>
{`name = models.CharField(max_length=100, unique=True)`}
              </code>
            </pre>
          </li>
          <li>
            <strong>TextField:</strong> For long text
            <pre>
              <code>
{`description = models.TextField(blank=True)`}
              </code>
            </pre>
          </li>
          <li>
            <strong>IntegerField:</strong> For whole numbers
            <pre>
              <code>
{`quantity = models.IntegerField(default=0)`}
              </code>
            </pre>
          </li>
          <li>
            <strong>DecimalField:</strong> For decimal numbers
            <pre>
              <code>
{`price = models.DecimalField(max_digits=10, decimal_places=2)`}
              </code>
            </pre>
          </li>
          <li>
            <strong>DateTimeField:</strong> For dates and times
            <pre>
              <code>
{`created_at = models.DateTimeField(auto_now_add=True)`}
              </code>
            </pre>
          </li>
        </ul>

        <h2>✨ Model Relationships</h2>
        <pre>
          <code>
{`# One-to-Many Relationship
class Category(models.Model):
    name = models.CharField(max_length=100)

class Product(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='products'
    )

# Many-to-Many Relationship
class Tag(models.Model):
    name = models.CharField(max_length=50)

class Article(models.Model):
    title = models.CharField(max_length=200)
    tags = models.ManyToManyField(Tag)

# One-to-One Relationship
class UserProfile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    bio = models.TextField()`}
          </code>
        </pre>

        <h2>📝 Model Methods</h2>
        <pre>
          <code>
{`class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20)

    def calculate_total(self):
        return sum(item.price for item in self.items.all())

    @property
    def is_paid(self):
        return self.status == 'paid'

    def save(self, *args, **kwargs):
        if not self.total_amount:
            self.total_amount = self.calculate_total()
        super().save(*args, **kwargs)`}
          </code>
        </pre>

        <h2>✨ Model Validation</h2>
        <pre>
          <code>
{`from django.core.validators import MinValueValidator, MaxValueValidator

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ]
    )
    comment = models.TextField()

    def clean(self):
        if self.rating < 1 or self.rating > 5:
            raise ValidationError('Rating must be between 1 and 5')`}
          </code>
        </pre>

        <h2>📝 Model Managers</h2>
        <pre>
          <code>
{`class ProductManager(models.Manager):
    def active(self):
        return self.filter(is_active=True)
    
    def expensive(self):
        return self.filter(price__gt=100)

class Product(models.Model):
    # ... fields ...
    
    objects = ProductManager()

# Usage
Product.objects.active()
Product.objects.expensive()`}
          </code>
        </pre>

        <h2>✨ Database Migrations</h2>
        <pre>
          <code>
{`# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Show migration status
python manage.py showmigrations

# Create a specific migration
python manage.py makemigrations myapp --name add_product_category`}
          </code>
        </pre>

        <h2>📝 Best Practices</h2>
        <ul>
          <li>Use meaningful field names</li>
          <li>Set appropriate field constraints</li>
          <li>Use related_name for reverse relationships</li>
          <li>Implement proper model methods</li>
          <li>Use model managers for common queries</li>
          <li>Keep models focused and single-purpose</li>
        </ul>

        <h2>🎥 Video Tutorial: Django Models</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/6oOHlcHkX2U"
            title="Django Models"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 