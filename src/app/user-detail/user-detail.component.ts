import { Component, OnInit, Inject , NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AcuantService } from '../services/acuant.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import  userImage  from  './userImages.json';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  window;
  loading;
  userData;
  selfieImg;
  public routeSub;

  constructor(@Inject(DOCUMENT) private document: Document, private NgZone: NgZone,  private acuantService: AcuantService, public router: Router,private sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.window = this.document.defaultView;
  }

  public profileMatch: any;
  public authenticateText = "Click here to authenticate";
  public selfieBase64;
  public profileId;
  public profileImage =  userImage;

  ngOnInit() {
   this.routeSub = this.route.params.subscribe(params => {
       console.log(params); 
       this.profileId = params.id
    });
    console.log(this.profileImage[this.profileId].image );

    this.loading = false;
    let payload = {
      "AuthenticationSensitivity": 0,
      "ClassificationMode": 0,
      "Device": {
        "HasContactlessChipReader": false,
        "HasMagneticStripeReader": false,
        "SerialNumber": "JavaScriptWebSDK 11.0.0",
        "Type": {
          "Manufacturer": "xxx",
          "Model": "xxx",
          "SensorType": 3,
        }
      },
      "ImageCroppingExpectedSize": 0,
      "ImageCroppingMode": 0,
      "ManualDocumentType": null,
      "ProcessMode": 0,
      "SubscriptionId": 'a7e42088-48ac-42a7-a92a-c9afe4028a60'
    };
    this.acuantService.getDocInstance(payload).pipe(mergeMap(res => this.acuantService.getResults(res)))
      .subscribe((res) => {
        console.log(res);
        let results = res;
        this.userData = {
          "Address": "123 MAIN STREET TALLAHASSEE. FL 00000-1234",
          "Address City": "TALLAHASSEE",
          "Address Line 1": "123 MAIN ST",
          "Address Postal Code": "00000-1234",
          "Address State": "FL",
          "Birth Date": "/Date(-409276800000)/",
          "DD Number": "Q931611290000",
          "Document Class Name": "Drivers License",
          "Document Number": "S123-456-57-901-0",
          "Expiration Date": "/Date(1799712000000)/",
          "First Name": "NICK",
          "Full Name": "NICK SAMPLE",
          "Given Name": "NICK",
          "Height": "5'-10\"",
          "Issue Date": "/Date(1564185600000)/",
          "Issuing State Code": "FL",
          "Issuing State Name": "Florida",
          "Photo": this.profileImage[this.profileId].image,
          "REAL ID Compliant": "True",
          "Sex": "M",
          "Signature1": "data:image/jpeg;base64,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",
          "Surname": "SAMPLE",
          "Authentication": "Attention"
        };
        this.selfieBase64 =  this.userData.Photo;
      });
  }
  openFrontCamera() {
    this.window.AcuantPassiveLiveness.startSelfieCapture((image) => {
      this.loading =true;
      this.window.AcuantPassiveLiveness.postLiveness({
        endpoint: 'https://us.passlive.acuant.net',
        token: (() => {
          return 'YWpheS5zYXByZUBhc3BlbmRlbnRhbC5jb206YWUwMzRxOTVjeTRwN3JvbQ=='
        })(),
        image,
        subscriptionId: 'a7e42088-48ac-42a7-a92a-c9afe4028a60'
      }, (result) => {
        console.log(`result after capturing image`, result)
        this.loading = true;
        this.selfieImg = image;
        this.selfieBase64 = this.sanitizer.bypassSecurityTrustResourceUrl ('data:image/jpg;base64,' + this.selfieImg)
       
        this.NgZone.run(() => 
        this.acuantService.processFaceMatch({
          'Data': {
            'ImageOne': this.userData.Photo.split(',')[1],
            'ImageTwo': this.selfieImg
          },
          'Settings': {
            'SubscriptionId': 'a7e42088-48ac-42a7-a92a-c9afe4028a60'
          }
        }).subscribe(res => {
          this.loading = false;
          this.selfieBase64 = this.sanitizer.bypassSecurityTrustResourceUrl ('data:image/jpg;base64,' + this.selfieImg)
          this.profileMatch = {...res, ...result};
          this.authenticateText = (this.profileMatch.Score >= 80 )? 'Upload new picture' : ''
         // this.router.navigateByUrl('results', { state: {...res, ...result,  ...this.userData} });
        })
        )
      });
    });
  }
}




