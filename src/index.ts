import { User } from './User';
import { Company } from './Company';
import { CustmMap } from './CustomMaps';


const user = new User();
const company = new Company();
const map = new CustmMap('map');

map.addMarker(user);
map.addMarker(company)