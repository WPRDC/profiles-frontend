import { useEffect, useState } from 'react';
import {
  ConnectedGeographySection,
  GeogBrief,
  GeographyPicker,
  Indicator,
  IndicatorSearchBox,
  IndicatorView,
  ProfilesAPI,
} from '@wprdc/test-components';
import { useRouter } from 'next/router';

export default function IndicatorComparisonPage() {
  const [indicator, setIndicator] = useState<Indicator>();
  const [geogA, setGeogA] = useState<GeogBrief>();
  const [geogB, setGeogB] = useState<GeogBrief>();

  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const {
        geogTypeA,
        geogIDA,
        geogTypeB,
        geogIDB,
        indicator: indicatorSlug,
      } = router.query;
      if (geogTypeA && geogIDA)
        ProfilesAPI.requestGeogDetails({
          geogType: geogTypeA,
          geogID: geogIDA,
        }).then(setGeogA);
      if (geogTypeB && geogIDB)
        ProfilesAPI.requestGeogDetails({
          geogType: geogTypeB,
          geogID: geogIDB,
        }).then(setGeogB);
      if (indicatorSlug)
        ProfilesAPI.requestIndicator(indicatorSlug).then(setIndicator);
    }
  }, [router.query]);

  return (
    <div className="flex-grow border flex flex-col">
      <div className="mb-2 p-3">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold">
          Pick an indicator to compare:{' '}
        </h1>
        <IndicatorSearchBox onSelection={setIndicator} />
      </div>
      <div className="flex-grow md:grid md:gap-8 md:grid-cols-2 px-3">
        <div className="flex flex-col">
          <div className="border-b-2">
            <GeographyPicker onSelection={setGeogA} selectedGeog={geogA} />
            <ConnectedGeographySection headingLevel={2} {...geogA} />
          </div>
          <div className="flex-grow overflow-auto">
            <IndicatorView indicator={indicator} geog={geogA} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-b-2">
            <GeographyPicker onSelection={setGeogB} selectedGeog={geogB} />
            <ConnectedGeographySection headingLevel={2} {...geogB} />
          </div>
          <div className="flex-grow overflow-auto">
            <IndicatorView indicator={indicator} geog={geogB} />
          </div>
        </div>
      </div>
    </div>
  );
}
