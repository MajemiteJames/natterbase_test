/* eslint-disable no-undef */
/* eslint-disable prefer-const */

// Aladdin has to travel round the world on his carpet through a circular path. The carpet needs enough magic to take him from one point to another on his journey. Along his path, he can find magical sources to recharge his carpet and travel further.
// There are n magical sources from 0 to n-1 on his path. The carpet has 0 magic but he can use a portal to any one of the magical sources and start his journey from there. The carpet consumes units of magic equal to the distance covered. 
// The question, should you choose to attempt it, is to find the lowest index of the starting points that Aladdin can start his journey and be able to visit all the magical locations on his path. If there is no solution, return -1.
// Example:
// n = 4
// magic = [3, 2, 5, 4]; 
// dist = [2, 3, 4, 2]; 
// if he starts at magic[0], then 
// magic[0] - dist[0] + magic[1] = 3 - 2 + 2 = 3
// 3 – dist[1]+magic[2] = 3-3+5 = 5;
// 5 – dist[2]+magic[3] = 5-4+4 = 5;
// 5 – dist[3] = 5 – 2 = 3;
// Therefore, at magic[0], aladdin can complete his journey. So return 0;

// Create a function 
LowerIndex = (Magic, dist) => {
  // create all the variables needed
  let responseMagic, responsedist, difference, result;
  // created a mock data to use to run the program
  Magic = [3, 2, 5, 4];
  dist = [2, 3, 4, 2];
  // a validation to just that both mock datas are actually an array
  if (!Array.isArray(Magic) || !Array.isArray(dist)) {
    return 'This function takes in only arrays';
  }
  // Using the reduce to sum up an array
  responseMagic = Magic.reduce((acc, item) => {
    return acc + item;
  });
  responsedist = dist.reduce((acc, item) => {
    return acc + item;
  });
  if (responsedist > responseMagic) {
    return -1;
  }
// finding the difference between the sum of the arrays
  difference = responseMagic - responsedist;
  // finding the index of the difference gotten from the Magic array
  result = Magic.indexOf(difference);

  return result;
};

console.log(LowerIndex());
