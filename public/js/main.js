function renderContent(content) {
  console.log(content);
  document.title = content.title;

  const page = <Post content={content} />;
  const body = (
    <div>
      <Header />
      {page}
    </div>
  );

  ReactDOM.render(body, document.getElementById('jsx-root'));
}

/**
 * Parse the given line of markdown into a specific object.
 * @param  {string} line Line of markdown to parse.
 * @return {object}
 */
function parseLine(line) {
  const element = {
    type: 'text',
    content: ''
  };

  // For each char in the string, check if its a new symbol.
  // Otherwise add text to the buffer.
  for (let index = 0; index < line.length; index++) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '#') {
      element.type = 'title';
    }
    else {
      element.content += char;
    }
  }

  return element;
}

/**
 * For the given markdown text, transform it into digestible json.
 * @param  {string} markdown Markdown text to transforn.
 * @return {object}
 */
function transformMarkdown(markdown) {
  const content = {
    title: '',
    elements: []
  }

  const lines = markdown.split('\n');
  lines.forEach(line => {
    const element = parseLine(line);

    if (element.type === 'title') {
      content.title = element.text;
    }
    else if (element.content !== '') {
      content.elements.push(element);
    }
  });

  return content;
}

// For this pages url, get the markdown content, transform it & render it.
const title = location.pathname;
fetch(`/api/v1/route?title=${title}`)
  .then(response => response.json())
  .then(route => fetch(`/${route.path}`))
  .then(response => response.text())
  .then(transformMarkdown)
  .then(renderContent)
  .catch(console.error);
