import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-take-picture-dialog',
  templateUrl: './take-picture-dialog.component.html',
  styleUrls: ['./take-picture-dialog.component.scss']
})
export class TakePictureDialogComponent {
  dialogTitle = '💥 Taking the picture';

  constructor(public dialogRef: MatDialogRef<TakePictureDialogComponent>,
              private http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => {
      this.takePicture().subscribe((res) => {
        console.log(res);
      });
      this.dialogTitle = '🧠 Analyzing the image';
    }, 2000);

    setTimeout(() => {
      this.dialogTitle = '✅ Getting the results';
    }, 5000);

    setTimeout(() => {
      this.dialogRef.close();
    }, 7000);
  }

  takePicture() {
    return this.http.post('https://192.168.101.99:5000/take_photo', {});
  }
}
