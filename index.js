function distanceFromHqInBlocks(destination){
if(destination >= 42) {
    return destination -42;
} else {
  return 42 - destination;
}
}

function distanceFromHqInFeet(destination) {
    if (destination >=42) {
        return (destination - 42) * 264;
  } else {
    return (42 - destination) * 264;
  }
    }

function distanceTravelledInFeet(startingBlock, endingBlock) {
  let distance = (startingBlock - endingBlock) * 264;
  if (distance >= 1) {
    return distance;
  } else {
    return distance * -1;
  }
}

function calculatesFarePrice(start,destination) {
  let distance = distanceTravelledInFeet(start, destination);
  console.log(distance);
  if (distance <=400) {
    return 0;
  } else if (distance > 400 && distance <=2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <=2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}