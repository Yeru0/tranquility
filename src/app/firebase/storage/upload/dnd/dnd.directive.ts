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

  @Output() outputMessage = new EventEmitter<any>();
  dragoverCounter: number = 0;

  constructor(
    @Inject(UploadService) private uploadServ: any
  ) { }

  @HostListener("dragover", ["$event"]) onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.dragoverCounter = this.dragoverCounter + 1;

    if (this.dragoverCounter == 1) {

      const status: Object = {
        message: "dragover",
        code: 0
      };

      this.outputMessage.emit(status);

    }

  };

  @HostListener("dragleave", ["$event"]) onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.dragoverCounter = 0;

    const status: Object = {
      message: "dragleave",
      code: 1
    };

    this.outputMessage.emit(status);

  }

  @HostListener("drop", ["$event"]) onDrop(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const files: any = event.dataTransfer.files;

    Array.from(files).forEach((file: any) => {

      const status: any = {
        message: "drop",
        code: 2,
        file: file
      };

      this.outputMessage.emit(status);


    });


  };

}
