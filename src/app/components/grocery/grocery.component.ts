import { Component, Signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { GroceryState } from '../../../store/states/grocery.state';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { AddToBucket, RemoveFromBucket } from '../../../store/actions/bucket.actions';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {


   groceries$: Observable<Grocery[]> = this.store.select(GroceryState.getAllGroceries);
  //  groceries$: Signal<Grocery[]> = this.store.selectSignal(GroceryState.getAllGroceries);
   filteredGroceries$?:Observable<Grocery[]>;
   constructor(private store:Store){

   }

   onTypeChange(e:Event){
    const selectedType = (e.target as HTMLSelectElement).value
    if(selectedType) this.filteredGroceries$ = this.store.select(GroceryState.getGroceriesByType(selectedType))
    else this.filteredGroceries$ = undefined
   }

   increment(groc:Grocery){
    const payload = {
      id:groc.id,
      name:groc.name,
      quantity:1
    }
    this.store.dispatch(new AddToBucket(payload))
   }
   decrement(groc:Grocery){
    const payload = {
      id:groc.id,
    }
    this.store.dispatch(new RemoveFromBucket(payload))
   }
   
}
