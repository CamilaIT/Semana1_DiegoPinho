import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Camila';
  items = ['amora', 'uva', 'laranja', 'banana'];


  ngOnInit() {
    setTimeout(() => {
        this.title = 'Camila Rodrigues';
    }, 5000);  
  }

  novoItem(){
    const text = prompt('Digite um nome');

    this.items.push(text);
  }

}
