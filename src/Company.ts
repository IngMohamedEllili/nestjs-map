import faker from 'faker';
import { Mappable } from './CustomMaps';
export class Company implements Mappable{
  companyName : string;
  catchPhrase: string;
  location:{
    lat: number,
    lng: number
  };
  

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }; 
  }

  markerContent(): string{
    return `<div>
    Company Name : ${this.companyName} </br>
    Company Phrase Name : ${this.catchPhrase}
    </div>`
  }
  color: string;
}