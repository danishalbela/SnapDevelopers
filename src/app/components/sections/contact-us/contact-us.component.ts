import { Component, effect } from '@angular/core';
import { contactUs } from '../../../../models/model';
import { FirestoreService } from '../../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactSec!:contactUs
  constructor(private firestoreService:FirestoreService, private router:Router)
   {
     this.useEffect()
   }
   useEffect(){
    effect(()=>{
      this.contactSec = this.firestoreService.getListItem().contactUsSection
    })
   }

   navigate(route:string)
   {
    this.router.navigate([route])
   }
}
