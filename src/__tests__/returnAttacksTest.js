import returnAttacks from '../returnAttacks';

const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('attacks array', () => {
  const result = returnAttacks(obj);
  expect(result).toEqual([
    {
      description: 'Двойной выстрел наносит двойной урон',
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
    },
    {
      description: 'Описание не доступно',
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ]);
});
