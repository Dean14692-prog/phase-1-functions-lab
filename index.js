// Code your solution in this file!
// Function 1: Calculate distance in blocks from Scuber HQ (42nd St)
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

// Function 2: Convert blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function 3: Calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function 4: Calculate fare price based on distance
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

