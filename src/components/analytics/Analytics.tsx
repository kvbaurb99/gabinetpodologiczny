import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
export default function Analytics() {
  return (
    <>
      <GoogleTagManager gtmId="test" />
      <Script
        id="ad_data"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('consent', 'default', {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500,
            });
            gtag('js', new Date());
            gtag('config', 'test');
        `,
        }}
      />
    </>
  );
}
