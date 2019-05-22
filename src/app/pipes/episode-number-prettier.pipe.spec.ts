import { EpisodeNumberPrettierPipe } from './episode-number-prettier.pipe';

describe('EpisodeNumberPrettierPipe', () => {
  it('create an instance', () => {
    const pipe = new EpisodeNumberPrettierPipe();
    expect(pipe).toBeTruthy();
  });
});
