# Generated by Django 2.2.16 on 2020-09-29 16:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dating', '0001_initial'),
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('inbox', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='message_inbox', to='dating.Inbox')),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='message_match', to='dating.Match')),
            ],
        ),
    ]
