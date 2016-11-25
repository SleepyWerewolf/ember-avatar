import Ember from 'ember';
import Three from 'npm:three';

const { innerWidth, innerHeight } = window;

export default Ember.Service.extend({
  scene: null,
  camera: null,
  mesh: null,
  glRenderer: null,

  init() {
    this._super(...arguments);

    this.scene = new Three.Scene();

    this.camera = new Three.PerspectiveCamera(75, innerWidth / innerHeight, 1, 10000);
    this.camera.position.set(0, 10, 25);

    // const geometry = new Three.BoxGeometry(200, 200, 200);
    const material = new Three.MeshBasicMaterial({
      color: 0xff000,
      //wireframe: true
    });
    //
    // this.mesh = new Three.Mesh(geometry, material);
    // this.scene.add(this.mesh);

    this.ambientLight = new Three.AmbientLight(0xffffff, 1.0);
    this.scene.add(this.ambientLight);

    this.glRenderer = new Three.WebGLRenderer();
    this.glRenderer.setSize(innerWidth, innerHeight);

    const jsonLoader = new Three.JSONLoader();

    jsonLoader.load('assets/threejs_test/10_details_model.json', geometry => {
      const object = new Three.Mesh(geometry, material);

      this.scene.add(object);
    });

    window.addEventListener('resize', this.onWindowResize.bind(this), false);
  },

  animateMesh() {
    // const mesh = this.get('mesh');
    //
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;
  },

  render() {
    this.get('glRenderer').render(this.get('scene'), this.get('camera'));
  },

  onWindowResize(event) {
    const camera = this.get('camera');
    const { innerWidth, innerHeight } = window;

    this.get('glRenderer').setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
});
