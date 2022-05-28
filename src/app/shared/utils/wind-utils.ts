export const calculateWindDirection = (degrees: number) => {
  const directions = ['north', 'north_east', 'east', 'south_east', 'south', 'south_west', 'west', 'north_west'];
  return directions[Math.round(degrees / 45) % 8];
}