import { Address } from './address';
import { Contact } from './contact';


export interface Vendor {
  name: string;
  address: Address;
  contacts: Contact;
  account_number: number;
  note: string;
}

 
  