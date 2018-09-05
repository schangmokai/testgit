import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LanguageService } from '../../providers/services/language';
import { TranslateService } from 'ng2-translate';

/**
 * Generated class for the LanguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-langue',
  templateUrl: 'langue.html',
})
export class LanguePage {

  constructor(public navCtrl: NavController, public translate:TranslateService , public language:LanguageService, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
      this.showRadio();
  }


  showRadio(){ 
    
    let alert = this.alertCtrl.create();

    alert.setTitle('<p> Selectionner la langue </p>');

    alert.addInput({
      type:'radio',
      label: 'Francais',
      value:'fr',
      checked: true
    });

    alert.addInput({
      type:'radio',
      label: 'Englais',
      value:'en'
      
    });
    
    alert.addButton({
      text:'Enregistrer',
      cssClass:'buttonalert',
      handler:data => {
        console.log(data);
        this.language.storeLanguage(data).then((lan:string)=>{
          this.translate.setDefaultLang(lan);
           console.log(lan)
        });

        this.navCtrl.setRoot('HomePage');
      }
    });

    alert.present();

  }

}
