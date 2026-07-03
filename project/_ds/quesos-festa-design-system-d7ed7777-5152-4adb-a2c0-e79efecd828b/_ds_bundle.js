/* @ds-bundle: {"format":4,"namespace":"QuesosFestaDesignSystem_d7ed77","components":[{"name":"HeritageBadge","sourcePath":"components/brand/HeritageBadge.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Overline","sourcePath":"components/core/Overline.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"}],"sourceHashes":{"components/brand/HeritageBadge.jsx":"05902f1dcf8d","components/brand/Wordmark.jsx":"32a5837b9dcc","components/core/Badge.jsx":"47355bdf2b84","components/core/Button.jsx":"b9ee16fd8b4b","components/core/Card.jsx":"c623634b1f64","components/core/IconButton.jsx":"ab20b1479244","components/core/Overline.jsx":"2f34f717df57","components/forms/Checkbox.jsx":"31cff1844c23","components/forms/Input.jsx":"ca6f1777d1fd","components/forms/Radio.jsx":"5ec3fb11fa78","components/forms/Select.jsx":"d50bd33a74cb","components/forms/Switch.jsx":"156a4b40e2b6","components/forms/Textarea.jsx":"dfc7d4c3a65f","components/navigation/Accordion.jsx":"d6c4c134482a","components/navigation/Tabs.jsx":"f0640a07eaf7","components/product/ProductCard.jsx":"cf9a5079e279","ui_kits/marketing/Home.jsx":"e923e82e6bb3","ui_kits/marketing/SiteFooter.jsx":"832a4315cc46","ui_kits/marketing/SiteHeader.jsx":"332b6e761a43","ui_kits/shop/Catalog.jsx":"6a79225d196d"},"inlinedExternals":[],"unexposedExports":[{"name":"hintStyle","sourcePath":"components/forms/Input.jsx"},{"name":"labelStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.QuesosFestaDesignSystem_d7ed77 = window.QuesosFestaDesignSystem_d7ed77 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/HeritageBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa HeritageBadge — the "Desde 1989 · Industria Argentina / Sin TACC" seal
 * style stamp used on packaging and marketing. Circular or pill form.
 */
function HeritageBadge({
  variant = 'seal',
  label = 'Sin TACC',
  sub = 'Libre de gluten',
  style = {},
  ...rest
}) {
  if (variant === 'italy') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--fs-2xs)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        width: 22,
        height: 15,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xs)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        background: 'var(--italy-green)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        background: 'var(--italy-white)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        background: 'var(--italy-red)'
      }
    })), "Receta original italiana");
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 96,
      height: 96,
      borderRadius: 'var(--radius-pill)',
      border: '2px solid var(--rule-gold)',
      color: 'var(--festa-navy-800)',
      textAlign: 'center',
      padding: '6px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      lineHeight: 1,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 34,
      background: 'var(--rule-gold)',
      margin: '5px 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { HeritageBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HeritageBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Wordmark — the "FESTA" lockup rendered in type (Cinzel).
 * Optional "Desde 1989" est. line and "Familia Festa" script signature.
 */
function Wordmark({
  size = 48,
  tone = 'auto',
  est = false,
  signature = false,
  style = {},
  ...rest
}) {
  // tone: 'auto' inherits; 'light' for dark grounds; 'dark' for light grounds
  const color = tone === 'light' ? '#fff' : tone === 'dark' ? 'var(--festa-navy-800)' : 'currentColor';
  const muted = tone === 'light' ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      color,
      ...style
    }
  }, rest), est && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: size * 0.16,
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: muted,
      marginBottom: size * 0.12
    }
  }, "Desde 1989"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-regular)',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-wordmark)',
      textTransform: 'uppercase',
      paddingLeft: '0.22em'
    }
  }, "Festa"), signature && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: size * 0.46,
      lineHeight: 1,
      color: tone === 'light' ? '#fff' : 'var(--festa-green-800)',
      marginTop: size * 0.06
    }
  }, "Familia Festa"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Badge — small status / category marker.
 * Product accents (mascarpone/crema/…) plus heritage & neutral tones.
 */
