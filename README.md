<h1 align="center"><strong>Single Purpose Emitter</strong></h1>

## Install

```
npm install single-purpose-emitter
```

## Usage

```js
// initialize
const emitter = new SinglePurposeEmitter();

// attach handlers
const handler1 = () => console.log("handler 1");
emitter.attach(handler1);
emitter.attach((value) => console.log("handler 2", value));

// dispatch
emitter.emit("some value");

// output:
// handler 1
// handler 2 some value

// detach specific handler
emitter.detach(handler1);

// detach all handlers
emitter.detach();

```
