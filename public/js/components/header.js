class Header extends React.Component {
  constructor(props) {
    super(props);

    this.icons = [
      {
        'uri': '1',
        'link': 'https://www.instagram.com/p/7qvcE3yS6V/?taken-by=itsjoekent'
      },
      {
        'uri': 'twitter',
        'link': 'https://twitter.com/itsjoekent'
      },
      {
        'uri': 'profile',
        'link': '/about'
      },
      {
        'uri': 'mail',
        'target': '',
        'link': 'mailto:hey@joekent.me?Subject=Wanted%20to%20give%20you%20a%20million%20dollars!'
      }
    ];
  }

  render() {
    return (
      <header className="container">
        <h1><a href="/">Joe Kent</a></h1>
        <h3>Not your average Joe</h3>
        {this.icons.map((icon, index) => {
          return <a href={icon.link} className="header__icon" target={icon.target ? icon.target : '_blank'} style={{backgroundImage: `url(logo_${icon.uri}.png)`}} key={index}></a>
        })}
      </header>
    )
  }
}
