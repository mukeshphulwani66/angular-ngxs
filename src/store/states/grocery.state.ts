import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, createSelector } from '@ngxs/store';
import { Grocery } from '../../models/grocery.model';
import { GetGroceries } from '../actions/grocery.actions';
import { GroceryService } from '../../app/services/grocery.service';
import { tap } from 'rxjs';

const groceries = [
    { id: 1, name: "Milk", type: "fruit" },
    { id: 2, name: "Banana", type: "fruit" },
    { id: 3, name: "lays chips", type: "snacks" },
    { id: 4, name: "doritos", type: "snacks" },
]


interface GroceryStateModel {
    groceries: Grocery[]
}

@State<GroceryStateModel>({
    name: 'grocery',
    defaults: {
        groceries: []
    }
})
@Injectable()
export class GroceryState {

    constructor(private groceryService:GroceryService){}

    @Selector()
    static getAllGroceries(state: GroceryStateModel) {
        console.log("getAllGroceries called")
        return state.groceries;
    }

    static getGroceriesByType(type: string) {
        return createSelector([GroceryState], (state: GroceryStateModel) => {
            return state.groceries.filter(item => item.type == type)
        });
    }

    @Action(GetGroceries)
    getGroceries(ctx:StateContext<GroceryStateModel>){
          return this.groceryService.fetchAllGroceries().pipe(
            tap((data:any)=>{
               ctx.patchState({groceries:data})
            })
          )
    }
}

