import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sidebar-toggle'],
  classNameBindings: ['toggleOpen', 'toggleClose']
});
