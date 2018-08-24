import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  posts: alias('model'),

  newPostTitle: null,
  newPostBody: null,
  newPostPublishDate: null,

  actions: {
    createPost() {
      this.store.createRecord('post', {
        title: this.get('newPostTitle'),
        body: this.get('newPostBody'),
        publishDate: new Date(this.get('newPostPublishDate'))
      }).save();

      this.set('newPostTitle', null);
      this.set('newPostBody', null);
      this.set('newPostPublishDate', null);
    },
    deletePost(post) {
      post.destroyRecord();
    }
  }
});
