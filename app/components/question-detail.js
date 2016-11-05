import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),

  actions: {
    addToFavs(question) {
      this.get('favoriteQuestions').add(question);
      confirm('Added to favorites!');
      console.log(question);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
  }
});
