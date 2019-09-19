<h1 align="center"><strong>Single Purpose Emitter</strong></h1>

[![Build Status](https://travis-ci.org/Hooked74/single-purpose-emitter.svg?branch=master)](https://travis-ci.org/Hooked74/single-purpose-emitter)
[![npm](https://img.shields.io/npm/v/@hooked74/single-purpose-emitter)](https://www.npmjs.com/package/@hooked74/single-purpose-emitter)
[![License](https://img.shields.io/npm/l/@hooked74/single-purpose-emitter)](https://github.com/Hooked74/single-purpose-emitter/blob/master/LICENSE)
[![Codecov](https://img.shields.io/codecov/c/github/hooked74/single-purpose-emitter?token=203907d891d1498e9910c58a0b720633)](https://codecov.io/gh/Hooked74/single-purpose-emitter)
[![Module Size](https://img.shields.io/badge/dynamic/json?color=success&label=module%20size&query=%24.module&url=https%3A%2F%2Fraw.githubusercontent.com%2FHooked74%2Fsingle-purpose-emitter%2Fmaster%2F.size-snapshot.json)](https://github.com/Hooked74/single-purpose-emitter/blob/master/.size-snapshot.json)

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
