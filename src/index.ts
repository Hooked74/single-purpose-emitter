export default class SinglePurposeEmitter {
  private handlers: Handler[] = [];

  public attach(callback: Handler): void {
    this.handlers.push(callback);
  }

  public detach(callback: Handler): void {
    const index: int = this.handlers.findIndex((handler: Handler) => handler === callback);
    if (~index) this.handlers.splice(index, 1);
  }

  public emit<T>(e?: T): void {
    for (const handler of this.handlers) handler(e);
  }
}
