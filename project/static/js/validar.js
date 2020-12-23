function validar_ingreso(){
       
    var ingreso_usuario = document.getElementById("usuario").value;
    var ingreso_contrasena = document.getElementById("contrasena").value;

    if (ingreso_usuario == "" || ingreso_usuario.length < 8){
        alert("El usuario debe tener mínimo 8 caracteres ");
        document.getElementById("usuario").focus();
        return false;
    } 
    
    if(ingreso_contrasena == "" || ingreso_contrasena.length<8){
        alert("La contraseña debe contener mínimo 8 caracteres ");
        document.getElementById("contrasena").focus();
        return false;
    }

}

function validar_recucontrasena(){
       
    var recu_usuario = document.getElementById("usuario").value;
    var recu_correo = document.getElementById("correo").value;

    if (recu_usuario == "" || recu_usuario.length < 8){
        alert("El usuario debe tener mínimo 8 caracteres ");
        document.getElementById("usuario").focus();
        return false;
    } 
    
    if(recu_correo == ""){
        alert("Debe digitar un correo ");
        document.getElementById("correo").focus();
        return false;
    }

}

function validar_formulario(){
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    

	
    if (nombre == ""){
        alert("El nombre no debe estar vacio ");
        document.getElementById("nombre").focus();
        return false;
    }

    if (usuario == "" || usuario.length < 8){
        alert("El usuario debe tener mínimo 8 caracteres ");
        document.getElementById("usuario").focus();
        return false;

    }
    if(contrasena == "" || contrasena.length<8){
        alert("La contraseña debe contener mínimo 8 caracteres ");
        document.getElementById("contrasena").focus();
        return false;
    }

    if (correo == ""){
        alert("Debe digitar un correo ");
        document.getElementById("correo").focus();
        return false;

    }

    if(correo !="" || contrasena != "" || usuario == "" ||nombre == ""){

        if (confirm("Registro exitoso. ¿Desea continuar?")) {
            location.href = "login.html";       
        } else {
            location.href = "index.html";    
        }


        document.getElementById("correo").focus();
        return false;
    }

    
}

function mostrar_contrasena(){
    document.getElementById("contrasena").type="text";
}

function ocultar_contrasena(){
    document.getElementById("contrasena").type="password";
}


function subir_imagen() {
    var x = document.getElementById("archivo");
    x.disabled = true;}


function validar_imagen(){
  
    var ingreso_nomima = document.getElementById("nombre").value;
    var ingreso_descripcion = document.getElementById("descripcion").value;
    var ingreso_imagen = document.getElementById("archivo").value;
    var estado_imagen = document.getElementById("estado").value;
        
        if (ingreso_nomima =="" ){
            alert("Ingrese nombre de la imagen ");
            document.getElementById("nombre").focus();
            return false;
            } 
            
        if(ingreso_descripcion =="" ){
            alert("Ingrese descripcion ");
            document.getElementById("descripcion").focus();
            return false;
            }
            
        if(ingreso_imagen =="" ){
            alert("Debe subir una imagen");
            document.getElementById("archivo").focus();
            return false;
            }

        if(estado_imagen =="" ){
            alert("Seleccione el nivel de privacidad de la imagen");
            document.getElementById("estado").focus();
            return false;
            }
        }


       function borrar_imagen(){
            if (confirm("¿Esta seguro que desea eliminar esta imagen?")) {
                
            }
       }

       function actualizar_imagen(){
        if (confirm("¿Esta seguro que desea actualizar esta imagen?")) {
            
        }
   }
