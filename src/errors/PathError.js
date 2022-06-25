class PathError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.name = "PathError";
  }
  
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statusCode: this.statusCode
    }
  }
}

export default PathError;