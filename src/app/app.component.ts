import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
}

interface Product
{
  Name: string;
  Price: number;
}

class Car implements Product
{
  Name: string;
  Price: number;
  constructor(name: string, price: number){
    this.Name = name;
    this.Price = price;
  }
}

// class Product
// // FİELDS
// {
//  name: string;
//  price: number;
//  category: string;
//  isPublished:boolean;

// // CONSTRUCTOR

// constructor(name:string, price:number,category:string, isPublished:boolean)
// {
//      this.name = name;
//      this.price = price;
//      this.category = category;
//      this.isPublished = isPublished;
// }
// //  METOT
//  topla(a1:number, a2:number):number
// //!  dönüş tipini belirleyebiliyoruz. eğer hiçbirşe dönmeyecekse void olur.
//  {
//   return a1 + a2;
//  }
// }

// class product2 extends Product
// // public, private, protected erişim belirleyicileri vardır.
// {
// // miras alma extends ile oluyor.diğerinin bütün alanlarına ulaşılabiliyor.
// constructor(name:string,price:number,category:string,isPublished:boolean,parametre2:Date){
//  super(name, price, category, isPublished);

// }

// method2()
// {
    
// }

}