class JSONError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.name = "JSONError";
  }
  
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode
    }
  }
}

export default JSONError;