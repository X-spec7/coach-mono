# Generated by Django 4.2.10 on 2024-12-04 02:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='user',
            options={'verbose_name': 'User', 'verbose_name_plural': 'Users'},
        ),
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
        migrations.AddField(
            model_name='user',
            name='email_verified',
            field=models.BooleanField(default=False, verbose_name='Email Verified'),
        ),
        migrations.AddField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
        migrations.AddField(
            model_name='user',
            name='fullname',
            field=models.CharField(default='John Doe', max_length=255, verbose_name='Full Name'),
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='last name'),
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=20, verbose_name='Phone Number'),
        ),
        migrations.AddField(
            model_name='user',
            name='profile_info',
            field=models.TextField(blank=True, verbose_name='Profile Information'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_image',
            field=models.ImageField(blank=True, null=True, upload_to='user_images/', verbose_name='User Image'),
        ),
        migrations.AddField(
            model_name='user',
            name='user_type',
            field=models.CharField(choices=[('User', 'Coach'), ('Client', 'Client')], default='Client', max_length=50, verbose_name='User Type'),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='Email Address'),
        ),
    ]
