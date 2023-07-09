import { Observable } from "rxjs";
import { BaseUseCase } from "src/core/base-use-case";
import { TestTaker } from "../entities/test-taker";
import { Either } from "fp-ts/lib/Either";
import { Failure } from "src/core/error/failure";
import { TestTakerRepository } from "../repositories/test-taker-repositories";

export class GetAllTestTakersUseCase implements BaseUseCase<TestTaker[], void>
{
    constructor(private testTakerRepository: TestTakerRepository) { }

    execute(): Either<Failure, Observable<TestTaker[]>> {
        return this.testTakerRepository.GetAllTestTakers();
    }
}