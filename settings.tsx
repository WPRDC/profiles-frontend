import {
  GeogIdentifier,
  GeographyType,
  GeogTypeDescriptor,
} from '@wprdc/test-components';

export const DEFAULT_GEOG: GeogIdentifier = {
  id: 104,
  geogType: GeographyType.County,
  geogID: '42003',
  name: 'Allegheny',
};

// noinspection SqlResolve
export const MENU_LAYERS: GeogTypeDescriptor[] = [
  {
    id: GeographyType.County,
    name: 'County',
    tableName: 'census_county',
    cartoSql:
      "SELECT *, name as map_name, 'county' as geogType, geoid as geogID FROM census_county  WHERE statefp = '42' AND countyfp IN ('003','019','128','007','005','063','129','051','059','125','073')",
    description: 'Largest administrative division within a state.',
  },
  {
    id: GeographyType.CountySubdivision,
    name: 'Municipalities',
    tableName: 'census_county_subdivision',
    cartoSql:
      "SELECT *, name as map_name, 'countySubdivision' as geogType, geoid as geogID FROM census_county_subdivision  WHERE statefp = '42' AND countyfp IN ('003','019','128','007','005','063','129','051','059','125','073')",
    description: 'Largest administrative division within a state.',
  },
  {
    id: GeographyType.Tract,
    name: 'Tract',
    tableName: 'census_tract',
    cartoSql:
      "SELECT *, name as map_name, 'tract' as geogType, geoid as geogID FROM census_tract  WHERE statefp = '42' AND countyfp IN ('003','019','128','007','005','063','129','051','059','125','073')",
    description: 'Drawn to encompass ~2500-8000 people',
  },
  {
    id: GeographyType.BlockGroup,
    name: 'Block Group',
    tableName: 'census_blockgroup',
    cartoSql:
      "SELECT *, name as map_name, 'blockGroup' as geogType, geoid as geogID FROM census_blockgroup  WHERE statefp = '42' AND countyfp IN ('003','019','128','007','005','063','129','051','059','125','073')",
    description: 'Smallest geographical unit w/ ACS sample data.',
  },
];
