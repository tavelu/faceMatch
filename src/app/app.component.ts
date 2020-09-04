import { Component , OnInit ,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'acuant-app';
  window;
  isInitialized;
  isIntializing;
  isAcuantSdkLoaded;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.isInitialized = false;
        this.isIntializing = false;
  }
  
  ngOnInit(){
   this.window.onAcuantSdkLoaded = () => {
      this.initialize();
    };
    const sdk = document.createElement("script");
    sdk.src = "AcuantJavascriptWebSdk.min.js";
    sdk.async = true;
    document.body.appendChild(sdk);
  }
  initialize(){
        if(!this.isInitialized && !this.isIntializing){
            this.isIntializing = true;

            this.window.AcuantJavascriptWebSdk.initialize(
                (function(){
                  return 'YWpheS5zYXByZUBhc3BlbmRlbnRhbC5jb206YWUwMzRxOTVjeTRwN3JvbQ=='
                 })(), 
                'https://services.assureid.net',
                {
                    onSuccess:() => {
                        this.isInitialized = true;
                        this.isIntializing = false;
                          this.isAcuantSdkLoaded = true
                    },

                    onFail: () => {
                        this.isIntializing = false;
                        this.isAcuantSdkLoaded = true
                    }
                });
        } 
    }
}

