import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html'
})
export class SubjectsComponent implements OnInit{

  ngOnInit(): void {
    let subject = new Subject()
    //No Initial Values
    //Values emitted after subscriptions are captured by subscriber
    subject.subscribe((data)=>{console.log("Subject Subscriber 1 : " + data)})
    subject.next(2020)

    subject.subscribe((data)=>{console.log("Subject Subscriber 2 : " + data)})
    //Subscriber-2 won't get value as subject emitted value before its subscription
    subject.next(2021)
    //Both subscribers captures the emitted value
    console.log("")



    let bSubject = new BehaviorSubject<number>(10)
    //Requires initial value
    //Subscribers get initial value or last emitted value
    bSubject.subscribe((data)=>{console.log("Behaviour subject subscriber 1 : "+data)})
    //gets initial value

    bSubject.next(1000)
    bSubject.subscribe((data)=>{console.log("Behaviour subject subscriber 2 : "+data)})
    //gets last emitted value : 1000
    bSubject.next(1001)
    //both subscribers capture this value
    console.log("")


    
    let rSubject = new ReplaySubject()
    //It stores old values as buffer and sends them to subscribers when they subscribe
    //Values emitted after subscription are sent along with buffered old values

    rSubject.next("Hello")
    rSubject.next("Hope you are doing well")
    rSubject.next("-------------------")
    rSubject.subscribe((data)=>{console.log("Replay subject subscriber 1: "+data)})
    rSubject.next("You are awesome")
    setTimeout(()=>{
      rSubject.next("Keep working Hard")
      rSubject.next("Happy Learning")
    },1000)

    rSubject.subscribe((data)=>{console.log("Replay subject subscriber 2: "+data)})

    this.practiceSubject = new Subject()
    
  }

  practiceSubject : any
  users : Subscription[] = []

  updateSubject(value : number){
    for(let subscriber of this.users){
      subscriber.unsubscribe()
    }
    this.users = []
    switch(value){
      case 1 : this.practiceSubject = new Subject(); break;
      case 2 : this.practiceSubject = new BehaviorSubject("Behaviour Subject"); break;
      case 3 : this.practiceSubject = new ReplaySubject()
    }
    this.messages = []
  }

  messages : string[] = []

  addUser(){
    let userId = this.users.length + 1
    // this.practiceSubject.next(`User ${userId} joined`)
    this.users.push(this.practiceSubject.subscribe({
      next : (data : any)=>{
        this.messages.push(`User ${userId}: ${data}`)
      }
    }))
  }

  sendMessage(ref : any){
    this.practiceSubject.next(ref.value)
    ref.value = ''
  }

}
