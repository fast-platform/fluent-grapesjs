import grapesjs from 'grapesjs';
import { Fluent } from 'fast-fluent';

export default grapesjs.plugins.add('fluent-grapesjs', (editor, opts = {}) => {
  const sm = editor.StorageManager;

  console.log(Fluent.getConfig());
});
