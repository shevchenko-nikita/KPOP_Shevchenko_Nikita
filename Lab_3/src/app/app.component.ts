import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <form (submit)="solveQuadratic()">
            <label>Enter coefficient a:</label>
            <input [(ngModel)]="a1" name = "a1" placeholder="a">
               
            <label>Enter coefficient b:</label>
            <input [(ngModel)]="b1" name = "b1" placeholder="b">

            <label>Enter coefficient c:</label>
            <input [(ngModel)]="c1" name = "c1" placeholder="c">

            <button type="submit">Solve</button>
        </form>

        <div *ngIf="solved">
            <p>Root 1: {{ root1 }}</p>
            <p>Root 2: {{ root2 }}</p>
        </div>
    `
})
export class AppComponent { 
    a1: number;
    b1: number;
    c1: number;

    root1: number;
    root2: number;

    solved: boolean = false;

    solveQuadratic() {
        const discriminant = this.b1 * this.b1 - 4 * this.a1 * this.c1;

        if (discriminant < 0) {
            this.root1 = NaN;
            this.root2 = NaN;
        } else if (discriminant === 0) {
            this.root1 = -this.b1 / (2 * this.a1);
            this.root2 = this.root1;
        } else {
            this.root1 = (-this.b1 + Math.sqrt(discriminant)) / (2 * this.a1);
            this.root2 = (-this.b1 - Math.sqrt(discriminant)) / (2 * this.a1);
        }

        this.solved = true;
    }
}