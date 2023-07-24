import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  questions:any=[]
  name=""
  topic=""
  result=0
  constructor(public http:HttpClient,public router:Router,public ngxService:NgxUiLoaderService ) {
    if(localStorage.getItem("questions")){
      this.questions=JSON.parse(localStorage.getItem("questions")!)
    }
   }

  getQuestions(name:any,topic:any){
    this.startLoader()
    this.http.post("http://localhost:3000/chat",{message:topic}).subscribe(res=>{
      this.name=name
      this.topic=topic
      console.log(res)
      localStorage.setItem("questions",JSON.stringify(res))
      this.questions=res
      this.stopLoader()
      this.router.navigateByUrl("/quiz")
    })
  }


  getResult(answer:any){
    console.log(answer)
    this.result=0
    this.questions.forEach((question:any,index:any) => {
      console.log(question.answer,answer['q'+(index+1)])
      if(answer['q'+(index+1)]==question.answer){
        this.result++
      }
    })
    this.router.navigateByUrl("/result")
  }

  startLoader(){
    this.ngxService.start();
  }

  stopLoader(){
    this.ngxService.stop();
  }




}