function Badge({
  children,
  tone = 'navy',
  variant = 'soft',
  style = {},
  ...rest
}) {
  const palette = {
    navy: 'var(--festa-navy-800)',
    green: 'var(--festa-green-800)',
    mascarpone: 'var(--accent-mascarpone)',
    crema: 'var(--accent-crema)',
    descremado: 'var(--accent-descremado)',
    quark: 'var(--accent-quark)',
    neutral: 'var(--neutral-600)',
    success: 'var(--success)',
    danger: 'var(--danger)'
  };
  const c = palette[tone] || palette.navy;
  const variants = {
    solid: {
      background: c,
      color: '#fff',
      border: `1px solid ${c}`
    },
    soft: {
      background: 'color-mix(in srgb, ' + c + ' 12%, transparent)',
      color: c,
      border: `1px solid transparent`
    },
    outline: {
      background: 'transparent',
      color: c,
      border: `1px solid ${c}`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-2xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Button — primary brand action.
 * Primary = navy fill; secondary = heritage green; outline & ghost for lower emphasis.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 'var(--fs-sm)',
      padding: '8px 16px',
      gap: '6px'
    },
    md: {
      fontSize: 'var(--fs-md)',
      padding: '11px 22px',
      gap: '8px'
    },
    lg: {
      fontSize: 'var(--fs-lg)',
      padding: '15px 30px',
      gap: '10px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-fg)',
      border: '1px solid var(--btn-primary-bg)'
    },
    secondary: {
      background: 'var(--festa-green-800)',
      color: '#fff',
      border: '1px solid var(--festa-green-800)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--festa-navy-800)',
      border: '1px solid var(--festa-navy-800)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--festa-navy-800)',
      border: '1px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--btn-primary-bg-hover)',
      borderColor: 'var(--btn-primary-bg-hover)'
    },
    secondary: {
      background: 'var(--festa-green-700)',
      borderColor: 'var(--festa-green-700)'
    },
    outline: {
      background: 'var(--festa-navy-800)',
      color: '#fff'
    },
    ghost: {
      background: 'var(--surface-sunken)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: !disabled && hover ? 'translateY(-1px)' : 'none',
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Card — soft warm surface container. Optional media, padding, hover lift.
 */
function Card({
  children,
  elevation = 'sm',
  interactive = false,
  padding = 'md',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-5)',
    lg: 'var(--space-6)'
  };
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      boxShadow: interactive && hover ? 'var(--shadow-md)' : shadows[elevation],
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      overflow: 'hidden',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa IconButton — square/round control for a single glyph (pass children as SVG/text).
 */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  'aria-label': ariaLabel,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size];
  const variants = {
    solid: {
      background: 'var(--festa-navy-800)',
      color: '#fff'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--festa-navy-800)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--festa-navy-800)',
      border: '1px solid var(--border-strong)'
    }
  };
  const hoverBg = {
    solid: 'var(--festa-navy-700)',
    ghost: 'var(--surface-sunken)',
    outline: 'var(--surface-sunken)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      border: '1px solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...(hover && !disabled ? {
        background: hoverBg[variant]
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Overline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Overline (Eyebrow) — the brand's signature section label:
 * uppercase, wide-tracked, optional gold rule. Optional script kicker above.
 */
function Overline({
  children,
  script = null,
  rule = false,
  align = 'left',
  color = 'var(--text-muted)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), script && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'var(--fs-2xl)',
      color: 'var(--festa-green-800)',
      lineHeight: 1,
      marginBottom: '2px'
    }
  }, script), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color
    }
  }, children), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      height: '2px',
      width: '48px',
      background: 'var(--rule-gold)',
      margin: align === 'center' ? 'var(--space-3) auto 0' : 'var(--space-3) 0 0'
    }
  }));
}
Object.assign(__ds_scope, { Overline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Overline.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Festa Checkbox — brand navy check. Controlled or uncontrolled. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-xs)',
      border: `1.5px solid ${isChecked ? 'var(--festa-navy-800)' : 'var(--border-strong)'}`,
      background: isChecked ? 'var(--festa-navy-800)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      flexShrink: 0
    }
  }, isChecked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5L4.8 9L10 3",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: isChecked,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Festa text Input with optional label, hint and error. */
