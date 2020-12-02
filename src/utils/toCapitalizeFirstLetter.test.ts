import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Принимает строку в нижнем регистре, возвращает строку с первой буквой в верхнем', () => {
    const result = toCapitalizeFirstLetter('string');
    expect(result).toBe('String');
  });

  test('Принимает строку в верхнем регистре, возвращает строку с первой буквой в верхнем', () => {
    const result = toCapitalizeFirstLetter('STRING');
    expect(result).toBe('String');
  });

  test('Принимает строку в верхнем регистре за исключением первой буквы, возвращает строку с первой буквой в верхнем', () => {
    const result = toCapitalizeFirstLetter('sTRING');
    expect(result).toBe('String');
  });

  test('Принимает пустую строку, возвращает пустую строку', () => {
    const result = toCapitalizeFirstLetter('');
    expect(result).toBe('');
  });
});
