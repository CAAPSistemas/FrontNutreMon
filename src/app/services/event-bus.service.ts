import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private eventBus = new Subject<any>();

  emitEvent(event: string, data?: any) {
    this.eventBus.next({ event, data });
  }

  onEvent(event: string, callback: (data?: any) => void) {
    this.eventBus.asObservable().subscribe(eventData => {
      if (eventData.event === event) {
        callback(eventData.data);
      }
    });
  }
}
