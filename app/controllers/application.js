import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  posts: alias('model'),

  actions: {
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
