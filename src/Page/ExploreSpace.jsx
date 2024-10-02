import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Import textures
import starsTexture from "../../public/stars.jpg";
import sunTexture from "../../public/sun.jpg";
import mercuryTexture from "../../public/mercury.jpg";
import venusTexture from "../../public/venus.jpg";
import earthTexture from "../../public/earth.jpg";
import marsTexture from '../../public/mars.jpg';
import jupiterTexture from '../../public/jupiter.jpg';
import saturnTexture from '../../public/saturn.jpg';
import saturnRingTexture from '../../public/saturn ring.png';
import uranusTexture from '../../public/uranus.jpg';
import uranusRingTexture from '../../public/uranus ring.png';
import neptuneTexture from '../../public/neptune.jpg';
import plutoTexture from '../../public/pluto.jpg';

const SolarSystem = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const orbit = new OrbitControls(camera, renderer.domElement);
    camera.position.set(-90, 140, 140);
    orbit.update();

    const raycaster = new THREE.Raycaster(); // Add raycaster
    const mouse = new THREE.Vector2(); // To store mouse coordinates

    // Add ambient light and point light to brighten planets
    const ambientLight = new THREE.AmbientLight(0x888888, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 3, 500);
    scene.add(pointLight);

    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
      starsTexture,
    ]);

    const textureLoader = new THREE.TextureLoader();

    // Sun
    const sunGeo = new THREE.SphereGeometry(16, 30, 30);
    const sunMat = new THREE.MeshBasicMaterial({
      map: textureLoader.load(sunTexture),
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);
    pointLight.position.set(sun.position.x, sun.position.y, sun.position.z);

    // Create planets
    function createPlanet(size, texture, position, ring) {
      const geo = new THREE.SphereGeometry(size, 30, 30);
      const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture),
        emissive: 0x111111, // Makes planets slightly emissive
        emissiveIntensity: 0.5,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const obj = new THREE.Object3D();
      obj.add(mesh);

      if (ring) {
        const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          map: textureLoader.load(ring.texture),
          side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
      }

      scene.add(obj);
      mesh.position.x = position;
      return { mesh, obj };
    }

    // Create orbit paths
    function createOrbitPath(radius) {
      const curve = new THREE.EllipseCurve(
        0, 0, // xRadius and yRadius
        radius, radius, // radius in X and Y axes
        0, 2 * Math.PI, // Start and end angles
        false, // Clockwise
        0 // Rotation
      );

      const points = curve.getPoints(100);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });
      const ellipse = new THREE.Line(geometry, material);
      ellipse.rotation.x = Math.PI / 2; // Align orbit plane horizontally
      scene.add(ellipse);
    }

    // Planets with orbit paths
    const mercury = createPlanet(3.2, mercuryTexture, 28);
    createOrbitPath(28);

    const venus = createPlanet(5.8, venusTexture, 44);
    createOrbitPath(44);

    const earth = createPlanet(6, earthTexture, 62);
    createOrbitPath(62);

    const mars = createPlanet(4, marsTexture, 78);
    createOrbitPath(78);

    const jupiter = createPlanet(12, jupiterTexture, 100);
    createOrbitPath(100);

    const saturn = createPlanet(10, saturnTexture, 138, {
      innerRadius: 10,
      outerRadius: 20,
      texture: saturnRingTexture,
    });
    createOrbitPath(138);

    const uranus = createPlanet(7, uranusTexture, 176, {
      innerRadius: 7,
      outerRadius: 12,
      texture: uranusRingTexture,
    });
    createOrbitPath(176);

    const neptune = createPlanet(7, neptuneTexture, 200);
    createOrbitPath(200);

    const pluto = createPlanet(2.8, plutoTexture, 216);
    createOrbitPath(216);

    // Mouse move event to detect clicks
    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('click', () => {
      raycaster.setFromCamera(mouse, camera);

      // Get all objects in the scene
      const intersects = raycaster.intersectObjects(scene.children, true);

      // Check if Earth was clicked
      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        // Check if the clicked object is Earth (compared by its mesh)
        if (clickedObject === earth.mesh) {
          navigate('/earth'); // Navigate to Earth page when Earth is clicked
        }
      }
    });

    // Animate
    function animate() {
      // Self-rotation
      sun.rotateY(0.004);
      mercury.mesh.rotateY(0.004);
      venus.mesh.rotateY(0.002);
      earth.mesh.rotateY(0.02);
      mars.mesh.rotateY(0.018);
      jupiter.mesh.rotateY(0.04);
      saturn.mesh.rotateY(0.038);
      uranus.mesh.rotateY(0.03);
      neptune.mesh.rotateY(0.032);
      pluto.mesh.rotateY(0.008);

      // Around-sun-rotation
      mercury.obj.rotateY(0.04);
      venus.obj.rotateY(0.015);
      earth.obj.rotateY(0.01);
      mars.obj.rotateY(0.008);
      jupiter.obj.rotateY(0.002);
      saturn.obj.rotateY(0.0009);
      uranus.obj.rotateY(0.0004);
      neptune.obj.rotateY(0.0001);
      pluto.obj.rotateY(0.00007);

      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    // Resize handling
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      // Cleanup scene on unmount
      document.body.removeChild(renderer.domElement);
    };
  }, [navigate]); // Add navigate as a dependency to useEffect

  return <></>;
};

export default SolarSystem;
