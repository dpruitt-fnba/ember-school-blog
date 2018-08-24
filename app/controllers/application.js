import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  posts: alias('model'),

  newPostTitle: null,
  newPostBody: null,

  actions: {
    createPost() {
      this.store.createRecord('post', {
        title: this.get('newPostTitle'),
        body: this.get('newPostBody')
      }).save();

      this.set('newPostTitle', null);
      this.set('newPostBody', null);
    },
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
