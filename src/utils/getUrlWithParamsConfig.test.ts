import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумента "getPokemons" и пустой обьект, на выходе получить обьект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      query: {},
      pathname: '/api/v1/pokemons',
      protocol: 'http',
      host: 'zar.hosthot.ru',
    });
  });

  test('Должна принимать два аргумента "getPokemons" и { name: "Pikachu" }, на выходе получить обьект с полями pathname, protocol, host и query c полем name и значением "Pikachu"', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      query: {
        name: 'Pikachu',
      },
      pathname: '/api/v1/pokemons',
      protocol: 'http',
      host: 'zar.hosthot.ru',
    });
  });

  test('Должна принимать два аргумента "getPokemon" и { id: 69 }, на выходе получить обьект с полями pathname, protocol, host и пустой query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 69 });
    expect(url).toEqual({
      query: {},
      pathname: '/api/v1/pokemon/69',
      protocol: 'http',
      host: 'zar.hosthot.ru',
    });
  });
});
