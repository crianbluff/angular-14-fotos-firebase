import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

export interface Item {
  nombre:string;
  url:string;
}

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styles: []
})
export class FotosComponent implements OnInit {
  
  lengthItems:number;
  images:any;

  private itemsCollection:AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;

  constructor(private afs:AngularFirestore, public _cargaImagenes:CargaImagenesService) {
    this.itemsCollection = this.afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
    this.items.forEach(item => {
      this.lengthItems = item.length;
    });
  }

  getImages () {
    this.afs.collection('img').snapshotChanges()
    .subscribe( res => {
      this.images = res;
    }); 
  }

  eliminarImagen(event) {
    let key = event.target.id;
    this._cargaImagenes.eliminarImagen(key);

  }

  ngOnInit() {
    this.getImages();
  }

}