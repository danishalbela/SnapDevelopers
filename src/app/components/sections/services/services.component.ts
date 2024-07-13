import { Component, effect } from '@angular/core';
import { offeringSection } from '../../../../models/model';
import { FirestoreService } from '../../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  offerSec!:offeringSection;
  
  constructor(private firestroreService:FirestoreService, private router:Router) 
  {
    this.useEffect()
  }
  useEffect(){

    effect(()=>{
      this.offerSec = this.firestroreService.getListItem().offeringSection
    })
  }
  
  navigate(route:string){
    this.router.navigate([route])
  }
}
