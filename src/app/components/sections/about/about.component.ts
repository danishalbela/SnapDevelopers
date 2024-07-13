import { aboutUs } from './../../../../models/model';
import { FirestoreService } from './../../../services/firestore.service';
import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
    aboutSec!:aboutUs;

    constructor(private firestoreService:FirestoreService, private router:Router)
    {
      this.useEffect()
    }
    useEffect()
    {
      effect(()=>{
        this.aboutSec = this.firestoreService.getListItem().aboutUsSection
      });
    }

    navigate(route:string){
      this.router.navigate([route]);
    }
}
