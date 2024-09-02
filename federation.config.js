const { withNativeFederation, share, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),

    ...share([
              '@angular/common/locales/en',
              '@angular/common/locales/nl-BE',
              '@angular/common/locales/fr-BE',
              '@angular/common/locales/en-BE',
              'rxjs',
            ].reduce(
      (acc, name) => ({
        ...acc,
        [name]: { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: false },
      }),
        {},
      ),
    ),
  },
  skip: [
    // Add further packages you don't need at runtime
  ],
});
