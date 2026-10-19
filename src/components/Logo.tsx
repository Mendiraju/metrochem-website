import { COMPANY } from '../config/site'

type LogoProps = {
  compact?: boolean
}

function Logo({ compact = false }: LogoProps) {
  return (
    <div className="brand" aria-label={COMPANY.name}>
      <svg className="brand-mark" viewBox="0 0 92 92" role="img" aria-label="Metrochem molecular logo">
        <circle cx="46" cy="46" r="42" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="2" />
        <circle cx="21" cy="28" r="6" fill="currentColor" />
        <circle cx="66" cy="20" r="5" fill="currentColor" />
        <circle cx="73" cy="61" r="7" fill="currentColor" />
        <circle cx="30" cy="70" r="6" fill="currentColor" />
        <circle cx="45" cy="46" r="8" fill="currentColor" />
        <path d="M45 46L21 28M45 46L66 20M45 46L73 61M45 46L30 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div>
        <p className="brand-name">Metrochem API</p>
        {!compact && <p className="brand-subtitle">Private Limited</p>}
      </div>
    </div>
  )
}

export default Logo
