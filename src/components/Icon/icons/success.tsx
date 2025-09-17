import type { IconProps } from '@ds/components/Icon'

export const Success = ({ size, fill = 'none', stroke = 'var(--rp-color-success)' }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
          strokeMiterlimit: '10',
        }}
      />
      <polyline
        points="352 176 217.6 336 160 272"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
          strokeMiterlimit: '10',
        }}
      />
    </svg>
  )
}
