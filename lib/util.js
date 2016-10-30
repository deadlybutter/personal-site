module.exports = {
  /**
   * Create an HTML script tag for the given src param.
   * @param  {string} src URL source.
   * @return {string}     HTML Script tag
   */
  createScriptTag: function (src) {
    return `<script src=${src}></script>`;
  },

  testContent: {
    'type': 'post',
    'title': 'The post title goes here.',
    'elements': [
      {
        'type': 'text',
        'content': `... and that was Big Yellow Taxi by Joni Mitchell, a song in which Joni complains that they paved paradise to put up a parking lot. A measure which actually would have alleviated traffic congestion on the outskirts of paradise, something which Joni singularly fails to point out - perhaps because it doesn’t quite fit in with her blinkered view of the world. Nevertheless, nice song. And, can I have the same, please? But with different shaped pasta. What do you call those pasta in bows? Like a bow-tie, but miniature? Like an action man bow-tie. The temperature inside this apple pie is over one thousand degrees. If I squeeze it, a jet of molten bramley apple will squirt out. Could go your way; could go mine. Either way, one of us is going down. The temperature inside this apple pie is over one thousand degrees. If I squeeze it, a jet of molten bramley apple will squirt out. Could go your way; could go mine. Either way, one of us is going down.`
      },
      {
        'type': 'header-secondary',
        'content': 'Secondary title goes here'
      },
      {
        'type': 'text',
        'content': `We managed to rectify it, though, because it now says, by adapting it, "Cook" where it once said "Cock", and it says "Pass" now where it once said "Piss", so it's slightly less rude. Oooh scary Irish men. Would you like to recruit me? I like your berets. They're worn by Saddam Hussain, Frank Spencer, the French. On making a documentary for canal boats: ‘This chemical toilet is a Saniflow 33, now this little babe can cope with anything, and I mean anything. Earlier on I put in a pound of mashed up Dundee cake, let's take a look...not a trace! Peace of mind I'm sure, especially if you have elderly relatives on board.’ And, can I have the same, please? But with different shaped pasta. What do you call those pasta in bows? Like a bow-tie, but miniature? Like an action man bow-tie.`
      },
      {
        'type': 'image',
        'content': 'http://25.media.tumblr.com/tumblr_lg8ybz3aF31qfyzelo1_1280.jpg'
      },
      {
        'type': 'text',
        'content': `I know lying is wrong, but if the elephant man came in now in a blouse with some make up on, and said "how do I look?" Would you say — bearing in mind he's depressed and has respiratory problems — would you say "go and take that blusher off you mis-shapen headed elephant tranny"? No. You'd say "You look nice... John" We managed to rectify it, though, because it now says, by adapting it, "Cook" where it once said "Cock", and it says "Pass" now where it once said "Piss", so it's slightly less rude. We managed to rectify it, though, because it now says, by adapting it, "Cook" where it once said "Cock", and it says "Pass" now where it once said "Piss", so it's slightly less rude. I know lying is wrong, but if the elephant man came in now in a blouse with some make up on, and said "how do I look?" Would you say — bearing in mind he's depressed and has respiratory problems — would you say "go and take that blusher off you mis-shapen headed elephant tranny"? No. You'd say "You look nice... John" I think the Irish are going through a major image change. I mean, the old image of Leprechauns, shamrock, Guinness, horses running through council estates, toothless simpletons, people with eyebrows on their cheeks, badly tarmacced drives – in this country, men in platform shoes being arrested for bombings, lots of rocks, and Beamish. I think people are saying "yes, there’s more to Ireland than this". A good slogan for the tourist board – "Dere’s more to Oireland dan dis." On making a documentary for canal boats: ‘This chemical toilet is a Saniflow 33, now this little babe can cope with anything, and I mean anything. Earlier on I put in a pound of mashed up Dundee cake, let's take a look...not a trace! Peace of mind I'm sure, especially if you have elderly relatives on board.’`
      }
    ]
  }
}
