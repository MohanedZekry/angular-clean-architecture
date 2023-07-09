export abstract class Failure {
    abstract message: string;
}

export abstract class ServerFailure extends Failure { }
export abstract class SocketFailure extends Failure { }
export abstract class NoDataFoundFailure extends Failure { }