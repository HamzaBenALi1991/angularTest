import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Publication } from 'src/app/status.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  publication:Publication[]=[];
  constructor(private service :ServiceService , private router :Router , private path :ActivatedRoute) { }

  ngOnInit(): void {
    this.service.pubchanged.subscribe(
      ( data:Publication[])=>{
        this.publication=data
      }
    )
    this.publication= this.service.load()   

  }
  onAddnew(){
    this.router.navigate(['new'] , {relativeTo: this.path })
  }

}
