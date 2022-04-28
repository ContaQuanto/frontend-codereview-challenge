import { differenceInYears, parse } from 'date-fns';

export default function ageCounter(birthday: string): number {
  return differenceInYears(new Date(), parse(birthday, 'yyyy-MM-dd', new Date()));
}

export function nameRevert(name: string) {
  let revertedName = '';
  for (let i = 0; i < name.length; i++) {
    revertedName = revertedName + name[name.length - 1 - i];
  }
  return revertedName;
}
