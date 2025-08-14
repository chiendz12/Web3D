AFRAME.registerComponent('mouse-rotate-scale', {
  init: function () {
    let isMouseDown = false;
    let lastX = 0;
    const el = this.el;

    // Rotate 
    this.el.sceneEl.canvas.addEventListener('mousedown', (e) => {
      isMouseDown = true;   // nhấn chuột
      lastX = e.clientX;
    });
    this.el.sceneEl.canvas.addEventListener('mouseup', () => {
      isMouseDown = false;  // nhả chuột    
    });
    this.el.sceneEl.canvas.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return; 
      const deltaX = e.clientX - lastX;
      lastX = e.clientX;
      let rotation = el.getAttribute('rotation');
      rotation.y += deltaX * 0.5;
      el.setAttribute('rotation', rotation);
    });

    // Scale 
    this.el.sceneEl.canvas.addEventListener('wheel', (e) => {
      let scale = el.getAttribute('scale');
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      scale.x *= factor;
      scale.y *= factor;
      scale.z *= factor;
      el.setAttribute('scale', scale);
    });
  }
});
