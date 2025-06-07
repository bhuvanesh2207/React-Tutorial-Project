import React from 'react'
import { Link } from 'react-router-dom'

export default function DjangoFramework() {
  return (
    <>
      <div className="java-container">
        <h1>🔄 Django Framework</h1>
        
        <p>
          Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the Model-View-Template (MVT) architecture and provides a robust set of tools for building web applications.
        </p>

        

        <h2>✨ Models</h2>
        <pre>
          <code>
{`from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published_date = models.DateField()

    def __str__(self):
        return self.title`}
          </code>
        </pre>

        <h2>📝 Views</h2>
        <pre>
          <code>
{`from django.shortcuts import render
from .models import Book

def book_list(request):
    books = Book.objects.all()
    return render(request, 'book_list.html', {'books': books})`}
          </code>
        </pre>

        <h2>✨ Templates</h2>
        <pre>
          <code>
{`<h1>Book List</h1>
<ul>
{% for book in books %}
    <li>{{ book.title }} by {{ book.author }}</li>
{% endfor %}
</ul>`}
          </code>
        </pre>

        <h2>📝 URLs</h2>
        <pre>
          <code>
{`from django.urls import path
from . import views

urlpatterns = [
    path('books/', views.book_list, name='book_list'),
]`}
          </code>
        </pre>

        <h2>✨ Best Practices</h2>
        <ul>
          <li>Use Django's built-in admin interface for data management</li>
          <li>Leverage Django's ORM for database operations</li>
          <li>Follow the DRY (Don't Repeat Yourself) principle</li>
          <li>Use Django's security features to protect your application</li>
          <li>Document your code and API endpoints</li>
        </ul>

        <h2>🎥 Video Tutorial: Django Framework</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/your_video_id"
            title="Django Framework"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Sub Topics Section */}
        <div className="subtopics-section">
          <h2>📚 sub Topics</h2>
          <div>
            <Link to="/DjangoIntro_P"><p>Django Intro</p></Link>
            <Link to="/DjangoModels_P"><p>Django Models</p></Link>
            <Link to="/DjangoViews_P"><p>Django Views</p></Link>
          </div>
        </div>

      </div>
    </>
  )
} 