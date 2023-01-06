import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CoreLayout } from '@divriots/dockit-react/mdx-layout-core/dist/CoreLayout';
import '~/theme/src/styles.css';

export const DefaultLayout = (props) => (
  <MDXProvider components={{}}>
    <CoreLayout
      logo={
        <img
          src="https://app.perp.com/assets/coins/eth.svg"
          width="64"
          height="64"
        />
      }
      {...props}
      articleClassName="prose"
    />
  </MDXProvider>
);
