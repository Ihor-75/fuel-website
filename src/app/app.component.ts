import { map, max } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log, Console } from 'console';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fuel-kr';
  constructor() {
    console.log('---------------------------------/n');

    const numbers = [1, 2, 3, 4, 5, 6, 10, 11, 15, 20];
    console.log('filterEvenNumbers', this.filterEvenNumbers(numbers));

    const products = [
      { name: 'Laptop', price: 1200 },
      { name: 'Phone', price: 800 },
      { name: 'Tablet', price: 600 },
    ];
    console.log('nameObject', this.nameObject(products));

    const numbers1 = [5, 10, 15, 20, 25];
    console.log('sumaNumber', this.sumaNumber(numbers1));

    const numbers2: number[] = [];
    console.log('addedNumber', this.addedNumber(numbers2));

    const people = [
      { name: 'Anna', age: 15 },
      { name: 'Oleg', age: 25 },
      { name: 'Maria', age: 19 },
      { name: 'Ivan', age: 16 },
    ];
    console.log('oldPeople', this.oldPeople(people));

    const names = ['Anna', 'Oleg', 'Maria', 'Ivan', 'Alexander'];
    console.log('filterNameslenght', this.filterNamesLenght(names));

    const products2 = [
      { name: 'Laptop', price: 1200 },
      { name: 'Phone', price: 800 },
      { name: 'Tablet', price: 600 },
    ];
    console.log('sumaPrice', this.sumaPrice(products2));

    const numbers3 = [1, 2, 3, 4, 5];
    console.log('objectNumbers', this.objectNumbers(numbers3));

    const words = ['apple', 'banana', 'pineapple', 'pear', 'grape'];
    console.log('filterMaxlenght', this.filterMaxLenght(words));

    const numbers5 = [2, 3, 4, 5, 6];
    console.log('kwadratNumber', this.kwadratNumber(numbers5));

    const movies = [
      { title: 'Movie 1', rating: 8.2 },
      { title: 'Movie 2', rating: 6.5 },
      { title: 'Movie 3', rating: 9.1 },
    ];
    console.log('ratingMovies', this.ratingMovies(movies));

    const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log('oddNumbers', this.oddNumbers(numbers6));

    const text = 'This is an example text with multiple words';
    console.log('lenghtWords', this.lenghtWords(text));

    const users = [
      { name: 'John', country: 'USA' },
      { name: 'Maria', country: 'Canada' },
      { name: 'Alex', country: 'USA' },
    ];
    console.log('usaPeople', this.usaPeople(users));

    const numbers7 = [10, 20, 30];
    console.log('objectId', this.objectId(numbers7));

    console.log('---------------------------------/n');
  }

  filterEvenNumbers(arr: number[]) {
    arr = arr.filter((num: number) => num % 2 === 0 || num > 10);
    return arr;
  }

  nameObject(products: { name: string; price: number }[]) {
    return products.map((product) => `${product.name}: ${product.price} $`);
  }

  sumaNumber(numbers: number[]): number {
    let suma = 0;
    numbers.forEach((num: number) => {
      suma += num;
    });
    return suma / 5;
  }

  /*  addedNumber(arr: number[]) {
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);
    arr.push(5);
    arr.push(6);
    arr.push(7);
    arr.push(8);
    arr.push(9);
    arr.push(10);
    return arr;
  } */
  addedNumber(arr: number[]): number[] {
    for (let i = 1; i <= 10; i++) {
      arr.push(i);
    }
    return arr;
  }

  oldPeople(people: { name: string; age: number }[]) {
    return people
      .filter((people) => people.age > 18)
      .map((people) => `${people.name}`);
  }

  filterNamesLenght(name: string[]) {
    return name.filter((name: string) => name.length > 4);
  }

  sumaPrice(products2: { name: string; price: number }[]) {
    let suma = 0;
    products2.forEach((products2) => {
      suma += products2.price;
    });
    return suma;
  }

  objectNumbers(numbers3: number[]): string[] {
    return numbers3.map((numbers3) => `${numbers3},`);
  }
  filterMaxLenght(words: string[]): string {
    const maxLenght = Math.max(...words.map((word) => word.length));
    const longestWords = words.filter((word) => word.length === maxLenght);

    return longestWords[0];
  }

  kwadratNumber(arr: number[]) {
    return arr.map((num: number) => num * num);
  }
  ratingMovies(movies: { title: string; rating: number }[]) {
    return movies
      .filter((movies) => movies.rating > 7)
      .map((movies) => `${movies.title}`);
  }
  oddNumbers(arr: number[]) {
    return arr.filter((num: number) => num % 2 !== 0);
  }
  lenghtWords(text: string) {
    return text.split(' ').filter((text) => text.length > 0).length;
  }
  usaPeople(users: { name: string; country: string }[]) {
    return users
      .filter((users) => users.country === 'USA')
      .map((users) => users.name);
  }
  objectId(numbers: number[]): { id: number; value: number }[] {
    return numbers.map((value, index) => ({
      id: index + 1,
      value: value,
    }));
  }

  //constructor() {
  //let arr: any = [1, 2, 3, 4];
  //console.log(arr);
  /*     console.log('Before:', arr[0]);
   */
  /* console.log('After:', arr[0]); */
  //arr.push(5);
  //arr.push(6);
  //arr.push(7);
  //console.log('After push :', arr);
  /// arr = arr.slice(0, 5);
  //arr = arr.filter((item: any) => item % 2 !== 0);
  //console.log('After filter :', arr);
  // arr = arr.map((item, index) => (index > 0 ? item - arr[index - 1] : 0));
  //arr = arr.map((item, index) => item * 2);
  //arr = arr.filter((item, index) => item > 5);
  //console.log('After map :', arr);
  //let suma = 0;
  //arr.forEach((element) => {
  //   suma = suma + element;
  //});
  //console.log('After forEach :', suma);
  /*  let arr: any = [
      0,
      9,
      15,
      1,
      2,
      3,
      5,
      10,
      4,
      2,
      'a',
      'b',
      -1,
      5,
      1,
      4,
      14,
      19,
      20,
    ];
    console.log(arr);
    arr = arr.filter((item: any) => typeof item === 'number' && item % 2 !== 0);
    console.log('After Filter number:', arr);

    let suma = 0;
    arr.forEach((element) => {
      suma = suma + element;
    });
    console.log('After forEach :', suma); */
  //}

  // Домашнє завдання:
  //маючи стрінгу:

  //"Вчора, 18 листопада 2024 року, о 14:37, я купив 3 яблука, 10 гранат, 2 банани, та 5 апельсинів у супермаркеті за адресою вул. Лесі Українки, 25, витративши загалом 123 гривні, і після цього проїхав 12 км на автомобілі, який витрачає 8.5 літрів бензину на 100 км."

  //задача 1: порахувати суму всіх валідних чисел у реченні
  //задача 2: написати функцію, якій передаєш назву фрукту, а вона вертає, яку кількість зїла людина

  lectionnumber() {
    let str =
      'Вчора, 18 листопада 2024 року, о 14:37, я купив 3 яблука, 10 гранат, 2 банани, та 5 апельсинів у супермаркеті за адресою вул. Лесі Українки, 25, витративши загалом 123 гривні, і після цього проїхав 12 км на автомобілі, який витрачає 8.5 літрів бензину на 100 км.';
    console.log(str);

    let words: any = str.split(' ');
    let suma = 0;
    //words.filter((word) => !isNaN(Number(word)));
    // console.log('After Filter number:', words);
    //words.forEach((num) => {
    // suma += parseFloat(num);
    //});
    //console.log('Сума всіх чисел у рядку:', suma);
    words = words.filter((item: any) => !isNaN(Number(item)));
    words = words.map((item: any) => +item);
    console.log('After Filter number:', words);
    words.forEach((element) => {
      suma = suma + element;
    });
    console.log('After forEach :', suma);

    // this.calculateString(' ', str)
  }

  //calculateString(symbol: string, str: string) {
  //  console.log(str.split(' '));
  //}

  /*   lection() {
    const str = 'Hello world, how is going?';
    console.log(str);

    console.log('"" : ', this.calculateString(' ', str));
    console.log('o: ', this.calculateString('o', str));
    console.log('a: ', this.calculateString('a', str));
    console.log('l: ', this.calculateString('l', str));
  }
  calculateString(symbol: string, str: string) {
    let count = 0;
    const arr = str.split('');
    arr.forEach((arrSym) => {
      if (arrSym === symbol) {
        count++;
      }
    });
    return count;
  }

  workString() {
    const str = 'Hello world, hov is going?';

    console.log('DATA: ', str);
    console.log('Lenght: ', str.length);
    console.log('includes: ', str.includes('world'));
    console.log('Woeds split  " ": ', str.split(' '));
    console.log('Woeds split  "o": ', str.split('o'));
    const words = str.split(' ');
    console.log('Words by coma " ": ', words.join('|'));
    const email = '                  deneha97ihor@ukr.net              ';
    console.log('Email before', email.length);
    console.log('Email: ', email.trim());
    console.log('Email before:', email.trim().length);

    const wordsLines = words.join('|');
    console.log('Words by coma " ": ', wordsLines.split('|').join('$'));
    console.log('Words by coma replice " ": ', wordsLines.replaceAll('|', ','));
  } */
}
