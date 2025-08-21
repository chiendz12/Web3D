AFRAME.registerComponent('mouse-rotate-scale', {
  init: function () {
    let isMouseDown = false;
    let isTouching = false;
    let lastX = 0;
    let lastY = 0;
    const el = this.el;

    const rotateSpeed = 0.5;

    // Rotate 
    this.el.sceneEl.canvas.addEventListener('mousedown', (e) => {
      isMouseDown = true;   // nhấn chuột
      lastX = e.clientX;
      lastY = e.clientY;
    });
    this.el.sceneEl.canvas.addEventListener('mouseup', () => {
      isMouseDown = false;  // nhả chuột    
    });
    this.el.sceneEl.canvas.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return; 
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;

      let rotation = el.getAttribute('rotation');
      rotation.x += deltaY * rotateSpeed;
      rotation.y += deltaX * rotateSpeed;
      rotation.z += (deltaX + deltaY) * rotateSpeed;

      el.setAttribute('rotation', rotation);
    });

    // Cảm ứng
    this.el.sceneEl.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isTouching = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    });

    this.el.sceneEl.canvas.addEventListener('touchmove', (e) => {
      if (!isTouching || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - lastX;
      const deltaY = e.touches[0].clientY - lastY;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;

      let rotation = el.getAttribute('rotation');
      rotation.x += deltaY * rotateSpeed;
      rotation.y += deltaX * rotateSpeed;
      el.setAttribute('rotation', rotation);
    });

    this.el.sceneEl.canvas.addEventListener('touchend', () => {
      isTouching = false;
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
