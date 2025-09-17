import type { IconProps } from '../types'

export const Circle = ({ size, fill, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={fill}
      stroke={stroke}
    >
      <circle cx="256" cy="256" r={Number(size) * 5.12} />
    </svg>
  )
}
