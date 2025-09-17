import type { IconProps } from '@ds/components/Icon'

export const ChevronDown = ({ size, fill, stroke }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <polyline
        points="112 184 256 328 400 184"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px',
        }}
      />
    </svg>
  )
}
