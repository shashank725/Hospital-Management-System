from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('login/', views.login, name='login'),
    path('register/', views.login, name='register'),
    path('admin_login/', views.login, name='adminlogin'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('staff/dashboard/', views.staffdashboard, name='staffdashboard'),
    path('dashboard/appointment/', views.appointment, name='appointment'),
    path('dashboard/appointment/book/', views.book, name='book'),
    path('staff/dashboard/appointment/', views.staffappointment, name='staffappointment'),
    path('staff/dashboard/appointment/book', views.staffbook, name='staffbook'),
    path('dashboard/details', views.details, name='details'),
    path('staff/dashboard/patient-list/', views.patientlist, name='patientlist'),
    path('staff/dashboard/doctor', views.doctor, name='doctor'),
    path('staff/dashboard/housepatient', views.housepatient, name='housepatient'),
    path('dashboard/bill', views.bill, name='bill'),
    path('staff/dashboard/bill', views.staffbill, name='staffbill'),
]