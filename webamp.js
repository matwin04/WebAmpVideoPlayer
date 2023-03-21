new Webamp({
  initialTracks: [
    {
      metaData: {
        artist: 'The Boy is Mine',
        title: 'Brandy & Monica',
      },

      // Be careful because mp3s use up a lot of space on your            account.
      url: 'https://sadhost.neocities.org/music/Boy.mp3',
    },
  ],

  initialSkin: {
    url:
      // Find skins https://skins.webamp.org - download them and          host them on your website!
      'https://sadhost.neocities.org/etc/TetAtck.wsz',
  },
}).renderWhenReady(app);
