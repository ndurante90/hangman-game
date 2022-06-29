import { Observable } from "rxjs";

export const MaximumIdValue = {
  people: 84,
  planets: 60,
  films: 6,
  species: 37,
  starships: 36,
  vehicles: 28,
};

export const obs$ = new Observable((subscriber) => {
  subscriber.next(null);
});

export function emitCar(car) {
  obs$.next(car);
}
