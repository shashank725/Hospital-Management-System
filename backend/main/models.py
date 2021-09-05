from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Room(models.Model):
    room_no = models.IntegerField()
    beds = models.IntegerField()
    floor = models.IntegerField()

    def __str__(self):
        return self.room_no


class Docter(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='doctor/', null=True, blank=True)
    license_no = models.CharField(max_length=100)
    dob = models.DateField()
    age = models.IntegerField()
    phone_no = models.IntegerField(max_length=10)
    aadhar_card = models.IntegerField(max_length=16)
    email_id = models.EmailField()
    gender_choice = [
        ('Male':'Male'),
        ('Female':'Female'),
        ('Other':'Other')]
    gender = models.CharField(max_length=10, choices=gender_choice)
    address = models.TextField(max_length=200)

    def __str__(self):
        return self.name


class Patient(models.Model):
    uhid = models.CharField(unique=True, max_length=100, null=True)
    image = models.ImageField(upload_to='patient/', null=True, blank=True)
    name = models.CharField(max_length=100)
    dob = models.DateField(null=True)
    age = models.IntegerField(null=True)
    gender_choice = [
        ('Male':'Male'),
        ('Female':'Female'),
        ('Other':'Other')]
    gender = models.CharField(max_length=10, choices=gender_choice, null=True)
    martitial_status_choices = [
        ('Single':'Single'),
        ('Married':'Married')]
    martitial_status = models.CharField(max_length=50, choices=martitial_status_choices, null=True)
    phone_no = models.IntegerField(max_length=10, null=True)
    aadhar_card = models.IntegerField(max_length=16, null=True)
    email_id = models.EmailField(null=True)
    profile_created = models.DateTimeField(auto_now_add=True)
    address = models.TextField(max_length=200, null=True)
    district = models.CharField(max_length=100, null=True)
    state_choices = [
        ('Andaman and Nicobar Islands':'Andaman and Nicobar Islands'), 
        ('Chandigarh':'Chandigarh'), 
        ('Dadra and Nagar Haveli and Daman & Diu': 'Dadra and Nagar Haveli and Daman & Diu'), 
        ('Delhi':'Delhi'),
        ('Jammu & Kashmir':'Jammu & Kashmir'), 
        ('Ladakh':'Ladakh'),
        ('Lakshadweep':'Lakshadweep'),
        ('Puducherry':'Puducherry'),
        ('Andhra Pradesh':'Andhra Pradesh'), 
        ('Arunachal Pradesh':'Arunachal Pradesh'),
        ('Assam':'Assam'),
        ('Bihar':'Bihar'),
        ('Chhattisgarh':'Chhattisgarh'),
        ('Goa':'Goa'),
        ('Gujarat':'Gujarat'),
        ('Haryana':'Haryana'),
        ('Himachal Pradesh','Himachal Pradesh'),
        ('Jharkhand':'Jharkhand'),
        ('Karnataka':'Karnataka'),
        ('Kerala':'Kerala'),
        ('Maharashtra':'Maharashtra'),
        ('Manipur':'Manipur'),
        ('Meghalaya':'Meghalaya'),
        ('Mizoram':'Mizoram'),
        ('Nagaland':'Nagaland'),
        ('Odisha':'Odisha'),
        ('Punjab':'Punjab'),
        ('Rajasthan':'Rajasthan'),
        ('Sikkim':'Sikkim'),
        ('Tamil Nadu':'Tamil Nadu'),
        ('Telangana':'Telangana'),
        ('Tripura':'Tripura'),
        ('Uttarakhand':'Uttarakhand'),
        ('Uttar Pradesh':'Uttar Pradesh'),
        ('West Bengal':'West Bengal')]
    state = models.CharField(max_length=100, choices=state_choices)
    pincode = models.IntegerField(max_length=6)
    bills = models.ManyToManyField(Bill)

    def save(self, *args, **kwargs):
        if self.UID is None:
            self.UID = str(self.id) + self.profile_created.strftime('HMS%Y%m%d')
            return super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.UID} {self.name}'


class Appointment(models.Model):
    patient = models.ForeignKey(Patient, null=True, on_delete=models.SET_NULL)
    docter = models.ForeignKey(Docter, on_delete=models.SET_NULL)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return '%s From %d' %(self.patient, self.time)

class Bill(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL)
    appointment = models.ForeignKey(Appointment, on_delete=models.SET_NULL)
    created_on = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField()
    payment_status_choices = [
        ('SUCCESS', 'SUCCESS'),
        ('FAILURE', 'FAILURE'),
        ('PENDING', 'PENDING')]
    payment_status = models.CharField(max_length=10, choices=payment_status_choices, default='Pending')

    def __str__(self):
        return f'{self.patient} {self.created_on}'

    
class HousePatient(models.Model):
    name = models.ForeignKey(Patient, on_delete=models.SET_NULL)
    bed_no = models.IntegerField()
    admitted_on = models.DateTimeField()
    admitted_by = models.ForeignKey(Docter, on_delete=models.SET_NULL)
    status_choices = [
        ('Criticale', 'Criticale'),
        ('Stable', 'Stable'),
        ('Safe', 'Safe')]
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.name

