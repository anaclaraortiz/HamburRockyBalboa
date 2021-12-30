class Hamburguesa {
    constructor (nombre, tipodepan, verduras, adicionales, precio)
    {
    this.nombre = nombre;
    this.tipodepan = tipodepan;
    this.tipodecarne = tipodecarne;
    this.verduras = verduras;
    this.adicionales = adicionales;
    this.precio = precio
    }
    getIva ()
    {
        return this.precio*0.21;
    }
    
}