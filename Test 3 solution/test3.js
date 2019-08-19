/* eslint-disable no-undef */
/* eslint-disable prefer-const */

LowerIndex = (Magic, dist) => {
  let responseMagic, responsedist, difference, result;
  Magic = [3, 2, 5, 4];
  dist = [2, 3, 4, 2];
  if (!Array.isArray(Magic) || !Array.isArray(dist)) {
    return 'This function takes in only arrays';
  }
  responseMagic = Magic.reduce((acc, item) => acc + item, 0);
  responsedist = dist.reduce((acc, item) => acc + item, 0);
  if (responsedist > responseMagic) {
    return -1;
  }

  difference = responseMagic - responsedist;
  result = Magic.indexOf(difference);

  return result;
};

console.log(LowerIndex());
