import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Publication } from 'src/app/status.model';

@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.css']
})

export class PubComponent implements OnInit {
  @Input() element: Publication = {
    titre: "",
    description: '',
    categorie: '',
    date: new Date()
  }
  @Input() iindex !: number
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }


}
