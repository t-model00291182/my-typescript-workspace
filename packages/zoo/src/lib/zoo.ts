
import { getRandomAnimal } from '@org/animal';
import { formatMessage } from '@org/util';

export function zoo(): string {
  const result = getRandomAnimal();
  return formatMessage(result.name, result.sound);
}