import { capitalize } from "./capitalize"

describe('Capitalize Function', () => {
  it('should be capitalize the first letter', () => {
    const string = capitalize('any_string');
    expect(string).toBe('Any_string');
  })
})
