import { Bucket } from "../../models/bucket.model";

export class AddToBucket {
    static readonly type = '[Bukcet] Add';
    constructor(public payload: Bucket) {}
  }
export class RemoveFromBucket {
    static readonly type = '[Bukcet] Remove';
    constructor(public payload:Partial<Bucket>) {}
  }

