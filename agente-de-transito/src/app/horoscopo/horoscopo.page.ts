import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.page.html',
  styleUrls: ['./horoscopo.page.scss'],
})
export class HoroscopoPage {

  apiKey = '368343eb27msh87b3bd94ba6bbf2p17aa24jsn9654221f54bf';
  url = 'https://daily-horoscope-api.p.rapidapi.com/';
  translationApiKey = '368343eb27msh87b3bd94ba6bbf2p17aa24jsn9654221f54bf';

  horoscopeContent: any;
  translatedHoroscope: string = '';
  selectedSigno: string = '';

  constructor(private http: HttpClient) { }

  getHoroscope(signo: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'daily-horoscope-api.p.rapidapi.com',
        'X-RapidAPI-Key': this.apiKey,
      }),
      params: {
        zodiacSign: signo,
        timePeriod: 'today',
      },
    };

    this.http.get(this.url + 'api/Daily-Horoscope-English/', httpOptions)
      .subscribe((response: any) => {
        this.horoscopeContent = response;
        this.translateHoroscope();
      }, (error) => {
        console.error(error);
      });
  }

  async translateHoroscope() {
    const translationUrl = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const textToTranslate = this.horoscopeContent.prediction;  // Texto a traducir desde la respuesta del horóscopo

    const translationParams = new URLSearchParams();
    translationParams.set('q', textToTranslate);
    translationParams.set('source', 'en');
    translationParams.set('target', 'es');

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': this.translationApiKey,
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      }),
    };

    try {
      const response = await this.http.post(translationUrl, translationParams.toString(), httpOptions)
        .toPromise() as { data: { translations: [{ translatedText: string }] } };

      this.translatedHoroscope = response.data.translations[0].translatedText;
    } catch (error) {
      console.error(error);
    }
  }
}