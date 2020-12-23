from flask import Blueprint, render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required
from .models import User
from . import db

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('login.html')

@auth.route("/login", methods=["POST"])
def login_post():

    email = request.form.get('email')
    password = request.form.get('password')
    remember = True if request.form.get('remember') else False

    user = User.query.filter_by(email=email).first()

    # Revisar que el usuario exista
    # Usamos la contra, le pasamos un metodo hash (para encriptar) y la comparamos con la que tenemos en la db.
    if not user or not check_password_hash(user.password, password):
        flash('Revisa tus datos de ingreso e intenta de nuevo.')
        return redirect(url_for('auth.login')) # Si no hay usuario o la contraseña esta mal, refrescamos la página.
    
    login_user(user, remember=remember)
    return redirect(url_for("main.profile"))

@auth.route('/signup')
def signup():
    return render_template('signup.html')

@auth.route('/signup', methods=['POST'])
def signup_post():
    email = request.form.get('email')
    name = request.form.get('name')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first() # Filtramos por correo en la db, si encuentra algo es pq ya existe un usuario

    if user: # Si existe, le queremos avisar y enviarlo a /login (se hace en el html).
        flash('Este usuario ya existe')
        return redirect(url_for('auth.signup'))



    # Creamos una nueva instancia de User, esta clase pasa a ser una fila de la db gracias a la funcion db.session.add de SQLAlchemy que pasa de Clase a valores en la tabla user de la base de datos.
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))

    # Añadimos a la db
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('auth.login'))

@auth.route("/recovery")
def recovery():
    return render_template("recovery.html")

@auth.route("/recovery", methods=["POST"])
def recovery_post():
    email = request.form.get("email")

    user = User.query.filter_by(email=email).first()
    if user: # Si encontramos el usuario en la db, enviamos el correo.
        flash('¡Éxito! Se ha enviado un correo de recuperación')
        return redirect(url_for('auth.recovery'))
    else:
        flash("¡No se ha encontrado este correo!")
        return redirect(url_for('auth.recovery'))

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))