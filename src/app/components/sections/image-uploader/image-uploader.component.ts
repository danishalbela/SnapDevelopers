import { Component, effect } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Router } from '@angular/router';
import { HelperService } from '../../../services/helper.service';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.scss'
})
export class ImageUploaderComponent {

  completionImages: string[] = [];
  imageUpload: {
    imagesArry: string[],
    offeringSection: any[]
  } = {
      imagesArry: [],
      offeringSection: []
    }
  attachments: any[]=[];

  constructor(private firestroreService: FirestoreService, private router: Router ,private helperService:HelperService) {
    this.useEffect();
  }

  useEffect() {
    effect(() => {
      const offerServices = this.firestroreService.getListItem().offeringSection.services
      if (offerServices && offerServices.length > 1) {
        offerServices.forEach((res: any, index: number) => {
          if (index < 3) {
            this.imageUpload.offeringSection.push(res);
          }
        });
      }
    })
  }
  
  // async onFilesSelected(event: any) {
  //   const files: any[] = Array.from(event.target.files);

  //   this.attachments = [];

  //   for (let file of files) {
  //     const compressedFile = await this.helperService.compressFile(file);
  //     const attachment = {
  //       name: file.name,
  //       url: URL.createObjectURL(file),
  //       file: compressedFile,
  //       progress: 0,
  //     };
  //     this.attachments.push(attachment);
  //   }
  //   console.log(this.attachments)
  //   // this.completeUploadImages();
  // }





  // async completeUploadImages() {
  //   const uploadPromises = this.attachments.map((attachment) =>
  //     this.uploadImage(attachment)
  //   );
  //   const downloadUrls = await Promise.all(uploadPromises);
  //   this.completionImages.push(...downloadUrls);
  //   this.attachments = [];
  // }

  // uploadImage(attachment: any): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const basePath = /groups/${this.groupData.groupId}/groupRules/${this.rule.ruleId}/completionImages/${attachment.name};

  //     const fileUpload: FileUpload = { file: attachment.file };

  //     const { storageRef, uploadTask } = this.fcad.uploadFileToStorage(
  //       fileUpload,
  //       basePath,
  //       "image/jpeg"
  //     );

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot: any) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         attachment.progress = progress / 100;
  //       },
  //       (error: any) => {
  //         reject(error);
  //       },
  //       () => {
  //         getDownloadURL(storageRef)
  //           .then((downloadURL) => {
  //             attachment.url = downloadURL;
  //             resolve(downloadURL);
  //           })
  //           .catch((error) => {
  //             reject(error);
  //           });
  //       }
  //     );
  //   });
  // }

  downloadImages() {
    this.attachments.forEach(attachment => {
      const a = document.createElement('a');
      a.href = attachment.url;
      a.download = attachment.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }

  isLoading = false;
  previewImageSrc: any;

  onDropZoneClick(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.add('drop-zoon--active');
  }

  onDragLeave(event: DragEvent) {
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove('drop-zoon--active');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const dropZone = event.currentTarget as HTMLElement;
    dropZone.classList.remove('drop-zoon--active');
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      this.handleFiles(files);
    }
  }

  handleFiles(files: FileList) {
    if (files.length > 0) {
      this.isLoading = true;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImageSrc = e.target?.result;
        this.isLoading = false;
      };
      reader.readAsDataURL(files[0]);
    }
  }
}
