import { Injectable, signal } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { main } from '../../models/model';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  listItem = signal<main>({

    aboutUsSection: {
      btn: {
        link: '',
        text: '',
        show: false
      },
      desc: '',
      sectionImg: '',
      shortDesc: '',
      tag: '',
      title: '',
    },

    contactUsSection: {
      btn: {
        link: '',
        text: '',
        show: false
      },
      tag: '',
      title: '',
      desc: '',
    },


    homeSection: {
      btn: {
        link: '',
        text: '',
        show: false
      },
      title: '',
      desc: '',
      sectionImg: '',
    },


    offeringSection: {
      services: [
        {
          desc: '',
          title: '',
          img: '',
        }
      ],
      tag: '',
      title: '',
    },

    singleAppSection: {
      tag:'',
      title:'',
      desc:'',
      sectionImg:'',
      AppStoreBtn:[
        {
          link: '',
          img: '',
          show: false
        }
      ]
    },


    socialSection: [
      {
        img:'',
        link:'',
        show:false
      }
    ]
  });
  constructor(private firestore: Firestore) { }

  getCollectionData(collectionName: string): Observable<any[]> {
    const col = collection(this.firestore, collectionName);
    return collectionData(col);
  }
  /**
   * Set user details to state
   * @param userLists
   */
  setListItem(data: main) {
      this.listItem.set(data);
      // this.helperService.setStorage(STORAGE_KEYS.USER_LISTS, listItem);
  }
  getListItem(){
    return this.listItem();
  }
}
