const content = window.content;
let page = {};

switch (content.type) {
  case 'post': page = <Post content={content} />; break; // TODO
  case 'homepage': break; // TODO
  case 'about': break; // TODO
  default: page = <_404 />;
}

const body = (
  <div>
    <Header />
    {page}
  </div>
);

ReactDOM.render(body, document.getElementById('jsx-root'));
