import { Injectable } from "@angular/core";
import { Item } from "../models/item.interface";
import { Observable } from "rxjs";
import { of } from "rxjs";

const ITEMS: Item[] = [
  {
    id: 1,
    name: "iPhone X",
    description:
      "2019 iPhone X. 6.5 inch display screen, 13 px rear & front camera, 64 GB internal storage",
    price: 17500,
    imageUrl: "iphonex.jpg",
    store: "iStore"
  },
  {
    id: 1,
    name: "Samsung Galaxy S10",
    description:
      "2019 Samsung Galaxy S10. 6.5 inch display screen, 13 px rear & front camera, 64 GB internal storage & fingerprint",
    price: 2400,
    imageUrl: "s10.jpg",
    store: "Vodacom"
  },
  {
    id: 1,
    name: "Mac Book Pro",
    description:
      "Latest stunning Mac Book Pro with 32GB ram and 500GB internal storage. Upgrade your life with this high tech device",
    price: 36000,
    imageUrl: "pro.jpg",
    store: "iStore"
  },
  {
    id: 1,
    name: "Canon Camera",
    description:
      "Never miss a moment with cannon full HD camera, capturing about 3 million pictures, very easy to use. Get it now.",
    price: 3000,
    imageUrl: "canon.jpg",
    store: "CNA"
  },
  {
    id: 1,
    name: "DSTV HD PVR",
    description:
      "Watch your favorite shows at anytime. Rewind, fast forward & record one show while watching the other. That's premium life",
    price: 6000,
    imageUrl: "pvr.jpg",
    store: "PEP Store"
  },
  {
    id: 1,
    name: "Hisense Smart TV",
    description:
      "65 inch Full HD Smart TV. Comes with NetFlix, Showmax, Cell C Black and all installed with a free subscription of 12 months. Binge on. Limited offer",
    price: 23000,
    imageUrl: "hisense.jpg",
    store: "Game Furniture"
  }
];

@Injectable({
  providedIn: "root"
})
export class ItemsService {
  constructor() {}

  //This method at the moment returns dammy data, if we had a backend we would make the call here
  getTodaysTopItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}
