import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BucketState } from '../../../store/states/bucket.state';
import { Observable } from 'rxjs';
import { Bucket } from '../../../models/bucket.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {
   myBucket$:Observable<Bucket[]> = this.store.select(BucketState.getMyBucket)
   constructor(private store:Store){}
}
