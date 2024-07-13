import { Component, effect } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { socialSection } from '../../../models/model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerIcon!:socialSection[];
  constructor(private firestoreService:FirestoreService,private router:Router)
  {
    this.useEffect()
  }
  useEffect(){
    effect(()=>{
      this.footerIcon = this.firestoreService.getListItem().socialSection
    })
  }

  route(path:string){
    this.router.navigate([path])
  }
}
