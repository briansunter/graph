const GoogleAnalytics: React.FC = () => {
  return (
    <>
      <link rel='preconnect' href='https://google-analytics.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://analytics.google.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://www.google-analytics.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://googletagmanager.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://google.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://www.google.com' crossOrigin='anonymous' />
      <link rel='preconnect' href='https://stats.g.doubleclick.net' crossOrigin='anonymous' />

      <link rel="dns-prefetch" href="https://fonts.googleapis.com" crossOrigin='anonymous' />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" crossOrigin='anonymous' />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18360473-1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-18360473-1');
            gtag('config', 'G-J2B5KTRCSH');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;