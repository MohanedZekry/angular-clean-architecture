import { BaseUseCase } from "src/core/base-use-case";
import { TestTaker } from "../entities/test-taker";
import { Observable } from "rxjs";
import { Failure } from "src/core/error/failure";
import { TestTakerRepository } from "../repositories/test-taker-repositories";
import { Either } from "fp-ts/lib/Either";

export class GetTestTakerByBannerByIDUseCase implements BaseUseCase<TestTaker, { bannerID: string }>{
    constructor(private testTakerRepository: TestTakerRepository) { }
    
    execute(params: { bannerID: string; }): Either<Failure, Observable<TestTaker>> {
        return this.testTakerRepository.GetTestTakerByBannerID(params);
    }
}