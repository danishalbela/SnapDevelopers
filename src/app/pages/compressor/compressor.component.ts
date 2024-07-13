import { Component } from '@angular/core';
import { ImageUploaderComponent } from "../../components/sections/image-uploader/image-uploader.component";

@Component({
    selector: 'app-compressor',
    standalone: true,
    templateUrl: './compressor.component.html',
    styleUrl: './compressor.component.scss',
    imports: [ImageUploaderComponent]
})
export class CompressorComponent {

}
