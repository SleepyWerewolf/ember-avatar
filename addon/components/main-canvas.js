import Ember from 'ember';

const { innerWidth, innerHeight } = window;

export default Ember.Component.extend({
  classNames: ['main-canvas'],

  characterRenderer: Ember.inject.service(),

  init() {
    this._super(...arguments);

    this.animate = this.animate.bind(this);
  },

  didInsertElement() {
    this._super(...arguments);

    this.$().append(this.get('characterRenderer.glRenderer.domElement'));
    this.animate();
  },

  animate() {
    requestAnimationFrame(this.animate);

    const characterRenderer = this.get('characterRenderer');

    characterRenderer.animateMesh();
    characterRenderer.render();
  }
});
