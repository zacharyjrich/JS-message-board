import Ember from 'ember';

export default Ember.Service.extend({
  favQuestions: [],

  add(favQuestion) {
    this.get('favQuestions').pushObject(favQuestion);
  },
});
