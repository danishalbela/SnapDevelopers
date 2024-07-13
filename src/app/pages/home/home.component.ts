import { Component } from '@angular/core';
import { HomeSectionComponent } from "../../components/sections/home-section/home-section.component";
import { AboutComponent } from "../../components/sections/about/about.component";
import { ServicesComponent } from "../../components/sections/services/services.component";
import { MenuComponent } from "../../components/sections/menu/menu.component";
import { AppLinkBannerComponent } from "../../components/sections/app-link-banner/app-link-banner.component";
import { ContactUsComponent } from "../../components/sections/contact-us/contact-us.component";
import { ImageUploaderComponent } from "../../components/sections/image-uploader/image-uploader.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeSectionComponent, AboutComponent, ServicesComponent, MenuComponent, AppLinkBannerComponent, ContactUsComponent, ImageUploaderComponent]
})
export class HomeComponent {
    

}
