import { Route } from './Route'
import { NotFound } from '../pages/NotFound'
// 找出對應元件
// path:目前路徑,routes:路徑設定
const getComponent = (path, routes) => {
  let result = routes.find((r) => r.path.match(new RegExp(`^${path}$`))) || {}
  return result
}

export const Router = () => {
     // 0.若沒有hash則強制加入預設路徑
    if (!location.hash) {
        location.hash = '/'
    }
    // 1.得到目前路徑(對應route)
    const path = location.hash.slice(1).toLowerCase()
    
    // 2.找出對應頁面
    // ES6 解構賦值
    const { component = NotFound } = getComponent(path, Route)

    //不是ar畫面的都刪除掉video元素
    if (path !== '/Ar') {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          videoElement.parentNode.removeChild(videoElement);
        }
      }

    // 3.將元件內容渲染至畫面
    document.querySelector('#wrapper').innerHTML = component.render()
  }