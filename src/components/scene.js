import React from "react"
import * as THREE from "three"

class Scene extends React.Component {
  componentDidMount() {
    let scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff );
    let particles


    const colors = [0x000000, 0x000000, 0x000000];

    this.camera = new THREE.PerspectiveCamera(95, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 1000)

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    const light = new THREE.DirectionalLight();
    light.position.set(200, 100, 200);
    light.castShadow = true;
    light.shadow.camera.left = -100;
    light.shadow.camera.right = 100;
    light.shadow.camera.top = 100;
    light.shadow.camera.bottom = -100;
    scene.add(light);


    const geometry = new THREE.SphereGeometry(1.5, 3, 1);
    const material = new THREE.MeshNormalMaterial( {

				} );
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    drawParticles();

  function drawParticles() {
  particles = new THREE.Group();
  scene.add(particles);
  const geometry = new THREE.TetrahedronGeometry(3.5, 0);

  for (let i = 0; i < 500; i ++) {
    const material = new THREE.MeshPhongMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      shading: THREE.FlatShading
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set((Math.random() - 0.5) * 1000,
                      (Math.random() - 0.5) * 1000,
                      (Math.random() - 0.5) * 1000);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    particles.add(mesh);
  }
}


    this.camera.position.z = 5

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))

      sphere.rotation.x += 0.01
      sphere.rotation.y += 0.01
      particles.rotation.y += 0.001
      particles.rotation.x += 0.0005
      this.renderer.render(scene, this.camera)
    }

    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  onWindowResize() {
    if (this.mount) {
      this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    }
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} style={{ position:'absolute', top:'0', width: `100vw`, height: `100vh` }}></div>
    )
  }
}

export default Scene
