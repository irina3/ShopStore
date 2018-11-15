import { Component, OnInit } from '@angular/core';
import {IUser} from '../../declaration/IUser';
import {RegistrationService} from '../../services/registration/registration.service';
import {ModalsBlService} from '../../services/modals-bl/modals-bl.service';
import {BsModalRef} from 'ngx-bootstrap';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OpenModalComponent} from '../../modals/open-modal/open-modal.component';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  private bsModalRef: BsModalRef;
  data;
  content = '';
  public registrationData: IUser = {
    firstName: '',
    lastName: '',
    address: '',
    email: ''
  };

  constructor(private registrationService: RegistrationService, private modalsBlService: ModalsBlService, private  modalService: NgbModal) { }


  ngOnInit() {
  }
  openBackDropCustomClass(content) {
    this.modalService.open( content, {backdropClass: 'light-blue-backdrop'});
  }

   createUser () {
    console.log()
     this.openBackDropCustomClass(OpenModalComponent);
     console.log(this.registrationData.firstName.length == 0)
     if (this.registrationData.firstName.length === 0
       || this.registrationData.lastName.length === 0
       || this.registrationData.address.length === 0
       || this.registrationData.email.length === 0) {
       this.modalsBlService.content = 'error';
     } else {
       this.modalsBlService.content = '';
     }
    this.registrationService.registration(this.registrationData).subscribe(
      response => {
        if (response) {
          this.modalsBlService.content = 'ok';
          }
      });
   }
}
