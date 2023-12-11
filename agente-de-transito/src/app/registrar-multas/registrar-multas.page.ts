import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from "@angular/fire/compat/storage"
@Component({
  selector: 'app-registrar-multas',
  templateUrl: './registrar-multas.page.html',
  styleUrls: ['./registrar-multas.page.scss'],
})
export class RegistrarMultasPage implements OnInit {

  tarifas: any[] = [];

  multas = {
    cedula: '',
    placa: '',
    motivo: '',
    fotoURL: '',
    comentario: '',
    fecha: '',
    hora: '',
    latitud: '',
    longitud: '',
    audioURL: '',
    nombre: '',
    apellido: '',
    fechaDenacimiento: '',
    direccion: '',
    telefono: '',
  }

  imageUrl: File | null = null;

  constructor( private firestore: AngularFirestore, private storage: AngularFireStorage) { }

  async registrarMultas () {
    if(this.imageUrl){
      try {
        this.multas.fotoURL = await this.uploadImageAndGetURL();
        this.firestore.collection("multas").add(this.multas).then(() => {
          console.log("multa registrada exitosamente");

          this.multas = {
            cedula: '',
            placa: '',
            motivo: '',
            fotoURL: '',
            comentario: '',
            fecha: '',
            hora: '',
            latitud: '',
            longitud: '',
            audioURL: '',
            nombre: '',
            apellido: '',
            fechaDenacimiento: '',
            direccion: '',
            telefono: '',
          }

          this.imageUrl = null;

        }).catch(error => {
          console.error ('error al registrar la multa', error)
        });
      } catch (error) {
        console.error("error al obtener la url de la imagen", error)
      }
    }else{
      console.error("seleccione una imagen")
    }
  }

  async uploadImageAndGetURL(){
    if(this.imageUrl){
      const fotoPath = `fotos/${new Date().getTime()}_${this.imageUrl.name}`;

      const snapshot = await this.storage.upload(fotoPath, this.imageUrl);
      
      return this.storage.ref(fotoPath).getDownloadURL().toPromise();
      
    }else{
      throw new Error ('No se envio una imagen') 
    }
  }

  cargarFoto(event: any) {
    this.imageUrl = event.target.files[0]
  }

  cargarAudio(event: any) {
    const audioFile = event.target.files[0];
    

    const audioPath = `audios/${new Date().getTime()}_${audioFile.name}`;
    
    this.storage.upload(audioPath, audioFile).then(snapshot => {
      snapshot.ref.getDownloadURL().then(url => {
        this.multas.audioURL = url;
        console.log('URL del audio:', url)
      });
    });
  }

  ngOnInit() {
    this.firestore.collection('tarifa').valueChanges().subscribe((data: any[]) => {
      this.tarifas = data;
    });
  }
}
