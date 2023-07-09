export abstract class BaseMapper<I, O>{
    abstract fromJson(params: I): O;
    abstract toJson(params: O): I;
}