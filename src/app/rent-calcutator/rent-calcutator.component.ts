import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-calcutator',
  templateUrl: './rent-calcutator.component.html',
  styleUrls: ['./rent-calcutator.component.scss']
})
export class RentCalcutatorComponent implements OnInit {

  model = {
    year: '',
    amount: '',
    total: 0,
    message: 'Con esto ya podrias separar un apartamento'
  };

  constructor() { }

  ngOnInit() {
  }

  calculate(): void {
    const year = parseInt(this.model.year, 10);
    const amount = parseInt(this.model.amount, 10);
    const months = year * 12;
    const total = months * amount;
    const message = this.assignMessage(total);
    this.model.total = total;
    this.model.message = message;
  }

  assignMessage(total: number): string {
    if (total >= 1000000 && total < 40000000) {
      return 'Con esto ya podrias separar un apartamento';
    } else if (total >= 40000000 && total < 70000000) {
      return 'Con esto ya tendrias para la cuota inicial de una casa';
    } else if (total >= 70000000 && total < 120000000) {
      return 'Con esto ya podrias comprar tu propio apartamento';
    } else if (total >= 120000000 && total < 240000000) {
      return 'Con esto ya podrias comprar tu propia casa';
    } else if (total >= 240000000 && total < 360000000) {
      return 'Con esto ya podrias comprar 2 apartamentos';
    } else if (total >= 360000000 && total < 500000000) {
      return 'Con esto ya podrias comprar 2 casas';
    }
  }

}