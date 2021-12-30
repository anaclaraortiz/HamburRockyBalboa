class Usuario {
    constructor (nombre, apellido, documento, password)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento= documento;
        this.password = password;
    }

    registrar ()
    {
        const nombreIngresado = prompt ("Ingrese su nombre");
        const apellidoIngresado = prompt ("Ingrese su apellido");
        const docIngresado = prompt ("Ingrese su documento");
        const pwdIngresado = prompt ("Ingrese su password"); 

        const newRegistro = new Usuario (nombreIngresado, apellidoIngresado, docIngresado, pwdIngresado)

        localStorage.setItem(docIngresado, JSON.stringify(newRegistro) )
        
        alert ("Registro realizado correctamente");

    }

}