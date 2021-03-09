export default function showHealthLevel(obj) {
  let healthLevel;
  if (obj.health > 50) healthLevel = 'healthy';
  else if (obj.health < 15) healthLevel = 'critical';
  else healthLevel = 'wounded';

  return healthLevel;
}
