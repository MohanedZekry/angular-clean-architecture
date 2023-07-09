import { Injectable } from "@angular/core";
import { Either } from "fp-ts/lib/Either";
import { Observable } from "rxjs";
import { Failure } from "src/core/error/failure";
import { TestTaker } from "src/domain/entities/test-taker";
import { TestTakerRepository } from "src/domain/repositories/test-taker-repositories";


@Injectable({
    providedIn: 'root',
})
export class TestTakerRepositoryImpl extends TestTakerRepository {
    override GetAllTestTakers(): Either<Failure, Observable<TestTaker[]>> {
        throw new Error("Method not implemented.");
    }
    override GetTestTakerByBannerID(param: { bannerID: string; }): Either<Failure, Observable<TestTaker>> {
        throw new Error("Method not implemented.");
    }
    override AddNewTestTaker(param: { teskTaker: TestTaker; }): Either<Failure, Observable<void>> {
        throw new Error("Method not implemented.");
    }

}