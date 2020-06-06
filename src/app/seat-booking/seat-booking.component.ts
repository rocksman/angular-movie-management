import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent implements OnInit {
  constructor() {
    function onLoaderFunc() {
      this.$('.seatStructure *').prop('disabled', true);
      this.$('.displayerBoxes *').prop('disabled', true);
    }
    function takeData() {
      if (
        this.$('#Username').val().length == 0 ||
        this.$('#Numseats').val().length == 0
      ) {
        alert('Please Enter your Name and Number of Seats');
      } else {
        this.$('.inputForm *').prop('disabled', true);
        this.$('.seatStructure *').prop('disabled', false);
        document.getElementById('notification').innerHTML =
          "<b style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</b>";
      }
    }

    function updateTextArea() {
      if (this.$('input:checked').length == this.$('#Numseats').val()) {
        this.$('.seatStructure *').prop('disabled', true);

        var allNameVals = [];
        var allNumberVals = [];
        var allSeatsVals = [];

        //Storing in Array
        allNameVals.push(this.$('#Username').val());
        allNumberVals.push(this.$('#Numseats').val());
        this.$('#seatsBlock :checked').each(function () {
          allSeatsVals.push(this.$(this).val());
        });

        //Displaying
        this.$('#nameDisplay').val(allNameVals);
        this.$('#NumberDisplay').val(allNumberVals);
        this.this.$('#seatsDisplay').val(allSeatsVals);
      } else {
        alert('Please select ' + this.$('#Numseats').val() + ' seats');
      }
    }

    function myFunction() {
      alert(this.$('input:checked').length);
    }

    /*
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    */

    (SeatBookingComponent as any).$(':checkbox').click(function () {
      if (this.$('input:checked').length == this.$('#Numseats').val()) {
        this.$(':checkbox').prop('disabled', true);
        this.$(':checked').prop('disabled', false);
      } else {
        this.$(':checkbox').prop('disabled', false);
      }
    });
  }

  ngOnInit(): void {}
}
