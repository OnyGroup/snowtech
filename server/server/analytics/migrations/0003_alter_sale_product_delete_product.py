# Generated by Django 5.1.5 on 2025-02-19 08:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0002_alter_sale_customer'),
        ('ecommerce', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sale',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sales', to='ecommerce.product'),
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
