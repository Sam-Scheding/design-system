export interface IconProps {
  size: '16' | '24' | '32' | '48'
  stroke?:
    | 'currentColor'
    | 'none'
    | 'var(--rp-color-text-heading)'
    | 'var(--rp-color-purple-600)'
    | 'var(--rp-color-danger)'
    | 'var(--rp-color-success)'
    | 'var(--rp-color-text-body)'
  fill?:
    | 'currentColor'
    | 'none'
    | 'var(--rp-color-text-heading)'
    | 'var(--rp-color-purple-600)'
    | 'var(--rp-color-danger)'
    | 'var(--rp-color-success)'
    | 'var(--rp-color-text-body)'
}
