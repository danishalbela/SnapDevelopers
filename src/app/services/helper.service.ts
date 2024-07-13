import { Injectable } from '@angular/core';
import { DataUrl, NgxImageCompressService } from "ngx-image-compress";
import { FileUpload } from '../../models/model';
import { deleteObject, ref, uploadBytesResumable } from "@angular/fire/storage";
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private imageCompress: NgxImageCompressService,){}
  
  async compressFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<File>((resolve, reject) => {
      reader.onload = () => {
        const imageDataUrl = reader.result as string;
        const orientation = 1;
        this.imageCompress
          .compressFile(imageDataUrl, orientation, 50, 50)
          .then((result: DataUrl) => {
            const byteCharacters = atob(result.split(",")[1]);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: "image/**" });
            const compressedFile = new File([blob], file.name, {
              type: "image/**",
            });
            resolve(compressedFile);
          })
          .catch((error: any) => reject(error));
      };
      reader.onerror = (error) => reject(error);
    });
  }

  // uploadFileToStorage(fileUpload: FileUpload, contentType: string) {
  //   const filePath = ${url}/${fileUpload.file.name};
  //   const storageRef = ref(this.storage, filePath);
  //   const metadata = {
  //     contentType: contentType,
  //   };
  //   const uploadTask = uploadBytesResumable(
  //     storageRef,
  //     fileUpload.file,
  //     metadata
  //   );
  //   return { storageRef, uploadTask };
  // }
}
