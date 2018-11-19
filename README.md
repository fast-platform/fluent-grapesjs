# Fluent-GrapesJS
Fluent connector for GrapesJS custom storage.

Allows to auto-save and load data from Form.io with FastJS and Fluent in a straightforward way: just add the connector to Grapes!

### Installing

To install this package for your GrapesJS project, simply use the next command on your local terminal.
```
npm install --save fluent-grapesjs
```

## Usage

To use, simply import the package in your file, add to your GrapesJS init and pass the page ID to the plugin options.

```javascript
import grapesjs from 'grapesjs';
import FluentGrapes from 'fluent-grapesjs';

const editor = grapesjs.init({
  ...
  plugins: [FluentGrapes],
  pluginsOpts: {
    [FluentGrapes]: {
      pageId: ID
    }
  },
  storageManager: { type: 'fluent-grapesjs' }
});
```
