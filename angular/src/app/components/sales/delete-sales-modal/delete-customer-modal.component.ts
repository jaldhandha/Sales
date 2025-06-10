import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { saleService } from 'src/services/sale.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-sale-modal',
  templateUrl: './delete-sale-modal.component.html',
  styleUrls: ['./delete-sale-modal.component.css']
})
export class DeletesaleModalComponent implements OnInit {
  @Input() valuesForDeleteModal: any = {}
  @Output() cancelDeleteModal = new EventEmitter()
  @Output() reloadTable = new EventEmitter()

  constructor(private saleService: saleService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  close() {
    this.cancelDeleteModal.emit(false)
  }

  delete() {
    this.saleService.deletesaleById(this.valuesForDeleteModal.id).subscribe(response => {
      this.toastr.success('Success!', response)
      this.cancelDeleteModal.emit(false)
      this.reloadTable.emit()
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }
}
