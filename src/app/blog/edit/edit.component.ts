import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { Publication } from 'src/app/status.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form !: FormGroup
  constructor(private route: ActivatedRoute, private service: ServiceService , private router :Router) { }
  id!: number
  editmode = false;
  date = false;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editmode = params['id'] != null;
        this.initform()
      }
    )

  }
  private initform() {
    let titre = '';
    let description = '';
    let categorie = '';
    let date:any = new Date()
    if (this.editmode) {
      this.date = true
      titre = this.service.getDetails(this.id).titre;
      description = this.service.getDetails(this.id).description;
      categorie = this.service.getDetails(this.id).categorie;
      date = this.service.getDetails(this.id).date
    }
    this.form = new FormGroup({
      'titre': new FormControl(titre, Validators.required),
      'description': new FormControl(description, [Validators.minLength(10), Validators.required]),
      'categorie': new FormControl(categorie, Validators.required),
      'date': new FormControl( date )
    });
  }
  onsubmit() {    
    const newPub = new Publication(this.form.value['titre'], this.form.value['description'], this.form.value['categorie'], this.form.value['date'])
    if (this.editmode) {
      this.service.onUpdate(this.id,newPub )
    } else {
      this.service.Onadd(newPub)
    }
    this.oncancel()
  }
  oncancel(){
    this.router.navigate(['../'], {relativeTo:this.route})
  }
}
