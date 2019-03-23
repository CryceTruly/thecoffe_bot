import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {Image} from './Image'
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Disease } from 'src/app/models/disease/disease';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  @Input() id:string;
  imageList:string[]=[];

  visibleImages: any[] = [];
  constructor(private router: ActivatedRoute, private db:AngularFireDatabase, private afs: AngularFirestore) {
    router.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.afs.collection('diseases').doc(this.id).valueChanges().subscribe((data : any) => {
        this.imageList.unshift(data.photo);

      });

    }

    )
  }

  ngOnInit() {
    console.log(this.imageList);

    this.db.list<Image>(`photos/${this.id}`).valueChanges().subscribe(images=>{
      images.forEach(image=>{
        this.imageList.push(image.downloadUri);


      })
      console.log(this.imageList);


    })


  }
  ngOnChanges() {
  }
}
