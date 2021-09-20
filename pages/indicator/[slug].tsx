import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ConnectedIndicatorView, GeographyType } from '@wprdc/test-components';
import BlankLayout from '../../components/BlankLayout';

export default function IndicatorPage() {
  const [slug, setSlug] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    if (typeof slug === 'string') setSlug(slug);
  }, [router.query]);

  return (
    <div className="p-3 flex-grow">
      <ConnectedIndicatorView
        indicatorSlug={slug}
        geogIdentifier={{
          id: '104',
          geogType: GeographyType.County,
          geogID: '42003',
        }}
      />
    </div>
  );
}

IndicatorPage.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>;
};
