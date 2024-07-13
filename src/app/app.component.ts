import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageUploaderComponent } from './components/sections/image-uploader/image-uploader.component';
import { FirestoreService } from './services/firestore.service';
import { WebdService } from './services/webd.service';
import { main } from '../models/model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    ImageUploaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'savariya';
  constructor(private firestoreService: FirestoreService, public webdservice: WebdService) { }

  ngOnInit(): void {
    this.firestoreService.getCollectionData('savariya').subscribe((data: main[]) => {
      if (data[0]) {
        this.firestoreService.setListItem(data[0]);
        console.log(this.firestoreService.getListItem())
      }
    });
  }
}
