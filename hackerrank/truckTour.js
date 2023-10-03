function truckTour(petrolpumps) {
  let totalPetrol = 0;
  let totalDistance = 0;
  let petrolInTank = 0;
  let startIndex = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    const [petrol, distance] = petrolpumps[i];
    totalPetrol += petrol;
    totalDistance += distance;

    petrolInTank += petrol - distance;
    if (petrolInTank < 0) {
      petrolInTank = 0;
      startIndex = i + 1;
    }
  }

  if (totalPetrol < totalDistance) {
    return -1;
  }

  return startIndex;
}
