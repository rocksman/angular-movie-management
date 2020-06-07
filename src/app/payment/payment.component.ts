import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor() {}

  paymentMode: String;

  setPaymentMethod = (value) => {
    this.paymentMode = value;
  };

  ngOnInit(): void {}
}
