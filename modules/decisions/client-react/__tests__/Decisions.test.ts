import { expect } from 'chai';

import { updateContent, Renderer } from '@gqlapp/testing-client-react';

describe('Decisions UI works', () => {
  const renderer = new Renderer({});
  const app = renderer.mount();
  renderer.history.push('/Decisions');
  const content = updateContent(app.container);

  it('Decisions page renders on mount', () => {
    // tslint:disable:no-unused-expression
    expect(content).to.not.be.empty;
  });

  it('Decisions page has title', async () => {
    expect(content.textContent).to.include('Hello, This is the Decisions module');
  });
});
