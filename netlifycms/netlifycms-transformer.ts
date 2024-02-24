import {
  defineTransformer,
  transformContent,
} from '@nuxt/content/transformers';

export default defineTransformer({
  name: 'netlifycms-transformer',
  extensions: ['.json'],
  async parse(id: any, rawContent: any) {
    const jsonObject = await transformContent(id, rawContent);
    // console.log(jsonObject)
    if (jsonObject.body) {
      const mdFile = await transformContent(
        'content:dummy.md',
        jsonObject.body,
      );
      jsonObject.body = mdFile.body;
    }
    return jsonObject;
  },
});
