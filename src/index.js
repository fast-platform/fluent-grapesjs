import grapesjs from "grapesjs";
import { Pages } from "fast-fastjs";

export default grapesjs.plugins.add("fluent-grapesjs", (editor, opts) => {
  const sm = editor.StorageManager;
  const pageId = opts.pageId;

  // pageId is mandatory to store in FastJS.
  if (!pageId) {
    throw new Error("No page ID passed to the storage manager");
  }

  // Check if FastJS is properly configured in the current application.
  if (!Pages || !Pages.remote().connector) {
    throw new Error("Fastjs is not configured correctly");
  }

  sm.add("fluent-grapesjs", {
    /**
     * Load the data
     * @param  {Array} keys Array containing values to load, eg, ['gjs-components', 'gjs-style', ...]
     * @param  {Function} clb Callback function to call when the load is ended
     * @param  {Function} clbErr Callback function to call in case of errors
     */
    async load(keys, clb, clbErr) {
      try {
        const staticPage = await Pages.remote()
          .where("_id", "=", pageId)
          .first();
        const result = {};

        keys.forEach(key => {
          const value = staticPage.data[key];
          if (value) {
            result[key] = value;
          }
        });

        // Might be called inside some async method.
        clb(result);
      } catch (e) {
        // Error callback.
        clbErr(e);
      }
    },

    /**
     * Store the data
     * @param  {Object} pageData Data object to store
     * @param  {Function} clb Callback function to call when the load is ended
     * @param  {Function} clbErr Callback function to call in case of errors
     */
    async store(pageData, clb, clbErr) {
      try {
        await Pages.remote().update({ _id: pageId, data: { staticPage: true, ...pageData } });

        // Might be called inside some async method.
        clb();
      } catch (e) {
        // Error callback.
        clbErr(e);
      }
    }
  });
});
