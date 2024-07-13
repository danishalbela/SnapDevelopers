import { Component, effect } from '@angular/core';
import { singleAppSection } from '../../../../models/model';
import { FirestoreService } from '../../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-link-banner',
  standalone: true,
  imports: [],
  templateUrl: './app-link-banner.component.html',
  styleUrl: './app-link-banner.component.scss'
})
export class AppLinkBannerComponent {

  applinkSec!:singleAppSection;

  constructor(private firestoreService:FirestoreService, private router:Router)
  {
     this.useEffect()
  }
  useEffect()
  {
    effect(()=>{
      this.applinkSec = this.firestoreService.getListItem().singleAppSection
    })
  }

  navigate(route:string){
    this.router.navigate([route])
  }
}
