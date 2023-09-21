function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetperBlock = 264;
    return blocks * feetperBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
  const blocksTraveled = Math.abs(endBlock - startBlock)
  const feetPerBlock = 264;
  return blocksTraveled * feetPerBlock;
}
function calculatesFarePrice(startBlock, destinationBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);

  if(distanceInFeet <= 400) {
    return 0; 
} else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
  return (distanceInFeet - 400) * 0.02;
} else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
  return 25;  
}else {
 return 'cannot travel that far';
}

}
