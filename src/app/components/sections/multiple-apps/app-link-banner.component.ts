import { Component } from '@angular/core';

@Component({
  selector: 'app-app-link-banner',
  standalone: true,
  imports: [],
  templateUrl: './app-link-banner.component.html',
  styleUrl: './app-link-banner.component.scss'
})
export class AppLinkBannerComponent {
apps=[
  {
    banner:'https://firebasestorage.googleapis.com/v0/b/production-project-cf1ec.appspot.com/o/banner%20iMage.png?alt=media&token=3b6e283d-60c3-4576-b6ec-19df479461b6',
    logo:'https://firebasestorage.googleapis.com/v0/b/production-project-cf1ec.appspot.com/o/logo.png?alt=media&token=4d0df1fe-3380-4650-bd36-b6fb2ad239f9',
    name:'WhatsApp Chat Recovery',
    description:'Recover deleted chats',
    link:'https://play.google.com/store/apps/details?id=com.whatsapp.recover.deleted.messages',
    buttonText:'Get'
},
{
  banner:'https://firebasestorage.googleapis.com/v0/b/production-project-cf1ec.appspot.com/o/web%20banner.png?alt=media&token=902d84ac-d115-490d-9619-dfaeb9dbda2a',
  logo:'https://firebasestorage.googleapis.com/v0/b/production-project-cf1ec.appspot.com/o/logowebcast.png?alt=media&token=684b194b-a87a-45fa-aa9e-237ea1c5fba9',
  name:'Webcast - ChormeCast',
  description:'Cast shows anywhere',
  link:'https://play.google.com/store/apps/details?id=com.whatsapp.recover.deleted.messages',
  buttonText:'Get'
},
{
  banner:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1715591843',
  logo:'',
  name:'New App Coming Soon!',
  description:"We're working hard to bring you a fantastic new app. Stay tuned!",
  link:'https://play.google.com/store/apps/details?id=com.whatsapp.recover.deleted.messages',
  buttonText:'Notify Me'
}
]
}
