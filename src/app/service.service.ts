import { Injectable, EventEmitter } from '@angular/core';

import { Publication } from './status.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private publication: any[] = [
    new Publication('Titre  1 ', 'this is about sport ', 'sport ', new Date()),
    new Publication('Titre 2', 'this is about politics ', 'politics ', new Date())
  ]
  send() {
    localStorage.setItem("users", JSON.stringify(this.publication));
  }
  load() {
    let tab: any = [];
    if (localStorage.getItem('users')) {
      tab = localStorage.getItem('users')
      this.publication = JSON.parse(tab)
    }
    else {
      this.publication = this.publication
    }
    return this.publication
  }
  // this is an emit from pub to details 
  sendpub: any = new EventEmitter()
  pubchanged = new EventEmitter()



  constructor() { }
  getDetails(id: number) {
    this.load()
    return this.publication[id]
  }
  onUpdate(index: number, newPub: Publication) {
    this.load()
    this.publication[index] = newPub;
    this.send()
    this.pubchanged.emit(this.publication)

  }
  Onadd(pub: Publication) {
    this.load()
    this.publication.push(pub);
    this.send()
    this.pubchanged.emit(this.publication)
  }
  ondelete(index: number) {
    this.load()
    this.publication.splice(index, 1)
    this.send()
    this.pubchanged.emit(this.publication)
  }


}
