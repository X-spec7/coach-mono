# Generated by Django 4.2.10 on 2024-12-27 11:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='chatmessage',
            options={'verbose_name': 'ChatMessage', 'verbose_name_plural': 'ChatMessages'},
        ),
    ]