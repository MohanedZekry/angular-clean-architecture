import { Observable } from "rxjs";
import { TestTaker } from "../entities/test-taker";
import { Either } from 'fp-ts/Either';
import { Failure } from "src/core/error/failure";

export abstract class TestTakerRepository {
    abstract GetAllTestTakers(): Either<Failure, Observable<TestTaker[]>>;
    abstract GetTestTakerByBannerID(param: { bannerID: string }): Either<Failure, Observable<TestTaker>>;
    abstract AddNewTestTaker(param: { teskTaker: TestTaker }): Either<Failure, Observable<void>>;
}