import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalsBlService} from '../../services/modals-bl/modals-bl.service';

@Component({
  selector: 'app-open-modal',
  templateUrl: './open-modal.component.html',
  styleUrls: ['./open-modal.component.scss']
})
export class OpenModalComponent implements OnInit {
  title = ['success', 'error'];
  data = {
    success: 'Registration success',
    failed: 'Registration failed',
    empty: 'Fill empty fields'
  }

  constructor(public  modalService: NgbModal, public modalsBlService: ModalsBlService ) { }

  ngOnInit() {
  }


}
