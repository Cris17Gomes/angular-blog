import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bUK1cHVts3zXOiDCxctpfDg7gaz86M-Cxg&usqp=CAU"
  contentTitle: string = "Noticia"
  contentDescription: string = "Vamos la"
  private id: string  | null = "0"
    constructor(
      private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(value =>
        this.id = value.get("id")
      )
      this.setValuesToComponent(this.id)
      }
      setValuesToComponent(id: string | null){
       const result = dataFake.filter(article => article.id == id)[0]
       this.contentTitle = result.title
       this.contentDescription = result.description
       this.photoCover = result.photoCover

      }
    }


