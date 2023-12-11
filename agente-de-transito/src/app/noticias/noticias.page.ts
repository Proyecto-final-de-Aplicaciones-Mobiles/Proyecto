import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: 'noticias.page.html',
  styleUrls: ['noticias.page.scss']
})
export class NoticiasPage implements OnInit {
  headlines: any;
  private apiUrl = 'https://remolacha.net/wp-json/wp/v2/posts?search=digeset';

  constructor(private http: HttpClient) {
    
        this.http.get<any[]>(this.apiUrl).subscribe(data => {
          this.headlines = data;
        });
  }

  ngOnInit() {}
  
}