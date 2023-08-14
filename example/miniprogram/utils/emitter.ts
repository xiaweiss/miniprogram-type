import mitt from 'mitt'
import type { Emitter } from 'mitt'

type Events = {
  'keyboardHeightChange': { height: number },
  'page:tap': WechatMiniprogram.TouchEvent,
  'page:touchend': WechatMiniprogram.TouchEvent,
  'page:touchstart': WechatMiniprogram.TouchEvent,
  'windowResize': void
}

/** 事件总线 */
export const emitter: Emitter<Events> = mitt<Events>()
