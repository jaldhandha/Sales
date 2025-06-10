import { Component, OnInit } from '@angular/core';
import { saleService } from 'src/services/sale.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreatesaleComponent implements OnInit {

  sale: any = {
    saleId: 0
  }

  constructor(private saleService: saleService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  submitsale() {
    this.saleService.createsale(this.sale).subscribe(response => {
      this.toastr.success('Success!', response)
      this.router.navigate(['/sales/list'])
      this.sale = {
        saleId: 0
      }
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }
}
