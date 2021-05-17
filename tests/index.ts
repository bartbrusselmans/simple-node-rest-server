import { expect } from 'chai';
import { describe, it } from 'mocha';
import { spy } from 'sinon';

describe('true or false', () => {
  it('true is true', () => {
    expect(true).to.eql(true);
  });
  it('false is false', () => {
    expect(false).to.eql(false);
  });
});

function callMyFunction(callback: () => void) {
  callback();
}

describe('callMyFunction function', () => {
  it('calls the passed function', () => {
    const callback = spy();
    callMyFunction(callback);

    expect(callback.called).to.eql(true);
  });
});
