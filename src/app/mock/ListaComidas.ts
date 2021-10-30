import { Item } from '../models/item'

export const comidas2: Item = new Item("test");

comidas2.Id = 124231;

export const ListaComidas: Item[] = [
    { "Id": 1, "Nombre": "Mac Fiesta", "Descripcion": "Hamburguesa con dos carnes, tomate, lechuga finamente cortada y mayonesa. Acompañado con papas y bebida a elección mediano.", "Foto": "fiesta.webp", "Precio":500, "Calorias": 314 },
    { "Id": 2, "Nombre": "Cajita Feliz", "Descripcion": "Hamburguesa McFiesta Jr, Papas Fritas Kids, bebida, YogurKid. ¡Elegí entre Libro o Juguete!.", "Foto": "cajitafeliz.webp", "Precio":700, "Calorias": 32 },
    { "Id": 3, "Nombre": "Flurry", "Descripcion": "McFlurry Oreo XXL 1Litro de helado, salsa tibia y galletitas Oreo.", "Foto": "flurry.webp", "Precio":200, "Calorias": 3214 },
    { "Id": 4, "Nombre": "Logo", "Descripcion": "Logo", "Foto": "logo.png", "Precio":21300, "Calorias": 321 },
    
];

export const ListaComidas3: Item[] = [
   new Item("Mac Fiesta"),
   new Item("Cajita Feliz"), 
   new Item("Flurry"),
   new Item("Mac Pollo")]

