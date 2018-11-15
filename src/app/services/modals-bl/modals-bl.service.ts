import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {OpenModalComponent} from '../../modals/open-modal/open-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsBlService {

  content = '';

  constructor() { }

}
