export class Univercity {
  name: string;
  alphaTwoCode: string;
  domains: string[];
  stateProvince: string | null;
  country: string;
  webPages: string[];
  id: number;

  constructor(entity: Partial<Univercity>) {
    this.name = entity.name;
    this.alphaTwoCode = entity.alphaTwoCode;
    this.domains = entity.domains;
    this.stateProvince = entity.stateProvince;
    this.country = entity.country;
    this.webPages = entity.webPages;
    this.id = entity.id;
  }
}
