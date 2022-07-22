export function ShipFactory(length) {
  const shipLength = length;
  const isSunk = (shipParts) => {
    if (shipParts.every((current) => current === 1)) {
      return true;
    } else false;
  };
  const getLength = () => {
    return shipLength;
  };
  return { isSunk, shipLength, getLength };
}
