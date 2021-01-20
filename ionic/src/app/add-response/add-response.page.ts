import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ResponseService } from '../api/response/response.service';
import Response from '../models/Response';
import Result from '../models/Result';

@Component({
  selector: 'app-add-response',
  templateUrl: './add-response.page.html',
  styleUrls: ['./add-response.page.scss'],
})
export class AddResponsePage implements OnInit {

  @Input() homeworkId :String;
  postResponse : object;
  responses : Response[];
  constructor(private responseService:ResponseService,private modalController : ModalController) {
    
   }

  async ngOnInit() {
    this.postResponse = {
      homeworkId : this.homeworkId,
      response : ""
    };
    await (await this.responseService.getByQuery(this.homeworkId)).subscribe((result:Result<Response[]>)=>{
      console.log(result);
      if(result.success)
        this.responses = result.data;
    });
  }
  dismiss(){
    this.modalController.dismiss({dismissed : true});
  }

  async addResponse(){
    await (await this.responseService.add(this.postResponse)).subscribe((result:Result<Response>)=>{
      console.log("Response post :",result);
      if(result.success)
        this.dismiss();
    });
  }
}
