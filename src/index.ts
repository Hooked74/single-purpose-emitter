export default class SinglePurposeEmitter {
  private handlers: H74_SPEC.Handler[] = [];

  public attach(callback: H74_SPEC.Handler): void {
    this.handlers.push(callback);
  }

  public detach(callback?: H74_SPEC.Handler): void {
    if (callback) {
      const index: H74_SPEC.int = this.handlers.findIndex(
        (handler: H74_SPEC.Handler) => handler === callback
      );
      if (~index) this.handlers.splice(index, 1);
    } else {
      this.handlers = [];
    }
  }

  public emit<T>(e?: T): void {
    for (const handler of this.handlers) handler(e);
  }
}
