/** Decorative cat sticker SVGs — purely visual, non-interactive */
export function CalcStickers() {
  return (
    <>
      <div className="sticker sticker--peek" aria-hidden="true">
        <svg viewBox="0 0 96 96" role="presentation" aria-hidden="true">
          <ellipse cx="52" cy="58" rx="34" ry="28" fill="#ffe8e4" stroke="#e8b8bc" strokeWidth="2.2" />
          <circle cx="54" cy="38" r="30" fill="#fff5f2" stroke="#e8b8bc" strokeWidth="2.2" />
          <path
            d="M28 32 L34 10 L48 26 Z"
            fill="#fff5f2"
            stroke="#e8b8bc"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M68 26 L80 10 L86 32 Z"
            fill="#fff5f2"
            stroke="#e8b8bc"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <ellipse cx="46" cy="40" rx="4" ry="5" fill="#5c4d62" />
          <ellipse cx="62" cy="40" rx="4" ry="5" fill="#5c4d62" />
          <ellipse cx="46" cy="41" rx="1.5" ry="2" fill="#fff" opacity="0.7" />
          <ellipse cx="62" cy="41" rx="1.5" ry="2" fill="#fff" opacity="0.7" />
          <path
            d="M52 46 Q54 49 56 46"
            fill="none"
            stroke="#c49aa0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="38" cy="48" r="5" fill="#ffb7c5" opacity="0.35" />
          <circle cx="70" cy="48" r="5" fill="#ffb7c5" opacity="0.35" />
          <path d="M22 42 Q12 44 10 50" fill="none" stroke="#dcc8cc" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M76 42 Q86 44 88 50" fill="none" stroke="#dcc8cc" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      <div className="sticker sticker--tiny" aria-hidden="true">
        <svg viewBox="0 0 72 72" role="presentation" aria-hidden="true">
          <ellipse cx="38" cy="44" rx="26" ry="20" fill="#eef6ff" stroke="#b8cceb" strokeWidth="2" />
          <circle cx="38" cy="30" r="22" fill="#f7fbff" stroke="#b8cceb" strokeWidth="2" />
          <path
            d="M18 26 L22 8 L34 22 Z"
            fill="#f7fbff"
            stroke="#b8cceb"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M48 22 L58 8 L62 26 Z"
            fill="#f7fbff"
            stroke="#b8cceb"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M30 30 Q38 36 46 30" fill="none" stroke="#5c4d62" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="26" r="3.5" fill="#5c4d62" />
          <circle cx="44" cy="26" r="3.5" fill="#5c4d62" />
          <circle cx="48" cy="50" r="4" fill="#ffb7c5" opacity="0.5" />
        </svg>
      </div>

      <div className="sticker sticker--sleep" aria-hidden="true">
        <svg viewBox="0 0 104 72" role="presentation" aria-hidden="true">
          <ellipse cx="52" cy="44" rx="44" ry="26" fill="#f3efe9" stroke="#d4c9bf" strokeWidth="2" />
          <circle cx="44" cy="36" r="20" fill="#faf6f1" stroke="#d4c9bf" strokeWidth="2" />
          <path
            d="M26 30 L30 14 L40 26 Z"
            fill="#faf6f1"
            stroke="#d4c9bf"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M56 26 L66 14 L72 28 Z"
            fill="#faf6f1"
            stroke="#d4c9bf"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M38 38 Q44 34 50 38"
            fill="none"
            stroke="#8b7d85"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse cx="76" cy="40" rx="6" ry="4" fill="#c49aa0" opacity="0.35" />
          <path
            d="M82 22 Q92 18 96 10"
            fill="none"
            stroke="#b8a99f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M88 26 Q96 22 100 16"
            fill="none"
            stroke="#b8a99f"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse cx="62" cy="48" rx="10" ry="14" fill="#faf6f1" stroke="#d4c9bf" strokeWidth="1.8" />
        </svg>
      </div>

      <div className="sticker sticker--paws" aria-hidden="true">
        <svg viewBox="0 0 80 40" role="presentation" aria-hidden="true">
          <g fill="#f0d6dc" opacity="0.85">
            <ellipse cx="14" cy="22" rx="9" ry="7" />
            <circle cx="8" cy="12" r="4.5" />
            <circle cx="14" cy="9" r="4.5" />
            <circle cx="21" cy="10" r="4.5" />
            <circle cx="26" cy="15" r="4" />
          </g>
          <g fill="#dce8f5" opacity="0.75">
            <ellipse cx="56" cy="22" rx="8" ry="6.5" />
            <circle cx="51" cy="13" r="4" />
            <circle cx="56" cy="10" r="4" />
            <circle cx="62" cy="11" r="4" />
            <circle cx="66" cy="15" r="3.5" />
          </g>
        </svg>
      </div>
    </>
  )
}
