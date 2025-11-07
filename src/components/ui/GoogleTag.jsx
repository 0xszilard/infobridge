import Script from "next/script";

export default function GoogleTag({ gaId }) {
  return (
    <>
      {/* Consent defaults before any tracking */}
      <Script id="gtag-consent-defaults" strategy="beforeInteractive">
        {`
          const consent = JSON.parse(localStorage.getItem("consent-v2") || "{}");
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // Default consent based on stored preferences
          gtag('consent', 'default', {
            'analytics_storage': consent.analytics ? 'granted' : 'denied',
            'ad_storage': consent.ads ? 'granted' : 'denied',
            'ad_user_data': consent.ads ? 'granted' : 'denied',
            'ad_personalization': consent.ads ? 'granted' : 'denied',
            'personalization_storage': consent.personalization ? 'granted' : 'denied',
            'functionality_storage': consent.functionality ? 'granted' : 'denied',
            'security_storage': 'granted',
          });
        `}
      </Script>

      {/* Load gtag.js */}
      {gaId && (
        <Script id="gtag-lib" src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      )}

      {/* Initialize gtag */}
      {gaId && (
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      )}
    </>
  );
}
