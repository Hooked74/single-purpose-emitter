import SinglePurposeEmitter from "./";

export default describe("SinglePurposeEmitter", () => {
  const handler1: jest.Mock = jest.fn();
  const handler2: jest.Mock = jest.fn();
  const emitter: SinglePurposeEmitter = new SinglePurposeEmitter();
  const emitValue: string = "mockValue";

  it("should execute handlers", () => {
    emitter.attach(handler1);
    emitter.attach(handler2);
    emitter.emit(emitValue);

    expect(handler1.mock.calls.length).toBe(1);
    expect(handler2.mock.calls.length).toBe(1);

    expect(handler1.mock.calls[0][0]).toBe(emitValue);
    expect(handler2.mock.calls[0][0]).toBe(emitValue);
  });

  it("should detach handlers", () => {
    emitter.detach(handler1);
    emitter.detach(handler2);
    emitter.emit(emitValue);

    expect(handler1.mock.calls.length).toBe(1);
    expect(handler2.mock.calls.length).toBe(1);
  });
});
