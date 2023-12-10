import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inbox', icon: 'home' },
    { title: '1', url: '/folder/outbox', icon: 'world' },
    { title: 'Registro de multas', url: '/registrar-multas', icon: 'heart' },
    { title: 'Buscar', url: '/folder/Buscar', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];

  constructor() {}
}
