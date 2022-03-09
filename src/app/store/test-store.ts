import { Subject, BehaviorSubject, Observable } from 'rxjs';

export class TestStore<T> {
  //   private state: BehaviorSubject<T> = new BehaviorSubject();
  private state: Subject<T> = new Subject();

  setState(data: T) {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  dispatch(action: any) {}
}
