export default function returnAttacks(obj) {
  const { special } = obj;
  const attacks = [];

  special.forEach((object) => {
    const props = { description: 'Описание не доступно', ...object };
    attacks.push(props);
  });

  return attacks;
}
