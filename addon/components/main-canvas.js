import Ember from 'ember';
import Three from 'npm:three';

const { innerWidth, innerHeight } = window;

export default Ember.Component.extend({
  classNames: ['main-canvas'],

  init() {
    this._super(...arguments);

    this.scene = new Three.Scene();

    this.camera = new Three.PerspectiveCamera(75, innerWidth / innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new Three.BoxGeometry(200, 200, 200);
    const material = new Three.MeshBasicMaterial({
      color: 0xff000,
      wireframe: true
    });

    this.mesh = new Three.Mesh(geometry, material);
    this.scene.add(this.mesh);

    this.threeRenderer = new Three.WebGLRenderer();
    this.threeRenderer.setSize(innerWidth, innerHeight);

    this.animate = this.animate.bind(this);
  },

  didInsertElement() {
    this._super(...arguments);

    this.$().append(this.get('threeRenderer').domElement);
    this.animate();
  },

  animate() {
    requestAnimationFrame(this.animate);

    this.get('mesh').rotation.x += 0.01;
    this.get('mesh').rotation.y += 0.02;

    this.get('threeRenderer').render(this.get('scene'), this.get('camera'));
  }

  // didInsertElement() {
  //   this._super(...arguments);
  //
  //   const canvas = this.get('element');
  //   const ctx = canvas.getContext('2d');
  //
  //   canvas.width = innerWidth;
  //   canvas.height = innerHeight;
  //   ctx.font = "20px Georgia";
  //   ctx.fillText('I am a dummy text on a canvas, hallo! This canvas is full screen.', 10, 50);
  // }
});
