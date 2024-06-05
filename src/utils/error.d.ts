export interface ErrorModel {
  response: {
    data: {
      message: string;
      error: string;
      statusCode: number;
    };
  };
}
