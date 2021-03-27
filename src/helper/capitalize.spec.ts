import { capitalize } from "./capitalize"

describe('Capitalize Function', () => {
  it('should be capitalize first letter', () => {
    const string = capitalize('any_string');
    expect(string).toBe('Any_string');
  })
  it('should be return empty string when string param is null', () => {
    const string = capitalize(null);
    expect(string).toBe('');
  })
})
