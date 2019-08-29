<h1 align="center"><strong>Single Purpose Emitter</strong></h1>

[![Build Status](https://travis-ci.org/Hooked74/single-purpose-emitter.svg?branch=master)](https://travis-ci.org/Hooked74/single-purpose-emitter)
![npm](https://img.shields.io/npm/v/single-purpose-emitter)
![Codecov](https://img.shields.io/codecov/c/github/hooked74/single-purpose-emitter?token=203907d891d1498e9910c58a0b720633)
![NPM](https://img.shields.io/npm/l/single-purpose-emitter)


## Install

```
npm install @hooked74/single-purpose-emitter
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
