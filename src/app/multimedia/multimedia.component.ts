import {Component} from '@angular/core';


@Component({
	selector: 'multimedia',
	templateUrl: './multimedia.component.html'
})

export class multimediaComponent{
	public titulo = 'multimedia';
	

	
		

	}
	function click_texto() {
	this.classList.toggle('animated  flipOutX');
	}    

	// MDB Lightbox Init

function previewFile() {
  let preview =  document.querySelector('img');
  let file    =  (<HTMLInputElement>document.getElementById('uploadBR')).files[0];
  var reader  =  new FileReader();

  reader.onloadend = function () {
    
   preview.src = <string>reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}