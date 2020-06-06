import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import screens from '../files/screens.json';
import value from '../files/screens.json';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent implements OnInit {
  constructor() {}

  // let name = document.getElementById('Username').val

  takeData = () => {
    let nameLength: number = document.getElementById('Username').innerHTML
      .length;
    let numSeats: number = document.getElementById('NumSeats').innerHTML.length;

    // if (nameLength == 0 && numSeats == 0) {
    //   alert('Please Enter your name and Number of seats');
    // } else if (nameLength == 0) {
    //   alert('Please enter your name');
    // } else if (numSeats == 0) {
    //   alert('Please enter the number of seats');
    // } else {
    //   document
    //     .getElementById('userInput')
    //     .querySelector('input').disabled = true;
    // }
  };

  // seatValues = () => {
  //   let rows: number = screens.rows;
  //   console.log(rows);
  //   let columns: number = screens.columns;
  //   console.log(columns);

  //   let seat: string[];

  //   // for(var i = 0; i < )
  // };

  ngOnInit(): void {}
}
