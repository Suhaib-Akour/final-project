export interface Startup {
  key?:string;
  name: string;
  FounderName:string;
  logo?: string;
  city?: string;
  sectors: [];
  numberOfEmployees?: number|null;
  yearOfEstablish?: string;
  websiteUrl: string;
  emailAddress: string;
}
