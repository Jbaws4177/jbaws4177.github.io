export const ui = {
  en: {
    siteName: 'Japan-Central Asia Young Professionals',
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'What We Do',
      events: 'Events',
      members: 'Members',
      getInvolved: 'Get Involved',
      contact: 'Contact',
    },
    cta: 'Get an invite',
    langSwitchLabel: '日本語',
    footer: {
      tagline: 'A community connecting young people in Japan with Central Asia — through events, culture, and sport.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      copyright: `© ${new Date().getFullYear()} Japan-Central Asia Young Professionals. All rights reserved.`,
    },
  },
  ja: {
    siteName: 'Japan-Central Asia Young Professionals',
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'What We Do',
      events: 'Events',
      members: 'Members',
      getInvolved: 'Get Involved',
      contact: 'Contact',
    },
    cta: 'Get an invite',
    langSwitchLabel: 'English',
    footer: {
      tagline: '日本の若者と中央アジアのコミュニティを、イベント・文化・スポーツでつなぐ。',
      quickLinks: 'Quick Links',
      contactUs: 'Contact',
      copyright: `© ${new Date().getFullYear()} Japan-Central Asia Young Professionals. All rights reserved.`,
    },
  },
} as const;

export type Locale = keyof typeof ui;
