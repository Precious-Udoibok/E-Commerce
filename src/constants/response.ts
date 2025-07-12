

interface ResponsePayload<T = any> {
  // `true` only when response returns with no error
  ok: boolean;
  // Response data `JSON`
  data?: T | null;
  // Response error details
  error?: ErrorResponse | null;
}

interface ErrorResponse {
  // Description of the error
  message: string;
  // Error code from server
  code?: number;
}

// A class that implements the ApiResponse interface
export class Response<T = any> implements ResponsePayload<T> {
  ok: boolean;
  data?: T | null;
  error?: ErrorResponse | null;

  private constructor(
    ok: boolean,
    data?: T | null,
    error?: ErrorResponse | null
  ) {
    this.ok = ok;
    this.data = data || null;
    this.error = error || null;
  }

  // Static method to create a successful response
  static success<T>(data: T): ResponsePayload<T> {
    return new Response<T>(true, data, null);
  }

  // Static method to create an error response
  static error<T>(error: string): ResponsePayload<T> {
    return new Response<T>(false, null, {
      message: error,
    });
  }
}
