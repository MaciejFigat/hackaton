import React from 'react'
import { useStyletron } from 'baseui'
interface MockupMobileProps {
  version?:
    | 'ipad-pro'
    | 'iphone-x'
    | 'apple-watch'
    | 'imac-pro'
    | 'surface-studio'
    | 'macbook.device-spacegray'
    | 'macbook.device-rosegold'
    | 'macbook.device-gold'
    | 'macbook'
    | 'macbook-pro'
    | 'surface-book'
    | 'ipad-pro.device-spacegray'
    | 'ipad-pro.device-rosegold'
    | 'ipad-pro.device-gold'
    | 'ipad-pro'
    | 'galaxy-s8.device-blue'
    | 'galaxy-s8'
    | 'google-pixel.device-blue'
    | 'google-pixel.device-black'
    | 'google-pixel'
    | 'iphone-8.device-spacegray'
    | 'iphone-8.device-gold'
    | 'iphone-8'

  children?: React.ReactNode
}
// ipad-pro iphone-x
const MockupMobile: React.FC<MockupMobileProps> = ({ children, version }) => {
  const [css] = useStyletron()
  return (
    <div className={`device device-${version}`}>
      <div className='device-frame'>
        <div
          className={css({
            overflow: 'hidden',
            borderRadius: '30px',
          })}
        >
          {children}
        </div>
      </div>
      <div className='device-stripe' />
      <div className='device-header' />
      <div className='device-sensors' />
      <div className='device-btns' />
      <div className='device-power' />
    </div>
  )
}
export default MockupMobile
