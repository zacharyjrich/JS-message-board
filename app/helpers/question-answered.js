import Ember from 'ember';

export function questionAnswered(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span>');
  }
}

export default Ember.Helper.helper(questionAnswered);
