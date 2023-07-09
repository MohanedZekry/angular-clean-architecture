import { Observable } from "rxjs";
import { Failure } from "./error/failure";
import { Either } from 'fp-ts/Either';

export interface BaseUseCase<T, P> {
    execute(params: P): Either<Failure, Observable<T>>;
}