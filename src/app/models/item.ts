

export class Item {
    Id: number;
    Nombre: string;
    Descripcion: string;
    Foto: string;
    Precio: number;
    Calorias: number;

 constructor(nombre: string){
      this.Id = 0; 
      this.Nombre = nombre;
      this.Descripcion = "";
      this.Foto = "logo.png";
      this.Precio = 0;
      this.Calorias = 0;
    }
  }


