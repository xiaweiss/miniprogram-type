interface AppData {
  /** 全局保存的信息（只存一层） */
  globalData: {
    /** API 类别 */
    apiCategory:
      /** 默认类别 */
      'default' |
      /** 原生功能化，视频号直播商品、商品橱窗等场景打开的小程序 */
      'nativeFunctionalized' |
      /** 仅浏览，朋友圈快照页等场景打开的小程序 */
      'browseOnly' |
      /** 内嵌，通过打开半屏小程序能力打开的小程序 */
      'embedded'
    /** 录音权限 */
    authRecord: boolean
    /** 是否授权保存到相册 */
    authWritePhotosAlbum: boolean
    /** 小程序版本 */
    envVersion: 'release' | 'trial' | 'develop'
    /** 是否弱网 */
    isWeakNet: boolean
    /** 当前键盘高度 */
    keyboardHeight: number
    /** 导航栏高度 */
    navBarHeight: number
    /** 底部安全区距离 */
    safeAreaBottom: number
    /** 场景值 */
    scene: number
    /** 转发 ticket */
    shareTicket: string
    /** 系统信息 */
    systemInfo?: WechatMiniprogram.SystemInfo
    /** 用户 ID */
    uuid: string
  }
}
