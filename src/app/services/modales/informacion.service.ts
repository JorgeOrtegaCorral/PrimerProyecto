import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  mostarModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modal$: Observable<boolean> = this.mostarModal.asObservable();

  constructor() { }

  toggleModal(mostrar:boolean) {
    this.mostarModal.next(mostrar);
  }
}
