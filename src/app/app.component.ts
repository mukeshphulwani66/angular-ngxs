import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryComponent } from './components/grocery/grocery.component';
import { Store } from '@ngxs/store';
import { GroceryState } from '../store/states/grocery.state';
import { BucketComponent } from './components/bucket/bucket.component';
import { GetGroceries } from '../store/actions/grocery.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GroceryComponent,BucketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private store:Store){}
  ngOnInit(){
    this.store.dispatch(new GetGroceries())
  }
}
