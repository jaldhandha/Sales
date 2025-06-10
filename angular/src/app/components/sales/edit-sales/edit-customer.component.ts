import { Component, OnInit } from '@angular/core';
import { saleService } from 'src/services/sale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditsaleComponent implements OnInit {

  sale: any = {}

  constructor(private saleService: saleService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  saleId: number

  ngOnInit() {
    this.saleId = this.route.snapshot.params.id
    this.getsaleById(this.saleId)
  }

  getsaleById(id: number) {
    this.saleService.getsaleById(id).subscribe(response => {
      this.sale = response
    }, error => {
      console.log(error)
    })
  }

  updatesale() {
    this.saleService.updatesale(this.sale, this.saleId).subscribe(response => {
      this.toastr.success('Success!', response)
      this.router.navigate(['/sales/list'])
    }, error => {
      this.toastr.error('Error!', error)
      console.log(error)
    })
  }

}
