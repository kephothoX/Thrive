import { Injectable } from '@angular/core';
import { Cadence } from '../interfaces/cadence'

@Injectable({
  providedIn: 'root'
})
export class CadenceService {

  constructor() { }

  Cadence: Cadence[] = [
    {
      name: 'Daily',
      value: 'DAILY'
    },

    {
      name: 'Weekly',
      value: 'WEEKLY'
    },

    {
      name: 'Every Two Weeks',
      value: 'EVERY_TWO_WEEKS'
    },

    {
      name: 'Thirty Days',
      value: 'THIRTY_DAYS'
    },

    {
      name: 'Sixty Days',
      value: 'SIXTY_DAYS'
    },

    {
      name: 'Ninety Days',
      value: 'NINETY_DAYS'
    },


    {
      name: 'Monthly',
      value: 'MONTHLY'
    },

    {
      name: 'Every Two Months',
      value: 'TWO_MONTHS'
    },

    {
      name: 'Quarterly',
      value: 'QUARTERLY'
    },

    {
      name: 'Every Four Months',
      value: 'FOUR_MONTHS'
    },

    {
      name: 'Every Six Months',
      value: 'SIX_MONTHS'
    },

    {
      name: 'Annual',
      value: "ANNUAL"
    },
  ]
}
