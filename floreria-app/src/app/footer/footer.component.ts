import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  anoCopy: any;

  ngOnInit(){
    this.anoCopy = new Date().getFullYear();
  }
}
