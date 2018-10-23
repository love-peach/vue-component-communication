const RPSArray = [
  {
    label: '石头',
    value: 0,
  },
  {
    label: '剪刀',
    value: 1,
  },
  {
    label: '布',
    value: 2,
  },
];
const getRPS = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return RPSArray[randomIndex];
};

export { RPSArray, getRPS };
