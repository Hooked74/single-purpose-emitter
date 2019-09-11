/// <reference types="react-scripts" />

declare namespace SinglePurposeEmitterCommon {
  type int = number;
  type Handler<T = any> = (...args: any[]) => T;
}

import H74_SPEC = SinglePurposeEmitterCommon;
