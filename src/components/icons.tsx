type IconProps = {
  size?: number
}

export function TelegramIcon({ size = 17 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinejoin="round">
      <path d="M20.6 4.6 3.8 11.1c-.9.4-.8 1.7.1 2l3.9 1.3 1.5 4.7c.3.9 1.5 1 1.9.2l2.2-3.3 4.2 3.1c.8.6 2 .2 2.2-.8l2.6-12.2c.2-1-.8-1.8-1.8-1.5Z" />
      <path d="M7.8 14.4 18.5 7.7" strokeLinecap="round" />
    </svg>
  )
}

export function PinIcon({ size = 10 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
      <circle cx={12} cy={9} r={2.5} />
    </svg>
  )
}

export function InstagramIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z" />
      <path d="M12 16.2a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Z" />
      <path d="M17.3 6.9h.01" strokeLinecap="round" strokeWidth={3} />
    </svg>
  )
}

export function WhatsAppIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <path d="M20 11.8a8 8 0 0 1-11.8 7l-3.2.8.9-3.1A8 8 0 1 1 20 11.8Z" />
      <path
        d="M9.4 9.2c.2-.5.4-.6.8-.6h.6c.2 0 .5.1.6.4l.7 1.6c.1.2.1.5 0 .7l-.5.6c-.1.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6 0l.7-.5c.2-.1.5-.1.7 0l1.5.7c.3.1.4.4.4.6v.6c0 .4-.2.7-.6.8-.7.3-1.9.3-3.3-.2-1.9-.7-4-2.7-4.9-4.6-.6-1.3-.6-2.6-.3-3.2Z"
        strokeWidth={1.4}
      />
    </svg>
  )
}
