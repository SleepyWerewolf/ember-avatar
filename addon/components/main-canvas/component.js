import Ember from 'ember';
import layout from './template';

const { innerWidth, innerHeight } = window;

export default Ember.Component.extend({
  classNames: ['main-canvas'],
  width: innerWidth,
  height: innerHeight,
  layout
});