function Input({
  label,
  hint,
  error,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--festa-navy-700)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${borderColor}`,
      background: 'var(--surface-card)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--focus-ring) 30%, transparent)' : 'none',
      width: '100%'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...hintStyle,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: hintStyle
  }, hint) : null);
}
const labelStyle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--fw-medium)',
  fontSize: 'var(--fs-sm)',
  color: 'var(--text-heading)',
  letterSpacing: 'var(--tracking-caps)'
};
const hintStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--fs-xs)',
  color: 'var(--text-muted)'
};
Object.assign(__ds_scope, { Input, labelStyle, hintStyle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Festa Radio — brand navy dot. Use several with the same `name`. */
function Radio({
  label,
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInternal(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1.5px solid ${isChecked ? 'var(--festa-navy-800)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, isChecked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--festa-navy-800)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: isChecked,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Festa Select — native dropdown, brand-styled. */
function Select({
  label,
  hint,
  error,
  id,
  children,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--festa-navy-700)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: __ds_scope.labelStyle
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)',
      padding: '10px 40px 10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${borderColor}`,
      background: 'var(--surface-card)',
      outline: 'none',
      width: '100%',
      appearance: 'none',
      cursor: 'pointer',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--focus-ring) 30%, transparent)' : 'none'
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...__ds_scope.hintStyle,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.hintStyle
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Festa Switch — toggle. Navy when on. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const v = !isOn;
    if (checked === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": isOn,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 3,
      background: isOn ? 'var(--festa-navy-800)' : 'var(--neutral-300)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur-base) var(--ease-out)',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transform: isOn ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Festa Textarea — multi-line brand-styled field. */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const taId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--festa-navy-700)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: __ds_scope.labelStyle
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--text-body)',
      resize: 'vertical',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${borderColor}`,
      background: 'var(--surface-card)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--focus-ring) 30%, transparent)' : 'none',
      width: '100%'
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...__ds_scope.hintStyle,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: __ds_scope.hintStyle
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Accordion — for FAQ / recipe steps. items: [{ id, title, content }].
 * `single` collapses others when one opens.
 */
function Accordion({
  items = [],
  single = true,
  defaultOpen = [],
  style = {},
  ...rest
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(single ? [] : prev);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--text-h3)',
        color: 'var(--text-heading)'
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        color: 'var(--accent-mascarpone)',
        fontSize: 22,
        lineHeight: 1,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: isOpen ? 400 : 0,
        transition: 'max-height var(--dur-slow) var(--ease-inout)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 var(--space-5)',
        font: 'var(--text-body-md)',
        color: 'var(--text-body)'
      }
    }, it.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa Tabs — underline tabs with a navy active indicator.
 * items: [{ id, label }]. Controlled via `value`/`onChange` or uncontrolled.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => select(it.id),
      style: {
        position: 'relative',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 2px 12px',
        fontFamily: 'var(--font-sans)',
        fontWeight: on ? 'var(--fw-semi)' : 'var(--fw-regular)',
        fontSize: 'var(--fs-md)',
        color: on ? 'var(--text-heading)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: 'var(--festa-navy-800)',
        borderRadius: 2,
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Festa ProductCard — a fresh-cheese product tile: photo, family accent,
 * name, weight/format, optional price and add action.
 */
function ProductCard({
  image,
  name,
  family = 'burrata',
  format = '',
  price = '',
  tag = '',
  onAdd = null,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const familyLabels = {
    burrata: 'Burrata',
    mascarpone: 'Mascarpone',
    crema: 'Crema',
    descremado: 'Descremado',
    quark: 'Quark'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      background: `var(--surface-sunken) center/cover no-repeat`,
      backgroundImage: image ? `url(${image})` : 'none'
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "green",
    variant: "solid"
  }, tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: family,
    variant: "soft",
    style: {
      alignSelf: 'flex-start'
    }
  }, familyLabels[family] || family), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, name), format && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, format), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto',
      paddingTop: '8px'
    }
  }, price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semi)',
      fontSize: 'var(--fs-lg)',
      color: 'var(--text-heading)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, price), onAdd && /*#__PURE__*/React.createElement("button", {
    onClick: onAdd,
    "aria-label": `Agregar ${name}`,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--festa-navy-800)',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 20,
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, "+"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Home — Festa marketing homepage. Browser JSX composing DS primitives. */
const DS = window.QuesosFestaDesignSystem_d7ed77;
const {
  Wordmark: WM,
  Button: B,
  Badge: BG,
  Overline: OV,
  ProductCard: PC,
  HeritageBadge: HB,
  Accordion: AC
} = DS;
const P = '../../assets/photos/';
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'center',
      background: `linear-gradient(90deg, rgba(20,23,63,0.92) 0%, rgba(20,23,63,0.55) 45%, rgba(20,23,63,0.08) 100%), url(${P}foto-2.jpg) center/cover no-repeat`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(OV, {
    script: "Desde 1989",
    color: "rgba(255,255,255,0.72)"
  }, "Quesos frescos artesanales"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display)',
      color: '#fff',
      fontSize: 'var(--fs-5xl)',
      margin: 'var(--space-4) 0 var(--space-4)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, "El sabor de la", /*#__PURE__*/React.createElement("br", null), "receta original"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 460
    }
  }, "M\xE1s de 35 a\xF1os elaborando burrata, stracciatella y mascarpone como manda la tradici\xF3n italiana. Todo sin TACC."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(B, {
    variant: "primary",
    size: "lg",
    style: {
      background: '#fff',
      color: 'var(--festa-navy-800)',
      borderColor: '#fff'
    }
  }, "Ver cat\xE1logo"), /*#__PURE__*/React.createElement(B, {
    variant: "outline",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.5)'
    }
  }, "Nuestra historia")))));
}
function ProductGrid() {
  const items = [{
    image: P + 'foto-12.jpg',
    name: 'Burrata Clásica',
    family: 'burrata',
    format: '250 g',
    price: '$3.200',
    tag: 'Sin TACC'
  }, {
    image: P + 'foto-13.jpg',
    name: 'Burratina con Tartufo',
    family: 'burrata',
    format: '2 × 125 g',
    price: '$3.900',
    tag: 'Nuevo'
  }, {
    image: P + 'foto-11.jpg',
    name: 'Mascarpone',
    family: 'mascarpone',
    format: '250 g',
    price: '$2.850'
  }, {
    image: P + 'foto-9.jpg',
    name: 'Crema JIRO Premium',
    family: 'crema',
    format: '1 kg',
    price: '$5.400'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(OV, {
    script: "Disfrut\xE1 de",
    rule: true,
    align: "center"
  }, "Nuestros quesos frescos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      marginTop: 'var(--space-3)'
    }
  }, "Frescura artesanal, todos los d\xEDas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-5)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement(PC, _extends({
    key: it.name
  }, it, {
    onAdd: () => {}
  }))))));
}
function Heritage() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-brand-alt)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9) var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(OV, {
    color: "rgba(255,255,255,0.7)"
  }, "Respetamos la receta original"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      color: '#fff',
      margin: 'var(--space-4) 0'
    }
  }, "Una familia, tres generaciones de queso"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'rgba(255,255,255,0.85)'
    }
  }, "Desde 1989 elaboramos quesos frescos con leche seleccionada y m\xE9todos italianos. Cada pieza se hila y arma a mano, el mismo d\xEDa que llega a tu mesa."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(HB, {
    variant: "italy"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 440,
      background: `url(${P}foto-1.jpg) center/cover no-repeat`
    }
  })));
}
function Recipes() {
  const cards = [{
    img: P + 'foto-14.jpg',
    k: 'Ensalada',
    t: 'Caprese de burrata'
  }, {
    img: P + 'foto-10.jpg',
    k: 'Horno',
    t: 'Tarta de stracciatella'
  }, {
    img: P + 'foto-1.jpg',
    k: 'Brunch',
    t: 'Bruschetta de tomate'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OV, {
    rule: true
  }, "Ideas para cocinar"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h1)',
      marginTop: 'var(--space-3)'
    }
  }, "Recetas de la casa")), /*#__PURE__*/React.createElement(B, {
    variant: "ghost"
  }, "Ver todas \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      minHeight: 300,
      background: `linear-gradient(180deg, transparent 40%, rgba(20,23,63,0.85) 100%), url(${c.img}) center/cover no-repeat`,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      padding: 'var(--space-5)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(BG, {
    tone: "green",
    variant: "solid"
  }, c.k), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h2)',
      color: '#fff',
      margin: 'var(--space-3) 0 0'
    }
  }, c.t)))))));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(OV, {
    rule: true,
    align: "center"
  }, "Preguntas frecuentes")), /*#__PURE__*/React.createElement(AC, {
    defaultOpen: ['1'],
    items: [{
      id: '1',
      title: '¿Todos los productos son sin TACC?',
      content: 'Sí. Toda la línea Festa es libre de gluten y apta para celíacos, certificada bajo norma.'
    }, {
      id: '2',
      title: '¿Cómo conservo la burrata?',
      content: 'Mantenela refrigerada entre 2° y 4°. Una vez abierta, consumila dentro de las 24 horas.'
    }, {
      id: '3',
      title: '¿Venden a comercios y restaurantes?',
      content: 'Sí, contamos con presentaciones foodservice de 1 y 3 kg. Escribinos a ventas@quesosfesta.com.ar.'
    }]
  })));
}
function Home() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ProductGrid, null), /*#__PURE__*/React.createElement(Heritage, null), /*#__PURE__*/React.createElement(Recipes, null), /*#__PURE__*/React.createElement(Faq, null));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteFooter.jsx
try { (() => {
/* Footer — Festa marketing site footer with contact block. Browser JSX. */
const {
  Wordmark: WM_F,
  HeritageBadge: HB_F,
  Input: Input_F,
  Button: Btn_F
} = window.QuesosFestaDesignSystem_d7ed77;
function SiteFooter() {
  const cols = [{
    h: 'Productos',
    items: ['Burrata', 'Stracciatella', 'Mascarpone', 'Crema JIRO', 'Quesos blancos']
  }, {
    h: 'Festa',
    items: ['Nuestra historia', 'Recetas', 'Foodservice', 'Prensa']
  }, {
    h: 'Contacto',
    items: ['11 4991 4156', 'ventas@quesosfesta.com.ar', '@quesosfesta', 'quesosfesta.com.ar']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WM_F, {
    size: 34,
    tone: "light",
    est: true,
    signature: true
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: '#fff',
      marginBottom: 'var(--space-4)'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.72)',
      fontSize: 'var(--fs-sm)',
      textDecoration: 'none'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(255,255,255,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(HB_F, {
    variant: "italy"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "Industria Argentina \xB7 Desde 1989")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,0.4)'
    }
  }, "\xA9 2026 Quesos Festa"))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteHeader.jsx
try { (() => {
/* SiteHeader — Festa marketing site top nav. Browser JSX (no imports). */
const {
  Wordmark,
  Button,
  IconButton
} = window.QuesosFestaDesignSystem_d7ed77;
function SiteHeader({
  onNav
}) {
  const Cart = /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"
  }));
  const links = ['Productos', 'Recetas', 'Nuestra historia', 'Dónde comprar'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--surface-brand)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      cursor: 'pointer'
    },
    onClick: () => onNav && onNav('home')
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 30,
    tone: "light"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Buscar",
    variant: "ghost",
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Carrito",
    variant: "ghost",
    style: {
      color: '#fff'
    }
  }, Cart), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.4)'
    }
  }, "Comprar"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shop/Catalog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Catalog — Festa shop: filter sidebar, product grid, live cart drawer. Browser JSX. */
const SHOP = window.QuesosFestaDesignSystem_d7ed77;
const {
  Wordmark: WMs,
  Button: Bs,
  Badge: BGs,
  IconButton: IB,
  ProductCard: PCs,
  Overline: OVs,
  Checkbox: CBs,
  Switch: SWs
} = SHOP;
const IMG = '../../assets/photos/';
const CATALOG = [{
  id: 1,
  image: IMG + 'foto-12.jpg',
  name: 'Burrata Clásica',
  family: 'burrata',
  format: '250 g',
  priceN: 3200,
  price: '$3.200',
  tag: 'Sin TACC',
  tacc: true
}, {
  id: 2,
  image: IMG + 'foto-13.jpg',
  name: 'Burratina con Tartufo',
  family: 'burrata',
  format: '2 × 125 g',
  priceN: 3900,
  price: '$3.900',
  tag: 'Nuevo',
  tacc: true
}, {
  id: 3,
  image: IMG + 'foto-11.jpg',
  name: 'Mascarpone',
  family: 'mascarpone',
  format: '250 g',
  priceN: 2850,
  price: '$2.850',
  tacc: true
}, {
  id: 4,
  image: IMG + 'foto-9.jpg',
  name: 'Crema JIRO Premium',
  family: 'crema',
  format: '1 kg',
  priceN: 5400,
  price: '$5.400',
  tacc: true
}, {
  id: 5,
  image: IMG + 'foto-2.jpg',
  name: 'Stracciatella',
  family: 'burrata',
  format: '200 g',
  priceN: 2990,
  price: '$2.990',
  tacc: true
}, {
  id: 6,
  image: IMG + 'foto-8.jpg',
  name: 'Queso Blanco Descremado',
  family: 'descremado',
  format: '3 kg',
  priceN: 8600,
  price: '$8.600',
  tacc: true
}, {
  id: 7,
  image: IMG + 'foto-6.jpg',
  name: 'Queso Tipo Quark',
  family: 'quark',
  format: '3 kg',
  priceN: 8900,
  price: '$8.900',
  tacc: true
}, {
  id: 8,
  image: IMG + 'foto-3.jpg',
  name: 'Crema Foodservice',
  family: 'crema',
  format: '3 kg',
  priceN: 9200,
  price: '$9.200',
  tacc: true
}];
const FAMILIES = [{
  id: 'burrata',
  label: 'Burrata & Stracciatella'
}, {
  id: 'mascarpone',
  label: 'Mascarpone'
}, {
  id: 'crema',
  label: 'Crema'
}, {
  id: 'descremado',
  label: 'Descremado'
}, {
  id: 'quark',
  label: 'Quark'
}];
function Catalog() {
  const [fams, setFams] = React.useState(new Set());
  const [onlyTacc, setOnlyTacc] = React.useState(false);
  const [cart, setCart] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const toggleFam = id => setFams(p => {
    const n = new Set(p);
    n.has(id) ? n.delete(id) : n.add(id);
    return n;
  });
  const add = item => {
    setCart(c => ({
      ...c,
      [item.id]: {
        item,
        qty: (c[item.id]?.qty || 0) + 1
      }
    }));
    setOpen(true);
  };
  const remove = id => setCart(c => {
    const n = {
      ...c
    };
    delete n[id];
    return n;
  });
  const visible = CATALOG.filter(p => (fams.size === 0 || fams.has(p.family)) && (!onlyTacc || p.tacc));
  const lines = Object.values(cart);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.item.priceN, 0);
  const money = n => '$' + n.toLocaleString('es-AR');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--surface-brand)',
      height: 72,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(WMs, {
    size: 28,
    tone: "light"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IB, {
    "aria-label": "Carrito",
    variant: "ghost",
    style: {
      color: '#fff'
    },
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"
  }))), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 9,
      background: 'var(--accent-mascarpone)',
      color: '#fff',
      fontSize: 11,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, count)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--space-6) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(OVs, {
    rule: true
  }, "Cat\xE1logo de productos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      marginTop: 'var(--space-3)'
    }
  }, "Quesos frescos & foodservice")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-6) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 96,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-xs)',
      letterSpacing: 'var(--tracking-overline)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-4)'
    }
  }, "Familias"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, FAMILIES.map(f => /*#__PURE__*/React.createElement(CBs, {
    key: f.id,
    label: f.label,
    checked: fams.has(f.id),
    onChange: () => toggleFam(f.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: 'var(--space-5) 0'
    }
  }), /*#__PURE__*/React.createElement(SWs, {
    label: "S\xF3lo sin TACC",
    checked: onlyTacc,
    onChange: setOnlyTacc
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-4)'
    }
  }, visible.length, " productos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-5)'
    }
  }, visible.map(p => /*#__PURE__*/React.createElement(PCs, _extends({
    key: p.id
  }, p, {
    onAdd: () => add(p)
  })))))), open && /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,23,63,0.45)',
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 380,
      maxWidth: '90vw',
      background: 'var(--surface-card)',
      zIndex: 41,
      boxShadow: 'var(--shadow-lg)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      margin: 0
    }
  }, "Tu pedido"), /*#__PURE__*/React.createElement(IB, {
    "aria-label": "Cerrar",
    variant: "ghost",
    onClick: () => setOpen(false)
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, lines.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "Tu carrito est\xE1 vac\xEDo."), lines.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.item.id,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-sm)',
      background: `url(${l.item.image}) center/cover`,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-heading)'
    }
  }, l.item.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, l.qty, " \xD7 ", l.item.price)), /*#__PURE__*/React.createElement(IB, {
    "aria-label": "Quitar",
    variant: "ghost",
    size: "sm",
    onClick: () => remove(l.item.id)
  }, "\u2715")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-4)',
      font: 'var(--text-body-lg)',
      color: 'var(--text-heading)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, money(total))), /*#__PURE__*/React.createElement(Bs, {
    variant: "primary",
    block: true,
    disabled: lines.length === 0
  }, "Finalizar compra"))));
}
window.Catalog = Catalog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shop/Catalog.jsx", error: String((e && e.message) || e) }); }

__ds_ns.HeritageBadge = __ds_scope.HeritageBadge;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Overline = __ds_scope.Overline;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
