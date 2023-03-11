import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  base = 'o';
  val1 = 0;
  val2 = 0;

  a = [0];
  b = [0];
  winner: any;
  Mainfunc(event: any, n: any) {
    console.log(event.target.innerHTML);
    event.target.disabled = true;

    if (this.val1 == 4 || this.val2 == 4) {
      this.winner = 'Match Tied. ';
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      if (this.base == 'x') {
        if (this.b.indexOf(n) == -1 && this.a.indexOf(n) == -1) {
          this.base = 'o';
          event.target.innerHTML = this.base;

          this.b[this.val2] = n;
          this.val2++;
        }
      } else {
        if (this.a.indexOf(n) == -1 && this.b.indexOf(n) == -1) {
          this.base = 'x';
          event.target.innerHTML = this.base;

          this.a[this.val1] = n;
          this.val1++;
        }
      }
      console.log(this.a);
      console.log(this.b);

      let i;
      let j;
      let k;
      let m;
      let counta;
      let countb;
      let winnerRows = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 5, 9],
        [3, 5, 7],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ];

      for (i = 0; i < winnerRows.length; i++) {
        counta = 0;
        countb = 0;
        for (j = 0; j < winnerRows[i].length; j++) {
          // console.log(winnerRows[i][j]);

          //x
          for (k = 0; k < this.a.length; k++) {
            if (this.a[k] == winnerRows[i][j]) {
              counta++;
            }
            if (counta == 3) {
              this.winner = 'winner is x';
            }
          }
          //0
          for (m = 0; m < this.a.length; m++) {
            if (this.b[m] == winnerRows[i][j]) {
              countb++;
            }
            if (countb == 3) {
              this.winner = 'winner is o';
            }
          }
        }
      }
    }
  }

  //new game;
  newGame() {
    window.location.reload();
  }
}
