import { Component, OnInit } from '@angular/core';
import { saleService } from 'src/services/sale.service';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr'

@Component({
  selector: 'app-list-of-sale',
  templateUrl: './list-of-sale.component.html',
  styleUrls: ['./list-of-sale.component.css']
})
export class ListOfsaleComponent implements OnInit {
  sales: any = []
  valuesForDeleteModal: any = {}
  hubConn: HubConnection

  constructor(private saleService: saleService, private router: Router) { }

  ngOnInit() {
    this.getsales()
    this.hubConn = new HubConnectionBuilder().withUrl('http://localhost:5000/hub/main').build()
    this.hubConn.start().then(() => console.log('connection started!')).catch(err => console.log(`Error while establishing connection : ${err}`));

    this.hubConn.on('ReceiveChanges', () => {
      this.getsales()
    });
  }

  getsales() {
    this.saleService.getsales().subscribe(response => {
      this.sales = response
    }, error => {
      console.log(error)
    })
  }

  navToEditPage(id: number) {
    this.router.navigate(['/sales/edit', id])
  }

  openDeleteModal(id: number) {
    this.valuesForDeleteModal = {
      id: id,
      isShowDeleteModal: true
    }
  }

  cancelDeleteModal(isCloseModal: boolean) {
    this.valuesForDeleteModal = {
      isShowDeleteModal: isCloseModal
    }
  }

  reloadTable() {
    this.getsales()
  }
}
