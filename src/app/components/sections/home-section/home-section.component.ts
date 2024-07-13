import { Component, effect } from '@angular/core';
import { homeSection } from '../../../../models/model';
import { FirestoreService } from '../../../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss'
})
export class HomeSectionComponent {
  homeSec!: homeSection;

  constructor(private firestoreService: FirestoreService,private router:Router){
    this.useEffect()
  }
  
  useEffect() {
    effect(() => {
      this.homeSec = this.firestoreService.getListItem().homeSection;
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
