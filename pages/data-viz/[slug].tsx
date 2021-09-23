import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import BlankLayout from '../../components/BlankLayout';
import {
  ConnectedDataViz,
  DataVizVariant,
  GeographyType,
} from '@wprdc/test-components';

export default function DataVizPage() {
  const [slug, setSlug] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    if (typeof slug === 'string') setSlug(slug);
  }, [router.query]);

  return (
    <div className="p-3 flex-grow">
      <ConnectedDataViz
        variant={DataVizVariant.Details}
        dataVizSlug={slug}
        showGeog
        geogIdentifier={{
          id: '104',
          geogType: GeographyType.County,
          geogID: '42003',
        }}
      />
    </div>
  );
}

DataVizPage.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
