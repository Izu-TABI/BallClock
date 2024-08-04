import * as THREE from "three";

// サイズを指定
const width = 1000;
const height = 680;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(50, width / height);
camera.position.set(0, 40, +1000);



const geometry = new THREE.IcosahedronGeometry(370, 1); // 半径, 面の細かさ
const material = new THREE.MeshBasicMaterial({ color: 'black' }); // 二十面体の色

// 二十面体を作成
const icosahedron = new THREE.Mesh(geometry, material);

// 枠線を作成
const icosahedronLine = new THREE.LineSegments(
  new THREE.EdgesGeometry(geometry), // 線を生成する元になるgeometry
  new THREE.LineBasicMaterial({ color: 0xffffff }) // 線のmaterial
);
const pointer = new THREE.Vector2();
// 二十面体に枠線を追加
icosahedron.add(icosahedronLine);

// sceneに追加
scene.add(icosahedron);
function onPointerMove(event) {

  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

}
function animate() {

  // 再帰
  requestAnimationFrame(animate);
  // レンダリング
  renderer.render(scene, camera);

  // 二十面体を回転させる
  icosahedron.rotation.y += pointer.x * 0.007;
  icosahedron.rotation.x += -pointer.y * 0.007;
}

// 関数呼び出し
animate();
window.addEventListener('pointermove', onPointerMove);
