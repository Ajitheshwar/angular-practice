import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  constructor(private fb : FormBuilder){}

  profileForm = this.fb.group({
    firstName : [''],
    lastName : [''],
    email : [''],
    skills : this.fb.array([
      this.fb.control('')
    ], this.dupilicateSkillDetection)
  })

  get skills(){
    return this.profileForm.get('skills') as FormArray
  }

  dupilicateSkillDetection(control : AbstractControl){
    let formArray = control as FormArray
    let values = formArray.controls.map((control)=>control.value)
    let obj : any = {}
    let errors = {duplicateSkills : new Array<string>}
    for(let value of values){
      if(obj[value]){
        errors.duplicateSkills.push(value)
      }else{
        obj[value] = true
      }
    }
    if(errors.duplicateSkills.length==0) return null;
    return errors
  }
   
  addSkill(){
    this.skills.push(this.fb.control(''))
    console.log(this.skills.value)
  }

  add(){
    console.log(this.profileForm.value)
  }

  deleteSkill(index : number){
    this.skills.removeAt(index)
    console.log(this.skills.value)
  }

}
