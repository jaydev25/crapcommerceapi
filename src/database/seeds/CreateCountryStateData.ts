import { Connection } from 'typeorm';
import { Factory, Seed } from 'typeorm-seeding';
import * as _ from 'lodash';

export class CreateCountryStateData implements Seed {

  public async seed(factory: Factory, connection: Connection): Promise<any> {
    const ProgressBar = require('ascii-progress');
    // const mapSeries = require('promise-map-series');
    const data = require('./CountryStateCurrency.json');
    const countries = [];
    const zones = [];
    const currencies = [];
    const bar = new ProgressBar({
      schema: ':bar',
      total : data.length,
    });
    const em = connection.createEntityManager();
    _.forEach(data, (c, cIndex) => {
      const index = +(cIndex) + 1;
      const country: any = {};
      country.countryId = index;
      country.name = c.name;
      country.isoCode2 = c.ios2;
      country.isoCode3 = c.iso3;
      country.addressFormat = c.phone_code;
      country.isActive = 1;
      countries.push(country);
      const currency: any = {};
      currency.currencyId = index;
      currency.title = c.currency;
      currency.code = c.currency;
      currency.isActive = 1;
      currencies.push(currency);
      c.states = _.map(c.states, (s, key) => {
        return key;
      });
      _.forEach(c.states, (s, sIndex) => {
        const zone: any = {};
        // zone.zoneId = +(index + '' + sIndex);
        zone.countryId = index;
        zone.code = s;
        zone.name = s;
        zone.isActive = 1;
        zones.push(zone);
      });
      bar.tick();
    });
    bar.clear();
    const queryBuilder = em.connection.createQueryBuilder();
    return queryBuilder.insert()
    .into('country')
    .values(countries)
    .execute().then(() => {
      return queryBuilder.insert()
      .into('currency')
      .values(currencies)
      .execute().then(() => {
        return queryBuilder.insert()
        .into('zone')
        .values(zones)
        .execute();
      });
    });
  }
}
