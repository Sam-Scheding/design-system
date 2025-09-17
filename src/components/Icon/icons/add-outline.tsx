import type { IconProps } from '@ds/components/Icon'

export const AddOutline = ({ size, fill, stroke }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512" fill={fill}>
      <line
        x1="256"
        y1="112"
        x2="256"
        y2="400"
        style={{
          fill: 'none',
          stroke,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
      <line
        x1="400"
        y1="256"
        x2="112"
        y2="256"
        style={{
          fill: 'none',
          stroke,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px',
        }}
      />
    </svg>
  )
}
