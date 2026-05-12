import { useCallback, useEffect, useState } from 'react'
import { CalcStickers } from './CatStickers'
import './App.css'

type Operator = '+' | '-' | '*' | '/'

function compute(a: number, op: Operator, b: number): number {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b === 0 ? NaN : a / b
    default:
      return b
  }
}

function opLabel(operator: Operator): string {
  switch (operator) {
    case '*':
      return '×'
    case '/':
      return '÷'
    case '-':
      return '−'
    case '+':
      return '+'
    default:
      return operator
  }
}

function formatDisplay(n: number): string {
  if (!Number.isFinite(n)) return 'Error'
  const rounded = Math.round(n * 1e10) / 1e10
  let s = Object.is(rounded, -0) ? '0' : String(rounded)
  if (s.replace('-', '').length > 14) {
    s = n.toExponential(6)
  }
  return s
}

const initial = {
  display: '0',
  prev: null as number | null,
  op: null as Operator | null,
  fresh: false,
}

export default function App() {
  const [display, setDisplay] = useState(initial.display)
  const [prev, setPrev] = useState<number | null>(initial.prev)
  const [op, setOp] = useState<Operator | null>(initial.op)
  const [fresh, setFresh] = useState(initial.fresh)

  const reset = useCallback(() => {
    setDisplay(initial.display)
    setPrev(initial.prev)
    setOp(initial.op)
    setFresh(initial.fresh)
  }, [])

  const pushDigit = useCallback(
    (d: string) => {
      if (display === 'Error') return
      if (fresh) {
        setDisplay(d === '.' ? '0.' : d)
        setFresh(false)
        return
      }
      if (d === '.') {
        if (display.includes('.')) return
        setDisplay(display + '.')
        return
      }
      if (display === '0') {
        setDisplay(d)
        return
      }
      if (display.replace('-', '').length >= 14) return
      setDisplay(display + d)
    },
    [display, fresh],
  )

  const negate = useCallback(() => {
    if (display === 'Error') return
    if (display === '0' || display === '0.') return
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)
  }, [display])

  const percent = useCallback(() => {
    if (display === 'Error') return
    const n = parseFloat(display)
    if (Number.isNaN(n)) return
    setDisplay(formatDisplay(n / 100))
    setFresh(true)
  }, [display])

  const commitOperator = useCallback(
    (next: Operator) => {
      if (display === 'Error') return
      const input = parseFloat(display)
      if (Number.isNaN(input)) return

      if (prev !== null && op !== null && !fresh) {
        const result = compute(prev, op, input)
        setDisplay(formatDisplay(result))
        if (!Number.isFinite(result)) {
          setPrev(null)
          setOp(null)
          setFresh(true)
          return
        }
        setPrev(result)
      } else {
        setPrev(input)
      }
      setOp(next)
      setFresh(true)
    },
    [display, prev, op, fresh],
  )

  const equals = useCallback(() => {
    if (display === 'Error') return
    if (prev === null || op === null) return
    const input = parseFloat(display)
    if (Number.isNaN(input)) return
    const result = compute(prev, op, input)
    setDisplay(formatDisplay(result))
    setPrev(null)
    setOp(null)
    setFresh(true)
  }, [display, prev, op])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const k = e.key
      if (k >= '0' && k <= '9') {
        e.preventDefault()
        pushDigit(k)
        return
      }
      if (k === '.') {
        e.preventDefault()
        pushDigit('.')
        return
      }
      if (k === 'Escape') {
        e.preventDefault()
        reset()
        return
      }
      if (k === 'Enter' || k === '=') {
        e.preventDefault()
        equals()
        return
      }
      if (k === '+' || k === '-') {
        e.preventDefault()
        commitOperator(k === '+' ? '+' : '-')
        return
      }
      if (k === '*') {
        e.preventDefault()
        commitOperator('*')
        return
      }
      if (k === '/') {
        e.preventDefault()
        commitOperator('/')
        return
      }
      if (k === '%') {
        e.preventDefault()
        percent()
        return
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [pushDigit, reset, equals, commitOperator, percent])

  type Btn =
    | { kind: 'digit'; label: string; wide?: boolean }
    | { kind: 'fn'; label: string; onClick: () => void }
    | { kind: 'op'; label: string; op: Operator }
    | { kind: 'eq'; label: string }

  const rows: Btn[][] = [
    [
      { kind: 'fn', label: 'C', onClick: reset },
      { kind: 'fn', label: '±', onClick: negate },
      { kind: 'fn', label: '%', onClick: percent },
      { kind: 'op', label: '÷', op: '/' },
    ],
    [
      { kind: 'digit', label: '7' },
      { kind: 'digit', label: '8' },
      { kind: 'digit', label: '9' },
      { kind: 'op', label: '×', op: '*' },
    ],
    [
      { kind: 'digit', label: '4' },
      { kind: 'digit', label: '5' },
      { kind: 'digit', label: '6' },
      { kind: 'op', label: '−', op: '-' },
    ],
    [
      { kind: 'digit', label: '1' },
      { kind: 'digit', label: '2' },
      { kind: 'digit', label: '3' },
      { kind: 'op', label: '+', op: '+' },
    ],
    [
      { kind: 'digit', label: '0', wide: true },
      { kind: 'digit', label: '.' },
      { kind: 'eq', label: '=' },
    ],
  ]

  function renderBtn(btn: Btn) {
    const wide = btn.kind === 'digit' && btn.wide
    if (btn.kind === 'digit') {
      return (
        <button
          key={btn.label + (wide ? '-0' : '')}
          type="button"
          className={`calc__btn calc__btn--num${wide ? ' calc__btn--wide' : ''}`}
          onClick={() => pushDigit(btn.label)}
        >
          {btn.label}
        </button>
      )
    }
    if (btn.kind === 'fn') {
      return (
        <button
          key={btn.label}
          type="button"
          className="calc__btn calc__btn--fn"
          onClick={btn.onClick}
        >
          {btn.label}
        </button>
      )
    }
    if (btn.kind === 'op') {
      return (
        <button
          key={btn.label}
          type="button"
          className="calc__btn calc__btn--op"
          onClick={() => commitOperator(btn.op)}
        >
          {btn.label}
        </button>
      )
    }
    return (
      <button
        key={btn.label}
        type="button"
        className="calc__btn calc__btn--eq"
        onClick={equals}
      >
        {btn.label}
      </button>
    )
  }

  const expr =
    prev !== null && op !== null
      ? `${formatDisplay(prev)} ${opLabel(op)}`
      : ''

  return (
    <main className="calc-wrap">
      <div className="calc-stage">
        <CalcStickers />
        <div className="calc" aria-label="Calculator">
          <header className="calc__header">
            <div className="calc__brand">
              <img
                className="calc__logo"
                src="/favicon.svg"
                alt=""
                width={40}
                height={40}
                decoding="async"
              />
              <div className="calc__brand-text">
                <h1 className="calc__title">Kitty Calculator</h1>
                <p className="calc__tagline">Soft buttons, sharp math</p>
              </div>
            </div>
          </header>
          <div className="calc__screen">
            <div className="calc__expr" aria-hidden={!expr}>
              {expr || '\u00a0'}
            </div>
            <output
              className="calc__display"
              htmlFor="calc-keys"
              aria-live="polite"
            >
              {display}
            </output>
          </div>
          <div id="calc-keys" className="calc__keys">
            {rows.flatMap((row) => row.map(renderBtn))}
          </div>
        </div>
      </div>
    </main>
  )
}
