import Ember from 'ember';

const { innerWidth, innerHeight } = window;

export default Ember.Component.extend({
  tagName: 'canvas',
  classNames: ['main-canvas'],

  didInsertElement() {
    this._super(...arguments);

    const canvas = this.get('element');
    const ctx = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.font = "20px Georgia";
    ctx.fillText('I am a dummy text on a canvas, hallo! This canvas is full screen.', 10, 50);
  }
});
