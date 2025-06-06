import React from 'react'

export default function DjangoViews() {
  return (
    <>
      <div className="python-container">
        <h1>👁️ Django Views</h1>
        
        <p>
          Django Views are Python functions or classes that handle web requests and return web responses. 
          They are the core of Django's request-response cycle and can be implemented as function-based 
          views (FBVs) or class-based views (CBVs).
        </p>

        <h2>✨ Function-Based Views</h2>
        <pre>
          <code>
{`from django.shortcuts import render, get_object_or_404
from .models import Product

def product_list(request):
    products = Product.objects.all()
    return render(request, 'products/list.html', {
        'products': products
    })

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'products/detail.html', {
        'product': product
    })

def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            product = form.save()
            return redirect('product_detail', pk=product.pk)
    else:
        form = ProductForm()
    return render(request, 'products/form.html', {
        'form': form
    })`}
          </code>
        </pre>

        <h2>📝 Class-Based Views</h2>
        <pre>
          <code>
{`from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

class ProductListView(ListView):
    model = Product
    template_name = 'products/list.html'
    context_object_name = 'products'
    paginate_by = 10

class ProductDetailView(DetailView):
    model = Product
    template_name = 'products/detail.html'
    context_object_name = 'product'

class ProductCreateView(CreateView):
    model = Product
    form_class = ProductForm
    template_name = 'products/form.html'
    success_url = reverse_lazy('product_list')

class ProductUpdateView(UpdateView):
    model = Product
    form_class = ProductForm
    template_name = 'products/form.html'
    success_url = reverse_lazy('product_list')

class ProductDeleteView(DeleteView):
    model = Product
    template_name = 'products/confirm_delete.html'
    success_url = reverse_lazy('product_list')`}
          </code>
        </pre>

        <h2>✨ View Mixins</h2>
        <pre>
          <code>
{`from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

class StaffRequiredMixin(UserPassesTestMixin):
    def test_func(self):
        return self.request.user.is_staff

class ProductCreateView(LoginRequiredMixin, StaffRequiredMixin, CreateView):
    model = Product
    form_class = ProductForm
    template_name = 'products/form.html'
    success_url = reverse_lazy('product_list')

    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)`}
          </code>
        </pre>

        <h2>📝 View Decorators</h2>
        <pre>
          <code>
{`from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.views.decorators.cache import cache_page

@login_required
@require_http_methods(["GET", "POST"])
@cache_page(60 * 15)  # Cache for 15 minutes
def product_list(request):
    products = Product.objects.all()
    return render(request, 'products/list.html', {
        'products': products
    })`}
          </code>
        </pre>

        <h2>✨ Form Handling</h2>
        <pre>
          <code>
{`from django.shortcuts import render, redirect
from django.contrib import messages

def create_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST, request.FILES)
        if form.is_valid():
            product = form.save()
            messages.success(request, 'Product created successfully!')
            return redirect('product_detail', pk=product.pk)
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = ProductForm()
    
    return render(request, 'products/form.html', {
        'form': form
    })`}
          </code>
        </pre>

        <h2>📝 API Views</h2>
        <pre>
          <code>
{`from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import ProductSerializer

class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]`}
          </code>
        </pre>

        <h2>✨ View Context</h2>
        <pre>
          <code>
{`class ProductListView(ListView):
    model = Product
    template_name = 'products/list.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.all()
        context['total_products'] = Product.objects.count()
        return context

    def get_queryset(self):
        queryset = super().get_queryset()
        category = self.request.GET.get('category')
        if category:
            queryset = queryset.filter(category=category)
        return queryset`}
          </code>
        </pre>

        <h2>📝 Best Practices</h2>
        <ul>
          <li>Use class-based views for common patterns</li>
          <li>Keep views focused and single-purpose</li>
          <li>Use mixins for reusable functionality</li>
          <li>Implement proper access control</li>
          <li>Handle forms and validation properly</li>
          <li>Use appropriate HTTP methods</li>
          <li>Implement proper error handling</li>
        </ul>

        <h2>🎥 Video Tutorial: Django Views</h2>
        <div style={{marginBottom: "1em"}}>
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/3PcRcfw9WqA"
            title="Django Views"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
} 