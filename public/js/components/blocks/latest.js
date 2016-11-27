class Latest extends React.Component {
  constructor(props) {
    super(props);

    this.fetchPosts = this.fetchPosts.bind(this);
    this.fetchPost = this.fetchPost.bind(this);
  }

  componentWillMount() {
    this.setState({
      posts: []
    });

    this.fetchPosts();
  }

  fetchPost(route) {
    fetch(`${route.path}`)
    .then(response => response.text())
    .then(transformMarkdown)
    .then(post => {
      post.url = route.url;
      return post;
    })
    .then(post => {
      this.setState({posts: this.state.posts.concat([post])});
    });
  }

  fetchPosts() {
    fetch(`/api/v1/recent`)
    .then(response => response.json())
    .then(routes => routes.forEach(route => this.fetchPost(route)));
  }

  render() {
    if (!this.state.posts || this.state.posts.length == 0) return null;

    return (
      <div className='latest'>
        {this.state.posts.map((post, index) => <a key={index} href={post.url}><h3>{post.title}</h3></a>)}
      </div>
    )
  }
}
