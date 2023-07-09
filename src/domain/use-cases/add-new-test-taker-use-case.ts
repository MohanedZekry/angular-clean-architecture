import { BaseUseCase } from "src/core/base-use-case";
import { TestTaker } from "../entities/test-taker";
import { Either } from "fp-ts/lib/Either";
import { Observable } from "rxjs";
import { Failure } from "src/core/error/failure";
import { TestTakerRepository } from "../repositories/test-taker-repositories";

export class AddNewTestTakerUseCase implements BaseUseCase<void, { teskTaker: TestTaker }>{

    constructor(private testTakerRepository: TestTakerRepository) { }


    execute(params: { teskTaker: TestTaker }): Either<Failure, Observable<void>> {
        return this.testTakerRepository.AddNewTestTaker(params);
    }

}