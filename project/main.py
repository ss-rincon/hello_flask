from flask import Blueprint, render_template, redirect, url_for, request, flash
from flask_login import login_required, current_user
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@login_required
def profile():
    return render_template('profile.html', name=current_user.name)

@main.route("/cargar")
@login_required
def cargar():
    return render_template("cargar.html")

@main.route("/crud")
@login_required
def crud():
    return render_template("crud.html")

