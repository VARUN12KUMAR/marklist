# Generated by Django 3.0.1 on 2020-01-02 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0002_lead_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='marks',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='lead',
            name='email',
            field=models.CharField(max_length=500, unique=True),
        ),
    ]
