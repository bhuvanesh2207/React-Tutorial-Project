import React from 'react'

export default function DjangoIntro() {
  return (
    <>
      <div className="python-container">
        <h1>🚀 Introduction to Django Framework</h1>
        
        <p>
          Django is a high-level Python web framework that encourages rapid development and clean, 
          pragmatic design. It follows the Model-View-Template (MVT) architectural pattern and 
          provides a robust set of tools for building web applications.
        </p>

        <h2>✨ Key Features</h2>
        <ul>
          <li>Fast development with built-in admin interface</li>
          <li>Secure by default with protection against common attacks</li>
          <li>Scalable and maintainable architecture</li>
          <li>Batteries-included approach with many built-in features</li>
          <li>Excellent documentation and large community</li>
        </ul>

        <h2>📝 Installation and Setup</h2>
        <pre>
          <code>
{`# Create a virtual environment
python -m venv myenv
source myenv/bin/activate  # On Windows: myenv\\Scripts\\activate

# Install Django
pip install django

# Create a new project
django-admin startproject myproject
cd myproject

# Create a new app
python manage.py startapp myapp

# Run the development server
python manage.py runserver`}
          </code>
        </pre>

        <h2>✨ Project Structure</h2>
        <pre>
          <code>
{`myproject/
├── manage.py
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── myapp/
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    └── views.py`}
          </code>
        </pre>

        <h2>📝 Basic Configuration</h2>
        <pre>
          <code>
{`# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',  # Add your app here
]

# Database configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Static files configuration
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']`}
          </code>
        </pre>

        <h2>✨ MVT Architecture</h2>
        <ol>
          <li>
            <strong>Model:</strong> Database layer
            <pre>
              <code>
{`# models.py
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name`}
              </code>
            </pre>
          </li>
          <li>
            <strong>View:</strong> Business logic layer
            <pre>
              <code>
{`# views.py
from django.shortcuts import render
from .models import Product

def product_list(request):
    products = Product.objects.all()
    return render(request, 'myapp/product_list.html', {
        'products': products
    })`}
              </code>
            </pre>
          </li>
          <li>
            <strong>Template:</strong> Presentation layer
            <pre>
              <code>
{`<!-- templates/myapp/product_list.html -->
{% extends 'base.html' %}

{% block content %}
    <h1>Products</h1>
    <ul>
    {% for product in products %}
        <li>{{ product.name }} - ${{ product.price }}</li>
    {% endfor %}
    </ul>
{% endblock %}`}
              </code>
            </pre>
          </li>
        </ol>

        <h2>📝 URL Configuration</h2>
        <pre>
          <code>
{`# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.product_list, name='product_list'),
    path('products/<int:pk>/', views.product_detail, name='product_detail'),
]`}
          </code>
        </pre>

        <h2>✨ Django Admin</h2>
        <pre>
          <code>
{`# admin.py
from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'description')`}
          </code>
        </pre>

        <h2>📝 Forms and Validation</h2>
        <pre>
          <code>
{`# forms.py
from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'price', 'description']
        widgets = {
            'description': forms.Textarea(attrs={'rows': 4}),
        }

# views.py
def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product_list')
    else:
        form = ProductForm()
    return render(request, 'myapp/product_form.html', {'form': form})`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use Django's built-in security features</li>
          <li>Follow the DRY (Don't Repeat Yourself) principle</li>
          <li>Write tests for your applications</li>
          <li>Use Django's class-based views when appropriate</li>
          <li>Keep your code organized and modular</li>
          <li>Use Django's form validation</li>
        </ul>

        <h2>🎥 Video Tutorial: Getting Started with Django</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/F5mRW0jo-U4"
            title="Getting Started with Django"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 