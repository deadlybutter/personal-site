class Header extends React.Component {
  constructor(props) {
    super(props);

    this.icons = [
      {
        'uri': 'twitter',
        'link': 'https://twitter.com/itsjoekent'
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
