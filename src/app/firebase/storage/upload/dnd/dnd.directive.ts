import {
  Directive, Inject,
  HostListener,
  Output, EventEmitter
} from '@angular/core';

import {
  UploadService
} from "../upload.service";





@Directive({
  selector: '[appDnd]'
})
export class DndDirective {


  //Output message
  @Output() outputMessage = new EventEmitter<any>();

  dragoverCounter: number = 0;



  constructor(
    @Inject(UploadService) private uploadServ: any
  ) { }





  //Listening to the dragover event
  @HostListener("dragover", ["$event"]) onDragOver(event: Event) {
    //Stop default events
    event.preventDefault();
    event.stopPropagation();

    //This prevents running continuously
    this.dragoverCounter = this.dragoverCounter + 1;

    if (this.dragoverCounter == 1) {


      //Seting the status
      const status: Object = {
        message: "dragover",
        code: 0
      };

      //Emitting the status
      this.outputMessage.emit(status);



      //If statement end
    }


    //HostListener end
  };





  //Listening to the dragleave event
  @HostListener("dragleave", ["$event"]) onDragLeave(event: Event) {
    //Stop default events
    event.preventDefault();
    event.stopPropagation();



    //Reset the dragover count
    this.dragoverCounter = 0;



    //Setting the status
    const status: Object = {
      message: "dragleave",
      code: 1
    };

    //Emitting the status
    this.outputMessage.emit(status);



    //HostListener end
  }





  //Listening to the drop event
  @HostListener("drop", ["$event"]) onDrop(event: any) {
    //Stop default events
    event.preventDefault();
    event.stopPropagation();

    //File reference
    const files: any = event.dataTransfer.files;

    //Iterating through the array of files
    Array.from(files).forEach((file: any) => {



      //Setting a status
      const status: any = {
        message: "drop",
        code: 2,
        file: file
      };

      //Emtitting the status
      this.outputMessage.emit(status);



      //For each block end
    });



    //HostListener end
  };





}
