import Head from 'next/head';
import Link from 'next/link';

import { useEffect, useMemo, useState } from 'react';
import styles from '../../styles/Explorer.module.css';

import {
  ConnectedGeographySection,
  DataVizBase,
  GeogIdentifier,
  GeogTypeDescriptor,
  Indicator,
  Item,
  LayerPanelVariant,
  makeGeogSearchBox,
  Map,
  MapEvent,
  MapEventExtras,
  ProfilesAPI,
  Select,
  Tabs,
  Taxonomy,
  TaxonomySection,
  useProvider,
  useWindowSize,
} from '@wprdc/test-components';

import { DEFAULT_GEOG, MENU_LAYERS } from '../../settings';
import { useRouter } from 'next/router';

export default function Home() {
  const [taxonomy, setTaxonomy] = useState<Taxonomy>(null);
  const [geogType, setGeogType] = useState<GeogTypeDescriptor>(MENU_LAYERS[0]);
  const [pathSlugs, setPathSlugs] = useState<string[]>([]);
  const context = useProvider();
  const { width } = useWindowSize();
  const { geog } = context;

  const router = useRouter();

  const onSmallScreen = !!width && width < 768;

  useEffect(() => {
    if (!!router.query.slugs) {
      const slugs: string[] =
        typeof router.query.slugs === 'string'
          ? [router.query.slugs]
          : router.query.slugs;
      setPathSlugs(slugs);
    } else {
      setPathSlugs([]);
    }
  }, [router.query.slugs]);

  const [domainSlug, subdomainSlug, indicatorSlug, dataVizSlug] = pathSlugs;

  function handleGeogSelection(geogID: GeogIdentifier) {
    context.fetchAndSetGeog(geogID);
  }

  function handleExploreDataViz(dataViz: DataVizBase): void {
    router.push(
      `/explore/${domainSlug}/${subdomainSlug}/${indicatorSlug}/${dataViz.slug}`,
      undefined,
      {
        shallow: true,
      },
    );
  }

  function handleExploreIndicator(indicator: Indicator): void {
    let domain: string, subdomain: string;
    if (!!indicator.hierarchies && !!indicator.hierarchies.length) {
      domain = indicator.hierarchies[0].domain.slug;
      subdomain = indicator.hierarchies[0].subdomain.slug;
    }
    router.push(
      `/explore/${domain}/${subdomain}/${indicator.slug}`,
      undefined,
      {
        shallow: true,
      },
    );
  }

  function handleTabChange(domain: string): void {
    router.push(`/explore/${domain}`, undefined, { shallow: true });
  }

  useEffect(() => {
    ProfilesAPI.requestTaxonomy().then((response) =>
      setTaxonomy(response.data.results),
    );
    handleGeogSelection(DEFAULT_GEOG);
  }, []);

  const handleClick: (evt: MapEvent, extras?: MapEventExtras) => void = (
    _,
    extras,
  ) => {
    if (!!extras) handleGeogSelection(extras.menuGeog);
  };

  const geogTypeSelection: Set<string> = useMemo(() => {
    if (!!geogType) return new Set([geogType.id]);
    return new Set();
  }, [geogType]);

  const GeogSearchBox = useMemo(() => {
    return makeGeogSearchBox(geogType.id);
  }, [geogType]);

  if (!taxonomy) return <div />;

  //  todo: show little popup if path is wrong

  const navContent = (
    <>
      <div className={styles.geoMenu}>
        <h2 className={styles.cta}>Select an area to explore</h2>
        <div className={styles.menuItem}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.dropdown}>
            <div className={styles.labelText}>Pick a type of area</div>
            <Select<typeof MENU_LAYERS[0]>
              aria-label="Type of area"
              items={MENU_LAYERS}
              selectedKey={geogType.id}
              onSelection={(item) => setGeogType(item)}
            >
              {(item) => <Item key={item.id}>{item.name}</Item>}
            </Select>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.dropdown}>
            <div className={styles.labelText}>Search for a {geogType.name}</div>
            <GeogSearchBox
              aria-label={geogType.name}
              onSelection={handleGeogSelection}
            />
            <div>
              <div className={styles.orBreak}>or</div>
              <div className={styles.labelText}>Use the map</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <Map
          defaultViewport={{ zoom: 7 }}
          layerPanelVariant={LayerPanelVariant.None}
          menuGeogTypes={MENU_LAYERS}
          onClick={handleClick}
          menuGeogTypesSelection={geogTypeSelection}
          selectedGeog={geog}
        />
      </div>
    </>
  );

  const mainContent = (
    <div className={styles.content}>
      <div className={styles.geogContainer}>
        <ConnectedGeographySection {...geog} LinkComponent={Link} />
      </div>
      <div className={styles.taxonomyContainer}>
        <TaxonomySection
          taxonomy={taxonomy}
          currentDomainSlug={domainSlug}
          currentSubdomainSlug={subdomainSlug}
          currentIndicatorSlug={indicatorSlug}
          currentDataVizSlug={dataVizSlug}
          onExploreDataViz={handleExploreDataViz}
          onExploreIndicator={handleExploreIndicator}
          onTabsChange={handleTabChange}
          LinkComponent={Link}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Profiles - Explorer</title>
        <meta name="description" content="Indicator explorer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {onSmallScreen && (
        <div className={styles.navTabs}>
          <Tabs>
            <Item key="nav" title="Menu">
              {navContent}
            </Item>
            <Item key="dashboard" title="Data">
              {mainContent}
            </Item>
          </Tabs>
        </div>
      )}
      {!onSmallScreen && (
        <>
          <div className={styles.navMenu}>{navContent}</div>
          {mainContent}
        </>
      )}
    </div>
  );
}
