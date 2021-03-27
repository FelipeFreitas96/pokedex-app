import { capitalize } from "./capitalize"

describe('Capitalize Function', () => {
  it('should be return capitalized first letter', () => {
    const string = capitalize('any_string');
    expect(string).toBe('Any_string');
  })
  it('should be return an empty string when string param is null', () => {
    const string = capitalize(null);
    expect(string).toBe('');
  })
})
