import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { first } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
//import { AccountService, AlertService } from '@app/_services';
import { DeviceDetectorService } from 'ngx-device-detector';
import { sha256 } from 'js-sha256';
//import { APIService } from 'src/app/_services/api.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  
    loading = false;
    submitted = false;
    returnUrl: string;
    pass1: boolean = true;
    pass2: boolean = false;
    pass3: boolean = true;
    pass4: boolean = false;
    mobileNo: any;
    password: any;
    otp: any;
    ipAddress: any;

  constructor(
    private devicedetector: DeviceDetectorService,
        private route: ActivatedRoute,
        private router: Router,
        //private accountService: AccountService,
       // private alertService: AlertService,
        public apiService :ApiService,
        private http: HttpClient,
  ) {
        
   }

  ngOnInit(): void {

    this.browserDetails();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

this.getIpAddress();

  }



    


    deviceInfo: any;
    browserDetails() {
      this.deviceInfo = this.devicedetector.getDeviceInfo();
    }


    detectBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase()
        switch (true) {
          case agent.indexOf('edge') > -1:
            return 'edge';
          case agent.indexOf('opr') > -1 && !!(<any>window).opr:
            return 'opera';
          case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
            return 'chrome';
          case agent.indexOf('trident') > -1:
            return 'ie';
          case agent.indexOf('firefox') > -1:
            return 'firefox';
          case agent.indexOf('safari') > -1:
            return 'safari';
          default:
            return 'other';
        }
      }

      detectBrowserVersion() {
        var userAgent = navigator.userAgent, tem,
          matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    
        if (/trident/i.test(matchTest[1])) {
          tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
          return 'IE ' + (tem[1] || '');
        }
    
        if (matchTest[1] === 'Chrome') {
          tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
          if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
    
        matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
    
        if ((tem = userAgent.match(/version\/(\d+)/i)) != null) matchTest.splice(1, 1, tem[1]);
        return matchTest.join(' ');
      }

      plaintext: any
      conversionEncryptOutput: any;

      encrypt(value:any) {
        this.plaintext = value;   /// this input will come from method you will call in any component throughout the application (the input text u want to encrypt)
        var key = CryptoJS.lib.WordArray.random(16);
        var iv = CryptoJS.lib.WordArray.random(16);
        var encryptedid = CryptoJS.AES.encrypt(this.plaintext, key, { iv: iv });
    
        this.conversionEncryptOutput = iv.toString(CryptoJS.enc.Base64) + ":" + encryptedid.ciphertext.toString() + ":" + key.toString(CryptoJS.enc.Base64);
    
        var indexid = this.conversionEncryptOutput.indexOf('+');
        while (indexid != -1) {
          this.conversionEncryptOutput = this.conversionEncryptOutput.replace('+', 'PAM');
          indexid = this.conversionEncryptOutput.indexOf('+');
        }
        indexid = this.conversionEncryptOutput.indexOf('/');
    
        while (indexid != -1) {
          this.conversionEncryptOutput = this.conversionEncryptOutput.replace('/', 'CBZ');
          indexid = this.conversionEncryptOutput.indexOf('/');
        }
    
        this.conversionEncryptOutput//// return this value in method
    
        return this.conversionEncryptOutput;
      }


      // pass(e){

      //   if( e.target.value == 'option1' ){
      //   this.pass3 = true;
      //   }
      //   }

      //   sendOtp(e){

      //     if( e.target.value == 'option2' ){
      //       this.pass4 = true;
      //       }
      //   }


    handleChange1(e) {
        console.log(e.target.value);

        //this.pass(e.target.value)

        if( e.target.value == 'option1' )
        {
          this.pass3 = true;
          this.pass4 = false;
            this.pass1 = true;
            this.pass2 = false;
            
        }

       }

    handleChange2(e) {
       console.log(e.target.value);

       //this.sendOtp(e.target.value)

       if( e.target.value == 'option2' )
        {

            console.log("Im inside this function")
            this.pass3 = false;
            this.pass4 = true;
            this.pass1 = false;
            this.pass2 = true;
        }

      }

      ShowPassword(){
        if('password' == $('#pass').attr('type')){
          $('#pass').prop('type', 'text');
     }else{
          $('#pass').prop('type', 'password');
     }
      }
  
      confirmMessage1:any;
      confirmMessage2:any;

      onSubmit() {


        console.log("Im inside the function")

        this.router.navigate(['home'])

      // this.submitted = true;

      // console.log("Im inside this function")

      //   console.log(this.deviceInfo.os);
      //   console.log(this.deviceInfo.os_version)

      // //console.log(this.deviceInfo)

      //   //console.log("sha256(this.loginreq.password) "+sha256(this.loginreq.password))
      //   //const saltedHash = sha256(this.password);
      //   var authrozationKey = this.encrypt(this.mobileNo + ":" + this.password);
      //   //console.log("authrozationKey " + authrozationKey)

      //   console.log(this.detectBrowserName())
      //   console.log(this.detectBrowserVersion())

    
      //   let data = {
      //    "pageId":"1",
      //    "ipAddress": this.ipAddress,
      //    "browserName":this.detectBrowserName(),
      //    "browserVersion":this.detectBrowserVersion(),
      //    "osName":this.deviceInfo.os,
      //    "osVersion":this.deviceInfo.os_version,
      //    "loginBy":"Web",
      //    "secretid":"123456789",
      //    "pageName":"login",
      //    "pageURL":window.location.href,
          
      //   }
      //   this.apiService.LoginApiCallAuthorization(data, authrozationKey).subscribe((response) => {
      //       //alert(response.entity.param2);
      //   //   if(response.entity.param2=="Successfully Login."){
      //   //     sessionStorage.setItem('hk', response.entity.headerkey);
      //   //     this.router.navigate(['/dashboard'])
      //   //   }
      //   //   else if(response.entity.param2=="Login Information Does Not Match."){
      //   //     LoginAlertModal('invaliduser')
      //   //   }
      //   //   else {
      //   //   this.confirmMessage1=response.entity.param19;
      //   //   this.confirmMessage2=response.entity.param20;
      //   //   $('#loginconfirmation').show();
      //   // }
      //   })
    
      }



      getIpAddress(){
        this.http.get("http://api.ipify.org/?format=json").subscribe((res: any) => {
          this.ipAddress = res.ip;
      })
    }

    // onSubmit() {
    //     this.submitted = true;

    //     // reset alerts on submit
    //     this.alertService.clear();

    //     // stop here if form is invalid
    //     if (this.form.invalid) {
    //         return;
    //     }

    //     this.loading = true;
    //     this.accountService.login(this.f.mobileNumber.value, this.f.password.value)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }


}
