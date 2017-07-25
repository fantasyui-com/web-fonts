# web-fonts
PostCSS web font injector (PostCSS plugin)

## Installation

```Bash

npm i web-fonts

```

## Usage

```JavaScript

const postcss = require('postcss');
const webfonts = require('web-fonts');

const specification = {
  import: "url('https://fonts.googleapis.com/css?family=Roboto')",
  family: "'Roboto', sans-serif",
  selector: 'html, input, button',
};

postcss([ precss, webfonts(specification) ]).process...

```

## Developers

Options object example.

```JavaScript

{
  import: "url('https://fonts.googleapis.com/css?family=Roboto')",
  family: "'Roboto', sans-serif",
  selector: 'html, input, button',
}

```
