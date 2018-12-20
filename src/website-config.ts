export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
}

const config: WebsiteConfig = {
  title: 'Lutece',
  description: 'Hello, Front-end develpers',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/logo-white.png',
  siteUrl: 'https://blog.lutece.me',
  facebook: 'https://www.facebook.com/lutece.Baek',
  twitter: 'https://twitter.com/tryghost',
  github: 'https://github.com/Lutece',
  showSubscribe: false,
  mailchimpAction:
    'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
};

export default config;
