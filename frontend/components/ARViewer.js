'use client';
import { useEffect, useRef, useState } from 'react';

const API_BASE = 'http://localhost:3000';

export default function ARViewer() {
  const [models, setModels] = useState([]);
  const modelEntityRef = useRef(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/models`)
      .then(res => res.json())
      .then(data => {
        setModels(data);
        setTimeout(() => {
          if (data[0] && modelEntityRef.current) {
            modelEntityRef.current.setAttribute('gltf-model', `${API_BASE}${data[0].file}`);
          }
        }, 500);
      });
  }, []);

  const handleChange = (e) => {
    modelEntityRef.current.setAttribute('gltf-model', `${API_BASE}${e.target.value}`);
  };

  return (
    <>
      <select id="modelSelector" onChange={handleChange} style={{
        position: 'absolute', top: 10, left: 10, zIndex: 1000
      }}>
        {models.map((m) => (
          <option key={m.name} value={m.file}>{m.name}</option>
        ))}
      </select>

      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
        renderer="antialias: true; colorManagement: true; physicallyCorrectLights: true"
      >
        <a-marker type="pattern" url={`${API_BASE}/marker/marker.patt`}>
          <a-entity
            ref={modelEntityRef}
            position="0 0 0"
            rotation="0 180 0"
            scale="1 1 1"
            animation-mixer
            mouse-rotate-scale
          ></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
      </a-scene>
    </>
  );
}
