
import { updateUserLocation1, calculateDistance, showTarget, hideTarget, showButton, hideButton } from './locat.js';








export const Ar = {
  render: () => {
    updateUserLocation1();
    
    return `
      <style>
        .text-label {
          width: 55px;
          background-color: yellow;
          border: 1px solid black;
          padding: 5px;
          border-radius: 5px;
        }
      </style>
      
      
      <a-scene id="scene" arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true' vr-mode-ui="enabled:false" cursor='rayOrigin: mouse'>
        <a-camera id="camera" gps-new-camera='gpsMinDistance: 5'></a-camera>
        
        <a-entity id="target1" material='color: purple' geometry='primitive: box' gps-new-entity-place="latitude: 24.14977351688243; longitude: 120.68377231768088" scale="4 4 4" visible="false" look-at='[camera]'>
          <a-entity position="0 1 0" look-at='[camera]'>
            <a-entity geometry="primitive: plane" material="color: black" scale="1 0.5 0.1"></a-entity>
            <a-text value="mis" position="0 0 0.2" align="center"></a-text>
          </a-entity>

          <a-entity id="showButton1" visible="false">
            <!-- 子平面1 -->
            <a-entity geometry="primitive: plane" material="color: blue" scale="0.5 0.5 0.5" position="0 -1 0" clicker2-1>
              <a-text value="button1" align="center"></a-text>
            </a-entity>

            <!-- 子平面2 -->
            <a-entity geometry="primitive: plane" material="color: red" scale="0.5 0.5 0.5" position="0.5 -1 0" clicker2-2>
              <a-text value="button2" align="center"></a-text>
            </a-entity>

            <!-- 子平面3 -->
            <a-entity geometry="primitive: plane" material="color: green" scale="0.5 0.5 0.5" position="-0.5 -1 0" clicker2-3>
              <a-text value="button3" align="center"></a-text>
            </a-entity>
          </a-entity>      
        </a-entity>
        
        <a-entity id="target2" material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: 24.151025939583285; longitude: 120.68141029301923" scale="4 4 4" visible="false" look-at='[camera]'>
          <a-entity position="0 1 0" look-at='[camera]'>
            <a-entity geometry="primitive: plane" material="color: black" scale="1 0.5 0.1"></a-entity>
            <a-text value="home" position="0 0 0.2" align="center"></a-text>
          </a-entity>

          <a-entity id="showButton2" visible="false">
            <!-- 子平面1 -->
            <a-entity geometry="primitive: plane" material="color: blue" scale="0.5 0.5 0.5" position="0 -1 0" clicker2-1>
              <a-text value="button1" align="center"></a-text>
            </a-entity>

            <!-- 子平面2 -->
            <a-entity geometry="primitive: plane" material="color: red" scale="0.5 0.5 0.5" position="0.5 -1 0" clicker2-2>
              <a-text value="button2" align="center"></a-text>
            </a-entity>

            <!-- 子平面3 -->
            <a-entity geometry="primitive: plane" material="color: green" scale="0.5 0.5 0.5" position="-0.5 -1 0" clicker2-3>
              <a-text value="button3" align="center"></a-text>
            </a-entity>
          </a-entity>
        </a-entity>
      </a-scene>
      
    `;
  },
};
