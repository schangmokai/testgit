import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguePage } from './langue';
import { TranslateModule } from 'ng2-translate';
import { NavbarModule } from '../../components/navbar/navbar.module';

@NgModule({
  declarations: [
    LanguePage,
  ],
  imports: [
    NavbarModule,
    TranslateModule,
    IonicPageModule.forChild(LanguePage),
  ],
})
export class LanguePageModule {}



toto est un vrai toto 
