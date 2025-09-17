import type { IconProps } from '@ds/components/Icon'

export const Menu = ({ size, fill, stroke }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <line
        x1="88"
        y1="152"
        x2="424"
        y2="152"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: '48px',
        }}
      />
      <line
        x1="88"
        y1="256"
        x2="424"
        y2="256"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: '48px',
        }}
      />
      <line
        x1="88"
        y1="360"
        x2="424"
        y2="360"
        style={{
          fill,
          stroke,
          strokeLinecap: 'round',
          strokeMiterlimit: 10,
          strokeWidth: '48px',
        }}
      />
    </svg>
  )
}
