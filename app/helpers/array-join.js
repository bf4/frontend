import Ember from 'ember';

export function concat(params/*, hash*/) {
  return params.join('');
}

export default Ember.Helper.helper(concat);
