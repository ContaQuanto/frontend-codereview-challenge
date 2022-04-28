import { format, parse } from 'date-fns';

export default function formatApplicationDate(apiDate: string): string {
  return format(parse(apiDate, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy');
}
