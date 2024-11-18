import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log, Console } from 'console';

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

    let arr: any = [
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
    console.log('After forEach :', suma);
  }
}
