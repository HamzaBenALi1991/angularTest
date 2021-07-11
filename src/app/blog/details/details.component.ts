import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Publication } from 'src/app/status.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

   element!: Publication
   id !: number

  constructor(private service: ServiceService , private router :ActivatedRoute , private path :Router) { }

  ngOnInit(): void {
    const id =this.router.params.subscribe(
      (params:Params)=>{
        this.id = + params['id'];
        this.element=this.service.getDetails(this.id)
      }
    )
  }
  onEdit(){
    this.path.navigate(['edit'] , {relativeTo : this.router})
  }
  ondelete(){
    this.service.ondelete(this.id)
    this.path.navigate(['/home'])
  }
}
