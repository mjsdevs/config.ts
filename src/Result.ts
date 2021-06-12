export class Result<T> {
	public readonly _error?: string;
	public readonly _value?: T;

	get isFailure() {
		return this._error !== undefined;
	}

	private constructor(value?: T, error?: string) {
		if(value && error) {
			throw new Error('A Result cannot have a value and error at the same time');
		}

		if(!value && !error) {
			throw new Error('A Result must have a value or an error');
		}

		this._error = error;
		this._value = value;
	}

	get isSuccess() {
		return this._value !== undefined;
	}

	static ok<U>(value: U) {
		return new Result<U>(value);
	}

	static fail<U>(error: string) {
		return new Result<U>(undefined, error);
	}

	value(): T {
		if (this._value === undefined) {
			throw new Error('Cannot get the value of a failure result');
		}
		return this!._value;
	}

	error(): string {
		if (this._error === undefined) {
			throw new Error('Cannot get the error of a successful result');
		}
		return this._error;
	}
}