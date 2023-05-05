import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  intervalSubscription: Subscription | null = null
  ngOnInit(): void {
    this.observable$.pipe().subscribe({
      next: (data: string) => {
        this.observableText = data
        console.log(data)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    // this.intervalSubscription = interval(1000).subscribe({
    //   next: (data) => {
    //     this.time = new Date()
    //     console.log(data)
    //   }
    // })

    this.numbers.pipe(map((value) => value ** 2)).subscribe({
      next: (data) => {
        this.squaredNumbers.push(data)
      }
    })

    this.numbers.pipe(filter((value) => value % 2 == 0)).subscribe({
      next: (data) => {
        this.evenNumbers.push(data)
      }
    })

    this.numbers.pipe(filter((value)=> value%2==1),map(data=>data**2)).subscribe({
      next : (data) => {
        this.oddSquare.push(data)
      }
    })

    this.randomNumbers$ = new Observable(function (observer) {
      for(let i=0;i<10;i++){
        setTimeout(function () {
          var randomNumber = Math.floor(Math.random() * 100);
          console.log(randomNumber)
          if (randomNumber == 13) {
            observer.error("Incorrect Random Number Generated");
          } else if (randomNumber == 99) {
            observer.complete();
          } else {
            observer.next(randomNumber);
          }
        }, i*1000);
      }
    });
  

  }

  arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  observable$: Observable<string> = of("Ajith", "Mahesh", "Anil")
  observableText: string = ''
  time: any
  numbers: Observable<number> = from(this.arrayOfNumbers)
  squaredNumbers: number[] = []
  evenNumbers: number[] = []
  oddSquare: number[] = []
  randomNumbers$: any

  

  ngOnDestroy(): void {
    // this.intervalSubscription?.unsubscribe() // this needs to be unsubscribed else data leakage occurs
  }


}
