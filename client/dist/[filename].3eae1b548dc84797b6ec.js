/*! For license information please see [filename].3eae1b548dc84797b6ec.js.LICENSE.txt */
(() => {
	'use strict';
	var e,
		t,
		n = {
			448: (e, t, n) => {
				var r = n(294),
					a = n(840);
				function o(e) {
					for (
						var t =
								'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
							n = 1;
						n < arguments.length;
						n++
					)
						t += '&args[]=' + encodeURIComponent(arguments[n]);
					return (
						'Minified React error #' +
						e +
						'; visit ' +
						t +
						' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
					);
				}
				var i = new Set(),
					l = {};
				function s(e, t) {
					u(e, t), u(e + 'Capture', t);
				}
				function u(e, t) {
					for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
				}
				var c = !(
						'undefined' == typeof window ||
						void 0 === window.document ||
						void 0 === window.document.createElement
					),
					f = Object.prototype.hasOwnProperty,
					d =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					h = {};
				function m(e, t, n, r, a, o, i) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = r),
						(this.attributeNamespace = a),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = o),
						(this.removeEmptyString = i);
				}
				var y = {};
				'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
					.split(' ')
					.forEach(function (e) {
						y[e] = new m(e, 0, !1, e, null, !1, !1);
					}),
					[
						['acceptCharset', 'accept-charset'],
						['className', 'class'],
						['htmlFor', 'for'],
						['httpEquiv', 'http-equiv'],
					].forEach(function (e) {
						var t = e[0];
						y[t] = new m(t, 1, !1, e[1], null, !1, !1);
					}),
					['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
						function (e) {
							y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
						},
					),
					[
						'autoReverse',
						'externalResourcesRequired',
						'focusable',
						'preserveAlpha',
					].forEach(function (e) {
						y[e] = new m(e, 2, !1, e, null, !1, !1);
					}),
					'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
						.split(' ')
						.forEach(function (e) {
							y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
						}),
					['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
						y[e] = new m(e, 3, !0, e, null, !1, !1);
					}),
					['capture', 'download'].forEach(function (e) {
						y[e] = new m(e, 4, !1, e, null, !1, !1);
					}),
					['cols', 'rows', 'size', 'span'].forEach(function (e) {
						y[e] = new m(e, 6, !1, e, null, !1, !1);
					}),
					['rowSpan', 'start'].forEach(function (e) {
						y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var v = /[\-:]([a-z])/g;
				function g(e) {
					return e[1].toUpperCase();
				}
				function b(e, t, n, r) {
					var a = y.hasOwnProperty(t) ? y[t] : null;
					(null !== a
						? 0 !== a.type
						: r ||
							!(2 < t.length) ||
							('o' !== t[0] && 'O' !== t[0]) ||
							('n' !== t[1] && 'N' !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null == t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case 'function':
										case 'symbol':
											return !0;
										case 'boolean':
											return (
												!r &&
												(null !== n
													? !n.acceptsBooleans
													: 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
														'aria-' !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, a, r) && (n = null),
						r || null === a
							? (function (e) {
									return (
										!!f.call(h, e) ||
										(!f.call(p, e) &&
											(d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
									);
								})(t) &&
								(null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
							: a.mustUseProperty
								? (e[a.propertyName] = null === n ? 3 !== a.type && '' : n)
								: ((t = a.attributeName),
									(r = a.attributeNamespace),
									null === n
										? e.removeAttribute(t)
										: ((n =
												3 === (a = a.type) || (4 === a && !0 === n)
													? ''
													: '' + n),
											r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
					.split(' ')
					.forEach(function (e) {
						var t = e.replace(v, g);
						y[t] = new m(t, 1, !1, e, null, !1, !1);
					}),
					'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
						.split(' ')
						.forEach(function (e) {
							var t = e.replace(v, g);
							y[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
						}),
					['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
						var t = e.replace(v, g);
						y[t] = new m(
							t,
							1,
							!1,
							e,
							'http://www.w3.org/XML/1998/namespace',
							!1,
							!1,
						);
					}),
					['tabIndex', 'crossOrigin'].forEach(function (e) {
						y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(y.xlinkHref = new m(
						'xlinkHref',
						1,
						!1,
						'xlink:href',
						'http://www.w3.org/1999/xlink',
						!0,
						!1,
					)),
					['src', 'href', 'action', 'formAction'].forEach(function (e) {
						y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					S = Symbol.for('react.element'),
					k = Symbol.for('react.portal'),
					E = Symbol.for('react.fragment'),
					x = Symbol.for('react.strict_mode'),
					C = Symbol.for('react.profiler'),
					O = Symbol.for('react.provider'),
					_ = Symbol.for('react.context'),
					P = Symbol.for('react.forward_ref'),
					R = Symbol.for('react.suspense'),
					N = Symbol.for('react.suspense_list'),
					T = Symbol.for('react.memo'),
					j = Symbol.for('react.lazy');
				Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
				var F = Symbol.for('react.offscreen');
				Symbol.for('react.legacy_hidden'),
					Symbol.for('react.cache'),
					Symbol.for('react.tracing_marker');
				var L = Symbol.iterator;
				function D(e) {
					return null === e || 'object' != typeof e
						? null
						: 'function' == typeof (e = (L && e[L]) || e['@@iterator'])
							? e
							: null;
				}
				var A,
					z = Object.assign;
				function M(e) {
					if (void 0 === A)
						try {
							throw Error();
						} catch (e) {
							var t = e.stack.trim().match(/\n( *(at )?)/);
							A = (t && t[1]) || '';
						}
					return '\n' + A + e;
				}
				var U = !1;
				function I(e, t) {
					if (!e || U) return '';
					U = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, 'props', {
									set: function () {
										throw Error();
									},
								}),
								'object' == typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (e) {
									var r = e;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (e) {
									r = e;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (e) {
								r = e;
							}
							e();
						}
					} catch (t) {
						if (t && r && 'string' == typeof t.stack) {
							for (
								var a = t.stack.split('\n'),
									o = r.stack.split('\n'),
									i = a.length - 1,
									l = o.length - 1;
								1 <= i && 0 <= l && a[i] !== o[l];

							)
								l--;
							for (; 1 <= i && 0 <= l; i--, l--)
								if (a[i] !== o[l]) {
									if (1 !== i || 1 !== l)
										do {
											if ((i--, 0 > --l || a[i] !== o[l])) {
												var s = '\n' + a[i].replace(' at new ', ' at ');
												return (
													e.displayName &&
														s.includes('<anonymous>') &&
														(s = s.replace('<anonymous>', e.displayName)),
													s
												);
											}
										} while (1 <= i && 0 <= l);
									break;
								}
						}
					} finally {
						(U = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : '') ? M(e) : '';
				}
				function B(e) {
					switch (e.tag) {
						case 5:
							return M(e.type);
						case 16:
							return M('Lazy');
						case 13:
							return M('Suspense');
						case 19:
							return M('SuspenseList');
						case 0:
						case 2:
						case 15:
							return I(e.type, !1);
						case 11:
							return I(e.type.render, !1);
						case 1:
							return I(e.type, !0);
						default:
							return '';
					}
				}
				function q(e) {
					if (null == e) return null;
					if ('function' == typeof e) return e.displayName || e.name || null;
					if ('string' == typeof e) return e;
					switch (e) {
						case E:
							return 'Fragment';
						case k:
							return 'Portal';
						case C:
							return 'Profiler';
						case x:
							return 'StrictMode';
						case R:
							return 'Suspense';
						case N:
							return 'SuspenseList';
					}
					if ('object' == typeof e)
						switch (e.$$typeof) {
							case _:
								return (e.displayName || 'Context') + '.Consumer';
							case O:
								return (e._context.displayName || 'Context') + '.Provider';
							case P:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											'' !== (e = t.displayName || t.name || '')
												? 'ForwardRef(' + e + ')'
												: 'ForwardRef'),
									e
								);
							case T:
								return null !== (t = e.displayName || null)
									? t
									: q(e.type) || 'Memo';
							case j:
								(t = e._payload), (e = e._init);
								try {
									return q(e(t));
								} catch (e) {}
						}
					return null;
				}
				function Q(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return 'Cache';
						case 9:
							return (t.displayName || 'Context') + '.Consumer';
						case 10:
							return (t._context.displayName || 'Context') + '.Provider';
						case 18:
							return 'DehydratedFragment';
						case 11:
							return (
								(e = (e = t.render).displayName || e.name || ''),
								t.displayName ||
									('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
							);
						case 7:
							return 'Fragment';
						case 5:
							return t;
						case 4:
							return 'Portal';
						case 3:
							return 'Root';
						case 6:
							return 'Text';
						case 16:
							return q(t);
						case 8:
							return t === x ? 'StrictMode' : 'Mode';
						case 22:
							return 'Offscreen';
						case 12:
							return 'Profiler';
						case 21:
							return 'Scope';
						case 13:
							return 'Suspense';
						case 19:
							return 'SuspenseList';
						case 25:
							return 'TracingMarker';
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ('function' == typeof t)
								return t.displayName || t.name || null;
							if ('string' == typeof t) return t;
					}
					return null;
				}
				function W(e) {
					switch (typeof e) {
						case 'boolean':
						case 'number':
						case 'string':
						case 'undefined':
						case 'object':
							return e;
						default:
							return '';
					}
				}
				function H(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						'input' === e.toLowerCase() &&
						('checkbox' === t || 'radio' === t)
					);
				}
				function $(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = H(e) ? 'checked' : 'value',
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = '' + e[t];
							if (
								!e.hasOwnProperty(t) &&
								void 0 !== n &&
								'function' == typeof n.get &&
								'function' == typeof n.set
							) {
								var a = n.get,
									o = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return a.call(this);
										},
										set: function (e) {
											(r = '' + e), o.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = '' + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function V(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = '';
					return (
						e && (r = H(e) ? (e.checked ? 'true' : 'false') : e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function K(e) {
					if (
						void 0 ===
						(e = e || ('undefined' != typeof document ? document : void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function G(e, t) {
					var n = t.checked;
					return z({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function X(e, t) {
					var n = null == t.defaultValue ? '' : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = W(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: r,
							initialValue: n,
							controlled:
								'checkbox' === t.type || 'radio' === t.type
									? null != t.checked
									: null != t.value,
						});
				}
				function J(e, t) {
					null != (t = t.checked) && b(e, 'checked', t, !1);
				}
				function Y(e, t) {
					J(e, t);
					var n = W(t.value),
						r = t.type;
					if (null != n)
						'number' === r
							? ((0 === n && '' === e.value) || e.value != n) &&
								(e.value = '' + n)
							: e.value !== '' + n && (e.value = '' + n);
					else if ('submit' === r || 'reset' === r)
						return void e.removeAttribute('value');
					t.hasOwnProperty('value')
						? ee(e, t.type, n)
						: t.hasOwnProperty('defaultValue') &&
							ee(e, t.type, W(t.defaultValue)),
						null == t.checked &&
							null != t.defaultChecked &&
							(e.defaultChecked = !!t.defaultChecked);
				}
				function Z(e, t, n) {
					if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
						var r = t.type;
						if (
							!(
								('submit' !== r && 'reset' !== r) ||
								(void 0 !== t.value && null !== t.value)
							)
						)
							return;
						(t = '' + e._wrapperState.initialValue),
							n || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					'' !== (n = e.name) && (e.name = ''),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						'' !== n && (e.name = n);
				}
				function ee(e, t, n) {
					('number' === t && K(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue = '' + e._wrapperState.initialValue)
							: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
						for (n = 0; n < e.length; n++)
							(a = t.hasOwnProperty('$' + e[n].value)),
								e[n].selected !== a && (e[n].selected = a),
								a && r && (e[n].defaultSelected = !0);
					} else {
						for (n = '' + W(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n)
								return (
									(e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
								);
							null !== t || e[a].disabled || (t = e[a]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return z({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: '' + e._wrapperState.initialValue,
					});
				}
				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ''), (n = t);
					}
					e._wrapperState = { initialValue: W(n) };
				}
				function oe(e, t) {
					var n = W(t.value),
						r = W(t.defaultValue);
					null != n &&
						((n = '' + n) !== e.value && (e.value = n),
						null == t.defaultValue &&
							e.defaultValue !== n &&
							(e.defaultValue = n)),
						null != r && (e.defaultValue = '' + r);
				}
				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue &&
						'' !== t &&
						null !== t &&
						(e.value = t);
				}
				function le(e) {
					switch (e) {
						case 'svg':
							return 'http://www.w3.org/2000/svg';
						case 'math':
							return 'http://www.w3.org/1998/Math/MathML';
						default:
							return 'http://www.w3.org/1999/xhtml';
					}
				}
				function se(e, t) {
					return null == e || 'http://www.w3.org/1999/xhtml' === e
						? le(t)
						: 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
							? 'http://www.w3.org/1999/xhtml'
							: e;
				}
				var ue,
					ce,
					fe =
						((ce = function (e, t) {
							if (
								'http://www.w3.org/2000/svg' !== e.namespaceURI ||
								'innerHTML' in e
							)
								e.innerHTML = t;
							else {
								for (
									(ue = ue || document.createElement('div')).innerHTML =
										'<svg>' + t.valueOf().toString() + '</svg>',
										t = ue.firstChild;
									e.firstChild;

								)
									e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ce(e, t);
									});
								}
							: ce);
				function de(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var pe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					he = ['Webkit', 'ms', 'Moz', 'O'];
				function me(e, t, n) {
					return null == t || 'boolean' == typeof t || '' === t
						? ''
						: n ||
							  'number' != typeof t ||
							  0 === t ||
							  (pe.hasOwnProperty(e) && pe[e])
							? ('' + t).trim()
							: t + 'px';
				}
				function ye(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf('--'),
								a = me(n, t[n], r);
							'float' === n && (n = 'cssFloat'),
								r ? e.setProperty(n, a) : (e[n] = a);
						}
				}
				Object.keys(pe).forEach(function (e) {
					he.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
							(pe[t] = pe[e]);
					});
				});
				var ve = z(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					},
				);
				function ge(e, t) {
					if (t) {
						if (
							ve[e] &&
							(null != t.children || null != t.dangerouslySetInnerHTML)
						)
							throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if (
								'object' != typeof t.dangerouslySetInnerHTML ||
								!('__html' in t.dangerouslySetInnerHTML)
							)
								throw Error(o(61));
						}
						if (null != t.style && 'object' != typeof t.style)
							throw Error(o(62));
					}
				}
				function be(e, t) {
					if (-1 === e.indexOf('-')) return 'string' == typeof t.is;
					switch (e) {
						case 'annotation-xml':
						case 'color-profile':
						case 'font-face':
						case 'font-face-src':
						case 'font-face-uri':
						case 'font-face-format':
						case 'font-face-name':
						case 'missing-glyph':
							return !1;
						default:
							return !0;
					}
				}
				var we = null;
				function Se(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var ke = null,
					Ee = null,
					xe = null;
				function Ce(e) {
					if ((e = ba(e))) {
						if ('function' != typeof ke) throw Error(o(280));
						var t = e.stateNode;
						t && ((t = Sa(t)), ke(e.stateNode, e.type, t));
					}
				}
				function Oe(e) {
					Ee ? (xe ? xe.push(e) : (xe = [e])) : (Ee = e);
				}
				function _e() {
					if (Ee) {
						var e = Ee,
							t = xe;
						if (((xe = Ee = null), Ce(e), t))
							for (e = 0; e < t.length; e++) Ce(t[e]);
					}
				}
				function Pe(e, t) {
					return e(t);
				}
				function Re() {}
				var Ne = !1;
				function Te(e, t, n) {
					if (Ne) return e(t, n);
					Ne = !0;
					try {
						return Pe(e, t, n);
					} finally {
						(Ne = !1), (null !== Ee || null !== xe) && (Re(), _e());
					}
				}
				function je(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = Sa(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case 'onClick':
						case 'onClickCapture':
						case 'onDoubleClick':
						case 'onDoubleClickCapture':
						case 'onMouseDown':
						case 'onMouseDownCapture':
						case 'onMouseMove':
						case 'onMouseMoveCapture':
						case 'onMouseUp':
						case 'onMouseUpCapture':
						case 'onMouseEnter':
							(r = !r.disabled) ||
								(r = !(
									'button' === (e = e.type) ||
									'input' === e ||
									'select' === e ||
									'textarea' === e
								)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && 'function' != typeof n) throw Error(o(231, t, typeof n));
					return n;
				}
				var Fe = !1;
				if (c)
					try {
						var Le = {};
						Object.defineProperty(Le, 'passive', {
							get: function () {
								Fe = !0;
							},
						}),
							window.addEventListener('test', Le, Le),
							window.removeEventListener('test', Le, Le);
					} catch (ce) {
						Fe = !1;
					}
				function De(e, t, n, r, a, o, i, l, s) {
					var u = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, u);
					} catch (e) {
						this.onError(e);
					}
				}
				var Ae = !1,
					ze = null,
					Me = !1,
					Ue = null,
					Ie = {
						onError: function (e) {
							(Ae = !0), (ze = e);
						},
					};
				function Be(e, t, n, r, a, o, i, l, s) {
					(Ae = !1), (ze = null), De.apply(Ie, arguments);
				}
				function qe(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function Qe(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function We(e) {
					if (qe(e) !== e) throw Error(o(188));
				}
				function He(e) {
					return null !==
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = qe(e))) throw Error(o(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var a = n.return;
								if (null === a) break;
								var i = a.alternate;
								if (null === i) {
									if (null !== (r = a.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (a.child === i.child) {
									for (i = a.child; i; ) {
										if (i === n) return We(a), e;
										if (i === r) return We(a), t;
										i = i.sibling;
									}
									throw Error(o(188));
								}
								if (n.return !== r.return) (n = a), (r = i);
								else {
									for (var l = !1, s = a.child; s; ) {
										if (s === n) {
											(l = !0), (n = a), (r = i);
											break;
										}
										if (s === r) {
											(l = !0), (r = a), (n = i);
											break;
										}
										s = s.sibling;
									}
									if (!l) {
										for (s = i.child; s; ) {
											if (s === n) {
												(l = !0), (n = i), (r = a);
												break;
											}
											if (s === r) {
												(l = !0), (r = i), (n = a);
												break;
											}
											s = s.sibling;
										}
										if (!l) throw Error(o(189));
									}
								}
								if (n.alternate !== r) throw Error(o(190));
							}
							if (3 !== n.tag) throw Error(o(188));
							return n.stateNode.current === n ? e : t;
						})(e))
						? $e(e)
						: null;
				}
				function $e(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = $e(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Ve = a.unstable_scheduleCallback,
					Ke = a.unstable_cancelCallback,
					Ge = a.unstable_shouldYield,
					Xe = a.unstable_requestPaint,
					Je = a.unstable_now,
					Ye = a.unstable_getCurrentPriorityLevel,
					Ze = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					ot = null,
					it = Math.clz32
						? Math.clz32
						: function (e) {
								return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
							},
					lt = Math.log,
					st = Math.LN2,
					ut = 64,
					ct = 4194304;
				function ft(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function dt(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						o = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var l = i & ~a;
						0 !== l ? (r = ft(l)) : 0 != (o &= i) && (r = ft(o));
					} else 0 != (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
					if (0 === r) return 0;
					if (
						0 !== t &&
						t !== r &&
						0 == (t & a) &&
						((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
					)
						return t;
					if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
						for (e = e.entanglements, t &= r; 0 < t; )
							(a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
					return r;
				}
				function pt(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function ht(e) {
					return 0 != (e = -1073741825 & e.pendingLanes)
						? e
						: 1073741824 & e
							? 1073741824
							: 0;
				}
				function mt() {
					var e = ut;
					return 0 == (4194240 & (ut <<= 1)) && (ut = 64), e;
				}
				function yt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function vt(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - it(t))] = n);
				}
				function gt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - it(n),
							a = 1 << r;
						(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
					}
				}
				var bt = 0;
				function wt(e) {
					return 1 < (e &= -e)
						? 4 < e
							? 0 != (268435455 & e)
								? 16
								: 536870912
							: 4
						: 1;
				}
				var St,
					kt,
					Et,
					xt,
					Ct,
					Ot = !1,
					_t = [],
					Pt = null,
					Rt = null,
					Nt = null,
					Tt = new Map(),
					jt = new Map(),
					Ft = [],
					Lt =
						'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
							' ',
						);
				function Dt(e, t) {
					switch (e) {
						case 'focusin':
						case 'focusout':
							Pt = null;
							break;
						case 'dragenter':
						case 'dragleave':
							Rt = null;
							break;
						case 'mouseover':
						case 'mouseout':
							Nt = null;
							break;
						case 'pointerover':
						case 'pointerout':
							Tt.delete(t.pointerId);
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
							jt.delete(t.pointerId);
					}
				}
				function At(e, t, n, r, a, o) {
					return null === e || e.nativeEvent !== o
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: o,
								targetContainers: [a],
							}),
							null !== t && null !== (t = ba(t)) && kt(t),
							e)
						: ((e.eventSystemFlags |= r),
							(t = e.targetContainers),
							null !== a && -1 === t.indexOf(a) && t.push(a),
							e);
				}
				function zt(e) {
					var t = ga(e.target);
					if (null !== t) {
						var n = qe(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = Qe(n)))
									return (
										(e.blockedOn = t),
										void Ct(e.priority, function () {
											Et(n);
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function Mt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n)
							return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(we = r), n.target.dispatchEvent(r), (we = null), t.shift();
					}
					return !0;
				}
				function Ut(e, t, n) {
					Mt(e) && n.delete(t);
				}
				function It() {
					(Ot = !1),
						null !== Pt && Mt(Pt) && (Pt = null),
						null !== Rt && Mt(Rt) && (Rt = null),
						null !== Nt && Mt(Nt) && (Nt = null),
						Tt.forEach(Ut),
						jt.forEach(Ut);
				}
				function Bt(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						Ot ||
							((Ot = !0),
							a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
				}
				function qt(e) {
					function t(t) {
						return Bt(t, e);
					}
					if (0 < _t.length) {
						Bt(_t[0], e);
						for (var n = 1; n < _t.length; n++) {
							var r = _t[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (
						null !== Pt && Bt(Pt, e),
							null !== Rt && Bt(Rt, e),
							null !== Nt && Bt(Nt, e),
							Tt.forEach(t),
							jt.forEach(t),
							n = 0;
						n < Ft.length;
						n++
					)
						(r = Ft[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Ft.length && null === (n = Ft[0]).blockedOn; )
						zt(n), null === n.blockedOn && Ft.shift();
				}
				var Qt = w.ReactCurrentBatchConfig,
					Wt = !0;
				function Ht(e, t, n, r) {
					var a = bt,
						o = Qt.transition;
					Qt.transition = null;
					try {
						(bt = 1), Vt(e, t, n, r);
					} finally {
						(bt = a), (Qt.transition = o);
					}
				}
				function $t(e, t, n, r) {
					var a = bt,
						o = Qt.transition;
					Qt.transition = null;
					try {
						(bt = 4), Vt(e, t, n, r);
					} finally {
						(bt = a), (Qt.transition = o);
					}
				}
				function Vt(e, t, n, r) {
					if (Wt) {
						var a = Gt(e, t, n, r);
						if (null === a) Wr(e, t, r, Kt, n), Dt(e, r);
						else if (
							(function (e, t, n, r, a) {
								switch (t) {
									case 'focusin':
										return (Pt = At(Pt, e, t, n, r, a)), !0;
									case 'dragenter':
										return (Rt = At(Rt, e, t, n, r, a)), !0;
									case 'mouseover':
										return (Nt = At(Nt, e, t, n, r, a)), !0;
									case 'pointerover':
										var o = a.pointerId;
										return Tt.set(o, At(Tt.get(o) || null, e, t, n, r, a)), !0;
									case 'gotpointercapture':
										return (
											(o = a.pointerId),
											jt.set(o, At(jt.get(o) || null, e, t, n, r, a)),
											!0
										);
								}
								return !1;
							})(a, e, t, n, r)
						)
							r.stopPropagation();
						else if ((Dt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
							for (; null !== a; ) {
								var o = ba(a);
								if (
									(null !== o && St(o),
									null === (o = Gt(e, t, n, r)) && Wr(e, t, r, Kt, n),
									o === a)
								)
									break;
								a = o;
							}
							null !== a && r.stopPropagation();
						} else Wr(e, t, r, null, n);
					}
				}
				var Kt = null;
				function Gt(e, t, n, r) {
					if (((Kt = null), null !== (e = ga((e = Se(r))))))
						if (null === (t = qe(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = Qe(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated)
								return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (Kt = e), null;
				}
				function Xt(e) {
					switch (e) {
						case 'cancel':
						case 'click':
						case 'close':
						case 'contextmenu':
						case 'copy':
						case 'cut':
						case 'auxclick':
						case 'dblclick':
						case 'dragend':
						case 'dragstart':
						case 'drop':
						case 'focusin':
						case 'focusout':
						case 'input':
						case 'invalid':
						case 'keydown':
						case 'keypress':
						case 'keyup':
						case 'mousedown':
						case 'mouseup':
						case 'paste':
						case 'pause':
						case 'play':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointerup':
						case 'ratechange':
						case 'reset':
						case 'resize':
						case 'seeked':
						case 'submit':
						case 'touchcancel':
						case 'touchend':
						case 'touchstart':
						case 'volumechange':
						case 'change':
						case 'selectionchange':
						case 'textInput':
						case 'compositionstart':
						case 'compositionend':
						case 'compositionupdate':
						case 'beforeblur':
						case 'afterblur':
						case 'beforeinput':
						case 'blur':
						case 'fullscreenchange':
						case 'focus':
						case 'hashchange':
						case 'popstate':
						case 'select':
						case 'selectstart':
							return 1;
						case 'drag':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'mousemove':
						case 'mouseout':
						case 'mouseover':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'scroll':
						case 'toggle':
						case 'touchmove':
						case 'wheel':
						case 'mouseenter':
						case 'mouseleave':
						case 'pointerenter':
						case 'pointerleave':
							return 4;
						case 'message':
							switch (Ye()) {
								case Ze:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Jt = null,
					Yt = null,
					Zt = null;
				function en() {
					if (Zt) return Zt;
					var e,
						t,
						n = Yt,
						r = n.length,
						a = 'value' in Jt ? Jt.value : Jt.textContent,
						o = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
					return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return (
						'charCode' in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function an(e) {
					function t(t, n, r, a, o) {
						for (var i in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = a),
						(this.target = o),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
						return (
							(this.isDefaultPrevented = (
								null != a.defaultPrevented
									? a.defaultPrevented
									: !1 === a.returnValue
							)
								? nn
								: rn),
							(this.isPropagationStopped = rn),
							this
						);
					}
					return (
						z(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: 'unknown' != typeof e.returnValue && (e.returnValue = !1),
									(this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: 'unknown' != typeof e.cancelBubble &&
											(e.cancelBubble = !0),
									(this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var on,
					ln,
					sn,
					un = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					cn = an(un),
					fn = z({}, un, { view: 0, detail: 0 }),
					dn = an(fn),
					pn = z({}, fn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Cn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return 'movementX' in e
								? e.movementX
								: (e !== sn &&
										(sn && 'mousemove' === e.type
											? ((on = e.screenX - sn.screenX),
												(ln = e.screenY - sn.screenY))
											: (ln = on = 0),
										(sn = e)),
									on);
						},
						movementY: function (e) {
							return 'movementY' in e ? e.movementY : ln;
						},
					}),
					hn = an(pn),
					mn = an(z({}, pn, { dataTransfer: 0 })),
					yn = an(z({}, fn, { relatedTarget: 0 })),
					vn = an(
						z({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
					),
					gn = z({}, un, {
						clipboardData: function (e) {
							return 'clipboardData' in e
								? e.clipboardData
								: window.clipboardData;
						},
					}),
					bn = an(gn),
					wn = an(z({}, un, { data: 0 })),
					Sn = {
						Esc: 'Escape',
						Spacebar: ' ',
						Left: 'ArrowLeft',
						Up: 'ArrowUp',
						Right: 'ArrowRight',
						Down: 'ArrowDown',
						Del: 'Delete',
						Win: 'OS',
						Menu: 'ContextMenu',
						Apps: 'ContextMenu',
						Scroll: 'ScrollLock',
						MozPrintableKey: 'Unidentified',
					},
					kn = {
						8: 'Backspace',
						9: 'Tab',
						12: 'Clear',
						13: 'Enter',
						16: 'Shift',
						17: 'Control',
						18: 'Alt',
						19: 'Pause',
						20: 'CapsLock',
						27: 'Escape',
						32: ' ',
						33: 'PageUp',
						34: 'PageDown',
						35: 'End',
						36: 'Home',
						37: 'ArrowLeft',
						38: 'ArrowUp',
						39: 'ArrowRight',
						40: 'ArrowDown',
						45: 'Insert',
						46: 'Delete',
						112: 'F1',
						113: 'F2',
						114: 'F3',
						115: 'F4',
						116: 'F5',
						117: 'F6',
						118: 'F7',
						119: 'F8',
						120: 'F9',
						121: 'F10',
						122: 'F11',
						123: 'F12',
						144: 'NumLock',
						145: 'ScrollLock',
						224: 'Meta',
					},
					En = {
						Alt: 'altKey',
						Control: 'ctrlKey',
						Meta: 'metaKey',
						Shift: 'shiftKey',
					};
				function xn(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = En[e]) && !!t[e];
				}
				function Cn() {
					return xn;
				}
				var On = z({}, fn, {
						key: function (e) {
							if (e.key) {
								var t = Sn[e.key] || e.key;
								if ('Unidentified' !== t) return t;
							}
							return 'keypress' === e.type
								? 13 === (e = tn(e))
									? 'Enter'
									: String.fromCharCode(e)
								: 'keydown' === e.type || 'keyup' === e.type
									? kn[e.keyCode] || 'Unidentified'
									: '';
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Cn,
						charCode: function (e) {
							return 'keypress' === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return 'keypress' === e.type
								? tn(e)
								: 'keydown' === e.type || 'keyup' === e.type
									? e.keyCode
									: 0;
						},
					}),
					_n = an(On),
					Pn = an(
						z({}, pn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						}),
					),
					Rn = an(
						z({}, fn, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: Cn,
						}),
					),
					Nn = an(
						z({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
					),
					Tn = z({}, pn, {
						deltaX: function (e) {
							return 'deltaX' in e
								? e.deltaX
								: 'wheelDeltaX' in e
									? -e.wheelDeltaX
									: 0;
						},
						deltaY: function (e) {
							return 'deltaY' in e
								? e.deltaY
								: 'wheelDeltaY' in e
									? -e.wheelDeltaY
									: 'wheelDelta' in e
										? -e.wheelDelta
										: 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					jn = an(Tn),
					Fn = [9, 13, 27, 32],
					Ln = c && 'CompositionEvent' in window,
					Dn = null;
				c && 'documentMode' in document && (Dn = document.documentMode);
				var An = c && 'TextEvent' in window && !Dn,
					zn = c && (!Ln || (Dn && 8 < Dn && 11 >= Dn)),
					Mn = String.fromCharCode(32),
					Un = !1;
				function In(e, t) {
					switch (e) {
						case 'keyup':
							return -1 !== Fn.indexOf(t.keyCode);
						case 'keydown':
							return 229 !== t.keyCode;
						case 'keypress':
						case 'mousedown':
						case 'focusout':
							return !0;
						default:
							return !1;
					}
				}
				function Bn(e) {
					return 'object' == typeof (e = e.detail) && 'data' in e
						? e.data
						: null;
				}
				var qn = !1,
					Qn = {
						color: !0,
						date: !0,
						datetime: !0,
						'datetime-local': !0,
						email: !0,
						month: !0,
						number: !0,
						password: !0,
						range: !0,
						search: !0,
						tel: !0,
						text: !0,
						time: !0,
						url: !0,
						week: !0,
					};
				function Wn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return 'input' === t ? !!Qn[e.type] : 'textarea' === t;
				}
				function Hn(e, t, n, r) {
					Oe(r),
						0 < (t = $r(t, 'onChange')).length &&
							((n = new cn('onChange', 'change', null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var $n = null,
					Vn = null;
				function Kn(e) {
					Mr(e, 0);
				}
				function Gn(e) {
					if (V(wa(e))) return e;
				}
				function Xn(e, t) {
					if ('change' === e) return t;
				}
				var Jn = !1;
				if (c) {
					var Yn;
					if (c) {
						var Zn = 'oninput' in document;
						if (!Zn) {
							var er = document.createElement('div');
							er.setAttribute('oninput', 'return;'),
								(Zn = 'function' == typeof er.oninput);
						}
						Yn = Zn;
					} else Yn = !1;
					Jn = Yn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					$n && ($n.detachEvent('onpropertychange', nr), (Vn = $n = null));
				}
				function nr(e) {
					if ('value' === e.propertyName && Gn(Vn)) {
						var t = [];
						Hn(t, Vn, e, Se(e)), Te(Kn, t);
					}
				}
				function rr(e, t, n) {
					'focusin' === e
						? (tr(), (Vn = n), ($n = t).attachEvent('onpropertychange', nr))
						: 'focusout' === e && tr();
				}
				function ar(e) {
					if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
						return Gn(Vn);
				}
				function or(e, t) {
					if ('click' === e) return Gn(t);
				}
				function ir(e, t) {
					if ('input' === e || 'change' === e) return Gn(t);
				}
				var lr =
					'function' == typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
								);
							};
				function sr(e, t) {
					if (lr(e, t)) return !0;
					if (
						'object' != typeof e ||
						null === e ||
						'object' != typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
					}
					return !0;
				}
				function ur(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function cr(e, t) {
					var n,
						r = ur(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t))
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = ur(r);
					}
				}
				function fr(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? fr(e, t.parentNode)
									: 'contains' in e
										? e.contains(t)
										: !!e.compareDocumentPosition &&
											!!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function dr() {
					for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = 'string' == typeof t.contentWindow.location.href;
						} catch (e) {
							n = !1;
						}
						if (!n) break;
						t = K((e = t.contentWindow).document);
					}
					return t;
				}
				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(('input' === t &&
							('text' === e.type ||
								'search' === e.type ||
								'tel' === e.type ||
								'url' === e.type ||
								'password' === e.type)) ||
							'textarea' === t ||
							'true' === e.contentEditable)
					);
				}
				function hr(e) {
					var t = dr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (
						t !== n &&
						n &&
						n.ownerDocument &&
						fr(n.ownerDocument.documentElement, n)
					) {
						if (null !== r && pr(n))
							if (
								((t = r.start),
								void 0 === (e = r.end) && (e = t),
								'selectionStart' in n)
							)
								(n.selectionStart = t),
									(n.selectionEnd = Math.min(e, n.value.length));
							else if (
								(e =
									((t = n.ownerDocument || document) && t.defaultView) ||
									window).getSelection
							) {
								e = e.getSelection();
								var a = n.textContent.length,
									o = Math.min(r.start, a);
								(r = void 0 === r.end ? o : Math.min(r.end, a)),
									!e.extend && o > r && ((a = r), (r = o), (o = a)),
									(a = cr(n, o));
								var i = cr(n, r);
								a &&
									i &&
									(1 !== e.rangeCount ||
										e.anchorNode !== a.node ||
										e.anchorOffset !== a.offset ||
										e.focusNode !== i.node ||
										e.focusOffset !== i.offset) &&
									((t = t.createRange()).setStart(a.node, a.offset),
									e.removeAllRanges(),
									o > r
										? (e.addRange(t), e.extend(i.node, i.offset))
										: (t.setEnd(i.node, i.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType &&
								t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for (
							'function' == typeof n.focus && n.focus(), n = 0;
							n < t.length;
							n++
						)
							((e = t[n]).element.scrollLeft = e.left),
								(e.element.scrollTop = e.top);
					}
				}
				var mr = c && 'documentMode' in document && 11 >= document.documentMode,
					yr = null,
					vr = null,
					gr = null,
					br = !1;
				function wr(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
								? n
								: n.ownerDocument;
					br ||
						null == yr ||
						yr !== K(r) ||
						((r =
							'selectionStart' in (r = yr) && pr(r)
								? { start: r.selectionStart, end: r.selectionEnd }
								: {
										anchorNode: (r = (
											(r.ownerDocument && r.ownerDocument.defaultView) ||
											window
										).getSelection()).anchorNode,
										anchorOffset: r.anchorOffset,
										focusNode: r.focusNode,
										focusOffset: r.focusOffset,
									}),
						(gr && sr(gr, r)) ||
							((gr = r),
							0 < (r = $r(vr, 'onSelect')).length &&
								((t = new cn('onSelect', 'select', null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = yr))));
				}
				function Sr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n['Webkit' + e] = 'webkit' + t),
						(n['Moz' + e] = 'moz' + t),
						n
					);
				}
				var kr = {
						animationend: Sr('Animation', 'AnimationEnd'),
						animationiteration: Sr('Animation', 'AnimationIteration'),
						animationstart: Sr('Animation', 'AnimationStart'),
						transitionend: Sr('Transition', 'TransitionEnd'),
					},
					Er = {},
					xr = {};
				function Cr(e) {
					if (Er[e]) return Er[e];
					if (!kr[e]) return e;
					var t,
						n = kr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in xr) return (Er[e] = n[t]);
					return e;
				}
				c &&
					((xr = document.createElement('div').style),
					'AnimationEvent' in window ||
						(delete kr.animationend.animation,
						delete kr.animationiteration.animation,
						delete kr.animationstart.animation),
					'TransitionEvent' in window || delete kr.transitionend.transition);
				var Or = Cr('animationend'),
					_r = Cr('animationiteration'),
					Pr = Cr('animationstart'),
					Rr = Cr('transitionend'),
					Nr = new Map(),
					Tr =
						'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
							' ',
						);
				function jr(e, t) {
					Nr.set(e, t), s(t, [e]);
				}
				for (var Fr = 0; Fr < Tr.length; Fr++) {
					var Lr = Tr[Fr];
					jr(Lr.toLowerCase(), 'on' + (Lr[0].toUpperCase() + Lr.slice(1)));
				}
				jr(Or, 'onAnimationEnd'),
					jr(_r, 'onAnimationIteration'),
					jr(Pr, 'onAnimationStart'),
					jr('dblclick', 'onDoubleClick'),
					jr('focusin', 'onFocus'),
					jr('focusout', 'onBlur'),
					jr(Rr, 'onTransitionEnd'),
					u('onMouseEnter', ['mouseout', 'mouseover']),
					u('onMouseLeave', ['mouseout', 'mouseover']),
					u('onPointerEnter', ['pointerout', 'pointerover']),
					u('onPointerLeave', ['pointerout', 'pointerover']),
					s(
						'onChange',
						'change click focusin focusout input keydown keyup selectionchange'.split(
							' ',
						),
					),
					s(
						'onSelect',
						'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
							' ',
						),
					),
					s('onBeforeInput', [
						'compositionend',
						'keypress',
						'textInput',
						'paste',
					]),
					s(
						'onCompositionEnd',
						'compositionend focusout keydown keypress keyup mousedown'.split(
							' ',
						),
					),
					s(
						'onCompositionStart',
						'compositionstart focusout keydown keypress keyup mousedown'.split(
							' ',
						),
					),
					s(
						'onCompositionUpdate',
						'compositionupdate focusout keydown keypress keyup mousedown'.split(
							' ',
						),
					);
				var Dr =
						'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
							' ',
						),
					Ar = new Set(
						'cancel close invalid load scroll toggle'.split(' ').concat(Dr),
					);
				function zr(e, t, n) {
					var r = e.type || 'unknown-event';
					(e.currentTarget = n),
						(function (e, t, n, r, a, i, l, s, u) {
							if ((Be.apply(this, arguments), Ae)) {
								if (!Ae) throw Error(o(198));
								var c = ze;
								(Ae = !1), (ze = null), Me || ((Me = !0), (Ue = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Mr(e, t) {
					t = 0 != (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var l = r[i],
										s = l.instance,
										u = l.currentTarget;
									if (((l = l.listener), s !== o && a.isPropagationStopped()))
										break e;
									zr(a, l, u), (o = s);
								}
							else
								for (i = 0; i < r.length; i++) {
									if (
										((s = (l = r[i]).instance),
										(u = l.currentTarget),
										(l = l.listener),
										s !== o && a.isPropagationStopped())
									)
										break e;
									zr(a, l, u), (o = s);
								}
						}
					}
					if (Me) throw ((e = Ue), (Me = !1), (Ue = null), e);
				}
				function Ur(e, t) {
					var n = t[ma];
					void 0 === n && (n = t[ma] = new Set());
					var r = e + '__bubble';
					n.has(r) || (Qr(t, e, 2, !1), n.add(r));
				}
				function Ir(e, t, n) {
					var r = 0;
					t && (r |= 4), Qr(n, e, r, t);
				}
				var Br = '_reactListening' + Math.random().toString(36).slice(2);
				function qr(e) {
					if (!e[Br]) {
						(e[Br] = !0),
							i.forEach(function (t) {
								'selectionchange' !== t &&
									(Ar.has(t) || Ir(t, !1, e), Ir(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Br] || ((t[Br] = !0), Ir('selectionchange', !1, t));
					}
				}
				function Qr(e, t, n, r) {
					switch (Xt(t)) {
						case 1:
							var a = Ht;
							break;
						case 4:
							a = $t;
							break;
						default:
							a = Vt;
					}
					(n = a.bind(null, t, n, e)),
						(a = void 0),
						!Fe ||
							('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
							(a = !0),
						r
							? void 0 !== a
								? e.addEventListener(t, n, { capture: !0, passive: a })
								: e.addEventListener(t, n, !0)
							: void 0 !== a
								? e.addEventListener(t, n, { passive: a })
								: e.addEventListener(t, n, !1);
				}
				function Wr(e, t, n, r, a) {
					var o = r;
					if (0 == (1 & t) && 0 == (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var i = r.tag;
							if (3 === i || 4 === i) {
								var l = r.stateNode.containerInfo;
								if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
								if (4 === i)
									for (i = r.return; null !== i; ) {
										var s = i.tag;
										if (
											(3 === s || 4 === s) &&
											((s = i.stateNode.containerInfo) === a ||
												(8 === s.nodeType && s.parentNode === a))
										)
											return;
										i = i.return;
									}
								for (; null !== l; ) {
									if (null === (i = ga(l))) return;
									if (5 === (s = i.tag) || 6 === s) {
										r = o = i;
										continue e;
									}
									l = l.parentNode;
								}
							}
							r = r.return;
						}
					Te(function () {
						var r = o,
							a = Se(n),
							i = [];
						e: {
							var l = Nr.get(e);
							if (void 0 !== l) {
								var s = cn,
									u = e;
								switch (e) {
									case 'keypress':
										if (0 === tn(n)) break e;
									case 'keydown':
									case 'keyup':
										s = _n;
										break;
									case 'focusin':
										(u = 'focus'), (s = yn);
										break;
									case 'focusout':
										(u = 'blur'), (s = yn);
										break;
									case 'beforeblur':
									case 'afterblur':
										s = yn;
										break;
									case 'click':
										if (2 === n.button) break e;
									case 'auxclick':
									case 'dblclick':
									case 'mousedown':
									case 'mousemove':
									case 'mouseup':
									case 'mouseout':
									case 'mouseover':
									case 'contextmenu':
										s = hn;
										break;
									case 'drag':
									case 'dragend':
									case 'dragenter':
									case 'dragexit':
									case 'dragleave':
									case 'dragover':
									case 'dragstart':
									case 'drop':
										s = mn;
										break;
									case 'touchcancel':
									case 'touchend':
									case 'touchmove':
									case 'touchstart':
										s = Rn;
										break;
									case Or:
									case _r:
									case Pr:
										s = vn;
										break;
									case Rr:
										s = Nn;
										break;
									case 'scroll':
										s = dn;
										break;
									case 'wheel':
										s = jn;
										break;
									case 'copy':
									case 'cut':
									case 'paste':
										s = bn;
										break;
									case 'gotpointercapture':
									case 'lostpointercapture':
									case 'pointercancel':
									case 'pointerdown':
									case 'pointermove':
									case 'pointerout':
									case 'pointerover':
									case 'pointerup':
										s = Pn;
								}
								var c = 0 != (4 & t),
									f = !c && 'scroll' === e,
									d = c ? (null !== l ? l + 'Capture' : null) : l;
								c = [];
								for (var p, h = r; null !== h; ) {
									var m = (p = h).stateNode;
									if (
										(5 === p.tag &&
											null !== m &&
											((p = m),
											null !== d &&
												null != (m = je(h, d)) &&
												c.push(Hr(h, m, p))),
										f)
									)
										break;
									h = h.return;
								}
								0 < c.length &&
									((l = new s(l, u, null, n, a)),
									i.push({ event: l, listeners: c }));
							}
						}
						if (0 == (7 & t)) {
							if (
								((s = 'mouseout' === e || 'pointerout' === e),
								(!(l = 'mouseover' === e || 'pointerover' === e) ||
									n === we ||
									!(u = n.relatedTarget || n.fromElement) ||
									(!ga(u) && !u[ha])) &&
									(s || l) &&
									((l =
										a.window === a
											? a
											: (l = a.ownerDocument)
												? l.defaultView || l.parentWindow
												: window),
									s
										? ((s = r),
											null !==
												(u = (u = n.relatedTarget || n.toElement)
													? ga(u)
													: null) &&
												(u !== (f = qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
												(u = null))
										: ((s = null), (u = r)),
									s !== u))
							) {
								if (
									((c = hn),
									(m = 'onMouseLeave'),
									(d = 'onMouseEnter'),
									(h = 'mouse'),
									('pointerout' !== e && 'pointerover' !== e) ||
										((c = Pn),
										(m = 'onPointerLeave'),
										(d = 'onPointerEnter'),
										(h = 'pointer')),
									(f = null == s ? l : wa(s)),
									(p = null == u ? l : wa(u)),
									((l = new c(m, h + 'leave', s, n, a)).target = f),
									(l.relatedTarget = p),
									(m = null),
									ga(a) === r &&
										(((c = new c(d, h + 'enter', u, n, a)).target = p),
										(c.relatedTarget = f),
										(m = c)),
									(f = m),
									s && u)
								)
									e: {
										for (d = u, h = 0, p = c = s; p; p = Vr(p)) h++;
										for (p = 0, m = d; m; m = Vr(m)) p++;
										for (; 0 < h - p; ) (c = Vr(c)), h--;
										for (; 0 < p - h; ) (d = Vr(d)), p--;
										for (; h--; ) {
											if (c === d || (null !== d && c === d.alternate)) break e;
											(c = Vr(c)), (d = Vr(d));
										}
										c = null;
									}
								else c = null;
								null !== s && Kr(i, l, s, c, !1),
									null !== u && null !== f && Kr(i, f, u, c, !0);
							}
							if (
								'select' ===
									(s =
										(l = r ? wa(r) : window).nodeName &&
										l.nodeName.toLowerCase()) ||
								('input' === s && 'file' === l.type)
							)
								var y = Xn;
							else if (Wn(l))
								if (Jn) y = ir;
								else {
									y = ar;
									var v = rr;
								}
							else
								(s = l.nodeName) &&
									'input' === s.toLowerCase() &&
									('checkbox' === l.type || 'radio' === l.type) &&
									(y = or);
							switch (
								(y && (y = y(e, r))
									? Hn(i, y, n, a)
									: (v && v(e, l, r),
										'focusout' === e &&
											(v = l._wrapperState) &&
											v.controlled &&
											'number' === l.type &&
											ee(l, 'number', l.value)),
								(v = r ? wa(r) : window),
								e)
							) {
								case 'focusin':
									(Wn(v) || 'true' === v.contentEditable) &&
										((yr = v), (vr = r), (gr = null));
									break;
								case 'focusout':
									gr = vr = yr = null;
									break;
								case 'mousedown':
									br = !0;
									break;
								case 'contextmenu':
								case 'mouseup':
								case 'dragend':
									(br = !1), wr(i, n, a);
									break;
								case 'selectionchange':
									if (mr) break;
								case 'keydown':
								case 'keyup':
									wr(i, n, a);
							}
							var g;
							if (Ln)
								e: {
									switch (e) {
										case 'compositionstart':
											var b = 'onCompositionStart';
											break e;
										case 'compositionend':
											b = 'onCompositionEnd';
											break e;
										case 'compositionupdate':
											b = 'onCompositionUpdate';
											break e;
									}
									b = void 0;
								}
							else
								qn
									? In(e, n) && (b = 'onCompositionEnd')
									: 'keydown' === e &&
										229 === n.keyCode &&
										(b = 'onCompositionStart');
							b &&
								(zn &&
									'ko' !== n.locale &&
									(qn || 'onCompositionStart' !== b
										? 'onCompositionEnd' === b && qn && (g = en())
										: ((Yt = 'value' in (Jt = a) ? Jt.value : Jt.textContent),
											(qn = !0))),
								0 < (v = $r(r, b)).length &&
									((b = new wn(b, e, null, n, a)),
									i.push({ event: b, listeners: v }),
									(g || null !== (g = Bn(n))) && (b.data = g))),
								(g = An
									? (function (e, t) {
											switch (e) {
												case 'compositionend':
													return Bn(t);
												case 'keypress':
													return 32 !== t.which ? null : ((Un = !0), Mn);
												case 'textInput':
													return (e = t.data) === Mn && Un ? null : e;
												default:
													return null;
											}
										})(e, n)
									: (function (e, t) {
											if (qn)
												return 'compositionend' === e || (!Ln && In(e, t))
													? ((e = en()), (Zt = Yt = Jt = null), (qn = !1), e)
													: null;
											switch (e) {
												case 'paste':
												default:
													return null;
												case 'keypress':
													if (
														!(t.ctrlKey || t.altKey || t.metaKey) ||
														(t.ctrlKey && t.altKey)
													) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case 'compositionend':
													return zn && 'ko' !== t.locale ? null : t.data;
											}
										})(e, n)) &&
									0 < (r = $r(r, 'onBeforeInput')).length &&
									((a = new wn('onBeforeInput', 'beforeinput', null, n, a)),
									i.push({ event: a, listeners: r }),
									(a.data = g));
						}
						Mr(i, t);
					});
				}
				function Hr(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function $r(e, t) {
					for (var n = t + 'Capture', r = []; null !== e; ) {
						var a = e,
							o = a.stateNode;
						5 === a.tag &&
							null !== o &&
							((a = o),
							null != (o = je(e, n)) && r.unshift(Hr(e, o, a)),
							null != (o = je(e, t)) && r.push(Hr(e, o, a))),
							(e = e.return);
					}
					return r;
				}
				function Vr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Kr(e, t, n, r, a) {
					for (var o = t._reactName, i = []; null !== n && n !== r; ) {
						var l = n,
							s = l.alternate,
							u = l.stateNode;
						if (null !== s && s === r) break;
						5 === l.tag &&
							null !== u &&
							((l = u),
							a
								? null != (s = je(n, o)) && i.unshift(Hr(n, s, l))
								: a || (null != (s = je(n, o)) && i.push(Hr(n, s, l)))),
							(n = n.return);
					}
					0 !== i.length && e.push({ event: t, listeners: i });
				}
				var Gr = /\r\n?/g,
					Xr = /\u0000|\uFFFD/g;
				function Jr(e) {
					return ('string' == typeof e ? e : '' + e)
						.replace(Gr, '\n')
						.replace(Xr, '');
				}
				function Yr(e, t, n) {
					if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(o(425));
				}
				function Zr() {}
				var ea = null,
					ta = null;
				function na(e, t) {
					return (
						'textarea' === e ||
						'noscript' === e ||
						'string' == typeof t.children ||
						'number' == typeof t.children ||
						('object' == typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var ra = 'function' == typeof setTimeout ? setTimeout : void 0,
					aa = 'function' == typeof clearTimeout ? clearTimeout : void 0,
					oa = 'function' == typeof Promise ? Promise : void 0,
					ia =
						'function' == typeof queueMicrotask
							? queueMicrotask
							: void 0 !== oa
								? function (e) {
										return oa.resolve(null).then(e).catch(la);
									}
								: ra;
				function la(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function sa(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if ((e.removeChild(n), a && 8 === a.nodeType))
							if ('/$' === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void qt(t);
								r--;
							} else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
						n = a;
					} while (n);
					qt(t);
				}
				function ua(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
							if ('/$' === t) return null;
						}
					}
					return e;
				}
				function ca(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ('$' === n || '$!' === n || '$?' === n) {
								if (0 === t) return e;
								t--;
							} else '/$' === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var fa = Math.random().toString(36).slice(2),
					da = '__reactFiber$' + fa,
					pa = '__reactProps$' + fa,
					ha = '__reactContainer$' + fa,
					ma = '__reactEvents$' + fa,
					ya = '__reactListeners$' + fa,
					va = '__reactHandles$' + fa;
				function ga(e) {
					var t = e[da];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[ha] || n[da])) {
							if (
								((n = t.alternate),
								null !== t.child || (null !== n && null !== n.child))
							)
								for (e = ca(e); null !== e; ) {
									if ((n = e[da])) return n;
									e = ca(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function ba(e) {
					return !(e = e[da] || e[ha]) ||
						(5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
						? null
						: e;
				}
				function wa(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33));
				}
				function Sa(e) {
					return e[pa] || null;
				}
				var ka = [],
					Ea = -1;
				function xa(e) {
					return { current: e };
				}
				function Ca(e) {
					0 > Ea || ((e.current = ka[Ea]), (ka[Ea] = null), Ea--);
				}
				function Oa(e, t) {
					Ea++, (ka[Ea] = e.current), (e.current = t);
				}
				var _a = {},
					Pa = xa(_a),
					Ra = xa(!1),
					Na = _a;
				function Ta(e, t) {
					var n = e.type.contextTypes;
					if (!n) return _a;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
						return r.__reactInternalMemoizedMaskedChildContext;
					var a,
						o = {};
					for (a in n) o[a] = t[a];
					return (
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								t),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						o
					);
				}
				function ja(e) {
					return null != e.childContextTypes;
				}
				function Fa() {
					Ca(Ra), Ca(Pa);
				}
				function La(e, t, n) {
					if (Pa.current !== _a) throw Error(o(168));
					Oa(Pa, t), Oa(Ra, n);
				}
				function Da(e, t, n) {
					var r = e.stateNode;
					if (
						((t = t.childContextTypes), 'function' != typeof r.getChildContext)
					)
						return n;
					for (var a in (r = r.getChildContext()))
						if (!(a in t)) throw Error(o(108, Q(e) || 'Unknown', a));
					return z({}, n, r);
				}
				function Aa(e) {
					return (
						(e =
							((e = e.stateNode) &&
								e.__reactInternalMemoizedMergedChildContext) ||
							_a),
						(Na = Pa.current),
						Oa(Pa, e),
						Oa(Ra, Ra.current),
						!0
					);
				}
				function za(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n
						? ((e = Da(e, t, Na)),
							(r.__reactInternalMemoizedMergedChildContext = e),
							Ca(Ra),
							Ca(Pa),
							Oa(Pa, e))
						: Ca(Ra),
						Oa(Ra, n);
				}
				var Ma = null,
					Ua = !1,
					Ia = !1;
				function Ba(e) {
					null === Ma ? (Ma = [e]) : Ma.push(e);
				}
				function qa() {
					if (!Ia && null !== Ma) {
						Ia = !0;
						var e = 0,
							t = bt;
						try {
							var n = Ma;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Ma = null), (Ua = !1);
						} catch (t) {
							throw (null !== Ma && (Ma = Ma.slice(e + 1)), Ve(Ze, qa), t);
						} finally {
							(bt = t), (Ia = !1);
						}
					}
					return null;
				}
				var Qa = [],
					Wa = 0,
					Ha = null,
					$a = 0,
					Va = [],
					Ka = 0,
					Ga = null,
					Xa = 1,
					Ja = '';
				function Ya(e, t) {
					(Qa[Wa++] = $a), (Qa[Wa++] = Ha), (Ha = e), ($a = t);
				}
				function Za(e, t, n) {
					(Va[Ka++] = Xa), (Va[Ka++] = Ja), (Va[Ka++] = Ga), (Ga = e);
					var r = Xa;
					e = Ja;
					var a = 32 - it(r) - 1;
					(r &= ~(1 << a)), (n += 1);
					var o = 32 - it(t) + a;
					if (30 < o) {
						var i = a - (a % 5);
						(o = (r & ((1 << i) - 1)).toString(32)),
							(r >>= i),
							(a -= i),
							(Xa = (1 << (32 - it(t) + a)) | (n << a) | r),
							(Ja = o + e);
					} else (Xa = (1 << o) | (n << a) | r), (Ja = e);
				}
				function eo(e) {
					null !== e.return && (Ya(e, 1), Za(e, 1, 0));
				}
				function to(e) {
					for (; e === Ha; )
						(Ha = Qa[--Wa]), (Qa[Wa] = null), ($a = Qa[--Wa]), (Qa[Wa] = null);
					for (; e === Ga; )
						(Ga = Va[--Ka]),
							(Va[Ka] = null),
							(Ja = Va[--Ka]),
							(Va[Ka] = null),
							(Xa = Va[--Ka]),
							(Va[Ka] = null);
				}
				var no = null,
					ro = null,
					ao = !1,
					oo = null;
				function io(e, t) {
					var n = ju(5, null, null, 0);
					(n.elementType = 'DELETED'),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions)
							? ((e.deletions = [n]), (e.flags |= 16))
							: t.push(n);
				}
				function lo(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !==
									(t =
										1 !== t.nodeType ||
										n.toLowerCase() !== t.nodeName.toLowerCase()
											? null
											: t) &&
								((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
							);
						case 6:
							return (
								null !==
									(t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
								((e.stateNode = t), (no = e), (ro = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n = null !== Ga ? { id: Xa, overflow: Ja } : null),
								(e.memoizedState = {
									dehydrated: t,
									treeContext: n,
									retryLane: 1073741824,
								}),
								((n = ju(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(no = e),
								(ro = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function so(e) {
					return 0 != (1 & e.mode) && 0 == (128 & e.flags);
				}
				function uo(e) {
					if (ao) {
						var t = ro;
						if (t) {
							var n = t;
							if (!lo(e, t)) {
								if (so(e)) throw Error(o(418));
								t = ua(n.nextSibling);
								var r = no;
								t && lo(e, t)
									? io(r, n)
									: ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
							}
						} else {
							if (so(e)) throw Error(o(418));
							(e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
						}
					}
				}
				function co(e) {
					for (
						e = e.return;
						null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

					)
						e = e.return;
					no = e;
				}
				function fo(e) {
					if (e !== no) return !1;
					if (!ao) return co(e), (ao = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t =
								'head' !== (t = e.type) &&
								'body' !== t &&
								!na(e.type, e.memoizedProps)),
						t && (t = ro))
					) {
						if (so(e)) throw (po(), Error(o(418)));
						for (; t; ) io(e, t), (t = ua(t.nextSibling));
					}
					if ((co(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
							throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ('/$' === n) {
										if (0 === t) {
											ro = ua(e.nextSibling);
											break e;
										}
										t--;
									} else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
								}
								e = e.nextSibling;
							}
							ro = null;
						}
					} else ro = no ? ua(e.stateNode.nextSibling) : null;
					return !0;
				}
				function po() {
					for (var e = ro; e; ) e = ua(e.nextSibling);
				}
				function ho() {
					(ro = no = null), (ao = !1);
				}
				function mo(e) {
					null === oo ? (oo = [e]) : oo.push(e);
				}
				var yo = w.ReactCurrentBatchConfig;
				function vo(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = z({}, t)), (e = e.defaultProps)))
							void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				var go = xa(null),
					bo = null,
					wo = null,
					So = null;
				function ko() {
					So = wo = bo = null;
				}
				function Eo(e) {
					var t = go.current;
					Ca(go), (e._currentValue = t);
				}
				function xo(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
								: null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function Co(e, t) {
					(bo = e),
						(So = wo = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 != (e.lanes & t) && (wl = !0), (e.firstContext = null));
				}
				function Oo(e) {
					var t = e._currentValue;
					if (So !== e)
						if (
							((e = { context: e, memoizedValue: t, next: null }), null === wo)
						) {
							if (null === bo) throw Error(o(308));
							(wo = e), (bo.dependencies = { lanes: 0, firstContext: e });
						} else wo = wo.next = e;
					return t;
				}
				var _o = null;
				function Po(e) {
					null === _o ? (_o = [e]) : _o.push(e);
				}
				function Ro(e, t, n, r) {
					var a = t.interleaved;
					return (
						null === a
							? ((n.next = n), Po(t))
							: ((n.next = a.next), (a.next = n)),
						(t.interleaved = n),
						No(e, r)
					);
				}
				function No(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
						(e.childLanes |= t),
							null !== (n = e.alternate) && (n.childLanes |= t),
							(n = e),
							(e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var To = !1;
				function jo(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Fo(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function Lo(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Do(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 != (2 & Rs))) {
						var a = r.pending;
						return (
							null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
							(r.pending = t),
							No(e, n)
						);
					}
					return (
						null === (a = r.interleaved)
							? ((t.next = t), Po(r))
							: ((t.next = a.next), (a.next = t)),
						(r.interleaved = t),
						No(e, n)
					);
				}
				function Ao(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 != (4194240 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
					}
				}
				function zo(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
							} while (null !== n);
							null === o ? (a = o = t) : (o = o.next = t);
						} else a = o = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: a,
								lastBaseUpdate: o,
								shared: r.shared,
								effects: r.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				function Mo(e, t, n, r) {
					var a = e.updateQueue;
					To = !1;
					var o = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						l = a.shared.pending;
					if (null !== l) {
						a.shared.pending = null;
						var s = l,
							u = s.next;
						(s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
						var c = e.alternate;
						null !== c &&
							(l = (c = c.updateQueue).lastBaseUpdate) !== i &&
							(null === l ? (c.firstBaseUpdate = u) : (l.next = u),
							(c.lastBaseUpdate = s));
					}
					if (null !== o) {
						var f = a.baseState;
						for (i = 0, c = u = s = null, l = o; ; ) {
							var d = l.lane,
								p = l.eventTime;
							if ((r & d) === d) {
								null !== c &&
									(c = c.next =
										{
											eventTime: p,
											lane: 0,
											tag: l.tag,
											payload: l.payload,
											callback: l.callback,
											next: null,
										});
								e: {
									var h = e,
										m = l;
									switch (((d = t), (p = n), m.tag)) {
										case 1:
											if ('function' == typeof (h = m.payload)) {
												f = h.call(p, f, d);
												break e;
											}
											f = h;
											break e;
										case 3:
											h.flags = (-65537 & h.flags) | 128;
										case 0:
											if (
												null ==
												(d =
													'function' == typeof (h = m.payload)
														? h.call(p, f, d)
														: h)
											)
												break e;
											f = z({}, f, d);
											break e;
										case 2:
											To = !0;
									}
								}
								null !== l.callback &&
									0 !== l.lane &&
									((e.flags |= 64),
									null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
							} else
								(p = {
									eventTime: p,
									lane: d,
									tag: l.tag,
									payload: l.payload,
									callback: l.callback,
									next: null,
								}),
									null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
									(i |= d);
							if (null === (l = l.next)) {
								if (null === (l = a.shared.pending)) break;
								(l = (d = l).next),
									(d.next = null),
									(a.lastBaseUpdate = d),
									(a.shared.pending = null);
							}
						}
						if (
							(null === c && (s = f),
							(a.baseState = s),
							(a.firstBaseUpdate = u),
							(a.lastBaseUpdate = c),
							null !== (t = a.shared.interleaved))
						) {
							a = t;
							do {
								(i |= a.lane), (a = a.next);
							} while (a !== t);
						} else null === o && (a.shared.lanes = 0);
						(zs |= i), (e.lanes = i), (e.memoizedState = f);
					}
				}
				function Uo(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (((r.callback = null), (r = n), 'function' != typeof a))
									throw Error(o(191, a));
								a.call(r);
							}
						}
				}
				var Io = new r.Component().refs;
				function Bo(e, t, n, r) {
					(n = null == (n = n(r, (t = e.memoizedState))) ? t : z({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var qo = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && qe(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = tu(),
							a = nu(e),
							o = Lo(r, a);
						(o.payload = t),
							null != n && (o.callback = n),
							null !== (t = Do(e, o, a)) && (ru(t, e, a, r), Ao(t, e, a));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = tu(),
							a = nu(e),
							o = Lo(r, a);
						(o.tag = 1),
							(o.payload = t),
							null != n && (o.callback = n),
							null !== (t = Do(e, o, a)) && (ru(t, e, a, r), Ao(t, e, a));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = tu(),
							r = nu(e),
							a = Lo(n, r);
						(a.tag = 2),
							null != t && (a.callback = t),
							null !== (t = Do(e, a, r)) && (ru(t, e, r, n), Ao(t, e, r));
					},
				};
				function Qo(e, t, n, r, a, o, i) {
					return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, o, i)
						: !(
								t.prototype &&
								t.prototype.isPureReactComponent &&
								sr(n, r) &&
								sr(a, o)
							);
				}
				function Wo(e, t, n) {
					var r = !1,
						a = _a,
						o = t.contextType;
					return (
						'object' == typeof o && null !== o
							? (o = Oo(o))
							: ((a = ja(t) ? Na : Pa.current),
								(o = (r = null != (r = t.contextTypes)) ? Ta(e, a) : _a)),
						(t = new t(n, o)),
						(e.memoizedState =
							null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = qo),
						(e.stateNode = t),
						(t._reactInternals = e),
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								a),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						t
					);
				}
				function Ho(e, t, n, r) {
					(e = t.state),
						'function' == typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						'function' == typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e && qo.enqueueReplaceState(t, t.state, null);
				}
				function $o(e, t, n, r) {
					var a = e.stateNode;
					(a.props = n), (a.state = e.memoizedState), (a.refs = Io), jo(e);
					var o = t.contextType;
					'object' == typeof o && null !== o
						? (a.context = Oo(o))
						: ((o = ja(t) ? Na : Pa.current), (a.context = Ta(e, o))),
						(a.state = e.memoizedState),
						'function' == typeof (o = t.getDerivedStateFromProps) &&
							(Bo(e, t, o, n), (a.state = e.memoizedState)),
						'function' == typeof t.getDerivedStateFromProps ||
							'function' == typeof a.getSnapshotBeforeUpdate ||
							('function' != typeof a.UNSAFE_componentWillMount &&
								'function' != typeof a.componentWillMount) ||
							((t = a.state),
							'function' == typeof a.componentWillMount &&
								a.componentWillMount(),
							'function' == typeof a.UNSAFE_componentWillMount &&
								a.UNSAFE_componentWillMount(),
							t !== a.state && qo.enqueueReplaceState(a, a.state, null),
							Mo(e, n, a, r),
							(a.state = e.memoizedState)),
						'function' == typeof a.componentDidMount && (e.flags |= 4194308);
				}
				function Vo(e, t, n) {
					if (
						null !== (e = n.ref) &&
						'function' != typeof e &&
						'object' != typeof e
					) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(o(147, e));
							var a = r,
								i = '' + e;
							return null !== t &&
								null !== t.ref &&
								'function' == typeof t.ref &&
								t.ref._stringRef === i
								? t.ref
								: ((t = function (e) {
										var t = a.refs;
										t === Io && (t = a.refs = {}),
											null === e ? delete t[i] : (t[i] = e);
									}),
									(t._stringRef = i),
									t);
						}
						if ('string' != typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e));
					}
					return e;
				}
				function Ko(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							o(
								31,
								'[object Object]' === e
									? 'object with keys {' + Object.keys(t).join(', ') + '}'
									: e,
							),
						))
					);
				}
				function Go(e) {
					return (0, e._init)(e._payload);
				}
				function Xo(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; )
							null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
								(t = t.sibling);
						return e;
					}
					function a(e, t) {
						return ((e = Lu(e, t)).index = 0), (e.sibling = null), e;
					}
					function i(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 2), n)
										: r
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function l(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function s(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Mu(n, e.mode, r)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function u(e, t, n, r) {
						var o = n.type;
						return o === E
							? f(e, t, n.props.children, r, n.key)
							: null !== t &&
								  (t.elementType === o ||
										('object' == typeof o &&
											null !== o &&
											o.$$typeof === j &&
											Go(o) === t.type))
								? (((r = a(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
								: (((r = Du(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(
										e,
										t,
										n,
									)),
									(r.return = e),
									r);
					}
					function c(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Uu(n, e.mode, r)).return = e), t)
							: (((t = a(t, n.children || [])).return = e), t);
					}
					function f(e, t, n, r, o) {
						return null === t || 7 !== t.tag
							? (((t = Au(n, e.mode, r, o)).return = e), t)
							: (((t = a(t, n)).return = e), t);
					}
					function d(e, t, n) {
						if (('string' == typeof t && '' !== t) || 'number' == typeof t)
							return ((t = Mu('' + t, e.mode, n)).return = e), t;
						if ('object' == typeof t && null !== t) {
							switch (t.$$typeof) {
								case S:
									return (
										((n = Du(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(
											e,
											null,
											t,
										)),
										(n.return = e),
										n
									);
								case k:
									return ((t = Uu(t, e.mode, n)).return = e), t;
								case j:
									return d(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || D(t))
								return ((t = Au(t, e.mode, n, null)).return = e), t;
							Ko(e, t);
						}
						return null;
					}
					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if (('string' == typeof n && '' !== n) || 'number' == typeof n)
							return null !== a ? null : s(e, t, '' + n, r);
						if ('object' == typeof n && null !== n) {
							switch (n.$$typeof) {
								case S:
									return n.key === a ? u(e, t, n, r) : null;
								case k:
									return n.key === a ? c(e, t, n, r) : null;
								case j:
									return p(e, t, (a = n._init)(n._payload), r);
							}
							if (te(n) || D(n)) return null !== a ? null : f(e, t, n, r, null);
							Ko(e, n);
						}
						return null;
					}
					function h(e, t, n, r, a) {
						if (('string' == typeof r && '' !== r) || 'number' == typeof r)
							return s(t, (e = e.get(n) || null), '' + r, a);
						if ('object' == typeof r && null !== r) {
							switch (r.$$typeof) {
								case S:
									return u(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										a,
									);
								case k:
									return c(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										a,
									);
								case j:
									return h(e, t, n, (0, r._init)(r._payload), a);
							}
							if (te(r) || D(r))
								return f(t, (e = e.get(n) || null), r, a, null);
							Ko(t, r);
						}
						return null;
					}
					function m(a, o, l, s) {
						for (
							var u = null, c = null, f = o, m = (o = 0), y = null;
							null !== f && m < l.length;
							m++
						) {
							f.index > m ? ((y = f), (f = null)) : (y = f.sibling);
							var v = p(a, f, l[m], s);
							if (null === v) {
								null === f && (f = y);
								break;
							}
							e && f && null === v.alternate && t(a, f),
								(o = i(v, o, m)),
								null === c ? (u = v) : (c.sibling = v),
								(c = v),
								(f = y);
						}
						if (m === l.length) return n(a, f), ao && Ya(a, m), u;
						if (null === f) {
							for (; m < l.length; m++)
								null !== (f = d(a, l[m], s)) &&
									((o = i(f, o, m)),
									null === c ? (u = f) : (c.sibling = f),
									(c = f));
							return ao && Ya(a, m), u;
						}
						for (f = r(a, f); m < l.length; m++)
							null !== (y = h(f, a, m, l[m], s)) &&
								(e &&
									null !== y.alternate &&
									f.delete(null === y.key ? m : y.key),
								(o = i(y, o, m)),
								null === c ? (u = y) : (c.sibling = y),
								(c = y));
						return (
							e &&
								f.forEach(function (e) {
									return t(a, e);
								}),
							ao && Ya(a, m),
							u
						);
					}
					function y(a, l, s, u) {
						var c = D(s);
						if ('function' != typeof c) throw Error(o(150));
						if (null == (s = c.call(s))) throw Error(o(151));
						for (
							var f = (c = null), m = l, y = (l = 0), v = null, g = s.next();
							null !== m && !g.done;
							y++, g = s.next()
						) {
							m.index > y ? ((v = m), (m = null)) : (v = m.sibling);
							var b = p(a, m, g.value, u);
							if (null === b) {
								null === m && (m = v);
								break;
							}
							e && m && null === b.alternate && t(a, m),
								(l = i(b, l, y)),
								null === f ? (c = b) : (f.sibling = b),
								(f = b),
								(m = v);
						}
						if (g.done) return n(a, m), ao && Ya(a, y), c;
						if (null === m) {
							for (; !g.done; y++, g = s.next())
								null !== (g = d(a, g.value, u)) &&
									((l = i(g, l, y)),
									null === f ? (c = g) : (f.sibling = g),
									(f = g));
							return ao && Ya(a, y), c;
						}
						for (m = r(a, m); !g.done; y++, g = s.next())
							null !== (g = h(m, a, y, g.value, u)) &&
								(e &&
									null !== g.alternate &&
									m.delete(null === g.key ? y : g.key),
								(l = i(g, l, y)),
								null === f ? (c = g) : (f.sibling = g),
								(f = g));
						return (
							e &&
								m.forEach(function (e) {
									return t(a, e);
								}),
							ao && Ya(a, y),
							c
						);
					}
					return function e(r, o, i, s) {
						if (
							('object' == typeof i &&
								null !== i &&
								i.type === E &&
								null === i.key &&
								(i = i.props.children),
							'object' == typeof i && null !== i)
						) {
							switch (i.$$typeof) {
								case S:
									e: {
										for (var u = i.key, c = o; null !== c; ) {
											if (c.key === u) {
												if ((u = i.type) === E) {
													if (7 === c.tag) {
														n(r, c.sibling),
															((o = a(c, i.props.children)).return = r),
															(r = o);
														break e;
													}
												} else if (
													c.elementType === u ||
													('object' == typeof u &&
														null !== u &&
														u.$$typeof === j &&
														Go(u) === c.type)
												) {
													n(r, c.sibling),
														((o = a(c, i.props)).ref = Vo(r, c, i)),
														(o.return = r),
														(r = o);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										i.type === E
											? (((o = Au(i.props.children, r.mode, s, i.key)).return =
													r),
												(r = o))
											: (((s = Du(
													i.type,
													i.key,
													i.props,
													null,
													r.mode,
													s,
												)).ref = Vo(r, o, i)),
												(s.return = r),
												(r = s));
									}
									return l(r);
								case k:
									e: {
										for (c = i.key; null !== o; ) {
											if (o.key === c) {
												if (
													4 === o.tag &&
													o.stateNode.containerInfo === i.containerInfo &&
													o.stateNode.implementation === i.implementation
												) {
													n(r, o.sibling),
														((o = a(o, i.children || [])).return = r),
														(r = o);
													break e;
												}
												n(r, o);
												break;
											}
											t(r, o), (o = o.sibling);
										}
										((o = Uu(i, r.mode, s)).return = r), (r = o);
									}
									return l(r);
								case j:
									return e(r, o, (c = i._init)(i._payload), s);
							}
							if (te(i)) return m(r, o, i, s);
							if (D(i)) return y(r, o, i, s);
							Ko(r, i);
						}
						return ('string' == typeof i && '' !== i) || 'number' == typeof i
							? ((i = '' + i),
								null !== o && 6 === o.tag
									? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
									: (n(r, o), ((o = Mu(i, r.mode, s)).return = r), (r = o)),
								l(r))
							: n(r, o);
					};
				}
				var Jo = Xo(!0),
					Yo = Xo(!1),
					Zo = {},
					ei = xa(Zo),
					ti = xa(Zo),
					ni = xa(Zo);
				function ri(e) {
					if (e === Zo) throw Error(o(174));
					return e;
				}
				function ai(e, t) {
					switch ((Oa(ni, t), Oa(ti, e), Oa(ei, Zo), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
							break;
						default:
							t = se(
								(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
								(e = e.tagName),
							);
					}
					Ca(ei), Oa(ei, t);
				}
				function oi() {
					Ca(ei), Ca(ti), Ca(ni);
				}
				function ii(e) {
					ri(ni.current);
					var t = ri(ei.current),
						n = se(t, e.type);
					t !== n && (Oa(ti, e), Oa(ei, n));
				}
				function li(e) {
					ti.current === e && (Ca(ei), Ca(ti));
				}
				var si = xa(0);
				function ui(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									'$?' === n.data ||
									'$!' === n.data)
							)
								return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 != (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var ci = [];
				function fi() {
					for (var e = 0; e < ci.length; e++)
						ci[e]._workInProgressVersionPrimary = null;
					ci.length = 0;
				}
				var di = w.ReactCurrentDispatcher,
					pi = w.ReactCurrentBatchConfig,
					hi = 0,
					mi = null,
					yi = null,
					vi = null,
					gi = !1,
					bi = !1,
					wi = 0,
					Si = 0;
				function ki() {
					throw Error(o(321));
				}
				function Ei(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!lr(e[n], t[n])) return !1;
					return !0;
				}
				function xi(e, t, n, r, a, i) {
					if (
						((hi = i),
						(mi = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(di.current = null === e || null === e.memoizedState ? ll : sl),
						(e = n(r, a)),
						bi)
					) {
						i = 0;
						do {
							if (((bi = !1), (wi = 0), 25 <= i)) throw Error(o(301));
							(i += 1),
								(vi = yi = null),
								(t.updateQueue = null),
								(di.current = ul),
								(e = n(r, a));
						} while (bi);
					}
					if (
						((di.current = il),
						(t = null !== yi && null !== yi.next),
						(hi = 0),
						(vi = yi = mi = null),
						(gi = !1),
						t)
					)
						throw Error(o(300));
					return e;
				}
				function Ci() {
					var e = 0 !== wi;
					return (wi = 0), e;
				}
				function Oi() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e), vi
					);
				}
				function _i() {
					if (null === yi) {
						var e = mi.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = yi.next;
					var t = null === vi ? mi.memoizedState : vi.next;
					if (null !== t) (vi = t), (yi = e);
					else {
						if (null === e) throw Error(o(310));
						(e = {
							memoizedState: (yi = e).memoizedState,
							baseState: yi.baseState,
							baseQueue: yi.baseQueue,
							queue: yi.queue,
							next: null,
						}),
							null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e);
					}
					return vi;
				}
				function Pi(e, t) {
					return 'function' == typeof t ? t(e) : t;
				}
				function Ri(e) {
					var t = _i(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = yi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var l = a.next;
							(a.next = i.next), (i.next = l);
						}
						(r.baseQueue = a = i), (n.pending = null);
					}
					if (null !== a) {
						(i = a.next), (r = r.baseState);
						var s = (l = null),
							u = null,
							c = i;
						do {
							var f = c.lane;
							if ((hi & f) === f)
								null !== u &&
									(u = u.next =
										{
											lane: 0,
											action: c.action,
											hasEagerState: c.hasEagerState,
											eagerState: c.eagerState,
											next: null,
										}),
									(r = c.hasEagerState ? c.eagerState : e(r, c.action));
							else {
								var d = {
									lane: f,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								};
								null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
									(mi.lanes |= f),
									(zs |= f);
							}
							c = c.next;
						} while (null !== c && c !== i);
						null === u ? (l = r) : (u.next = s),
							lr(r, t.memoizedState) || (wl = !0),
							(t.memoizedState = r),
							(t.baseState = l),
							(t.baseQueue = u),
							(n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							(i = a.lane), (mi.lanes |= i), (zs |= i), (a = a.next);
						} while (a !== e);
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Ni(e) {
					var t = _i(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var l = (a = a.next);
						do {
							(i = e(i, l.action)), (l = l.next);
						} while (l !== a);
						lr(i, t.memoizedState) || (wl = !0),
							(t.memoizedState = i),
							null === t.baseQueue && (t.baseState = i),
							(n.lastRenderedState = i);
					}
					return [i, r];
				}
				function Ti() {}
				function ji(e, t) {
					var n = mi,
						r = _i(),
						a = t(),
						i = !lr(r.memoizedState, a);
					if (
						(i && ((r.memoizedState = a), (wl = !0)),
						(r = r.queue),
						Wi(Di.bind(null, n, r, e), [e]),
						r.getSnapshot !== t ||
							i ||
							(null !== vi && 1 & vi.memoizedState.tag))
					) {
						if (
							((n.flags |= 2048),
							Ui(9, Li.bind(null, n, r, a, t), void 0, null),
							null === Ns)
						)
							throw Error(o(349));
						0 != (30 & hi) || Fi(n, t, a);
					}
					return a;
				}
				function Fi(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = mi.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
								(mi.updateQueue = t),
								(t.stores = [e]))
							: null === (n = t.stores)
								? (t.stores = [e])
								: n.push(e);
				}
				function Li(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Ai(t) && zi(e);
				}
				function Di(e, t, n) {
					return n(function () {
						Ai(t) && zi(e);
					});
				}
				function Ai(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !lr(e, n);
					} catch (e) {
						return !0;
					}
				}
				function zi(e) {
					var t = No(e, 1);
					null !== t && ru(t, e, 1, -1);
				}
				function Mi(e) {
					var t = Oi();
					return (
						'function' == typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: Pi,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = nl.bind(null, mi, e)),
						[t.memoizedState, e]
					);
				}
				function Ui(e, t, n, r) {
					return (
						(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
						null === (t = mi.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
								(mi.updateQueue = t),
								(t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
								? (t.lastEffect = e.next = e)
								: ((r = n.next),
									(n.next = e),
									(e.next = r),
									(t.lastEffect = e)),
						e
					);
				}
				function Ii() {
					return _i().memoizedState;
				}
				function Bi(e, t, n, r) {
					var a = Oi();
					(mi.flags |= e),
						(a.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function qi(e, t, n, r) {
					var a = _i();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== yi) {
						var i = yi.memoizedState;
						if (((o = i.destroy), null !== r && Ei(r, i.deps)))
							return void (a.memoizedState = Ui(t, n, o, r));
					}
					(mi.flags |= e), (a.memoizedState = Ui(1 | t, n, o, r));
				}
				function Qi(e, t) {
					return Bi(8390656, 8, e, t);
				}
				function Wi(e, t) {
					return qi(2048, 8, e, t);
				}
				function Hi(e, t) {
					return qi(4, 2, e, t);
				}
				function $i(e, t) {
					return qi(4, 4, e, t);
				}
				function Vi(e, t) {
					return 'function' == typeof t
						? ((e = e()),
							t(e),
							function () {
								t(null);
							})
						: null != t
							? ((e = e()),
								(t.current = e),
								function () {
									t.current = null;
								})
							: void 0;
				}
				function Ki(e, t, n) {
					return (
						(n = null != n ? n.concat([e]) : null),
						qi(4, 4, Vi.bind(null, t, e), n)
					);
				}
				function Gi() {}
				function Xi(e, t) {
					var n = _i();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Ei(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function Ji(e, t) {
					var n = _i();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Ei(t, r[1])
						? r[0]
						: ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Yi(e, t, n) {
					return 0 == (21 & hi)
						? (e.baseState && ((e.baseState = !1), (wl = !0)),
							(e.memoizedState = n))
						: (lr(n, t) ||
								((n = mt()), (mi.lanes |= n), (zs |= n), (e.baseState = !0)),
							t);
				}
				function Zi(e, t) {
					var n = bt;
					(bt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = pi.transition;
					pi.transition = {};
					try {
						e(!1), t();
					} finally {
						(bt = n), (pi.transition = r);
					}
				}
				function el() {
					return _i().memoizedState;
				}
				function tl(e, t, n) {
					var r = nu(e);
					(n = {
						lane: r,
						action: n,
						hasEagerState: !1,
						eagerState: null,
						next: null,
					}),
						rl(e)
							? al(t, n)
							: null !== (n = Ro(e, t, n, r)) &&
								(ru(n, e, r, tu()), ol(n, t, r));
				}
				function nl(e, t, n) {
					var r = nu(e),
						a = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						};
					if (rl(e)) al(t, a);
					else {
						var o = e.alternate;
						if (
							0 === e.lanes &&
							(null === o || 0 === o.lanes) &&
							null !== (o = t.lastRenderedReducer)
						)
							try {
								var i = t.lastRenderedState,
									l = o(i, n);
								if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
									var s = t.interleaved;
									return (
										null === s
											? ((a.next = a), Po(t))
											: ((a.next = s.next), (s.next = a)),
										void (t.interleaved = a)
									);
								}
							} catch (e) {}
						null !== (n = Ro(e, t, a, r)) &&
							(ru(n, e, r, (a = tu())), ol(n, t, r));
					}
				}
				function rl(e) {
					var t = e.alternate;
					return e === mi || (null !== t && t === mi);
				}
				function al(e, t) {
					bi = gi = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function ol(e, t, n) {
					if (0 != (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
					}
				}
				var il = {
						readContext: Oo,
						useCallback: ki,
						useContext: ki,
						useEffect: ki,
						useImperativeHandle: ki,
						useInsertionEffect: ki,
						useLayoutEffect: ki,
						useMemo: ki,
						useReducer: ki,
						useRef: ki,
						useState: ki,
						useDebugValue: ki,
						useDeferredValue: ki,
						useTransition: ki,
						useMutableSource: ki,
						useSyncExternalStore: ki,
						useId: ki,
						unstable_isNewReconciler: !1,
					},
					ll = {
						readContext: Oo,
						useCallback: function (e, t) {
							return (Oi().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: Oo,
						useEffect: Qi,
						useImperativeHandle: function (e, t, n) {
							return (
								(n = null != n ? n.concat([e]) : null),
								Bi(4194308, 4, Vi.bind(null, t, e), n)
							);
						},
						useLayoutEffect: function (e, t) {
							return Bi(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Bi(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = Oi();
							return (
								(t = void 0 === t ? null : t),
								(e = e()),
								(n.memoizedState = [e, t]),
								e
							);
						},
						useReducer: function (e, t, n) {
							var r = Oi();
							return (
								(t = void 0 !== n ? n(t) : t),
								(r.memoizedState = r.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(r.queue = e),
								(e = e.dispatch = tl.bind(null, mi, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (e = { current: e }), (Oi().memoizedState = e);
						},
						useState: Mi,
						useDebugValue: Gi,
						useDeferredValue: function (e) {
							return (Oi().memoizedState = e);
						},
						useTransition: function () {
							var e = Mi(!1),
								t = e[0];
							return (
								(e = Zi.bind(null, e[1])), (Oi().memoizedState = e), [t, e]
							);
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = mi,
								a = Oi();
							if (ao) {
								if (void 0 === n) throw Error(o(407));
								n = n();
							} else {
								if (((n = t()), null === Ns)) throw Error(o(349));
								0 != (30 & hi) || Fi(r, t, n);
							}
							a.memoizedState = n;
							var i = { value: n, getSnapshot: t };
							return (
								(a.queue = i),
								Qi(Di.bind(null, r, i, e), [e]),
								(r.flags |= 2048),
								Ui(9, Li.bind(null, r, i, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = Oi(),
								t = Ns.identifierPrefix;
							if (ao) {
								var n = Ja;
								(t =
									':' +
									t +
									'R' +
									(n = (Xa & ~(1 << (32 - it(Xa) - 1))).toString(32) + n)),
									0 < (n = wi++) && (t += 'H' + n.toString(32)),
									(t += ':');
							} else t = ':' + t + 'r' + (n = Si++).toString(32) + ':';
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					sl = {
						readContext: Oo,
						useCallback: Xi,
						useContext: Oo,
						useEffect: Wi,
						useImperativeHandle: Ki,
						useInsertionEffect: Hi,
						useLayoutEffect: $i,
						useMemo: Ji,
						useReducer: Ri,
						useRef: Ii,
						useState: function () {
							return Ri(Pi);
						},
						useDebugValue: Gi,
						useDeferredValue: function (e) {
							return Yi(_i(), yi.memoizedState, e);
						},
						useTransition: function () {
							return [Ri(Pi)[0], _i().memoizedState];
						},
						useMutableSource: Ti,
						useSyncExternalStore: ji,
						useId: el,
						unstable_isNewReconciler: !1,
					},
					ul = {
						readContext: Oo,
						useCallback: Xi,
						useContext: Oo,
						useEffect: Wi,
						useImperativeHandle: Ki,
						useInsertionEffect: Hi,
						useLayoutEffect: $i,
						useMemo: Ji,
						useReducer: Ni,
						useRef: Ii,
						useState: function () {
							return Ni(Pi);
						},
						useDebugValue: Gi,
						useDeferredValue: function (e) {
							var t = _i();
							return null === yi
								? (t.memoizedState = e)
								: Yi(t, yi.memoizedState, e);
						},
						useTransition: function () {
							return [Ni(Pi)[0], _i().memoizedState];
						},
						useMutableSource: Ti,
						useSyncExternalStore: ji,
						useId: el,
						unstable_isNewReconciler: !1,
					};
				function cl(e, t) {
					try {
						var n = '',
							r = t;
						do {
							(n += B(r)), (r = r.return);
						} while (r);
						var a = n;
					} catch (e) {
						a = '\nError generating stack: ' + e.message + '\n' + e.stack;
					}
					return { value: e, source: t, stack: a, digest: null };
				}
				function fl(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null,
					};
				}
				function dl(e, t) {
					try {
						console.error(t.value);
					} catch (e) {
						setTimeout(function () {
							throw e;
						});
					}
				}
				var pl = 'function' == typeof WeakMap ? WeakMap : Map;
				function hl(e, t, n) {
					((n = Lo(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Hs || ((Hs = !0), ($s = r)), dl(0, t);
						}),
						n
					);
				}
				function ml(e, t, n) {
					(n = Lo(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ('function' == typeof r) {
						var a = t.value;
						(n.payload = function () {
							return r(a);
						}),
							(n.callback = function () {
								dl(0, t);
							});
					}
					var o = e.stateNode;
					return (
						null !== o &&
							'function' == typeof o.componentDidCatch &&
							(n.callback = function () {
								dl(0, t),
									'function' != typeof r &&
										(null === Vs ? (Vs = new Set([this])) : Vs.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {
									componentStack: null !== e ? e : '',
								});
							}),
						n
					);
				}
				function yl(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new pl();
						var a = new Set();
						r.set(t, a);
					} else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
					a.has(n) || (a.add(n), (e = Ou.bind(null, e, t, n)), t.then(e, e));
				}
				function vl(e) {
					do {
						var t;
						if (
							((t = 13 === e.tag) &&
								(t = null === (t = e.memoizedState) || null !== t.dehydrated),
							t)
						)
							return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function gl(e, t, n, r, a) {
					return 0 == (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
									(n.flags |= 131072),
									(n.flags &= -52805),
									1 === n.tag &&
										(null === n.alternate
											? (n.tag = 17)
											: (((t = Lo(-1, 1)).tag = 2), Do(n, t, 1))),
									(n.lanes |= 1)),
							e)
						: ((e.flags |= 65536), (e.lanes = a), e);
				}
				var bl = w.ReactCurrentOwner,
					wl = !1;
				function Sl(e, t, n, r) {
					t.child = null === e ? Yo(t, null, n, r) : Jo(t, e.child, n, r);
				}
				function kl(e, t, n, r, a) {
					n = n.render;
					var o = t.ref;
					return (
						Co(t, a),
						(r = xi(e, t, n, r, o, a)),
						(n = Ci()),
						null === e || wl
							? (ao && n && eo(t), (t.flags |= 1), Sl(e, t, r, a), t.child)
							: ((t.updateQueue = e.updateQueue),
								(t.flags &= -2053),
								(e.lanes &= ~a),
								Hl(e, t, a))
					);
				}
				function El(e, t, n, r, a) {
					if (null === e) {
						var o = n.type;
						return 'function' != typeof o ||
							Fu(o) ||
							void 0 !== o.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = Du(n.type, null, r, t, t.mode, a)).ref = t.ref),
								(e.return = t),
								(t.child = e))
							: ((t.tag = 15), (t.type = o), xl(e, t, o, r, a));
					}
					if (((o = e.child), 0 == (e.lanes & a))) {
						var i = o.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : sr)(i, r) &&
							e.ref === t.ref
						)
							return Hl(e, t, a);
					}
					return (
						(t.flags |= 1),
						((e = Lu(o, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function xl(e, t, n, r, a) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (sr(o, r) && e.ref === t.ref) {
							if (((wl = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
								return (t.lanes = e.lanes), Hl(e, t, a);
							0 != (131072 & e.flags) && (wl = !0);
						}
					}
					return _l(e, t, n, r, a);
				}
				function Cl(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						o = null !== e ? e.memoizedState : null;
					if ('hidden' === r.mode)
						if (0 == (1 & t.mode))
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								Oa(Ls, Fs),
								(Fs |= n);
						else {
							if (0 == (1073741824 & n))
								return (
									(e = null !== o ? o.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = {
										baseLanes: e,
										cachePool: null,
										transitions: null,
									}),
									(t.updateQueue = null),
									Oa(Ls, Fs),
									(Fs |= e),
									null
								);
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								(r = null !== o ? o.baseLanes : n),
								Oa(Ls, Fs),
								(Fs |= r);
						}
					else
						null !== o
							? ((r = o.baseLanes | n), (t.memoizedState = null))
							: (r = n),
							Oa(Ls, Fs),
							(Fs |= r);
					return Sl(e, t, a, n), t.child;
				}
				function Ol(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) &&
						((t.flags |= 512), (t.flags |= 2097152));
				}
				function _l(e, t, n, r, a) {
					var o = ja(n) ? Na : Pa.current;
					return (
						(o = Ta(t, o)),
						Co(t, a),
						(n = xi(e, t, n, r, o, a)),
						(r = Ci()),
						null === e || wl
							? (ao && r && eo(t), (t.flags |= 1), Sl(e, t, n, a), t.child)
							: ((t.updateQueue = e.updateQueue),
								(t.flags &= -2053),
								(e.lanes &= ~a),
								Hl(e, t, a))
					);
				}
				function Pl(e, t, n, r, a) {
					if (ja(n)) {
						var o = !0;
						Aa(t);
					} else o = !1;
					if ((Co(t, a), null === t.stateNode))
						Wl(e, t), Wo(t, n, r), $o(t, n, r, a), (r = !0);
					else if (null === e) {
						var i = t.stateNode,
							l = t.memoizedProps;
						i.props = l;
						var s = i.context,
							u = n.contextType;
						u =
							'object' == typeof u && null !== u
								? Oo(u)
								: Ta(t, (u = ja(n) ? Na : Pa.current));
						var c = n.getDerivedStateFromProps,
							f =
								'function' == typeof c ||
								'function' == typeof i.getSnapshotBeforeUpdate;
						f ||
							('function' != typeof i.UNSAFE_componentWillReceiveProps &&
								'function' != typeof i.componentWillReceiveProps) ||
							((l !== r || s !== u) && Ho(t, i, r, u)),
							(To = !1);
						var d = t.memoizedState;
						(i.state = d),
							Mo(t, r, i, a),
							(s = t.memoizedState),
							l !== r || d !== s || Ra.current || To
								? ('function' == typeof c &&
										(Bo(t, n, c, r), (s = t.memoizedState)),
									(l = To || Qo(t, n, l, r, d, s, u))
										? (f ||
												('function' != typeof i.UNSAFE_componentWillMount &&
													'function' != typeof i.componentWillMount) ||
												('function' == typeof i.componentWillMount &&
													i.componentWillMount(),
												'function' == typeof i.UNSAFE_componentWillMount &&
													i.UNSAFE_componentWillMount()),
											'function' == typeof i.componentDidMount &&
												(t.flags |= 4194308))
										: ('function' == typeof i.componentDidMount &&
												(t.flags |= 4194308),
											(t.memoizedProps = r),
											(t.memoizedState = s)),
									(i.props = r),
									(i.state = s),
									(i.context = u),
									(r = l))
								: ('function' == typeof i.componentDidMount &&
										(t.flags |= 4194308),
									(r = !1));
					} else {
						(i = t.stateNode),
							Fo(e, t),
							(l = t.memoizedProps),
							(u = t.type === t.elementType ? l : vo(t.type, l)),
							(i.props = u),
							(f = t.pendingProps),
							(d = i.context),
							(s =
								'object' == typeof (s = n.contextType) && null !== s
									? Oo(s)
									: Ta(t, (s = ja(n) ? Na : Pa.current)));
						var p = n.getDerivedStateFromProps;
						(c =
							'function' == typeof p ||
							'function' == typeof i.getSnapshotBeforeUpdate) ||
							('function' != typeof i.UNSAFE_componentWillReceiveProps &&
								'function' != typeof i.componentWillReceiveProps) ||
							((l !== f || d !== s) && Ho(t, i, r, s)),
							(To = !1),
							(d = t.memoizedState),
							(i.state = d),
							Mo(t, r, i, a);
						var h = t.memoizedState;
						l !== f || d !== h || Ra.current || To
							? ('function' == typeof p &&
									(Bo(t, n, p, r), (h = t.memoizedState)),
								(u = To || Qo(t, n, u, r, d, h, s) || !1)
									? (c ||
											('function' != typeof i.UNSAFE_componentWillUpdate &&
												'function' != typeof i.componentWillUpdate) ||
											('function' == typeof i.componentWillUpdate &&
												i.componentWillUpdate(r, h, s),
											'function' == typeof i.UNSAFE_componentWillUpdate &&
												i.UNSAFE_componentWillUpdate(r, h, s)),
										'function' == typeof i.componentDidUpdate && (t.flags |= 4),
										'function' == typeof i.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ('function' != typeof i.componentDidUpdate ||
											(l === e.memoizedProps && d === e.memoizedState) ||
											(t.flags |= 4),
										'function' != typeof i.getSnapshotBeforeUpdate ||
											(l === e.memoizedProps && d === e.memoizedState) ||
											(t.flags |= 1024),
										(t.memoizedProps = r),
										(t.memoizedState = h)),
								(i.props = r),
								(i.state = h),
								(i.context = s),
								(r = u))
							: ('function' != typeof i.componentDidUpdate ||
									(l === e.memoizedProps && d === e.memoizedState) ||
									(t.flags |= 4),
								'function' != typeof i.getSnapshotBeforeUpdate ||
									(l === e.memoizedProps && d === e.memoizedState) ||
									(t.flags |= 1024),
								(r = !1));
					}
					return Rl(e, t, n, r, o, a);
				}
				function Rl(e, t, n, r, a, o) {
					Ol(e, t);
					var i = 0 != (128 & t.flags);
					if (!r && !i) return a && za(t, n, !1), Hl(e, t, o);
					(r = t.stateNode), (bl.current = t);
					var l =
						i && 'function' != typeof n.getDerivedStateFromError
							? null
							: r.render();
					return (
						(t.flags |= 1),
						null !== e && i
							? ((t.child = Jo(t, e.child, null, o)),
								(t.child = Jo(t, null, l, o)))
							: Sl(e, t, l, o),
						(t.memoizedState = r.state),
						a && za(t, n, !0),
						t.child
					);
				}
				function Nl(e) {
					var t = e.stateNode;
					t.pendingContext
						? La(0, t.pendingContext, t.pendingContext !== t.context)
						: t.context && La(0, t.context, !1),
						ai(e, t.containerInfo);
				}
				function Tl(e, t, n, r, a) {
					return ho(), mo(a), (t.flags |= 256), Sl(e, t, n, r), t.child;
				}
				var jl,
					Fl,
					Ll,
					Dl,
					Al = { dehydrated: null, treeContext: null, retryLane: 0 };
				function zl(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Ml(e, t, n) {
					var r,
						a = t.pendingProps,
						i = si.current,
						l = !1,
						s = 0 != (128 & t.flags);
					if (
						((r = s) ||
							(r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
						r
							? ((l = !0), (t.flags &= -129))
							: (null !== e && null === e.memoizedState) || (i |= 1),
						Oa(si, 1 & i),
						null === e)
					)
						return (
							uo(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 == (1 & t.mode)
										? (t.lanes = 1)
										: '$!' === e.data
											? (t.lanes = 8)
											: (t.lanes = 1073741824),
									null)
								: ((s = a.children),
									(e = a.fallback),
									l
										? ((a = t.mode),
											(l = t.child),
											(s = { mode: 'hidden', children: s }),
											0 == (1 & a) && null !== l
												? ((l.childLanes = 0), (l.pendingProps = s))
												: (l = zu(s, a, 0, null)),
											(e = Au(e, a, n, null)),
											(l.return = t),
											(e.return = t),
											(l.sibling = e),
											(t.child = l),
											(t.child.memoizedState = zl(n)),
											(t.memoizedState = Al),
											e)
										: Ul(t, s))
						);
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
						return (function (e, t, n, r, a, i, l) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), Il(e, t, l, (r = fl(Error(o(422))))))
									: null !== t.memoizedState
										? ((t.child = e.child), (t.flags |= 128), null)
										: ((i = r.fallback),
											(a = t.mode),
											(r = zu(
												{ mode: 'visible', children: r.children },
												a,
												0,
												null,
											)),
											((i = Au(i, a, l, null)).flags |= 2),
											(r.return = t),
											(i.return = t),
											(r.sibling = i),
											(t.child = r),
											0 != (1 & t.mode) && Jo(t, e.child, null, l),
											(t.child.memoizedState = zl(l)),
											(t.memoizedState = Al),
											i);
							if (0 == (1 & t.mode)) return Il(e, t, l, null);
							if ('$!' === a.data) {
								if ((r = a.nextSibling && a.nextSibling.dataset))
									var s = r.dgst;
								return (
									(r = s), Il(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
								);
							}
							if (((s = 0 != (l & e.childLanes)), wl || s)) {
								if (null !== (r = Ns)) {
									switch (l & -l) {
										case 4:
											a = 2;
											break;
										case 16:
											a = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											a = 32;
											break;
										case 536870912:
											a = 268435456;
											break;
										default:
											a = 0;
									}
									0 !== (a = 0 != (a & (r.suspendedLanes | l)) ? 0 : a) &&
										a !== i.retryLane &&
										((i.retryLane = a), No(e, a), ru(r, e, a, -1));
								}
								return yu(), Il(e, t, l, (r = fl(Error(o(421)))));
							}
							return '$?' === a.data
								? ((t.flags |= 128),
									(t.child = e.child),
									(t = Pu.bind(null, e)),
									(a._reactRetry = t),
									null)
								: ((e = i.treeContext),
									(ro = ua(a.nextSibling)),
									(no = t),
									(ao = !0),
									(oo = null),
									null !== e &&
										((Va[Ka++] = Xa),
										(Va[Ka++] = Ja),
										(Va[Ka++] = Ga),
										(Xa = e.id),
										(Ja = e.overflow),
										(Ga = t)),
									((t = Ul(t, r.children)).flags |= 4096),
									t);
						})(e, t, s, a, r, i, n);
					if (l) {
						(l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
						var u = { mode: 'hidden', children: a.children };
						return (
							0 == (1 & s) && t.child !== i
								? (((a = t.child).childLanes = 0),
									(a.pendingProps = u),
									(t.deletions = null))
								: ((a = Lu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
							null !== r
								? (l = Lu(r, l))
								: ((l = Au(l, s, n, null)).flags |= 2),
							(l.return = t),
							(a.return = t),
							(a.sibling = l),
							(t.child = a),
							(a = l),
							(l = t.child),
							(s =
								null === (s = e.child.memoizedState)
									? zl(n)
									: {
											baseLanes: s.baseLanes | n,
											cachePool: null,
											transitions: s.transitions,
										}),
							(l.memoizedState = s),
							(l.childLanes = e.childLanes & ~n),
							(t.memoizedState = Al),
							a
						);
					}
					return (
						(e = (l = e.child).sibling),
						(a = Lu(l, { mode: 'visible', children: a.children })),
						0 == (1 & t.mode) && (a.lanes = n),
						(a.return = t),
						(a.sibling = null),
						null !== e &&
							(null === (n = t.deletions)
								? ((t.deletions = [e]), (t.flags |= 16))
								: n.push(e)),
						(t.child = a),
						(t.memoizedState = null),
						a
					);
				}
				function Ul(e, t) {
					return (
						((t = zu(
							{ mode: 'visible', children: t },
							e.mode,
							0,
							null,
						)).return = e),
						(e.child = t)
					);
				}
				function Il(e, t, n, r) {
					return (
						null !== r && mo(r),
						Jo(t, e.child, null, n),
						((e = Ul(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Bl(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), xo(e.return, t, n);
				}
				function ql(e, t, n, r, a) {
					var o = e.memoizedState;
					null === o
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: a,
							})
						: ((o.isBackwards = t),
							(o.rendering = null),
							(o.renderingStartTime = 0),
							(o.last = r),
							(o.tail = n),
							(o.tailMode = a));
				}
				function Ql(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						o = r.tail;
					if ((Sl(e, t, r.children, n), 0 != (2 & (r = si.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 != (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
								else if (19 === e.tag) Bl(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((Oa(si, r), 0 == (1 & t.mode))) t.memoizedState = null;
					else
						switch (a) {
							case 'forwards':
								for (n = t.child, a = null; null !== n; )
									null !== (e = n.alternate) && null === ui(e) && (a = n),
										(n = n.sibling);
								null === (n = a)
									? ((a = t.child), (t.child = null))
									: ((a = n.sibling), (n.sibling = null)),
									ql(t, !1, a, n, o);
								break;
							case 'backwards':
								for (n = null, a = t.child, t.child = null; null !== a; ) {
									if (null !== (e = a.alternate) && null === ui(e)) {
										t.child = a;
										break;
									}
									(e = a.sibling), (a.sibling = n), (n = a), (a = e);
								}
								ql(t, !0, n, null, o);
								break;
							case 'together':
								ql(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function Wl(e, t) {
					0 == (1 & t.mode) &&
						null !== e &&
						((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Hl(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(zs |= t.lanes),
						0 == (n & t.childLanes))
					)
						return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (
							n = Lu((e = t.child), e.pendingProps), t.child = n, n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling = Lu(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function $l(e, t) {
					if (!ao)
						switch (e.tailMode) {
							case 'hidden':
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case 'collapsed':
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n), (n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function Vl(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= 14680064 & a.subtreeFlags),
								(r |= 14680064 & a.flags),
								(a.return = e),
								(a = a.sibling);
					else
						for (a = e.child; null !== a; )
							(n |= a.lanes | a.childLanes),
								(r |= a.subtreeFlags),
								(r |= a.flags),
								(a.return = e),
								(a = a.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Kl(e, t, n) {
					var r = t.pendingProps;
					switch ((to(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return Vl(t), null;
						case 1:
						case 17:
							return ja(t.type) && Fa(), Vl(t), null;
						case 3:
							return (
								(r = t.stateNode),
								oi(),
								Ca(Ra),
								Ca(Pa),
								fi(),
								r.pendingContext &&
									((r.context = r.pendingContext), (r.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(fo(t)
										? (t.flags |= 4)
										: null === e ||
											(e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
											((t.flags |= 1024),
											null !== oo && (lu(oo), (oo = null)))),
								Fl(e, t),
								Vl(t),
								null
							);
						case 5:
							li(t);
							var a = ri(ni.current);
							if (((n = t.type), null !== e && null != t.stateNode))
								Ll(e, t, n, r, a),
									e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(o(166));
									return Vl(t), null;
								}
								if (((e = ri(ei.current)), fo(t))) {
									(r = t.stateNode), (n = t.type);
									var i = t.memoizedProps;
									switch (
										((r[da] = t), (r[pa] = i), (e = 0 != (1 & t.mode)), n)
									) {
										case 'dialog':
											Ur('cancel', r), Ur('close', r);
											break;
										case 'iframe':
										case 'object':
										case 'embed':
											Ur('load', r);
											break;
										case 'video':
										case 'audio':
											for (a = 0; a < Dr.length; a++) Ur(Dr[a], r);
											break;
										case 'source':
											Ur('error', r);
											break;
										case 'img':
										case 'image':
										case 'link':
											Ur('error', r), Ur('load', r);
											break;
										case 'details':
											Ur('toggle', r);
											break;
										case 'input':
											X(r, i), Ur('invalid', r);
											break;
										case 'select':
											(r._wrapperState = { wasMultiple: !!i.multiple }),
												Ur('invalid', r);
											break;
										case 'textarea':
											ae(r, i), Ur('invalid', r);
									}
									for (var s in (ge(n, i), (a = null), i))
										if (i.hasOwnProperty(s)) {
											var u = i[s];
											'children' === s
												? 'string' == typeof u
													? r.textContent !== u &&
														(!0 !== i.suppressHydrationWarning &&
															Yr(r.textContent, u, e),
														(a = ['children', u]))
													: 'number' == typeof u &&
														r.textContent !== '' + u &&
														(!0 !== i.suppressHydrationWarning &&
															Yr(r.textContent, u, e),
														(a = ['children', '' + u]))
												: l.hasOwnProperty(s) &&
													null != u &&
													'onScroll' === s &&
													Ur('scroll', r);
										}
									switch (n) {
										case 'input':
											$(r), Z(r, i, !0);
											break;
										case 'textarea':
											$(r), ie(r);
											break;
										case 'select':
										case 'option':
											break;
										default:
											'function' == typeof i.onClick && (r.onclick = Zr);
									}
									(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(s = 9 === a.nodeType ? a : a.ownerDocument),
										'http://www.w3.org/1999/xhtml' === e && (e = le(n)),
										'http://www.w3.org/1999/xhtml' === e
											? 'script' === n
												? (((e = s.createElement('div')).innerHTML =
														'<script></script>'),
													(e = e.removeChild(e.firstChild)))
												: 'string' == typeof r.is
													? (e = s.createElement(n, { is: r.is }))
													: ((e = s.createElement(n)),
														'select' === n &&
															((s = e),
															r.multiple
																? (s.multiple = !0)
																: r.size && (s.size = r.size)))
											: (e = s.createElementNS(e, n)),
										(e[da] = t),
										(e[pa] = r),
										jl(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((s = be(n, r)), n)) {
											case 'dialog':
												Ur('cancel', e), Ur('close', e), (a = r);
												break;
											case 'iframe':
											case 'object':
											case 'embed':
												Ur('load', e), (a = r);
												break;
											case 'video':
											case 'audio':
												for (a = 0; a < Dr.length; a++) Ur(Dr[a], e);
												a = r;
												break;
											case 'source':
												Ur('error', e), (a = r);
												break;
											case 'img':
											case 'image':
											case 'link':
												Ur('error', e), Ur('load', e), (a = r);
												break;
											case 'details':
												Ur('toggle', e), (a = r);
												break;
											case 'input':
												X(e, r), (a = G(e, r)), Ur('invalid', e);
												break;
											case 'option':
											default:
												a = r;
												break;
											case 'select':
												(e._wrapperState = { wasMultiple: !!r.multiple }),
													(a = z({}, r, { value: void 0 })),
													Ur('invalid', e);
												break;
											case 'textarea':
												ae(e, r), (a = re(e, r)), Ur('invalid', e);
										}
										for (i in (ge(n, a), (u = a)))
											if (u.hasOwnProperty(i)) {
												var c = u[i];
												'style' === i
													? ye(e, c)
													: 'dangerouslySetInnerHTML' === i
														? null != (c = c ? c.__html : void 0) && fe(e, c)
														: 'children' === i
															? 'string' == typeof c
																? ('textarea' !== n || '' !== c) && de(e, c)
																: 'number' == typeof c && de(e, '' + c)
															: 'suppressContentEditableWarning' !== i &&
																'suppressHydrationWarning' !== i &&
																'autoFocus' !== i &&
																(l.hasOwnProperty(i)
																	? null != c &&
																		'onScroll' === i &&
																		Ur('scroll', e)
																	: null != c && b(e, i, c, s));
											}
										switch (n) {
											case 'input':
												$(e), Z(e, r, !1);
												break;
											case 'textarea':
												$(e), ie(e);
												break;
											case 'option':
												null != r.value &&
													e.setAttribute('value', '' + W(r.value));
												break;
											case 'select':
												(e.multiple = !!r.multiple),
													null != (i = r.value)
														? ne(e, !!r.multiple, i, !1)
														: null != r.defaultValue &&
															ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												'function' == typeof a.onClick && (e.onclick = Zr);
										}
										switch (n) {
											case 'button':
											case 'input':
											case 'select':
											case 'textarea':
												r = !!r.autoFocus;
												break e;
											case 'img':
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return Vl(t), null;
						case 6:
							if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, r);
							else {
								if ('string' != typeof r && null === t.stateNode)
									throw Error(o(166));
								if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
									if (
										((r = t.stateNode),
										(n = t.memoizedProps),
										(r[da] = t),
										(i = r.nodeValue !== n) && null !== (e = no))
									)
										switch (e.tag) {
											case 3:
												Yr(r.nodeValue, n, 0 != (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning &&
													Yr(r.nodeValue, n, 0 != (1 & e.mode));
										}
									i && (t.flags |= 4);
								} else
									((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
										r,
									))[da] = t),
										(t.stateNode = r);
							}
							return Vl(t), null;
						case 13:
							if (
								(Ca(si),
								(r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									ao &&
									null !== ro &&
									0 != (1 & t.mode) &&
									0 == (128 & t.flags)
								)
									po(), ho(), (t.flags |= 98560), (i = !1);
								else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (
											!(i =
												null !== (i = t.memoizedState) ? i.dehydrated : null)
										)
											throw Error(o(317));
										i[da] = t;
									} else
										ho(),
											0 == (128 & t.flags) && (t.memoizedState = null),
											(t.flags |= 4);
									Vl(t), (i = !1);
								} else null !== oo && (lu(oo), (oo = null)), (i = !0);
								if (!i) return 65536 & t.flags ? t : null;
							}
							return 0 != (128 & t.flags)
								? ((t.lanes = n), t)
								: ((r = null !== r) !=
										(null !== e && null !== e.memoizedState) &&
										r &&
										((t.child.flags |= 8192),
										0 != (1 & t.mode) &&
											(null === e || 0 != (1 & si.current)
												? 0 === Ds && (Ds = 3)
												: yu())),
									null !== t.updateQueue && (t.flags |= 4),
									Vl(t),
									null);
						case 4:
							return (
								oi(),
								Fl(e, t),
								null === e && qr(t.stateNode.containerInfo),
								Vl(t),
								null
							);
						case 10:
							return Eo(t.type._context), Vl(t), null;
						case 19:
							if ((Ca(si), null === (i = t.memoizedState))) return Vl(t), null;
							if (((r = 0 != (128 & t.flags)), null === (s = i.rendering)))
								if (r) $l(i, !1);
								else {
									if (0 !== Ds || (null !== e && 0 != (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (s = ui(e))) {
												for (
													t.flags |= 128,
														$l(i, !1),
														null !== (r = s.updateQueue) &&
															((t.updateQueue = r), (t.flags |= 4)),
														t.subtreeFlags = 0,
														r = n,
														n = t.child;
													null !== n;

												)
													(e = r),
														((i = n).flags &= 14680066),
														null === (s = i.alternate)
															? ((i.childLanes = 0),
																(i.lanes = e),
																(i.child = null),
																(i.subtreeFlags = 0),
																(i.memoizedProps = null),
																(i.memoizedState = null),
																(i.updateQueue = null),
																(i.dependencies = null),
																(i.stateNode = null))
															: ((i.childLanes = s.childLanes),
																(i.lanes = s.lanes),
																(i.child = s.child),
																(i.subtreeFlags = 0),
																(i.deletions = null),
																(i.memoizedProps = s.memoizedProps),
																(i.memoizedState = s.memoizedState),
																(i.updateQueue = s.updateQueue),
																(i.type = s.type),
																(e = s.dependencies),
																(i.dependencies =
																	null === e
																		? null
																		: {
																				lanes: e.lanes,
																				firstContext: e.firstContext,
																			})),
														(n = n.sibling);
												return Oa(si, (1 & si.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== i.tail &&
										Je() > Qs &&
										((t.flags |= 128),
										(r = !0),
										$l(i, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = ui(s))) {
										if (
											((t.flags |= 128),
											(r = !0),
											null !== (n = e.updateQueue) &&
												((t.updateQueue = n), (t.flags |= 4)),
											$l(i, !0),
											null === i.tail &&
												'hidden' === i.tailMode &&
												!s.alternate &&
												!ao)
										)
											return Vl(t), null;
									} else
										2 * Je() - i.renderingStartTime > Qs &&
											1073741824 !== n &&
											((t.flags |= 128),
											(r = !0),
											$l(i, !1),
											(t.lanes = 4194304));
								i.isBackwards
									? ((s.sibling = t.child), (t.child = s))
									: (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
										(i.last = s));
							}
							return null !== i.tail
								? ((t = i.tail),
									(i.rendering = t),
									(i.tail = t.sibling),
									(i.renderingStartTime = Je()),
									(t.sibling = null),
									(n = si.current),
									Oa(si, r ? (1 & n) | 2 : 1 & n),
									t)
								: (Vl(t), null);
						case 22:
						case 23:
							return (
								du(),
								(r = null !== t.memoizedState),
								null !== e &&
									(null !== e.memoizedState) !== r &&
									(t.flags |= 8192),
								r && 0 != (1 & t.mode)
									? 0 != (1073741824 & Fs) &&
										(Vl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: Vl(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(o(156, t.tag));
				}
				function Gl(e, t) {
					switch ((to(t), t.tag)) {
						case 1:
							return (
								ja(t.type) && Fa(),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 3:
							return (
								oi(),
								Ca(Ra),
								Ca(Pa),
								fi(),
								0 != (65536 & (e = t.flags)) && 0 == (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 5:
							return li(t), null;
						case 13:
							if (
								(Ca(si),
								null !== (e = t.memoizedState) && null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(o(340));
								ho();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return Ca(si), null;
						case 4:
							return oi(), null;
						case 10:
							return Eo(t.type._context), null;
						case 22:
						case 23:
							return du(), null;
						default:
							return null;
					}
				}
				(jl = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(Fl = function () {}),
					(Ll = function (e, t, n, r) {
						var a = e.memoizedProps;
						if (a !== r) {
							(e = t.stateNode), ri(ei.current);
							var o,
								i = null;
							switch (n) {
								case 'input':
									(a = G(e, a)), (r = G(e, r)), (i = []);
									break;
								case 'select':
									(a = z({}, a, { value: void 0 })),
										(r = z({}, r, { value: void 0 })),
										(i = []);
									break;
								case 'textarea':
									(a = re(e, a)), (r = re(e, r)), (i = []);
									break;
								default:
									'function' != typeof a.onClick &&
										'function' == typeof r.onClick &&
										(e.onclick = Zr);
							}
							for (c in (ge(n, r), (n = null), a))
								if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
									if ('style' === c) {
										var s = a[c];
										for (o in s)
											s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
									} else
										'dangerouslySetInnerHTML' !== c &&
											'children' !== c &&
											'suppressContentEditableWarning' !== c &&
											'suppressHydrationWarning' !== c &&
											'autoFocus' !== c &&
											(l.hasOwnProperty(c)
												? i || (i = [])
												: (i = i || []).push(c, null));
							for (c in r) {
								var u = r[c];
								if (
									((s = null != a ? a[c] : void 0),
									r.hasOwnProperty(c) && u !== s && (null != u || null != s))
								)
									if ('style' === c)
										if (s) {
											for (o in s)
												!s.hasOwnProperty(o) ||
													(u && u.hasOwnProperty(o)) ||
													(n || (n = {}), (n[o] = ''));
											for (o in u)
												u.hasOwnProperty(o) &&
													s[o] !== u[o] &&
													(n || (n = {}), (n[o] = u[o]));
										} else n || (i || (i = []), i.push(c, n)), (n = u);
									else
										'dangerouslySetInnerHTML' === c
											? ((u = u ? u.__html : void 0),
												(s = s ? s.__html : void 0),
												null != u && s !== u && (i = i || []).push(c, u))
											: 'children' === c
												? ('string' != typeof u && 'number' != typeof u) ||
													(i = i || []).push(c, '' + u)
												: 'suppressContentEditableWarning' !== c &&
													'suppressHydrationWarning' !== c &&
													(l.hasOwnProperty(c)
														? (null != u && 'onScroll' === c && Ur('scroll', e),
															i || s === u || (i = []))
														: (i = i || []).push(c, u));
							}
							n && (i = i || []).push('style', n);
							var c = i;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(Dl = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Xl = !1,
					Jl = !1,
					Yl = 'function' == typeof WeakSet ? WeakSet : Set,
					Zl = null;
				function es(e, t) {
					var n = e.ref;
					if (null !== n)
						if ('function' == typeof n)
							try {
								n(null);
							} catch (n) {
								Cu(e, t, n);
							}
						else n.current = null;
				}
				function ts(e, t, n) {
					try {
						n();
					} catch (n) {
						Cu(e, t, n);
					}
				}
				var ns = !1;
				function rs(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = (r = r.next);
						do {
							if ((a.tag & e) === e) {
								var o = a.destroy;
								(a.destroy = void 0), void 0 !== o && ts(t, n, o);
							}
							a = a.next;
						} while (a !== r);
					}
				}
				function as(e, t) {
					if (
						null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
					) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function os(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e);
					}
				}
				function is(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), is(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[da],
							delete t[pa],
							delete t[ma],
							delete t[ya],
							delete t[va]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function ls(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function ss(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || ls(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function us(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
									null != (n = n._reactRootContainer) ||
										null !== t.onclick ||
										(t.onclick = Zr));
					else if (4 !== r && null !== (e = e.child))
						for (us(e, t, n), e = e.sibling; null !== e; )
							us(e, t, n), (e = e.sibling);
				}
				function cs(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (cs(e, t, n), e = e.sibling; null !== e; )
							cs(e, t, n), (e = e.sibling);
				}
				var fs = null,
					ds = !1;
				function ps(e, t, n) {
					for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
				}
				function hs(e, t, n) {
					if (ot && 'function' == typeof ot.onCommitFiberUnmount)
						try {
							ot.onCommitFiberUnmount(at, n);
						} catch (e) {}
					switch (n.tag) {
						case 5:
							Jl || es(n, t);
						case 6:
							var r = fs,
								a = ds;
							(fs = null),
								ps(e, t, n),
								(ds = a),
								null !== (fs = r) &&
									(ds
										? ((e = fs),
											(n = n.stateNode),
											8 === e.nodeType
												? e.parentNode.removeChild(n)
												: e.removeChild(n))
										: fs.removeChild(n.stateNode));
							break;
						case 18:
							null !== fs &&
								(ds
									? ((e = fs),
										(n = n.stateNode),
										8 === e.nodeType
											? sa(e.parentNode, n)
											: 1 === e.nodeType && sa(e, n),
										qt(e))
									: sa(fs, n.stateNode));
							break;
						case 4:
							(r = fs),
								(a = ds),
								(fs = n.stateNode.containerInfo),
								(ds = !0),
								ps(e, t, n),
								(fs = r),
								(ds = a);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (
								!Jl &&
								null !== (r = n.updateQueue) &&
								null !== (r = r.lastEffect)
							) {
								a = r = r.next;
								do {
									var o = a,
										i = o.destroy;
									(o = o.tag),
										void 0 !== i &&
											(0 != (2 & o) || 0 != (4 & o)) &&
											ts(n, t, i),
										(a = a.next);
								} while (a !== r);
							}
							ps(e, t, n);
							break;
						case 1:
							if (
								!Jl &&
								(es(n, t),
								'function' == typeof (r = n.stateNode).componentWillUnmount)
							)
								try {
									(r.props = n.memoizedProps),
										(r.state = n.memoizedState),
										r.componentWillUnmount();
								} catch (e) {
									Cu(n, t, e);
								}
							ps(e, t, n);
							break;
						case 21:
							ps(e, t, n);
							break;
						case 22:
							1 & n.mode
								? ((Jl = (r = Jl) || null !== n.memoizedState),
									ps(e, t, n),
									(Jl = r))
								: ps(e, t, n);
							break;
						default:
							ps(e, t, n);
					}
				}
				function ms(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Yl()),
							t.forEach(function (t) {
								var r = Ru.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function ys(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									l = t,
									s = l;
								e: for (; null !== s; ) {
									switch (s.tag) {
										case 5:
											(fs = s.stateNode), (ds = !1);
											break e;
										case 3:
										case 4:
											(fs = s.stateNode.containerInfo), (ds = !0);
											break e;
									}
									s = s.return;
								}
								if (null === fs) throw Error(o(160));
								hs(i, l, a), (fs = null), (ds = !1);
								var u = a.alternate;
								null !== u && (u.return = null), (a.return = null);
							} catch (e) {
								Cu(a, t, e);
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
				}
				function vs(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((ys(t, e), gs(e), 4 & r)) {
								try {
									rs(3, e, e.return), as(3, e);
								} catch (t) {
									Cu(e, e.return, t);
								}
								try {
									rs(5, e, e.return);
								} catch (t) {
									Cu(e, e.return, t);
								}
							}
							break;
						case 1:
							ys(t, e), gs(e), 512 & r && null !== n && es(n, n.return);
							break;
						case 5:
							if (
								(ys(t, e),
								gs(e),
								512 & r && null !== n && es(n, n.return),
								32 & e.flags)
							) {
								var a = e.stateNode;
								try {
									de(a, '');
								} catch (t) {
									Cu(e, e.return, t);
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									l = null !== n ? n.memoizedProps : i,
									s = e.type,
									u = e.updateQueue;
								if (((e.updateQueue = null), null !== u))
									try {
										'input' === s &&
											'radio' === i.type &&
											null != i.name &&
											J(a, i),
											be(s, l);
										var c = be(s, i);
										for (l = 0; l < u.length; l += 2) {
											var f = u[l],
												d = u[l + 1];
											'style' === f
												? ye(a, d)
												: 'dangerouslySetInnerHTML' === f
													? fe(a, d)
													: 'children' === f
														? de(a, d)
														: b(a, f, d, c);
										}
										switch (s) {
											case 'input':
												Y(a, i);
												break;
											case 'textarea':
												oe(a, i);
												break;
											case 'select':
												var p = a._wrapperState.wasMultiple;
												a._wrapperState.wasMultiple = !!i.multiple;
												var h = i.value;
												null != h
													? ne(a, !!i.multiple, h, !1)
													: p !== !!i.multiple &&
														(null != i.defaultValue
															? ne(a, !!i.multiple, i.defaultValue, !0)
															: ne(a, !!i.multiple, i.multiple ? [] : '', !1));
										}
										a[pa] = i;
									} catch (t) {
										Cu(e, e.return, t);
									}
							}
							break;
						case 6:
							if ((ys(t, e), gs(e), 4 & r)) {
								if (null === e.stateNode) throw Error(o(162));
								(a = e.stateNode), (i = e.memoizedProps);
								try {
									a.nodeValue = i;
								} catch (t) {
									Cu(e, e.return, t);
								}
							}
							break;
						case 3:
							if (
								(ys(t, e),
								gs(e),
								4 & r && null !== n && n.memoizedState.isDehydrated)
							)
								try {
									qt(t.containerInfo);
								} catch (t) {
									Cu(e, e.return, t);
								}
							break;
						case 4:
						default:
							ys(t, e), gs(e);
							break;
						case 13:
							ys(t, e),
								gs(e),
								8192 & (a = e.child).flags &&
									((i = null !== a.memoizedState),
									(a.stateNode.isHidden = i),
									!i ||
										(null !== a.alternate &&
											null !== a.alternate.memoizedState) ||
										(qs = Je())),
								4 & r && ms(e);
							break;
						case 22:
							if (
								((f = null !== n && null !== n.memoizedState),
								1 & e.mode
									? ((Jl = (c = Jl) || f), ys(t, e), (Jl = c))
									: ys(t, e),
								gs(e),
								8192 & r)
							) {
								if (
									((c = null !== e.memoizedState),
									(e.stateNode.isHidden = c) && !f && 0 != (1 & e.mode))
								)
									for (Zl = e, f = e.child; null !== f; ) {
										for (d = Zl = f; null !== Zl; ) {
											switch (((h = (p = Zl).child), p.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													rs(4, p, p.return);
													break;
												case 1:
													es(p, p.return);
													var m = p.stateNode;
													if ('function' == typeof m.componentWillUnmount) {
														(r = p), (n = p.return);
														try {
															(t = r),
																(m.props = t.memoizedProps),
																(m.state = t.memoizedState),
																m.componentWillUnmount();
														} catch (e) {
															Cu(r, n, e);
														}
													}
													break;
												case 5:
													es(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														ks(d);
														continue;
													}
											}
											null !== h ? ((h.return = p), (Zl = h)) : ks(d);
										}
										f = f.sibling;
									}
								e: for (f = null, d = e; ; ) {
									if (5 === d.tag) {
										if (null === f) {
											f = d;
											try {
												(a = d.stateNode),
													c
														? 'function' == typeof (i = a.style).setProperty
															? i.setProperty('display', 'none', 'important')
															: (i.display = 'none')
														: ((s = d.stateNode),
															(l =
																null != (u = d.memoizedProps.style) &&
																u.hasOwnProperty('display')
																	? u.display
																	: null),
															(s.style.display = me('display', l)));
											} catch (t) {
												Cu(e, e.return, t);
											}
										}
									} else if (6 === d.tag) {
										if (null === f)
											try {
												d.stateNode.nodeValue = c ? '' : d.memoizedProps;
											} catch (t) {
												Cu(e, e.return, t);
											}
									} else if (
										((22 !== d.tag && 23 !== d.tag) ||
											null === d.memoizedState ||
											d === e) &&
										null !== d.child
									) {
										(d.child.return = d), (d = d.child);
										continue;
									}
									if (d === e) break e;
									for (; null === d.sibling; ) {
										if (null === d.return || d.return === e) break e;
										f === d && (f = null), (d = d.return);
									}
									f === d && (f = null),
										(d.sibling.return = d.return),
										(d = d.sibling);
								}
							}
							break;
						case 19:
							ys(t, e), gs(e), 4 & r && ms(e);
						case 21:
					}
				}
				function gs(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (ls(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(o(160));
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (de(a, ''), (r.flags &= -33)),
										cs(e, ss(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									us(e, ss(e), i);
									break;
								default:
									throw Error(o(161));
							}
						} catch (t) {
							Cu(e, e.return, t);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function bs(e, t, n) {
					(Zl = e), ws(e, t, n);
				}
				function ws(e, t, n) {
					for (var r = 0 != (1 & e.mode); null !== Zl; ) {
						var a = Zl,
							o = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Xl;
							if (!i) {
								var l = a.alternate,
									s = (null !== l && null !== l.memoizedState) || Jl;
								l = Xl;
								var u = Jl;
								if (((Xl = i), (Jl = s) && !u))
									for (Zl = a; null !== Zl; )
										(s = (i = Zl).child),
											22 === i.tag && null !== i.memoizedState
												? Es(a)
												: null !== s
													? ((s.return = i), (Zl = s))
													: Es(a);
								for (; null !== o; ) (Zl = o), ws(o, t, n), (o = o.sibling);
								(Zl = a), (Xl = l), (Jl = u);
							}
							Ss(e);
						} else
							0 != (8772 & a.subtreeFlags) && null !== o
								? ((o.return = a), (Zl = o))
								: Ss(e);
					}
				}
				function Ss(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						if (0 != (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 != (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Jl || as(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Jl)
												if (null === n) r.componentDidMount();
												else {
													var a =
														t.elementType === t.type
															? n.memoizedProps
															: vo(t.type, n.memoizedProps);
													r.componentDidUpdate(
														a,
														n.memoizedState,
														r.__reactInternalSnapshotBeforeUpdate,
													);
												}
											var i = t.updateQueue;
											null !== i && Uo(t, i, r);
											break;
										case 3:
											var l = t.updateQueue;
											if (null !== l) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Uo(t, l, n);
											}
											break;
										case 5:
											var s = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = s;
												var u = t.memoizedProps;
												switch (t.type) {
													case 'button':
													case 'input':
													case 'select':
													case 'textarea':
														u.autoFocus && n.focus();
														break;
													case 'img':
														u.src && (n.src = u.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var f = c.memoizedState;
													if (null !== f) {
														var d = f.dehydrated;
														null !== d && qt(d);
													}
												}
											}
											break;
										default:
											throw Error(o(163));
									}
								Jl || (512 & t.flags && os(t));
							} catch (e) {
								Cu(t, t.return, e);
							}
						}
						if (t === e) {
							Zl = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Zl = n);
							break;
						}
						Zl = t.return;
					}
				}
				function ks(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						if (t === e) {
							Zl = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Zl = n);
							break;
						}
						Zl = t.return;
					}
				}
				function Es(e) {
					for (; null !== Zl; ) {
						var t = Zl;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										as(4, t);
									} catch (e) {
										Cu(t, n, e);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ('function' == typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount();
										} catch (e) {
											Cu(t, a, e);
										}
									}
									var o = t.return;
									try {
										os(t);
									} catch (e) {
										Cu(t, o, e);
									}
									break;
								case 5:
									var i = t.return;
									try {
										os(t);
									} catch (e) {
										Cu(t, i, e);
									}
							}
						} catch (e) {
							Cu(t, t.return, e);
						}
						if (t === e) {
							Zl = null;
							break;
						}
						var l = t.sibling;
						if (null !== l) {
							(l.return = t.return), (Zl = l);
							break;
						}
						Zl = t.return;
					}
				}
				var xs,
					Cs = Math.ceil,
					Os = w.ReactCurrentDispatcher,
					_s = w.ReactCurrentOwner,
					Ps = w.ReactCurrentBatchConfig,
					Rs = 0,
					Ns = null,
					Ts = null,
					js = 0,
					Fs = 0,
					Ls = xa(0),
					Ds = 0,
					As = null,
					zs = 0,
					Ms = 0,
					Us = 0,
					Is = null,
					Bs = null,
					qs = 0,
					Qs = 1 / 0,
					Ws = null,
					Hs = !1,
					$s = null,
					Vs = null,
					Ks = !1,
					Gs = null,
					Xs = 0,
					Js = 0,
					Ys = null,
					Zs = -1,
					eu = 0;
				function tu() {
					return 0 != (6 & Rs) ? Je() : -1 !== Zs ? Zs : (Zs = Je());
				}
				function nu(e) {
					return 0 == (1 & e.mode)
						? 1
						: 0 != (2 & Rs) && 0 !== js
							? js & -js
							: null !== yo.transition
								? (0 === eu && (eu = mt()), eu)
								: 0 !== (e = bt)
									? e
									: (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
				}
				function ru(e, t, n, r) {
					if (50 < Js) throw ((Js = 0), (Ys = null), Error(o(185)));
					vt(e, n, r),
						(0 != (2 & Rs) && e === Ns) ||
							(e === Ns && (0 == (2 & Rs) && (Ms |= n), 4 === Ds && su(e, js)),
							au(e, r),
							1 === n &&
								0 === Rs &&
								0 == (1 & t.mode) &&
								((Qs = Je() + 500), Ua && qa()));
				}
				function au(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (
							var n = e.suspendedLanes,
								r = e.pingedLanes,
								a = e.expirationTimes,
								o = e.pendingLanes;
							0 < o;

						) {
							var i = 31 - it(o),
								l = 1 << i,
								s = a[i];
							-1 === s
								? (0 != (l & n) && 0 == (l & r)) || (a[i] = pt(l, t))
								: s <= t && (e.expiredLanes |= l),
								(o &= ~l);
						}
					})(e, t);
					var r = dt(e, e === Ns ? js : 0);
					if (0 === r)
						null !== n && Ke(n),
							(e.callbackNode = null),
							(e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && Ke(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(Ua = !0), Ba(e);
									})(uu.bind(null, e))
								: Ba(uu.bind(null, e)),
								ia(function () {
									0 == (6 & Rs) && qa();
								}),
								(n = null);
						else {
							switch (wt(r)) {
								case 1:
									n = Ze;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = Nu(n, ou.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function ou(e, t) {
					if (((Zs = -1), (eu = 0), 0 != (6 & Rs))) throw Error(o(327));
					var n = e.callbackNode;
					if (Eu() && e.callbackNode !== n) return null;
					var r = dt(e, e === Ns ? js : 0);
					if (0 === r) return null;
					if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vu(e, r);
					else {
						t = r;
						var a = Rs;
						Rs |= 2;
						var i = mu();
						for (
							(Ns === e && js === t) ||
							((Ws = null), (Qs = Je() + 500), pu(e, t));
							;

						)
							try {
								bu();
								break;
							} catch (t) {
								hu(e, t);
							}
						ko(),
							(Os.current = i),
							(Rs = a),
							null !== Ts ? (t = 0) : ((Ns = null), (js = 0), (t = Ds));
					}
					if (0 !== t) {
						if (
							(2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
							1 === t)
						)
							throw ((n = As), pu(e, 0), su(e, r), au(e, Je()), n);
						if (6 === t) su(e, r);
						else {
							if (
								((a = e.current.alternate),
								0 == (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var a = n[r],
															o = a.getSnapshot;
														a = a.value;
														try {
															if (!lr(o(), a)) return !1;
														} catch (e) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
												(n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(a) &&
									(2 === (t = vu(e, r)) &&
										0 !== (i = ht(e)) &&
										((r = i), (t = iu(e, i))),
									1 === t))
							)
								throw ((n = As), pu(e, 0), su(e, r), au(e, Je()), n);
							switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									ku(e, Bs, Ws);
									break;
								case 3:
									if (
										(su(e, r),
										(130023424 & r) === r && 10 < (t = qs + 500 - Je()))
									) {
										if (0 !== dt(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											tu(), (e.pingedLanes |= e.suspendedLanes & a);
											break;
										}
										e.timeoutHandle = ra(ku.bind(null, e, Bs, Ws), t);
										break;
									}
									ku(e, Bs, Ws);
									break;
								case 4:
									if ((su(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, a = -1; 0 < r; ) {
										var l = 31 - it(r);
										(i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
									}
									if (
										((r = a),
										10 <
											(r =
												(120 > (r = Je() - r)
													? 120
													: 480 > r
														? 480
														: 1080 > r
															? 1080
															: 1920 > r
																? 1920
																: 3e3 > r
																	? 3e3
																	: 4320 > r
																		? 4320
																		: 1960 * Cs(r / 1960)) - r))
									) {
										e.timeoutHandle = ra(ku.bind(null, e, Bs, Ws), r);
										break;
									}
									ku(e, Bs, Ws);
									break;
								default:
									throw Error(o(329));
							}
						}
					}
					return au(e, Je()), e.callbackNode === n ? ou.bind(null, e) : null;
				}
				function iu(e, t) {
					var n = Is;
					return (
						e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
						2 !== (e = vu(e, t)) && ((t = Bs), (Bs = n), null !== t && lu(t)),
						e
					);
				}
				function lu(e) {
					null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
				}
				function su(e, t) {
					for (
						t &= ~Us,
							t &= ~Ms,
							e.suspendedLanes |= t,
							e.pingedLanes &= ~t,
							e = e.expirationTimes;
						0 < t;

					) {
						var n = 31 - it(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function uu(e) {
					if (0 != (6 & Rs)) throw Error(o(327));
					Eu();
					var t = dt(e, 0);
					if (0 == (1 & t)) return au(e, Je()), null;
					var n = vu(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && ((t = r), (n = iu(e, r)));
					}
					if (1 === n) throw ((n = As), pu(e, 0), su(e, t), au(e, Je()), n);
					if (6 === n) throw Error(o(345));
					return (
						(e.finishedWork = e.current.alternate),
						(e.finishedLanes = t),
						ku(e, Bs, Ws),
						au(e, Je()),
						null
					);
				}
				function cu(e, t) {
					var n = Rs;
					Rs |= 1;
					try {
						return e(t);
					} finally {
						0 === (Rs = n) && ((Qs = Je() + 500), Ua && qa());
					}
				}
				function fu(e) {
					null !== Gs && 0 === Gs.tag && 0 == (6 & Rs) && Eu();
					var t = Rs;
					Rs |= 1;
					var n = Ps.transition,
						r = bt;
					try {
						if (((Ps.transition = null), (bt = 1), e)) return e();
					} finally {
						(bt = r), (Ps.transition = n), 0 == (6 & (Rs = t)) && qa();
					}
				}
				function du() {
					(Fs = Ls.current), Ca(Ls);
				}
				function pu(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ts))
						for (n = Ts.return; null !== n; ) {
							var r = n;
							switch ((to(r), r.tag)) {
								case 1:
									null != (r = r.type.childContextTypes) && Fa();
									break;
								case 3:
									oi(), Ca(Ra), Ca(Pa), fi();
									break;
								case 5:
									li(r);
									break;
								case 4:
									oi();
									break;
								case 13:
								case 19:
									Ca(si);
									break;
								case 10:
									Eo(r.type._context);
									break;
								case 22:
								case 23:
									du();
							}
							n = n.return;
						}
					if (
						((Ns = e),
						(Ts = e = Lu(e.current, null)),
						(js = Fs = t),
						(Ds = 0),
						(As = null),
						(Us = Ms = zs = 0),
						(Bs = Is = null),
						null !== _o)
					) {
						for (t = 0; t < _o.length; t++)
							if (null !== (r = (n = _o[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									o = n.pending;
								if (null !== o) {
									var i = o.next;
									(o.next = a), (r.next = i);
								}
								n.pending = r;
							}
						_o = null;
					}
					return e;
				}
				function hu(e, t) {
					for (;;) {
						var n = Ts;
						try {
							if ((ko(), (di.current = il), gi)) {
								for (var r = mi.memoizedState; null !== r; ) {
									var a = r.queue;
									null !== a && (a.pending = null), (r = r.next);
								}
								gi = !1;
							}
							if (
								((hi = 0),
								(vi = yi = mi = null),
								(bi = !1),
								(wi = 0),
								(_s.current = null),
								null === n || null === n.return)
							) {
								(Ds = 1), (As = t), (Ts = null);
								break;
							}
							e: {
								var i = e,
									l = n.return,
									s = n,
									u = t;
								if (
									((t = js),
									(s.flags |= 32768),
									null !== u &&
										'object' == typeof u &&
										'function' == typeof u.then)
								) {
									var c = u,
										f = s,
										d = f.tag;
									if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
										var p = f.alternate;
										p
											? ((f.updateQueue = p.updateQueue),
												(f.memoizedState = p.memoizedState),
												(f.lanes = p.lanes))
											: ((f.updateQueue = null), (f.memoizedState = null));
									}
									var h = vl(l);
									if (null !== h) {
										(h.flags &= -257),
											gl(h, l, s, 0, t),
											1 & h.mode && yl(i, c, t),
											(u = c);
										var m = (t = h).updateQueue;
										if (null === m) {
											var y = new Set();
											y.add(u), (t.updateQueue = y);
										} else m.add(u);
										break e;
									}
									if (0 == (1 & t)) {
										yl(i, c, t), yu();
										break e;
									}
									u = Error(o(426));
								} else if (ao && 1 & s.mode) {
									var v = vl(l);
									if (null !== v) {
										0 == (65536 & v.flags) && (v.flags |= 256),
											gl(v, l, s, 0, t),
											mo(cl(u, s));
										break e;
									}
								}
								(i = u = cl(u, s)),
									4 !== Ds && (Ds = 2),
									null === Is ? (Is = [i]) : Is.push(i),
									(i = l);
								do {
									switch (i.tag) {
										case 3:
											(i.flags |= 65536),
												(t &= -t),
												(i.lanes |= t),
												zo(i, hl(0, u, t));
											break e;
										case 1:
											s = u;
											var g = i.type,
												b = i.stateNode;
											if (
												0 == (128 & i.flags) &&
												('function' == typeof g.getDerivedStateFromError ||
													(null !== b &&
														'function' == typeof b.componentDidCatch &&
														(null === Vs || !Vs.has(b))))
											) {
												(i.flags |= 65536),
													(t &= -t),
													(i.lanes |= t),
													zo(i, ml(i, s, t));
												break e;
											}
									}
									i = i.return;
								} while (null !== i);
							}
							Su(n);
						} catch (e) {
							(t = e), Ts === n && null !== n && (Ts = n = n.return);
							continue;
						}
						break;
					}
				}
				function mu() {
					var e = Os.current;
					return (Os.current = il), null === e ? il : e;
				}
				function yu() {
					(0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
						null === Ns ||
							(0 == (268435455 & zs) && 0 == (268435455 & Ms)) ||
							su(Ns, js);
				}
				function vu(e, t) {
					var n = Rs;
					Rs |= 2;
					var r = mu();
					for ((Ns === e && js === t) || ((Ws = null), pu(e, t)); ; )
						try {
							gu();
							break;
						} catch (t) {
							hu(e, t);
						}
					if ((ko(), (Rs = n), (Os.current = r), null !== Ts))
						throw Error(o(261));
					return (Ns = null), (js = 0), Ds;
				}
				function gu() {
					for (; null !== Ts; ) wu(Ts);
				}
				function bu() {
					for (; null !== Ts && !Ge(); ) wu(Ts);
				}
				function wu(e) {
					var t = xs(e.alternate, e, Fs);
					(e.memoizedProps = e.pendingProps),
						null === t ? Su(e) : (Ts = t),
						(_s.current = null);
				}
				function Su(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 == (32768 & t.flags))) {
							if (null !== (n = Kl(n, t, Fs))) return void (Ts = n);
						} else {
							if (null !== (n = Gl(n, t)))
								return (n.flags &= 32767), void (Ts = n);
							if (null === e) return (Ds = 6), void (Ts = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Ts = t);
						Ts = t = e;
					} while (null !== t);
					0 === Ds && (Ds = 5);
				}
				function ku(e, t, n) {
					var r = bt,
						a = Ps.transition;
					try {
						(Ps.transition = null),
							(bt = 1),
							(function (e, t, n, r) {
								do {
									Eu();
								} while (null !== Gs);
								if (0 != (6 & Rs)) throw Error(o(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									n === e.current)
								)
									throw Error(o(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var i = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var a = 31 - it(n),
												o = 1 << a;
											(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
										}
									})(e, i),
									e === Ns && ((Ts = Ns = null), (js = 0)),
									(0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
										Ks ||
										((Ks = !0),
										Nu(tt, function () {
											return Eu(), null;
										})),
									(i = 0 != (15990 & n.flags)),
									0 != (15990 & n.subtreeFlags) || i)
								) {
									(i = Ps.transition), (Ps.transition = null);
									var l = bt;
									bt = 1;
									var s = Rs;
									(Rs |= 4),
										(_s.current = null),
										(function (e, t) {
											if (((ea = Wt), pr((e = dr())))) {
												if ('selectionStart' in e)
													var n = {
														start: e.selectionStart,
														end: e.selectionEnd,
													};
												else
													e: {
														var r =
															(n =
																((n = e.ownerDocument) && n.defaultView) ||
																window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var a = r.anchorOffset,
																i = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, i.nodeType;
															} catch (e) {
																n = null;
																break e;
															}
															var l = 0,
																s = -1,
																u = -1,
																c = 0,
																f = 0,
																d = e,
																p = null;
															t: for (;;) {
																for (
																	var h;
																	d !== n ||
																		(0 !== a && 3 !== d.nodeType) ||
																		(s = l + a),
																		d !== i ||
																			(0 !== r && 3 !== d.nodeType) ||
																			(u = l + r),
																		3 === d.nodeType &&
																			(l += d.nodeValue.length),
																		null !== (h = d.firstChild);

																)
																	(p = d), (d = h);
																for (;;) {
																	if (d === e) break t;
																	if (
																		(p === n && ++c === a && (s = l),
																		p === i && ++f === r && (u = l),
																		null !== (h = d.nextSibling))
																	)
																		break;
																	p = (d = p).parentNode;
																}
																d = h;
															}
															n =
																-1 === s || -1 === u
																	? null
																	: { start: s, end: u };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (
												ta = { focusedElem: e, selectionRange: n },
													Wt = !1,
													Zl = t;
												null !== Zl;

											)
												if (
													((e = (t = Zl).child),
													0 != (1028 & t.subtreeFlags) && null !== e)
												)
													(e.return = t), (Zl = e);
												else
													for (; null !== Zl; ) {
														t = Zl;
														try {
															var m = t.alternate;
															if (0 != (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== m) {
																			var y = m.memoizedProps,
																				v = m.memoizedState,
																				g = t.stateNode,
																				b = g.getSnapshotBeforeUpdate(
																					t.elementType === t.type
																						? y
																						: vo(t.type, y),
																					v,
																				);
																			g.__reactInternalSnapshotBeforeUpdate = b;
																		}
																		break;
																	case 3:
																		var w = t.stateNode.containerInfo;
																		1 === w.nodeType
																			? (w.textContent = '')
																			: 9 === w.nodeType &&
																				w.documentElement &&
																				w.removeChild(w.documentElement);
																		break;
																	default:
																		throw Error(o(163));
																}
														} catch (e) {
															Cu(t, t.return, e);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Zl = e);
															break;
														}
														Zl = t.return;
													}
											(m = ns), (ns = !1);
										})(e, n),
										vs(n, e),
										hr(ta),
										(Wt = !!ea),
										(ta = ea = null),
										(e.current = n),
										bs(n, e, a),
										Xe(),
										(Rs = s),
										(bt = l),
										(Ps.transition = i);
								} else e.current = n;
								if (
									(Ks && ((Ks = !1), (Gs = e), (Xs = a)),
									0 === (i = e.pendingLanes) && (Vs = null),
									(function (e) {
										if (ot && 'function' == typeof ot.onCommitFiberRoot)
											try {
												ot.onCommitFiberRoot(
													at,
													e,
													void 0,
													128 == (128 & e.current.flags),
												);
											} catch (e) {}
									})(n.stateNode),
									au(e, Je()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++)
										r((a = t[n]).value, {
											componentStack: a.stack,
											digest: a.digest,
										});
								if (Hs) throw ((Hs = !1), (e = $s), ($s = null), e);
								0 != (1 & Xs) && 0 !== e.tag && Eu(),
									0 != (1 & (i = e.pendingLanes))
										? e === Ys
											? Js++
											: ((Js = 0), (Ys = e))
										: (Js = 0),
									qa();
							})(e, t, n, r);
					} finally {
						(Ps.transition = a), (bt = r);
					}
					return null;
				}
				function Eu() {
					if (null !== Gs) {
						var e = wt(Xs),
							t = Ps.transition,
							n = bt;
						try {
							if (((Ps.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
								var r = !1;
							else {
								if (((e = Gs), (Gs = null), (Xs = 0), 0 != (6 & Rs)))
									throw Error(o(331));
								var a = Rs;
								for (Rs |= 4, Zl = e.current; null !== Zl; ) {
									var i = Zl,
										l = i.child;
									if (0 != (16 & Zl.flags)) {
										var s = i.deletions;
										if (null !== s) {
											for (var u = 0; u < s.length; u++) {
												var c = s[u];
												for (Zl = c; null !== Zl; ) {
													var f = Zl;
													switch (f.tag) {
														case 0:
														case 11:
														case 15:
															rs(8, f, i);
													}
													var d = f.child;
													if (null !== d) (d.return = f), (Zl = d);
													else
														for (; null !== Zl; ) {
															var p = (f = Zl).sibling,
																h = f.return;
															if ((is(f), f === c)) {
																Zl = null;
																break;
															}
															if (null !== p) {
																(p.return = h), (Zl = p);
																break;
															}
															Zl = h;
														}
												}
											}
											var m = i.alternate;
											if (null !== m) {
												var y = m.child;
												if (null !== y) {
													m.child = null;
													do {
														var v = y.sibling;
														(y.sibling = null), (y = v);
													} while (null !== y);
												}
											}
											Zl = i;
										}
									}
									if (0 != (2064 & i.subtreeFlags) && null !== l)
										(l.return = i), (Zl = l);
									else
										e: for (; null !== Zl; ) {
											if (0 != (2048 & (i = Zl).flags))
												switch (i.tag) {
													case 0:
													case 11:
													case 15:
														rs(9, i, i.return);
												}
											var g = i.sibling;
											if (null !== g) {
												(g.return = i.return), (Zl = g);
												break e;
											}
											Zl = i.return;
										}
								}
								var b = e.current;
								for (Zl = b; null !== Zl; ) {
									var w = (l = Zl).child;
									if (0 != (2064 & l.subtreeFlags) && null !== w)
										(w.return = l), (Zl = w);
									else
										e: for (l = b; null !== Zl; ) {
											if (0 != (2048 & (s = Zl).flags))
												try {
													switch (s.tag) {
														case 0:
														case 11:
														case 15:
															as(9, s);
													}
												} catch (e) {
													Cu(s, s.return, e);
												}
											if (s === l) {
												Zl = null;
												break e;
											}
											var S = s.sibling;
											if (null !== S) {
												(S.return = s.return), (Zl = S);
												break e;
											}
											Zl = s.return;
										}
								}
								if (
									((Rs = a),
									qa(),
									ot && 'function' == typeof ot.onPostCommitFiberRoot)
								)
									try {
										ot.onPostCommitFiberRoot(at, e);
									} catch (e) {}
								r = !0;
							}
							return r;
						} finally {
							(bt = n), (Ps.transition = t);
						}
					}
					return !1;
				}
				function xu(e, t, n) {
					(e = Do(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
						(t = tu()),
						null !== e && (vt(e, 1, t), au(e, t));
				}
				function Cu(e, t, n) {
					if (3 === e.tag) xu(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								xu(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									'function' == typeof t.type.getDerivedStateFromError ||
									('function' == typeof r.componentDidCatch &&
										(null === Vs || !Vs.has(r)))
								) {
									(t = Do(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
										(e = tu()),
										null !== t && (vt(t, 1, e), au(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Ou(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(t = tu()),
						(e.pingedLanes |= e.suspendedLanes & n),
						Ns === e &&
							(js & n) === n &&
							(4 === Ds ||
							(3 === Ds && (130023424 & js) === js && 500 > Je() - qs)
								? pu(e, 0)
								: (Us |= n)),
						au(e, t);
				}
				function _u(e, t) {
					0 === t &&
						(0 == (1 & e.mode)
							? (t = 1)
							: ((t = ct), 0 == (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = tu();
					null !== (e = No(e, t)) && (vt(e, t, n), au(e, n));
				}
				function Pu(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), _u(e, n);
				}
				function Ru(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314));
					}
					null !== r && r.delete(t), _u(e, n);
				}
				function Nu(e, t) {
					return Ve(e, t);
				}
				function Tu(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function ju(e, t, n, r) {
					return new Tu(e, t, n, r);
				}
				function Fu(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Lu(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = ju(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
								(n.type = e.type),
								(n.stateNode = e.stateNode),
								(n.alternate = e),
								(e.alternate = n))
							: ((n.pendingProps = t),
								(n.type = e.type),
								(n.flags = 0),
								(n.subtreeFlags = 0),
								(n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function Du(e, t, n, r, a, i) {
					var l = 2;
					if (((r = e), 'function' == typeof e)) Fu(e) && (l = 1);
					else if ('string' == typeof e) l = 5;
					else
						e: switch (e) {
							case E:
								return Au(n.children, a, i, t);
							case x:
								(l = 8), (a |= 8);
								break;
							case C:
								return (
									((e = ju(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
								);
							case R:
								return (
									((e = ju(13, n, t, a)).elementType = R), (e.lanes = i), e
								);
							case N:
								return (
									((e = ju(19, n, t, a)).elementType = N), (e.lanes = i), e
								);
							case F:
								return zu(n, a, i, t);
							default:
								if ('object' == typeof e && null !== e)
									switch (e.$$typeof) {
										case O:
											l = 10;
											break e;
										case _:
											l = 9;
											break e;
										case P:
											l = 11;
											break e;
										case T:
											l = 14;
											break e;
										case j:
											(l = 16), (r = null);
											break e;
									}
								throw Error(o(130, null == e ? e : typeof e, ''));
						}
					return (
						((t = ju(l, n, t, a)).elementType = e),
						(t.type = r),
						(t.lanes = i),
						t
					);
				}
				function Au(e, t, n, r) {
					return ((e = ju(7, e, r, t)).lanes = n), e;
				}
				function zu(e, t, n, r) {
					return (
						((e = ju(22, e, r, t)).elementType = F),
						(e.lanes = n),
						(e.stateNode = { isHidden: !1 }),
						e
					);
				}
				function Mu(e, t, n) {
					return ((e = ju(6, e, null, t)).lanes = n), e;
				}
				function Uu(e, t, n) {
					return (
						((t = ju(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t,
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function Iu(e, t, n, r, a) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = yt(0)),
						(this.expirationTimes = yt(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = yt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = a),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Bu(e, t, n, r, a, o, i, l, s) {
					return (
						(e = new Iu(e, t, n, l, s)),
						1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
						(o = ju(3, null, null, t)),
						(e.current = o),
						(o.stateNode = e),
						(o.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						jo(o),
						e
					);
				}
				function qu(e) {
					if (!e) return _a;
					e: {
						if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
							throw Error(o(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (ja(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(o(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (ja(n)) return Da(e, n, t);
					}
					return t;
				}
				function Qu(e, t, n, r, a, o, i, l, s) {
					return (
						((e = Bu(n, r, !0, e, 0, o, 0, l, s)).context = qu(null)),
						(n = e.current),
						((o = Lo((r = tu()), (a = nu(n)))).callback = null != t ? t : null),
						Do(n, o, a),
						(e.current.lanes = a),
						vt(e, a, r),
						au(e, r),
						e
					);
				}
				function Wu(e, t, n, r) {
					var a = t.current,
						o = tu(),
						i = nu(a);
					return (
						(n = qu(n)),
						null === t.context ? (t.context = n) : (t.pendingContext = n),
						((t = Lo(o, i)).payload = { element: e }),
						null !== (r = void 0 === r ? null : r) && (t.callback = r),
						null !== (e = Do(a, t, i)) && (ru(e, a, i, o), Ao(e, a, i)),
						i
					);
				}
				function Hu(e) {
					return (e = e.current).child
						? (e.child.tag, e.child.stateNode)
						: null;
				}
				function $u(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function Vu(e, t) {
					$u(e, t), (e = e.alternate) && $u(e, t);
				}
				xs = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Ra.current) wl = !0;
						else {
							if (0 == (e.lanes & n) && 0 == (128 & t.flags))
								return (
									(wl = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												Nl(t), ho();
												break;
											case 5:
												ii(t);
												break;
											case 1:
												ja(t.type) && Aa(t);
												break;
											case 4:
												ai(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													a = t.memoizedProps.value;
												Oa(go, r._currentValue), (r._currentValue = a);
												break;
											case 13:
												if (null !== (r = t.memoizedState))
													return null !== r.dehydrated
														? (Oa(si, 1 & si.current), (t.flags |= 128), null)
														: 0 != (n & t.child.childLanes)
															? Ml(e, t, n)
															: (Oa(si, 1 & si.current),
																null !== (e = Hl(e, t, n)) ? e.sibling : null);
												Oa(si, 1 & si.current);
												break;
											case 19:
												if (
													((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
												) {
													if (r) return Ql(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (a = t.memoizedState) &&
														((a.rendering = null),
														(a.tail = null),
														(a.lastEffect = null)),
													Oa(si, si.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Cl(e, t, n);
										}
										return Hl(e, t, n);
									})(e, t, n)
								);
							wl = 0 != (131072 & e.flags);
						}
					else (wl = !1), ao && 0 != (1048576 & t.flags) && Za(t, $a, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							Wl(e, t), (e = t.pendingProps);
							var a = Ta(t, Pa.current);
							Co(t, n), (a = xi(null, t, r, e, a, n));
							var i = Ci();
							return (
								(t.flags |= 1),
								'object' == typeof a &&
								null !== a &&
								'function' == typeof a.render &&
								void 0 === a.$$typeof
									? ((t.tag = 1),
										(t.memoizedState = null),
										(t.updateQueue = null),
										ja(r) ? ((i = !0), Aa(t)) : (i = !1),
										(t.memoizedState =
											null !== a.state && void 0 !== a.state ? a.state : null),
										jo(t),
										(a.updater = qo),
										(t.stateNode = a),
										(a._reactInternals = t),
										$o(t, r, e, n),
										(t = Rl(null, t, r, !0, i, n)))
									: ((t.tag = 0),
										ao && i && eo(t),
										Sl(null, t, a, n),
										(t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(Wl(e, t),
									(e = t.pendingProps),
									(r = (a = r._init)(r._payload)),
									(t.type = r),
									(a = t.tag =
										(function (e) {
											if ('function' == typeof e) return Fu(e) ? 1 : 0;
											if (null != e) {
												if ((e = e.$$typeof) === P) return 11;
												if (e === T) return 14;
											}
											return 2;
										})(r)),
									(e = vo(r, e)),
									a)
								) {
									case 0:
										t = _l(null, t, r, e, n);
										break e;
									case 1:
										t = Pl(null, t, r, e, n);
										break e;
									case 11:
										t = kl(null, t, r, e, n);
										break e;
									case 14:
										t = El(null, t, r, vo(r.type, e), n);
										break e;
								}
								throw Error(o(306, r, ''));
							}
							return t;
						case 0:
							return (
								(r = t.type),
								(a = t.pendingProps),
								_l(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
							);
						case 1:
							return (
								(r = t.type),
								(a = t.pendingProps),
								Pl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
							);
						case 3:
							e: {
								if ((Nl(t), null === e)) throw Error(o(387));
								(r = t.pendingProps),
									(a = (i = t.memoizedState).element),
									Fo(e, t),
									Mo(t, r, null, n);
								var l = t.memoizedState;
								if (((r = l.element), i.isDehydrated)) {
									if (
										((i = {
											element: r,
											isDehydrated: !1,
											cache: l.cache,
											pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
											transitions: l.transitions,
										}),
										(t.updateQueue.baseState = i),
										(t.memoizedState = i),
										256 & t.flags)
									) {
										t = Tl(e, t, r, n, (a = cl(Error(o(423)), t)));
										break e;
									}
									if (r !== a) {
										t = Tl(e, t, r, n, (a = cl(Error(o(424)), t)));
										break e;
									}
									for (
										ro = ua(t.stateNode.containerInfo.firstChild),
											no = t,
											ao = !0,
											oo = null,
											n = Yo(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((ho(), r === a)) {
										t = Hl(e, t, n);
										break e;
									}
									Sl(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								ii(t),
								null === e && uo(t),
								(r = t.type),
								(a = t.pendingProps),
								(i = null !== e ? e.memoizedProps : null),
								(l = a.children),
								na(r, a)
									? (l = null)
									: null !== i && na(r, i) && (t.flags |= 32),
								Ol(e, t),
								Sl(e, t, l, n),
								t.child
							);
						case 6:
							return null === e && uo(t), null;
						case 13:
							return Ml(e, t, n);
						case 4:
							return (
								ai(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e ? (t.child = Jo(t, null, r, n)) : Sl(e, t, r, n),
								t.child
							);
						case 11:
							return (
								(r = t.type),
								(a = t.pendingProps),
								kl(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
							);
						case 7:
							return Sl(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return Sl(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (
									((r = t.type._context),
									(a = t.pendingProps),
									(i = t.memoizedProps),
									(l = a.value),
									Oa(go, r._currentValue),
									(r._currentValue = l),
									null !== i)
								)
									if (lr(i.value, l)) {
										if (i.children === a.children && !Ra.current) {
											t = Hl(e, t, n);
											break e;
										}
									} else
										for (
											null !== (i = t.child) && (i.return = t);
											null !== i;

										) {
											var s = i.dependencies;
											if (null !== s) {
												l = i.child;
												for (var u = s.firstContext; null !== u; ) {
													if (u.context === r) {
														if (1 === i.tag) {
															(u = Lo(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var f = (c = c.shared).pending;
																null === f
																	? (u.next = u)
																	: ((u.next = f.next), (f.next = u)),
																	(c.pending = u);
															}
														}
														(i.lanes |= n),
															null !== (u = i.alternate) && (u.lanes |= n),
															xo(i.return, n, t),
															(s.lanes |= n);
														break;
													}
													u = u.next;
												}
											} else if (10 === i.tag)
												l = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (l = i.return)) throw Error(o(341));
												(l.lanes |= n),
													null !== (s = l.alternate) && (s.lanes |= n),
													xo(l, n, t),
													(l = i.sibling);
											} else l = i.child;
											if (null !== l) l.return = i;
											else
												for (l = i; null !== l; ) {
													if (l === t) {
														l = null;
														break;
													}
													if (null !== (i = l.sibling)) {
														(i.return = l.return), (l = i);
														break;
													}
													l = l.return;
												}
											i = l;
										}
								Sl(e, t, a.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(a = t.type),
								(r = t.pendingProps.children),
								Co(t, n),
								(r = r((a = Oo(a)))),
								(t.flags |= 1),
								Sl(e, t, r, n),
								t.child
							);
						case 14:
							return (
								(a = vo((r = t.type), t.pendingProps)),
								El(e, t, r, (a = vo(r.type, a)), n)
							);
						case 15:
							return xl(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(r = t.type),
								(a = t.pendingProps),
								(a = t.elementType === r ? a : vo(r, a)),
								Wl(e, t),
								(t.tag = 1),
								ja(r) ? ((e = !0), Aa(t)) : (e = !1),
								Co(t, n),
								Wo(t, r, a),
								$o(t, r, a, n),
								Rl(null, t, r, !0, e, n)
							);
						case 19:
							return Ql(e, t, n);
						case 22:
							return Cl(e, t, n);
					}
					throw Error(o(156, t.tag));
				};
				var Ku =
					'function' == typeof reportError
						? reportError
						: function (e) {
								console.error(e);
							};
				function Gu(e) {
					this._internalRoot = e;
				}
				function Xu(e) {
					this._internalRoot = e;
				}
				function Ju(e) {
					return !(
						!e ||
						(1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
					);
				}
				function Yu(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType ||
								' react-mount-point-unstable ' !== e.nodeValue))
					);
				}
				function Zu() {}
				function ec(e, t, n, r, a) {
					var o = n._reactRootContainer;
					if (o) {
						var i = o;
						if ('function' == typeof a) {
							var l = a;
							a = function () {
								var e = Hu(i);
								l.call(e);
							};
						}
						Wu(t, i, e, a);
					} else
						i = (function (e, t, n, r, a) {
							if (a) {
								if ('function' == typeof r) {
									var o = r;
									r = function () {
										var e = Hu(i);
										o.call(e);
									};
								}
								var i = Qu(t, r, e, 0, null, !1, 0, '', Zu);
								return (
									(e._reactRootContainer = i),
									(e[ha] = i.current),
									qr(8 === e.nodeType ? e.parentNode : e),
									fu(),
									i
								);
							}
							for (; (a = e.lastChild); ) e.removeChild(a);
							if ('function' == typeof r) {
								var l = r;
								r = function () {
									var e = Hu(s);
									l.call(e);
								};
							}
							var s = Bu(e, 0, !1, null, 0, !1, 0, '', Zu);
							return (
								(e._reactRootContainer = s),
								(e[ha] = s.current),
								qr(8 === e.nodeType ? e.parentNode : e),
								fu(function () {
									Wu(t, s, n, r);
								}),
								s
							);
						})(n, t, e, a, r);
					return Hu(i);
				}
				(Xu.prototype.render = Gu.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(o(409));
						Wu(e, t, null, null);
					}),
					(Xu.prototype.unmount = Gu.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								fu(function () {
									Wu(null, e, null, null);
								}),
									(t[ha] = null);
							}
						}),
					(Xu.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = xt();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < Ft.length && 0 !== t && t < Ft[n].priority;
								n++
							);
							Ft.splice(n, 0, e), 0 === n && zt(e);
						}
					}),
					(St = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = ft(t.pendingLanes);
									0 !== n &&
										(gt(t, 1 | n),
										au(t, Je()),
										0 == (6 & Rs) && ((Qs = Je() + 500), qa()));
								}
								break;
							case 13:
								fu(function () {
									var t = No(e, 1);
									if (null !== t) {
										var n = tu();
										ru(t, e, 1, n);
									}
								}),
									Vu(e, 1);
						}
					}),
					(kt = function (e) {
						if (13 === e.tag) {
							var t = No(e, 134217728);
							null !== t && ru(t, e, 134217728, tu()), Vu(e, 134217728);
						}
					}),
					(Et = function (e) {
						if (13 === e.tag) {
							var t = nu(e),
								n = No(e, t);
							null !== n && ru(n, e, t, tu()), Vu(e, t);
						}
					}),
					(xt = function () {
						return bt;
					}),
					(Ct = function (e, t) {
						var n = bt;
						try {
							return (bt = e), t();
						} finally {
							bt = n;
						}
					}),
					(ke = function (e, t, n) {
						switch (t) {
							case 'input':
								if ((Y(e, n), (t = n.name), 'radio' === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll(
											'input[name=' +
												JSON.stringify('' + t) +
												'][type="radio"]',
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var a = Sa(r);
											if (!a) throw Error(o(90));
											V(r), Y(r, a);
										}
									}
								}
								break;
							case 'textarea':
								oe(e, n);
								break;
							case 'select':
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(Pe = cu),
					(Re = fu);
				var tc = {
						usingClientEntryPoint: !1,
						Events: [ba, wa, Sa, Oe, _e, cu],
					},
					nc = {
						findFiberByHostInstance: ga,
						bundleType: 0,
						version: '18.2.0',
						rendererPackageName: 'react-dom',
					},
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = He(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							nc.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
					};
				if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ac.isDisabled && ac.supportsFiber)
						try {
							(at = ac.inject(rc)), (ot = ac);
						} catch (ce) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (!Ju(t)) throw Error(o(200));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: k,
								key: null == r ? null : '' + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Ju(e)) throw Error(o(299));
						var n = !1,
							r = '',
							a = Ku;
						return (
							null != t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
								void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
							(t = Bu(e, 1, !1, null, 0, n, 0, r, a)),
							(e[ha] = t.current),
							qr(8 === e.nodeType ? e.parentNode : e),
							new Gu(t)
						);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ('function' == typeof e.render) throw Error(o(188));
							throw ((e = Object.keys(e).join(',')), Error(o(268, e)));
						}
						return null === (e = He(t)) ? null : e.stateNode;
					}),
					(t.flushSync = function (e) {
						return fu(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Yu(t)) throw Error(o(200));
						return ec(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Ju(e)) throw Error(o(405));
						var r = (null != n && n.hydratedSources) || null,
							a = !1,
							i = '',
							l = Ku;
						if (
							(null != n &&
								(!0 === n.unstable_strictMode && (a = !0),
								void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
								void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
							(t = Qu(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
							(e[ha] = t.current),
							qr(e),
							r)
						)
							for (e = 0; e < r.length; e++)
								(a = (a = (n = r[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [n, a])
										: t.mutableSourceEagerHydrationData.push(n, a);
						return new Xu(t);
					}),
					(t.render = function (e, t, n) {
						if (!Yu(t)) throw Error(o(200));
						return ec(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Yu(e)) throw Error(o(40));
						return (
							!!e._reactRootContainer &&
							(fu(function () {
								ec(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[ha] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = cu),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Yu(n)) throw Error(o(200));
						if (null == e || void 0 === e._reactInternals) throw Error(o(38));
						return ec(e, t, n, !1, r);
					}),
					(t.version = '18.2.0-next-9e3b772b8-20220608');
			},
			745: (e, t, n) => {
				var r = n(935);
				(t.s = r.createRoot), r.hydrateRoot;
			},
			935: (e, t, n) => {
				!(function e() {
					if (
						'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (e) {
							console.error(e);
						}
				})(),
					(e.exports = n(448));
			},
			251: (e, t, n) => {
				var r = n(294),
					a = Symbol.for('react.element'),
					o = Symbol.for('react.fragment'),
					i = Object.prototype.hasOwnProperty,
					l =
						r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
							.ReactCurrentOwner,
					s = { key: !0, ref: !0, __self: !0, __source: !0 };
				function u(e, t, n) {
					var r,
						o = {},
						u = null,
						c = null;
					for (r in (void 0 !== n && (u = '' + n),
					void 0 !== t.key && (u = '' + t.key),
					void 0 !== t.ref && (c = t.ref),
					t))
						i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps)
						for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
					return {
						$$typeof: a,
						type: e,
						key: u,
						ref: c,
						props: o,
						_owner: l.current,
					};
				}
				(t.Fragment = o), (t.jsx = u), (t.jsxs = u);
			},
			408: (e, t) => {
				var n = Symbol.for('react.element'),
					r = Symbol.for('react.portal'),
					a = Symbol.for('react.fragment'),
					o = Symbol.for('react.strict_mode'),
					i = Symbol.for('react.profiler'),
					l = Symbol.for('react.provider'),
					s = Symbol.for('react.context'),
					u = Symbol.for('react.forward_ref'),
					c = Symbol.for('react.suspense'),
					f = Symbol.for('react.memo'),
					d = Symbol.for('react.lazy'),
					p = Symbol.iterator,
					h = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					y = {};
				function v(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = y),
						(this.updater = n || h);
				}
				function g() {}
				function b(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = y),
						(this.updater = n || h);
				}
				(v.prototype.isReactComponent = {}),
					(v.prototype.setState = function (e, t) {
						if ('object' != typeof e && 'function' != typeof e && null != e)
							throw Error(
								'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
							);
						this.updater.enqueueSetState(this, e, t, 'setState');
					}),
					(v.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
					}),
					(g.prototype = v.prototype);
				var w = (b.prototype = new g());
				(w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
				var S = Array.isArray,
					k = Object.prototype.hasOwnProperty,
					E = { current: null },
					x = { key: !0, ref: !0, __self: !0, __source: !0 };
				function C(e, t, r) {
					var a,
						o = {},
						i = null,
						l = null;
					if (null != t)
						for (a in (void 0 !== t.ref && (l = t.ref),
						void 0 !== t.key && (i = '' + t.key),
						t))
							k.call(t, a) && !x.hasOwnProperty(a) && (o[a] = t[a]);
					var s = arguments.length - 2;
					if (1 === s) o.children = r;
					else if (1 < s) {
						for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
						o.children = u;
					}
					if (e && e.defaultProps)
						for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
					return {
						$$typeof: n,
						type: e,
						key: i,
						ref: l,
						props: o,
						_owner: E.current,
					};
				}
				function O(e) {
					return 'object' == typeof e && null !== e && e.$$typeof === n;
				}
				var _ = /\/+/g;
				function P(e, t) {
					return 'object' == typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { '=': '=0', ':': '=2' };
								return (
									'$' +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
							})('' + e.key)
						: t.toString(36);
				}
				function R(e, t, a, o, i) {
					var l = typeof e;
					('undefined' !== l && 'boolean' !== l) || (e = null);
					var s = !1;
					if (null === e) s = !0;
					else
						switch (l) {
							case 'string':
							case 'number':
								s = !0;
								break;
							case 'object':
								switch (e.$$typeof) {
									case n:
									case r:
										s = !0;
								}
						}
					if (s)
						return (
							(i = i((s = e))),
							(e = '' === o ? '.' + P(s, 0) : o),
							S(i)
								? ((a = ''),
									null != e && (a = e.replace(_, '$&/') + '/'),
									R(i, t, a, '', function (e) {
										return e;
									}))
								: null != i &&
									(O(i) &&
										(i = (function (e, t) {
											return {
												$$typeof: n,
												type: e.type,
												key: t,
												ref: e.ref,
												props: e.props,
												_owner: e._owner,
											};
										})(
											i,
											a +
												(!i.key || (s && s.key === i.key)
													? ''
													: ('' + i.key).replace(_, '$&/') + '/') +
												e,
										)),
									t.push(i)),
							1
						);
					if (((s = 0), (o = '' === o ? '.' : o + ':'), S(e)))
						for (var u = 0; u < e.length; u++) {
							var c = o + P((l = e[u]), u);
							s += R(l, t, a, c, i);
						}
					else if (
						((c = (function (e) {
							return null === e || 'object' != typeof e
								? null
								: 'function' == typeof (e = (p && e[p]) || e['@@iterator'])
									? e
									: null;
						})(e)),
						'function' == typeof c)
					)
						for (e = c.call(e), u = 0; !(l = e.next()).done; )
							s += R((l = l.value), t, a, (c = o + P(l, u++)), i);
					else if ('object' === l)
						throw (
							((t = String(e)),
							Error(
								'Objects are not valid as a React child (found: ' +
									('[object Object]' === t
										? 'object with keys {' + Object.keys(e).join(', ') + '}'
										: t) +
									'). If you meant to render a collection of children, use an array instead.',
							))
						);
					return s;
				}
				function N(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return (
						R(e, r, '', '', function (e) {
							return t.call(n, e, a++);
						}),
						r
					);
				}
				function T(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							},
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var j = { current: null },
					F = { transition: null },
					L = {
						ReactCurrentDispatcher: j,
						ReactCurrentBatchConfig: F,
						ReactCurrentOwner: E,
					};
				(t.Children = {
					map: N,
					forEach: function (e, t, n) {
						N(
							e,
							function () {
								t.apply(this, arguments);
							},
							n,
						);
					},
					count: function (e) {
						var t = 0;
						return (
							N(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							N(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!O(e))
							throw Error(
								'React.Children.only expected to receive a single React element child.',
							);
						return e;
					},
				}),
					(t.Component = v),
					(t.Fragment = a),
					(t.Profiler = i),
					(t.PureComponent = b),
					(t.StrictMode = o),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
					(t.cloneElement = function (e, t, r) {
						if (null == e)
							throw Error(
								'React.cloneElement(...): The argument must be a React element, but you passed ' +
									e +
									'.',
							);
						var a = m({}, e.props),
							o = e.key,
							i = e.ref,
							l = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref && ((i = t.ref), (l = E.current)),
								void 0 !== t.key && (o = '' + t.key),
								e.type && e.type.defaultProps)
							)
								var s = e.type.defaultProps;
							for (u in t)
								k.call(t, u) &&
									!x.hasOwnProperty(u) &&
									(a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
						}
						var u = arguments.length - 2;
						if (1 === u) a.children = r;
						else if (1 < u) {
							s = Array(u);
							for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
							a.children = s;
						}
						return {
							$$typeof: n,
							type: e.type,
							key: o,
							ref: i,
							props: a,
							_owner: l,
						};
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: s,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: l, _context: e }),
							(e.Consumer = e)
						);
					}),
					(t.createElement = C),
					(t.createFactory = function (e) {
						var t = C.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: u, render: e };
					}),
					(t.isValidElement = O),
					(t.lazy = function (e) {
						return {
							$$typeof: d,
							_payload: { _status: -1, _result: e },
							_init: T,
						};
					}),
					(t.memo = function (e, t) {
						return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = F.transition;
						F.transition = {};
						try {
							e();
						} finally {
							F.transition = t;
						}
					}),
					(t.unstable_act = function () {
						throw Error(
							'act(...) is not supported in production builds of React.',
						);
					}),
					(t.useCallback = function (e, t) {
						return j.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return j.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return j.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return j.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return j.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return j.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return j.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return j.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return j.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return j.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return j.current.useRef(e);
					}),
					(t.useState = function (e) {
						return j.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return j.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return j.current.useTransition();
					}),
					(t.version = '18.2.0');
			},
			294: (e, t, n) => {
				e.exports = n(408);
			},
			893: (e, t, n) => {
				e.exports = n(251);
			},
			53: (e, t) => {
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break e;
						(e[r] = t), (e[n] = a), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
							var l = 2 * (r + 1) - 1,
								s = e[l],
								u = l + 1,
								c = e[u];
							if (0 > o(s, n))
								u < a && 0 > o(c, s)
									? ((e[r] = c), (e[u] = n), (r = u))
									: ((e[r] = s), (e[l] = n), (r = l));
							else {
								if (!(u < a && 0 > o(c, n))) break e;
								(e[r] = c), (e[u] = n), (r = u);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					'object' == typeof performance &&
					'function' == typeof performance.now
				) {
					var i = performance;
					t.unstable_now = function () {
						return i.now();
					};
				} else {
					var l = Date,
						s = l.now();
					t.unstable_now = function () {
						return l.now() - s;
					};
				}
				var u = [],
					c = [],
					f = 1,
					d = null,
					p = 3,
					h = !1,
					m = !1,
					y = !1,
					v = 'function' == typeof setTimeout ? setTimeout : null,
					g = 'function' == typeof clearTimeout ? clearTimeout : null,
					b = 'undefined' != typeof setImmediate ? setImmediate : null;
				function w(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), (t.sortIndex = t.expirationTime), n(u, t);
						}
						t = r(c);
					}
				}
				function S(e) {
					if (((y = !1), w(e), !m))
						if (null !== r(u)) (m = !0), F(k);
						else {
							var t = r(c);
							null !== t && L(S, t.startTime - e);
						}
				}
				function k(e, n) {
					(m = !1), y && ((y = !1), g(O), (O = -1)), (h = !0);
					var o = p;
					try {
						for (
							w(n), d = r(u);
							null !== d && (!(d.expirationTime > n) || (e && !R()));

						) {
							var i = d.callback;
							if ('function' == typeof i) {
								(d.callback = null), (p = d.priorityLevel);
								var l = i(d.expirationTime <= n);
								(n = t.unstable_now()),
									'function' == typeof l
										? (d.callback = l)
										: d === r(u) && a(u),
									w(n);
							} else a(u);
							d = r(u);
						}
						if (null !== d) var s = !0;
						else {
							var f = r(c);
							null !== f && L(S, f.startTime - n), (s = !1);
						}
						return s;
					} finally {
						(d = null), (p = o), (h = !1);
					}
				}
				'undefined' != typeof navigator &&
					void 0 !== navigator.scheduling &&
					void 0 !== navigator.scheduling.isInputPending &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var E,
					x = !1,
					C = null,
					O = -1,
					_ = 5,
					P = -1;
				function R() {
					return !(t.unstable_now() - P < _);
				}
				function N() {
					if (null !== C) {
						var e = t.unstable_now();
						P = e;
						var n = !0;
						try {
							n = C(!0, e);
						} finally {
							n ? E() : ((x = !1), (C = null));
						}
					} else x = !1;
				}
				if ('function' == typeof b)
					E = function () {
						b(N);
					};
				else if ('undefined' != typeof MessageChannel) {
					var T = new MessageChannel(),
						j = T.port2;
					(T.port1.onmessage = N),
						(E = function () {
							j.postMessage(null);
						});
				} else
					E = function () {
						v(N, 0);
					};
				function F(e) {
					(C = e), x || ((x = !0), E());
				}
				function L(e, n) {
					O = v(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						m || h || ((m = !0), F(k));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
								)
							: (_ = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return p;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(u);
					}),
					(t.unstable_next = function (e) {
						switch (p) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = p;
						}
						var n = p;
						p = t;
						try {
							return e();
						} finally {
							p = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = p;
						p = e;
						try {
							return t();
						} finally {
							p = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, a, o) {
						var i = t.unstable_now();
						switch (
							((o =
								'object' == typeof o &&
								null !== o &&
								'number' == typeof (o = o.delay) &&
								0 < o
									? i + o
									: i),
							e)
						) {
							case 1:
								var l = -1;
								break;
							case 2:
								l = 250;
								break;
							case 5:
								l = 1073741823;
								break;
							case 4:
								l = 1e4;
								break;
							default:
								l = 5e3;
						}
						return (
							(e = {
								id: f++,
								callback: a,
								priorityLevel: e,
								startTime: o,
								expirationTime: (l = o + l),
								sortIndex: -1,
							}),
							o > i
								? ((e.sortIndex = o),
									n(c, e),
									null === r(u) &&
										e === r(c) &&
										(y ? (g(O), (O = -1)) : (y = !0), L(S, o - i)))
								: ((e.sortIndex = l), n(u, e), m || h || ((m = !0), F(k))),
							e
						);
					}),
					(t.unstable_shouldYield = R),
					(t.unstable_wrapCallback = function (e) {
						var t = p;
						return function () {
							var n = p;
							p = t;
							try {
								return e.apply(this, arguments);
							} finally {
								p = n;
							}
						};
					});
			},
			840: (e, t, n) => {
				e.exports = n(53);
			},
			771: (e, t, n) => {
				var r = n(294),
					a =
						'function' == typeof Object.is
							? Object.is
							: function (e, t) {
									return (
										(e === t && (0 !== e || 1 / e == 1 / t)) ||
										(e != e && t != t)
									);
								},
					o = r.useSyncExternalStore,
					i = r.useRef,
					l = r.useEffect,
					s = r.useMemo,
					u = r.useDebugValue;
				t.useSyncExternalStoreWithSelector = function (e, t, n, r, c) {
					var f = i(null);
					if (null === f.current) {
						var d = { hasValue: !1, value: null };
						f.current = d;
					} else d = f.current;
					f = s(
						function () {
							function e(e) {
								if (!l) {
									if (
										((l = !0), (o = e), (e = r(e)), void 0 !== c && d.hasValue)
									) {
										var t = d.value;
										if (c(t, e)) return (i = t);
									}
									return (i = e);
								}
								if (((t = i), a(o, e))) return t;
								var n = r(e);
								return void 0 !== c && c(t, n) ? t : ((o = e), (i = n));
							}
							var o,
								i,
								l = !1,
								s = void 0 === n ? null : n;
							return [
								function () {
									return e(t());
								},
								null === s
									? void 0
									: function () {
											return e(s());
										},
							];
						},
						[t, n, r, c],
					);
					var p = o(e, f[0], f[1]);
					return (
						l(
							function () {
								(d.hasValue = !0), (d.value = p);
							},
							[p],
						),
						u(p),
						p
					);
				};
			},
			103: (e, t, n) => {
				e.exports = n(771);
			},
		},
		r = {};
	function a(e) {
		var t = r[e];
		if (void 0 !== t) return t.exports;
		var o = (r[e] = { exports: {} });
		return n[e](o, o.exports, a), o.exports;
	}
	(t = Object.getPrototypeOf
		? e => Object.getPrototypeOf(e)
		: e => e.__proto__),
		(a.t = function (n, r) {
			if ((1 & r && (n = this(n)), 8 & r)) return n;
			if ('object' == typeof n && n) {
				if (4 & r && n.__esModule) return n;
				if (16 & r && 'function' == typeof n.then) return n;
			}
			var o = Object.create(null);
			a.r(o);
			var i = {};
			e = e || [null, t({}), t([]), t(t)];
			for (var l = 2 & r && n; 'object' == typeof l && !~e.indexOf(l); l = t(l))
				Object.getOwnPropertyNames(l).forEach(e => (i[e] = () => n[e]));
			return (i.default = () => n), a.d(o, i), o;
		}),
		(a.d = (e, t) => {
			for (var n in t)
				a.o(t, n) &&
					!a.o(e, n) &&
					Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}),
		(a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(a.r = e => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(() => {
			var e = {};
			a.r(e),
				a.d(e, {
					hasBrowserEnv: () => ga,
					hasStandardBrowserEnv: () => ba,
					hasStandardBrowserWebWorkerEnv: () => Sa,
				});
			var t,
				n = a(893),
				r = a(745),
				o = a(294),
				i = a.t(o, 2),
				l = a(935),
				s = a.t(l, 2);
			function u() {
				return (
					(u = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					u.apply(this, arguments)
				);
			}
			!(function (e) {
				(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
			})(t || (t = {}));
			const c = 'popstate';
			function f(e, t) {
				if (!1 === e || null == e) throw new Error(t);
			}
			function d(e, t) {
				if (!e) {
					'undefined' != typeof console && console.warn(t);
					try {
						throw new Error(t);
					} catch (e) {}
				}
			}
			function p(e, t) {
				return { usr: e.state, key: e.key, idx: t };
			}
			function h(e, t, n, r) {
				return (
					void 0 === n && (n = null),
					u(
						{
							pathname: 'string' == typeof e ? e : e.pathname,
							search: '',
							hash: '',
						},
						'string' == typeof t ? y(t) : t,
						{
							state: n,
							key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
						},
					)
				);
			}
			function m(e) {
				let { pathname: t = '/', search: n = '', hash: r = '' } = e;
				return (
					n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
					r && '#' !== r && (t += '#' === r.charAt(0) ? r : '#' + r),
					t
				);
			}
			function y(e) {
				let t = {};
				if (e) {
					let n = e.indexOf('#');
					n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
					let r = e.indexOf('?');
					r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
						e && (t.pathname = e);
				}
				return t;
			}
			var v;
			function g(e, t, n) {
				void 0 === n && (n = '/');
				let r = j(('string' == typeof t ? y(t) : t).pathname || '/', n);
				if (null == r) return null;
				let a = b(e);
				!(function (e) {
					e.sort((e, t) =>
						e.score !== t.score
							? t.score - e.score
							: (function (e, t) {
									return e.length === t.length &&
										e.slice(0, -1).every((e, n) => e === t[n])
										? e[e.length - 1] - t[t.length - 1]
										: 0;
								})(
									e.routesMeta.map(e => e.childrenIndex),
									t.routesMeta.map(e => e.childrenIndex),
								),
					);
				})(a);
				let o = null;
				for (let e = 0; null == o && e < a.length; ++e) o = R(a[e], T(r));
				return o;
			}
			function b(e, t, n, r) {
				void 0 === t && (t = []),
					void 0 === n && (n = []),
					void 0 === r && (r = '');
				let a = (e, a, o) => {
					let i = {
						relativePath: void 0 === o ? e.path || '' : o,
						caseSensitive: !0 === e.caseSensitive,
						childrenIndex: a,
						route: e,
					};
					i.relativePath.startsWith('/') &&
						(f(
							i.relativePath.startsWith(r),
							'Absolute route path "' +
								i.relativePath +
								'" nested under path "' +
								r +
								'" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
						),
						(i.relativePath = i.relativePath.slice(r.length)));
					let l = A([r, i.relativePath]),
						s = n.concat(i);
					e.children &&
						e.children.length > 0 &&
						(f(
							!0 !== e.index,
							'Index routes must not have child routes. Please remove all child routes from route path "' +
								l +
								'".',
						),
						b(e.children, t, s, l)),
						(null != e.path || e.index) &&
							t.push({ path: l, score: P(l, e.index), routesMeta: s });
				};
				return (
					e.forEach((e, t) => {
						var n;
						if ('' !== e.path && null != (n = e.path) && n.includes('?'))
							for (let n of w(e.path)) a(e, t, n);
						else a(e, t);
					}),
					t
				);
			}
			function w(e) {
				let t = e.split('/');
				if (0 === t.length) return [];
				let [n, ...r] = t,
					a = n.endsWith('?'),
					o = n.replace(/\?$/, '');
				if (0 === r.length) return a ? [o, ''] : [o];
				let i = w(r.join('/')),
					l = [];
				return (
					l.push(...i.map(e => ('' === e ? o : [o, e].join('/')))),
					a && l.push(...i),
					l.map(t => (e.startsWith('/') && '' === t ? '/' : t))
				);
			}
			!(function (e) {
				(e.data = 'data'),
					(e.deferred = 'deferred'),
					(e.redirect = 'redirect'),
					(e.error = 'error');
			})(v || (v = {})),
				new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
			const S = /^:[\w-]+$/,
				k = 3,
				E = 2,
				x = 1,
				C = 10,
				O = -2,
				_ = e => '*' === e;
			function P(e, t) {
				let n = e.split('/'),
					r = n.length;
				return (
					n.some(_) && (r += O),
					t && (r += E),
					n
						.filter(e => !_(e))
						.reduce((e, t) => e + (S.test(t) ? k : '' === t ? x : C), r)
				);
			}
			function R(e, t) {
				let { routesMeta: n } = e,
					r = {},
					a = '/',
					o = [];
				for (let e = 0; e < n.length; ++e) {
					let i = n[e],
						l = e === n.length - 1,
						s = '/' === a ? t : t.slice(a.length) || '/',
						u = N(
							{ path: i.relativePath, caseSensitive: i.caseSensitive, end: l },
							s,
						);
					if (!u) return null;
					Object.assign(r, u.params);
					let c = i.route;
					o.push({
						params: r,
						pathname: A([a, u.pathname]),
						pathnameBase: z(A([a, u.pathnameBase])),
						route: c,
					}),
						'/' !== u.pathnameBase && (a = A([a, u.pathnameBase]));
				}
				return o;
			}
			function N(e, t) {
				'string' == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
				let [n, r] = (function (e, t, n) {
						void 0 === t && (t = !1),
							void 0 === n && (n = !0),
							d(
								'*' === e || !e.endsWith('*') || e.endsWith('/*'),
								'Route path "' +
									e +
									'" will be treated as if it were "' +
									e.replace(/\*$/, '/*') +
									'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
									e.replace(/\*$/, '/*') +
									'".',
							);
						let r = [],
							a =
								'^' +
								e
									.replace(/\/*\*?$/, '')
									.replace(/^\/*/, '/')
									.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
									.replace(
										/\/:([\w-]+)(\?)?/g,
										(e, t, n) => (
											r.push({ paramName: t, isOptional: null != n }),
											n ? '/?([^\\/]+)?' : '/([^\\/]+)'
										),
									);
						return (
							e.endsWith('*')
								? (r.push({ paramName: '*' }),
									(a +=
										'*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
								: n
									? (a += '\\/*$')
									: '' !== e && '/' !== e && (a += '(?:(?=\\/|$))'),
							[new RegExp(a, t ? void 0 : 'i'), r]
						);
					})(e.path, e.caseSensitive, e.end),
					a = t.match(n);
				if (!a) return null;
				let o = a[0],
					i = o.replace(/(.)\/+$/, '$1'),
					l = a.slice(1);
				return {
					params: r.reduce((e, t, n) => {
						let { paramName: r, isOptional: a } = t;
						if ('*' === r) {
							let e = l[n] || '';
							i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, '$1');
						}
						const s = l[n];
						return (
							(e[r] =
								a && !s
									? void 0
									: (function (e, t) {
											try {
												return decodeURIComponent(e);
											} catch (n) {
												return (
													d(
														!1,
														'The value for the URL param "' +
															t +
															'" will not be decoded because the string "' +
															e +
															'" is a malformed URL segment. This is probably due to a bad percent encoding (' +
															n +
															').',
													),
													e
												);
											}
										})(s || '', r)),
							e
						);
					}, {}),
					pathname: o,
					pathnameBase: i,
					pattern: e,
				};
			}
			function T(e) {
				try {
					return decodeURI(e);
				} catch (t) {
					return (
						d(
							!1,
							'The URL path "' +
								e +
								'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
								t +
								').',
						),
						e
					);
				}
			}
			function j(e, t) {
				if ('/' === t) return e;
				if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
				let n = t.endsWith('/') ? t.length - 1 : t.length,
					r = e.charAt(n);
				return r && '/' !== r ? null : e.slice(n) || '/';
			}
			function F(e, t, n, r) {
				return (
					"Cannot include a '" +
					e +
					"' character in a manually specified `to." +
					t +
					'` field [' +
					JSON.stringify(r) +
					'].  Please separate it out to the `to.' +
					n +
					'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
				);
			}
			function L(e, t) {
				let n = (function (e) {
					return e.filter(
						(e, t) => 0 === t || (e.route.path && e.route.path.length > 0),
					);
				})(e);
				return t
					? n.map((t, n) => (n === e.length - 1 ? t.pathname : t.pathnameBase))
					: n.map(e => e.pathnameBase);
			}
			function D(e, t, n, r) {
				let a;
				void 0 === r && (r = !1),
					'string' == typeof e
						? (a = y(e))
						: ((a = u({}, e)),
							f(
								!a.pathname || !a.pathname.includes('?'),
								F('?', 'pathname', 'search', a),
							),
							f(
								!a.pathname || !a.pathname.includes('#'),
								F('#', 'pathname', 'hash', a),
							),
							f(
								!a.search || !a.search.includes('#'),
								F('#', 'search', 'hash', a),
							));
				let o,
					i = '' === e || '' === a.pathname,
					l = i ? '/' : a.pathname;
				if (null == l) o = n;
				else {
					let e = t.length - 1;
					if (!r && l.startsWith('..')) {
						let t = l.split('/');
						for (; '..' === t[0]; ) t.shift(), (e -= 1);
						a.pathname = t.join('/');
					}
					o = e >= 0 ? t[e] : '/';
				}
				let s = (function (e, t) {
						void 0 === t && (t = '/');
						let {
								pathname: n,
								search: r = '',
								hash: a = '',
							} = 'string' == typeof e ? y(e) : e,
							o = n
								? n.startsWith('/')
									? n
									: (function (e, t) {
											let n = t.replace(/\/+$/, '').split('/');
											return (
												e.split('/').forEach(e => {
													'..' === e
														? n.length > 1 && n.pop()
														: '.' !== e && n.push(e);
												}),
												n.length > 1 ? n.join('/') : '/'
											);
										})(n, t)
								: t;
						return { pathname: o, search: M(r), hash: U(a) };
					})(a, o),
					c = l && '/' !== l && l.endsWith('/'),
					d = (i || '.' === l) && n.endsWith('/');
				return s.pathname.endsWith('/') || (!c && !d) || (s.pathname += '/'), s;
			}
			const A = e => e.join('/').replace(/\/\/+/g, '/'),
				z = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
				M = e => (e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : ''),
				U = e => (e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '');
			Error;
			const I = ['post', 'put', 'patch', 'delete'],
				B = (new Set(I), ['get', ...I]);
			function q() {
				return (
					(q = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					q.apply(this, arguments)
				);
			}
			new Set(B),
				new Set([301, 302, 303, 307, 308]),
				new Set([307, 308]),
				Symbol('deferred');
			const Q = o.createContext(null),
				W = o.createContext(null),
				H = o.createContext(null),
				$ = o.createContext(null),
				V = o.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
				K = o.createContext(null);
			function G() {
				return null != o.useContext($);
			}
			function X() {
				return G() || f(!1), o.useContext($).location;
			}
			function J(e) {
				o.useContext(H).static || o.useLayoutEffect(e);
			}
			function Y() {
				let { isDataRoute: e } = o.useContext(V);
				return e
					? (function () {
							let { router: e } = (function (e) {
									let t = o.useContext(Q);
									return t || f(!1), t;
								})(ie.UseNavigateStable),
								t = se(le.UseNavigateStable),
								n = o.useRef(!1);
							return (
								J(() => {
									n.current = !0;
								}),
								o.useCallback(
									function (r, a) {
										void 0 === a && (a = {}),
											n.current &&
												('number' == typeof r
													? e.navigate(r)
													: e.navigate(r, q({ fromRouteId: t }, a)));
									},
									[e, t],
								)
							);
						})()
					: (function () {
							G() || f(!1);
							let e = o.useContext(Q),
								{ basename: t, future: n, navigator: r } = o.useContext(H),
								{ matches: a } = o.useContext(V),
								{ pathname: i } = X(),
								l = JSON.stringify(L(a, n.v7_relativeSplatPath)),
								s = o.useRef(!1);
							return (
								J(() => {
									s.current = !0;
								}),
								o.useCallback(
									function (n, a) {
										if ((void 0 === a && (a = {}), !s.current)) return;
										if ('number' == typeof n) return void r.go(n);
										let o = D(n, JSON.parse(l), i, 'path' === a.relative);
										null == e &&
											'/' !== t &&
											(o.pathname =
												'/' === o.pathname ? t : A([t, o.pathname])),
											(a.replace ? r.replace : r.push)(o, a.state, a);
									},
									[t, r, l, i, e],
								)
							);
						})();
			}
			function Z() {
				let { matches: e } = o.useContext(V),
					t = e[e.length - 1];
				return t ? t.params : {};
			}
			function ee(e, t) {
				let { relative: n } = void 0 === t ? {} : t,
					{ future: r } = o.useContext(H),
					{ matches: a } = o.useContext(V),
					{ pathname: i } = X(),
					l = JSON.stringify(L(a, r.v7_relativeSplatPath));
				return o.useMemo(
					() => D(e, JSON.parse(l), i, 'path' === n),
					[e, l, i, n],
				);
			}
			function te(e, n, r, a) {
				G() || f(!1);
				let { navigator: i } = o.useContext(H),
					{ matches: l } = o.useContext(V),
					s = l[l.length - 1],
					u = s ? s.params : {},
					c = (s && s.pathname, s ? s.pathnameBase : '/');
				s && s.route;
				let d,
					p = X();
				if (n) {
					var h;
					let e = 'string' == typeof n ? y(n) : n;
					'/' === c ||
						(null == (h = e.pathname) ? void 0 : h.startsWith(c)) ||
						f(!1),
						(d = e);
				} else d = p;
				let m = d.pathname || '/',
					v = g(e, { pathname: '/' === c ? m : m.slice(c.length) || '/' }),
					b = (function (e, t, n, r) {
						var a;
						if (
							(void 0 === t && (t = []),
							void 0 === n && (n = null),
							void 0 === r && (r = null),
							null == e)
						) {
							var i;
							if (null == (i = n) || !i.errors) return null;
							e = n.matches;
						}
						let l = e,
							s = null == (a = n) ? void 0 : a.errors;
						if (null != s) {
							let e = l.findIndex(
								e => e.route.id && (null == s ? void 0 : s[e.route.id]),
							);
							e >= 0 || f(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
						}
						let u = !1,
							c = -1;
						if (n && r && r.v7_partialHydration)
							for (let e = 0; e < l.length; e++) {
								let t = l[e];
								if (
									((t.route.HydrateFallback ||
										t.route.hydrateFallbackElement) &&
										(c = e),
									t.route.id)
								) {
									let { loaderData: e, errors: r } = n,
										a =
											t.route.loader &&
											void 0 === e[t.route.id] &&
											(!r || void 0 === r[t.route.id]);
									if (t.route.lazy || a) {
										(u = !0), (l = c >= 0 ? l.slice(0, c + 1) : [l[0]]);
										break;
									}
								}
							}
						return l.reduceRight((e, r, a) => {
							let i,
								f = !1,
								d = null,
								p = null;
							var h;
							n &&
								((i = s && r.route.id ? s[r.route.id] : void 0),
								(d = r.route.errorElement || re),
								u &&
									(c < 0 && 0 === a
										? (ue[(h = 'route-fallback')] || (ue[h] = !0),
											(f = !0),
											(p = null))
										: c === a &&
											((f = !0),
											(p = r.route.hydrateFallbackElement || null))));
							let m = t.concat(l.slice(0, a + 1)),
								y = () => {
									let t;
									return (
										(t = i
											? d
											: f
												? p
												: r.route.Component
													? o.createElement(r.route.Component, null)
													: r.route.element
														? r.route.element
														: e),
										o.createElement(oe, {
											match: r,
											routeContext: {
												outlet: e,
												matches: m,
												isDataRoute: null != n,
											},
											children: t,
										})
									);
								};
							return n &&
								(r.route.ErrorBoundary || r.route.errorElement || 0 === a)
								? o.createElement(ae, {
										location: n.location,
										revalidation: n.revalidation,
										component: d,
										error: i,
										children: y(),
										routeContext: { outlet: null, matches: m, isDataRoute: !0 },
									})
								: y();
						}, null);
					})(
						v &&
							v.map(e =>
								Object.assign({}, e, {
									params: Object.assign({}, u, e.params),
									pathname: A([
										c,
										i.encodeLocation
											? i.encodeLocation(e.pathname).pathname
											: e.pathname,
									]),
									pathnameBase:
										'/' === e.pathnameBase
											? c
											: A([
													c,
													i.encodeLocation
														? i.encodeLocation(e.pathnameBase).pathname
														: e.pathnameBase,
												]),
								}),
							),
						l,
						r,
						a,
					);
				return n && b
					? o.createElement(
							$.Provider,
							{
								value: {
									location: q(
										{
											pathname: '/',
											search: '',
											hash: '',
											state: null,
											key: 'default',
										},
										d,
									),
									navigationType: t.Pop,
								},
							},
							b,
						)
					: b;
			}
			function ne() {
				let e = (function () {
						var e;
						let t = o.useContext(K),
							n = (function (e) {
								let t = o.useContext(W);
								return t || f(!1), t;
							})(le.UseRouteError),
							r = se(le.UseRouteError);
						return void 0 !== t ? t : null == (e = n.errors) ? void 0 : e[r];
					})(),
					t = (function (e) {
						return (
							null != e &&
							'number' == typeof e.status &&
							'string' == typeof e.statusText &&
							'boolean' == typeof e.internal &&
							'data' in e
						);
					})(e)
						? e.status + ' ' + e.statusText
						: e instanceof Error
							? e.message
							: JSON.stringify(e),
					n = e instanceof Error ? e.stack : null,
					r = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
				return o.createElement(
					o.Fragment,
					null,
					o.createElement('h2', null, 'Unexpected Application Error!'),
					o.createElement('h3', { style: { fontStyle: 'italic' } }, t),
					n ? o.createElement('pre', { style: r }, n) : null,
					null,
				);
			}
			const re = o.createElement(ne, null);
			class ae extends o.Component {
				constructor(e) {
					super(e),
						(this.state = {
							location: e.location,
							revalidation: e.revalidation,
							error: e.error,
						});
				}
				static getDerivedStateFromError(e) {
					return { error: e };
				}
				static getDerivedStateFromProps(e, t) {
					return t.location !== e.location ||
						('idle' !== t.revalidation && 'idle' === e.revalidation)
						? {
								error: e.error,
								location: e.location,
								revalidation: e.revalidation,
							}
						: {
								error: void 0 !== e.error ? e.error : t.error,
								location: t.location,
								revalidation: e.revalidation || t.revalidation,
							};
				}
				componentDidCatch(e, t) {
					console.error(
						'React Router caught the following error during render',
						e,
						t,
					);
				}
				render() {
					return void 0 !== this.state.error
						? o.createElement(
								V.Provider,
								{ value: this.props.routeContext },
								o.createElement(K.Provider, {
									value: this.state.error,
									children: this.props.component,
								}),
							)
						: this.props.children;
				}
			}
			function oe(e) {
				let { routeContext: t, match: n, children: r } = e,
					a = o.useContext(Q);
				return (
					a &&
						a.static &&
						a.staticContext &&
						(n.route.errorElement || n.route.ErrorBoundary) &&
						(a.staticContext._deepestRenderedBoundaryId = n.route.id),
					o.createElement(V.Provider, { value: t }, r)
				);
			}
			var ie = (function (e) {
					return (
						(e.UseBlocker = 'useBlocker'),
						(e.UseRevalidator = 'useRevalidator'),
						(e.UseNavigateStable = 'useNavigate'),
						e
					);
				})(ie || {}),
				le = (function (e) {
					return (
						(e.UseBlocker = 'useBlocker'),
						(e.UseLoaderData = 'useLoaderData'),
						(e.UseActionData = 'useActionData'),
						(e.UseRouteError = 'useRouteError'),
						(e.UseNavigation = 'useNavigation'),
						(e.UseRouteLoaderData = 'useRouteLoaderData'),
						(e.UseMatches = 'useMatches'),
						(e.UseRevalidator = 'useRevalidator'),
						(e.UseNavigateStable = 'useNavigate'),
						(e.UseRouteId = 'useRouteId'),
						e
					);
				})(le || {});
			function se(e) {
				let t = (function (e) {
						let t = o.useContext(V);
						return t || f(!1), t;
					})(),
					n = t.matches[t.matches.length - 1];
				return n.route.id || f(!1), n.route.id;
			}
			const ue = {};
			function ce(e) {
				f(!1);
			}
			function fe(e) {
				let {
					basename: n = '/',
					children: r = null,
					location: a,
					navigationType: i = t.Pop,
					navigator: l,
					static: s = !1,
					future: u,
				} = e;
				G() && f(!1);
				let c = n.replace(/^\/*/, '/'),
					d = o.useMemo(
						() => ({
							basename: c,
							navigator: l,
							static: s,
							future: q({ v7_relativeSplatPath: !1 }, u),
						}),
						[c, u, l, s],
					);
				'string' == typeof a && (a = y(a));
				let {
						pathname: p = '/',
						search: h = '',
						hash: m = '',
						state: v = null,
						key: g = 'default',
					} = a,
					b = o.useMemo(() => {
						let e = j(p, c);
						return null == e
							? null
							: {
									location: {
										pathname: e,
										search: h,
										hash: m,
										state: v,
										key: g,
									},
									navigationType: i,
								};
					}, [c, p, h, m, v, g, i]);
				return null == b
					? null
					: o.createElement(
							H.Provider,
							{ value: d },
							o.createElement($.Provider, { children: r, value: b }),
						);
			}
			function de(e) {
				let { children: t, location: n } = e;
				return te(pe(t), n);
			}
			function pe(e, t) {
				void 0 === t && (t = []);
				let n = [];
				return (
					o.Children.forEach(e, (e, r) => {
						if (!o.isValidElement(e)) return;
						let a = [...t, r];
						if (e.type === o.Fragment)
							return void n.push.apply(n, pe(e.props.children, a));
						e.type !== ce && f(!1), e.props.index && e.props.children && f(!1);
						let i = {
							id: e.props.id || a.join('-'),
							caseSensitive: e.props.caseSensitive,
							element: e.props.element,
							Component: e.props.Component,
							index: e.props.index,
							path: e.props.path,
							loader: e.props.loader,
							action: e.props.action,
							errorElement: e.props.errorElement,
							ErrorBoundary: e.props.ErrorBoundary,
							hasErrorBoundary:
								null != e.props.ErrorBoundary || null != e.props.errorElement,
							shouldRevalidate: e.props.shouldRevalidate,
							handle: e.props.handle,
							lazy: e.props.lazy,
						};
						e.props.children && (i.children = pe(e.props.children, a)),
							n.push(i);
					}),
					n
				);
			}
			function he() {
				return (
					(he = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					he.apply(this, arguments)
				);
			}
			function me(e) {
				return (
					void 0 === e && (e = ''),
					new URLSearchParams(
						'string' == typeof e ||
						Array.isArray(e) ||
						e instanceof URLSearchParams
							? e
							: Object.keys(e).reduce((t, n) => {
									let r = e[n];
									return t.concat(
										Array.isArray(r) ? r.map(e => [n, e]) : [[n, r]],
									);
								}, []),
					)
				);
			}
			i.startTransition,
				new Promise(() => {}),
				o.Component,
				new Set([
					'application/x-www-form-urlencoded',
					'multipart/form-data',
					'text/plain',
				]);
			const ye = [
				'onClick',
				'relative',
				'reloadDocument',
				'replace',
				'state',
				'target',
				'to',
				'preventScrollReset',
				'unstable_viewTransition',
			];
			new Map();
			const ve = i.startTransition;
			s.flushSync, i.useId;
			const ge =
					'undefined' != typeof window &&
					void 0 !== window.document &&
					void 0 !== window.document.createElement,
				be = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
				we = o.forwardRef(function (e, t) {
					let n,
						{
							onClick: r,
							relative: a,
							reloadDocument: i,
							replace: l,
							state: s,
							target: u,
							to: c,
							preventScrollReset: d,
							unstable_viewTransition: p,
						} = e,
						h = (function (e, t) {
							if (null == e) return {};
							var n,
								r,
								a = {},
								o = Object.keys(e);
							for (r = 0; r < o.length; r++)
								(n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
							return a;
						})(e, ye),
						{ basename: y } = o.useContext(H),
						v = !1;
					if ('string' == typeof c && be.test(c) && ((n = c), ge))
						try {
							let e = new URL(window.location.href),
								t = c.startsWith('//') ? new URL(e.protocol + c) : new URL(c),
								n = j(t.pathname, y);
							t.origin === e.origin && null != n
								? (c = n + t.search + t.hash)
								: (v = !0);
						} catch (e) {}
					let g = (function (e, t) {
							let { relative: n } = void 0 === t ? {} : t;
							G() || f(!1);
							let { basename: r, navigator: a } = o.useContext(H),
								{ hash: i, pathname: l, search: s } = ee(e, { relative: n }),
								u = l;
							return (
								'/' !== r && (u = '/' === l ? r : A([r, l])),
								a.createHref({ pathname: u, search: s, hash: i })
							);
						})(c, { relative: a }),
						b = (function (e, t) {
							let {
									target: n,
									replace: r,
									state: a,
									preventScrollReset: i,
									relative: l,
									unstable_viewTransition: s,
								} = void 0 === t ? {} : t,
								u = Y(),
								c = X(),
								f = ee(e, { relative: l });
							return o.useCallback(
								t => {
									if (
										(function (e, t) {
											return !(
												0 !== e.button ||
												(t && '_self' !== t) ||
												(function (e) {
													return !!(
														e.metaKey ||
														e.altKey ||
														e.ctrlKey ||
														e.shiftKey
													);
												})(e)
											);
										})(t, n)
									) {
										t.preventDefault();
										let n = void 0 !== r ? r : m(c) === m(f);
										u(e, {
											replace: n,
											state: a,
											preventScrollReset: i,
											relative: l,
											unstable_viewTransition: s,
										});
									}
								},
								[c, u, f, r, a, n, e, i, l, s],
							);
						})(c, {
							replace: l,
							state: s,
							target: u,
							preventScrollReset: d,
							relative: a,
							unstable_viewTransition: p,
						});
					return o.createElement(
						'a',
						he({}, h, {
							href: n || g,
							onClick:
								v || i
									? r
									: function (e) {
											r && r(e), e.defaultPrevented || b(e);
										},
							ref: t,
							target: u,
						}),
					);
				});
			var Se, ke;
			function Ee(e) {
				let t = o.useRef(me(e)),
					n = o.useRef(!1),
					r = X(),
					a = o.useMemo(
						() =>
							(function (e, t) {
								let n = me(e);
								return (
									t &&
										t.forEach((e, r) => {
											n.has(r) ||
												t.getAll(r).forEach(e => {
													n.append(r, e);
												});
										}),
									n
								);
							})(r.search, n.current ? null : t.current),
						[r.search],
					),
					i = Y(),
					l = o.useCallback(
						(e, t) => {
							const r = me('function' == typeof e ? e(a) : e);
							(n.current = !0), i('?' + r, t);
						},
						[i, a],
					);
				return [a, l];
			}
			(function (e) {
				(e.UseScrollRestoration = 'useScrollRestoration'),
					(e.UseSubmit = 'useSubmit'),
					(e.UseSubmitFetcher = 'useSubmitFetcher'),
					(e.UseFetcher = 'useFetcher'),
					(e.useViewTransitionState = 'useViewTransitionState');
			})(Se || (Se = {})),
				(function (e) {
					(e.UseFetcher = 'useFetcher'),
						(e.UseFetchers = 'useFetchers'),
						(e.UseScrollRestoration = 'useScrollRestoration');
				})(ke || (ke = {}));
			var xe = a(103),
				Ce = o,
				Oe = Symbol.for('react-redux-context'),
				_e = 'undefined' != typeof globalThis ? globalThis : {};
			function Pe() {
				if (!Ce.createContext) return {};
				const e = _e[Oe] ?? (_e[Oe] = new Map());
				let t = e.get(Ce.createContext);
				return (
					t || ((t = Ce.createContext(null)), e.set(Ce.createContext, t)), t
				);
			}
			var Re = Pe();
			function Ne(e = Re) {
				return function () {
					return Ce.useContext(e);
				};
			}
			var Te = Ne(),
				je = () => {
					throw new Error('uSES not initialized!');
				},
				Fe = (e, t) => e === t;
			function Le(e = Re) {
				const t = e === Re ? Te : Ne(e),
					n = (e, n = {}) => {
						const { equalityFn: r = Fe, devModeChecks: a = {} } =
								'function' == typeof n ? { equalityFn: n } : n,
							{
								store: o,
								subscription: i,
								getServerState: l,
								stabilityCheck: s,
								identityFunctionCheck: u,
							} = t(),
							c =
								(Ce.useRef(!0),
								Ce.useCallback({ [e.name]: t => e(t) }[e.name], [
									e,
									s,
									a.stabilityCheck,
								])),
							f = je(i.addNestedSub, o.getState, l || o.getState, c, r);
						return Ce.useDebugValue(f), f;
					};
				return Object.assign(n, { withTypes: () => n }), n;
			}
			var De = Le();
			Symbol.for('react.element'),
				Symbol.for('react.portal'),
				Symbol.for('react.fragment'),
				Symbol.for('react.strict_mode'),
				Symbol.for('react.profiler'),
				Symbol.for('react.provider'),
				Symbol.for('react.context'),
				Symbol.for('react.server_context'),
				Symbol.for('react.forward_ref'),
				Symbol.for('react.suspense'),
				Symbol.for('react.suspense_list'),
				Symbol.for('react.memo'),
				Symbol.for('react.lazy'),
				Symbol.for('react.offscreen'),
				Symbol.for('react.client.reference');
			var Ae = { notify() {}, get: () => [] };
			var ze =
				'undefined' != typeof window &&
				void 0 !== window.document &&
				void 0 !== window.document.createElement
					? Ce.useLayoutEffect
					: Ce.useEffect;
			Object.defineProperty,
				Object.getOwnPropertyNames,
				Object.getOwnPropertySymbols,
				Object.getOwnPropertyDescriptor,
				Object.getPrototypeOf,
				Object.prototype;
			function Me(e = Re) {
				const t = e === Re ? Te : Ne(e),
					n = () => {
						const { store: e } = t();
						return e;
					};
				return Object.assign(n, { withTypes: () => n }), n;
			}
			var Ue = Me();
			function Ie(e = Re) {
				const t = e === Re ? Ue : Me(e),
					n = () => t().dispatch;
				return Object.assign(n, { withTypes: () => n }), n;
			}
			var Be,
				qe,
				Qe = Ie();
			(Be = xe.useSyncExternalStoreWithSelector),
				(je = Be),
				o.useSyncExternalStore,
				(function (e) {
					(e.NORMAL = 'normal'), (e.DARK = 'dark');
				})(qe || (qe = {}));
			var We = (0, o.createContext)({}),
				He = 'theme',
				$e = localStorage.getItem(He) || qe.NORMAL;
			var Ve = 'undefined' == typeof window || 'Deno' in window;
			function Ke() {}
			function Ge(e) {
				return 'number' == typeof e && e >= 0 && e !== 1 / 0;
			}
			function Xe(e, t) {
				return Math.max(e + (t || 0) - Date.now(), 0);
			}
			function Je(e, t) {
				const {
					type: n = 'all',
					exact: r,
					fetchStatus: a,
					predicate: o,
					queryKey: i,
					stale: l,
				} = e;
				if (i)
					if (r) {
						if (t.queryHash !== Ze(i, t.options)) return !1;
					} else if (!tt(t.queryKey, i)) return !1;
				if ('all' !== n) {
					const e = t.isActive();
					if ('active' === n && !e) return !1;
					if ('inactive' === n && e) return !1;
				}
				return !(
					('boolean' == typeof l && t.isStale() !== l) ||
					(void 0 !== a && a !== t.state.fetchStatus) ||
					(o && !o(t))
				);
			}
			function Ye(e, t) {
				const { exact: n, status: r, predicate: a, mutationKey: o } = e;
				if (o) {
					if (!t.options.mutationKey) return !1;
					if (n) {
						if (et(t.options.mutationKey) !== et(o)) return !1;
					} else if (!tt(t.options.mutationKey, o)) return !1;
				}
				return !((r && t.state.status !== r) || (a && !a(t)));
			}
			function Ze(e, t) {
				return (t?.queryKeyHashFn || et)(e);
			}
			function et(e) {
				return JSON.stringify(e, (e, t) =>
					ot(t)
						? Object.keys(t)
								.sort()
								.reduce((e, n) => ((e[n] = t[n]), e), {})
						: t,
				);
			}
			function tt(e, t) {
				return (
					e === t ||
					(typeof e == typeof t &&
						!(!e || !t || 'object' != typeof e || 'object' != typeof t) &&
						!Object.keys(t).some(n => !tt(e[n], t[n])))
				);
			}
			function nt(e, t) {
				if (e === t) return e;
				const n = at(e) && at(t);
				if (n || (ot(e) && ot(t))) {
					const r = n ? e : Object.keys(e),
						a = r.length,
						o = n ? t : Object.keys(t),
						i = o.length,
						l = n ? [] : {};
					let s = 0;
					for (let a = 0; a < i; a++) {
						const i = n ? a : o[a];
						!n && void 0 === e[i] && void 0 === t[i] && r.includes(i)
							? ((l[i] = void 0), s++)
							: ((l[i] = nt(e[i], t[i])),
								l[i] === e[i] && void 0 !== e[i] && s++);
					}
					return a === i && s === a ? e : l;
				}
				return t;
			}
			function rt(e, t) {
				if ((e && !t) || (t && !e)) return !1;
				for (const n in e) if (e[n] !== t[n]) return !1;
				return !0;
			}
			function at(e) {
				return Array.isArray(e) && e.length === Object.keys(e).length;
			}
			function ot(e) {
				if (!it(e)) return !1;
				const t = e.constructor;
				if (void 0 === t) return !0;
				const n = t.prototype;
				return !!it(n) && !!n.hasOwnProperty('isPrototypeOf');
			}
			function it(e) {
				return '[object Object]' === Object.prototype.toString.call(e);
			}
			function lt(e, t, n) {
				return 'function' == typeof n.structuralSharing
					? n.structuralSharing(e, t)
					: !1 !== n.structuralSharing
						? nt(e, t)
						: t;
			}
			function st(e, t, n = 0) {
				const r = [...e, t];
				return n && r.length > n ? r.slice(1) : r;
			}
			function ut(e, t, n = 0) {
				const r = [t, ...e];
				return n && r.length > n ? r.slice(0, -1) : r;
			}
			var ct = (function () {
					let e = [],
						t = 0,
						n = e => {
							e();
						},
						r = e => {
							e();
						},
						a = e => setTimeout(e, 0);
					const o = r => {
						t
							? e.push(r)
							: a(() => {
									n(r);
								});
					};
					return {
						batch: o => {
							let i;
							t++;
							try {
								i = o();
							} finally {
								t--,
									t ||
										(() => {
											const t = e;
											(e = []),
												t.length &&
													a(() => {
														r(() => {
															t.forEach(e => {
																n(e);
															});
														});
													});
										})();
							}
							return i;
						},
						batchCalls:
							e =>
							(...t) => {
								o(() => {
									e(...t);
								});
							},
						schedule: o,
						setNotifyFunction: e => {
							n = e;
						},
						setBatchNotifyFunction: e => {
							r = e;
						},
						setScheduler: e => {
							a = e;
						},
					};
				})(),
				ft = class {
					constructor() {
						(this.listeners = new Set()),
							(this.subscribe = this.subscribe.bind(this));
					}
					subscribe(e) {
						return (
							this.listeners.add(e),
							this.onSubscribe(),
							() => {
								this.listeners.delete(e), this.onUnsubscribe();
							}
						);
					}
					hasListeners() {
						return this.listeners.size > 0;
					}
					onSubscribe() {}
					onUnsubscribe() {}
				},
				dt = new (class extends ft {
					#e;
					#t;
					#n;
					constructor() {
						super(),
							(this.#n = e => {
								if (!Ve && window.addEventListener) {
									const t = () => e();
									return (
										window.addEventListener('visibilitychange', t, !1),
										() => {
											window.removeEventListener('visibilitychange', t);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#n);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#n = e),
							this.#t?.(),
							(this.#t = e(e => {
								'boolean' == typeof e ? this.setFocused(e) : this.onFocus();
							}));
					}
					setFocused(e) {
						this.#e !== e && ((this.#e = e), this.onFocus());
					}
					onFocus() {
						this.listeners.forEach(e => {
							e();
						});
					}
					isFocused() {
						return 'boolean' == typeof this.#e
							? this.#e
							: 'hidden' !== globalThis.document?.visibilityState;
					}
				})(),
				pt = new (class extends ft {
					#r = !0;
					#t;
					#n;
					constructor() {
						super(),
							(this.#n = e => {
								if (!Ve && window.addEventListener) {
									const t = () => e(!0),
										n = () => e(!1);
									return (
										window.addEventListener('online', t, !1),
										window.addEventListener('offline', n, !1),
										() => {
											window.removeEventListener('online', t),
												window.removeEventListener('offline', n);
										}
									);
								}
							});
					}
					onSubscribe() {
						this.#t || this.setEventListener(this.#n);
					}
					onUnsubscribe() {
						this.hasListeners() || (this.#t?.(), (this.#t = void 0));
					}
					setEventListener(e) {
						(this.#n = e),
							this.#t?.(),
							(this.#t = e(this.setOnline.bind(this)));
					}
					setOnline(e) {
						this.#r !== e &&
							((this.#r = e),
							this.listeners.forEach(t => {
								t(e);
							}));
					}
					isOnline() {
						return this.#r;
					}
				})();
			function ht(e) {
				return Math.min(1e3 * 2 ** e, 3e4);
			}
			function mt(e) {
				return 'online' !== (e ?? 'online') || pt.isOnline();
			}
			var yt = class {
				constructor(e) {
					(this.revert = e?.revert), (this.silent = e?.silent);
				}
			};
			function vt(e) {
				return e instanceof yt;
			}
			function gt(e) {
				let t,
					n,
					r,
					a = !1,
					o = 0,
					i = !1;
				const l = new Promise((e, t) => {
						(n = e), (r = t);
					}),
					s = () =>
						!dt.isFocused() || ('always' !== e.networkMode && !pt.isOnline()),
					u = r => {
						i || ((i = !0), e.onSuccess?.(r), t?.(), n(r));
					},
					c = n => {
						i || ((i = !0), e.onError?.(n), t?.(), r(n));
					},
					f = () =>
						new Promise(n => {
							(t = e => {
								const t = i || !s();
								return t && n(e), t;
							}),
								e.onPause?.();
						}).then(() => {
							(t = void 0), i || e.onContinue?.();
						}),
					d = () => {
						if (i) return;
						let t;
						try {
							t = e.fn();
						} catch (e) {
							t = Promise.reject(e);
						}
						Promise.resolve(t)
							.then(u)
							.catch(t => {
								if (i) return;
								const n = e.retry ?? (Ve ? 0 : 3),
									r = e.retryDelay ?? ht,
									l = 'function' == typeof r ? r(o, t) : r,
									u =
										!0 === n ||
										('number' == typeof n && o < n) ||
										('function' == typeof n && n(o, t));
								var p;
								!a && u
									? (o++,
										e.onFail?.(o, t),
										((p = l),
										new Promise(e => {
											setTimeout(e, p);
										}))
											.then(() => {
												if (s()) return f();
											})
											.then(() => {
												a ? c(t) : d();
											}))
									: c(t);
							});
					};
				return (
					mt(e.networkMode) ? d() : f().then(d),
					{
						promise: l,
						cancel: t => {
							i || (c(new yt(t)), e.abort?.());
						},
						continue: () => {
							const e = t?.();
							return e ? l : Promise.resolve();
						},
						cancelRetry: () => {
							a = !0;
						},
						continueRetry: () => {
							a = !1;
						},
					}
				);
			}
			var bt = class {
					#a;
					destroy() {
						this.clearGcTimeout();
					}
					scheduleGc() {
						this.clearGcTimeout(),
							Ge(this.gcTime) &&
								(this.#a = setTimeout(() => {
									this.optionalRemove();
								}, this.gcTime));
					}
					updateGcTime(e) {
						this.gcTime = Math.max(this.gcTime || 0, e ?? (Ve ? 1 / 0 : 3e5));
					}
					clearGcTimeout() {
						this.#a && (clearTimeout(this.#a), (this.#a = void 0));
					}
				},
				wt = class extends bt {
					constructor(e) {
						super(),
							(this.#o = !1),
							(this.#i = e.defaultOptions),
							this.#l(e.options),
							(this.#s = []),
							(this.#u = e.cache),
							(this.queryKey = e.queryKey),
							(this.queryHash = e.queryHash),
							(this.#c =
								e.state ||
								(function (e) {
									const t =
											'function' == typeof e.initialData
												? e.initialData()
												: e.initialData,
										n = void 0 !== t,
										r = n
											? 'function' == typeof e.initialDataUpdatedAt
												? e.initialDataUpdatedAt()
												: e.initialDataUpdatedAt
											: 0;
									return {
										data: t,
										dataUpdateCount: 0,
										dataUpdatedAt: n ? r ?? Date.now() : 0,
										error: null,
										errorUpdateCount: 0,
										errorUpdatedAt: 0,
										fetchFailureCount: 0,
										fetchFailureReason: null,
										fetchMeta: null,
										isInvalidated: !1,
										status: n ? 'success' : 'pending',
										fetchStatus: 'idle',
									};
								})(this.options)),
							(this.state = this.#c),
							this.scheduleGc();
					}
					#c;
					#f;
					#u;
					#d;
					#p;
					#s;
					#i;
					#o;
					get meta() {
						return this.options.meta;
					}
					#l(e) {
						(this.options = { ...this.#i, ...e }),
							this.updateGcTime(this.options.gcTime);
					}
					optionalRemove() {
						this.#s.length ||
							'idle' !== this.state.fetchStatus ||
							this.#u.remove(this);
					}
					setData(e, t) {
						const n = lt(this.state.data, e, this.options);
						return (
							this.#h({
								data: n,
								type: 'success',
								dataUpdatedAt: t?.updatedAt,
								manual: t?.manual,
							}),
							n
						);
					}
					setState(e, t) {
						this.#h({ type: 'setState', state: e, setStateOptions: t });
					}
					cancel(e) {
						const t = this.#d;
						return (
							this.#p?.cancel(e), t ? t.then(Ke).catch(Ke) : Promise.resolve()
						);
					}
					destroy() {
						super.destroy(), this.cancel({ silent: !0 });
					}
					reset() {
						this.destroy(), this.setState(this.#c);
					}
					isActive() {
						return this.#s.some(e => !1 !== e.options.enabled);
					}
					isDisabled() {
						return this.getObserversCount() > 0 && !this.isActive();
					}
					isStale() {
						return (
							this.state.isInvalidated ||
							!this.state.dataUpdatedAt ||
							this.#s.some(e => e.getCurrentResult().isStale)
						);
					}
					isStaleByTime(e = 0) {
						return (
							this.state.isInvalidated ||
							!this.state.dataUpdatedAt ||
							!Xe(this.state.dataUpdatedAt, e)
						);
					}
					onFocus() {
						const e = this.#s.find(e => e.shouldFetchOnWindowFocus());
						e?.refetch({ cancelRefetch: !1 }), this.#p?.continue();
					}
					onOnline() {
						const e = this.#s.find(e => e.shouldFetchOnReconnect());
						e?.refetch({ cancelRefetch: !1 }), this.#p?.continue();
					}
					addObserver(e) {
						this.#s.includes(e) ||
							(this.#s.push(e),
							this.clearGcTimeout(),
							this.#u.notify({
								type: 'observerAdded',
								query: this,
								observer: e,
							}));
					}
					removeObserver(e) {
						this.#s.includes(e) &&
							((this.#s = this.#s.filter(t => t !== e)),
							this.#s.length ||
								(this.#p &&
									(this.#o
										? this.#p.cancel({ revert: !0 })
										: this.#p.cancelRetry()),
								this.scheduleGc()),
							this.#u.notify({
								type: 'observerRemoved',
								query: this,
								observer: e,
							}));
					}
					getObserversCount() {
						return this.#s.length;
					}
					invalidate() {
						this.state.isInvalidated || this.#h({ type: 'invalidate' });
					}
					fetch(e, t) {
						if ('idle' !== this.state.fetchStatus)
							if (this.state.dataUpdatedAt && t?.cancelRefetch)
								this.cancel({ silent: !0 });
							else if (this.#d) return this.#p?.continueRetry(), this.#d;
						if ((e && this.#l(e), !this.options.queryFn)) {
							const e = this.#s.find(e => e.options.queryFn);
							e && this.#l(e.options);
						}
						const n = new AbortController(),
							r = { queryKey: this.queryKey, meta: this.meta },
							a = e => {
								Object.defineProperty(e, 'signal', {
									enumerable: !0,
									get: () => ((this.#o = !0), n.signal),
								});
							};
						a(r);
						const o = {
							fetchOptions: t,
							options: this.options,
							queryKey: this.queryKey,
							state: this.state,
							fetchFn: () =>
								this.options.queryFn
									? ((this.#o = !1),
										this.options.persister
											? this.options.persister(this.options.queryFn, r, this)
											: this.options.queryFn(r))
									: Promise.reject(
											new Error(`Missing queryFn: '${this.options.queryHash}'`),
										),
						};
						a(o),
							this.options.behavior?.onFetch(o, this),
							(this.#f = this.state),
							('idle' !== this.state.fetchStatus &&
								this.state.fetchMeta === o.fetchOptions?.meta) ||
								this.#h({ type: 'fetch', meta: o.fetchOptions?.meta });
						const i = e => {
							(vt(e) && e.silent) || this.#h({ type: 'error', error: e }),
								vt(e) ||
									(this.#u.config.onError?.(e, this),
									this.#u.config.onSettled?.(this.state.data, e, this)),
								this.isFetchingOptimistic || this.scheduleGc(),
								(this.isFetchingOptimistic = !1);
						};
						return (
							(this.#p = gt({
								fn: o.fetchFn,
								abort: n.abort.bind(n),
								onSuccess: e => {
									void 0 !== e
										? (this.setData(e),
											this.#u.config.onSuccess?.(e, this),
											this.#u.config.onSettled?.(e, this.state.error, this),
											this.isFetchingOptimistic || this.scheduleGc(),
											(this.isFetchingOptimistic = !1))
										: i(new Error(`${this.queryHash} data is undefined`));
								},
								onError: i,
								onFail: (e, t) => {
									this.#h({ type: 'failed', failureCount: e, error: t });
								},
								onPause: () => {
									this.#h({ type: 'pause' });
								},
								onContinue: () => {
									this.#h({ type: 'continue' });
								},
								retry: o.options.retry,
								retryDelay: o.options.retryDelay,
								networkMode: o.options.networkMode,
							})),
							(this.#d = this.#p.promise),
							this.#d
						);
					}
					#h(e) {
						(this.state = (t => {
							switch (e.type) {
								case 'failed':
									return {
										...t,
										fetchFailureCount: e.failureCount,
										fetchFailureReason: e.error,
									};
								case 'pause':
									return { ...t, fetchStatus: 'paused' };
								case 'continue':
									return { ...t, fetchStatus: 'fetching' };
								case 'fetch':
									return {
										...t,
										fetchFailureCount: 0,
										fetchFailureReason: null,
										fetchMeta: e.meta ?? null,
										fetchStatus: mt(this.options.networkMode)
											? 'fetching'
											: 'paused',
										...(!t.dataUpdatedAt && { error: null, status: 'pending' }),
									};
								case 'success':
									return {
										...t,
										data: e.data,
										dataUpdateCount: t.dataUpdateCount + 1,
										dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
										error: null,
										isInvalidated: !1,
										status: 'success',
										...(!e.manual && {
											fetchStatus: 'idle',
											fetchFailureCount: 0,
											fetchFailureReason: null,
										}),
									};
								case 'error':
									const n = e.error;
									return vt(n) && n.revert && this.#f
										? { ...this.#f, fetchStatus: 'idle' }
										: {
												...t,
												error: n,
												errorUpdateCount: t.errorUpdateCount + 1,
												errorUpdatedAt: Date.now(),
												fetchFailureCount: t.fetchFailureCount + 1,
												fetchFailureReason: n,
												fetchStatus: 'idle',
												status: 'error',
											};
								case 'invalidate':
									return { ...t, isInvalidated: !0 };
								case 'setState':
									return { ...t, ...e.state };
							}
						})(this.state)),
							ct.batch(() => {
								this.#s.forEach(e => {
									e.onQueryUpdate();
								}),
									this.#u.notify({ query: this, type: 'updated', action: e });
							});
					}
				},
				St = class extends ft {
					constructor(e = {}) {
						super(), (this.config = e), (this.#m = new Map());
					}
					#m;
					build(e, t, n) {
						const r = t.queryKey,
							a = t.queryHash ?? Ze(r, t);
						let o = this.get(a);
						return (
							o ||
								((o = new wt({
									cache: this,
									queryKey: r,
									queryHash: a,
									options: e.defaultQueryOptions(t),
									state: n,
									defaultOptions: e.getQueryDefaults(r),
								})),
								this.add(o)),
							o
						);
					}
					add(e) {
						this.#m.has(e.queryHash) ||
							(this.#m.set(e.queryHash, e),
							this.notify({ type: 'added', query: e }));
					}
					remove(e) {
						const t = this.#m.get(e.queryHash);
						t &&
							(e.destroy(),
							t === e && this.#m.delete(e.queryHash),
							this.notify({ type: 'removed', query: e }));
					}
					clear() {
						ct.batch(() => {
							this.getAll().forEach(e => {
								this.remove(e);
							});
						});
					}
					get(e) {
						return this.#m.get(e);
					}
					getAll() {
						return [...this.#m.values()];
					}
					find(e) {
						const t = { exact: !0, ...e };
						return this.getAll().find(e => Je(t, e));
					}
					findAll(e = {}) {
						const t = this.getAll();
						return Object.keys(e).length > 0 ? t.filter(t => Je(e, t)) : t;
					}
					notify(e) {
						ct.batch(() => {
							this.listeners.forEach(t => {
								t(e);
							});
						});
					}
					onFocus() {
						ct.batch(() => {
							this.getAll().forEach(e => {
								e.onFocus();
							});
						});
					}
					onOnline() {
						ct.batch(() => {
							this.getAll().forEach(e => {
								e.onOnline();
							});
						});
					}
				},
				kt = class extends bt {
					constructor(e) {
						super(),
							(this.mutationId = e.mutationId),
							(this.#i = e.defaultOptions),
							(this.#y = e.mutationCache),
							(this.#s = []),
							(this.state = e.state || {
								context: void 0,
								data: void 0,
								error: null,
								failureCount: 0,
								failureReason: null,
								isPaused: !1,
								status: 'idle',
								variables: void 0,
								submittedAt: 0,
							}),
							this.setOptions(e.options),
							this.scheduleGc();
					}
					#s;
					#i;
					#y;
					#p;
					setOptions(e) {
						(this.options = { ...this.#i, ...e }),
							this.updateGcTime(this.options.gcTime);
					}
					get meta() {
						return this.options.meta;
					}
					addObserver(e) {
						this.#s.includes(e) ||
							(this.#s.push(e),
							this.clearGcTimeout(),
							this.#y.notify({
								type: 'observerAdded',
								mutation: this,
								observer: e,
							}));
					}
					removeObserver(e) {
						(this.#s = this.#s.filter(t => t !== e)),
							this.scheduleGc(),
							this.#y.notify({
								type: 'observerRemoved',
								mutation: this,
								observer: e,
							});
					}
					optionalRemove() {
						this.#s.length ||
							('pending' === this.state.status
								? this.scheduleGc()
								: this.#y.remove(this));
					}
					continue() {
						return this.#p?.continue() ?? this.execute(this.state.variables);
					}
					async execute(e) {
						const t = () => (
								(this.#p = gt({
									fn: () =>
										this.options.mutationFn
											? this.options.mutationFn(e)
											: Promise.reject(new Error('No mutationFn found')),
									onFail: (e, t) => {
										this.#h({ type: 'failed', failureCount: e, error: t });
									},
									onPause: () => {
										this.#h({ type: 'pause' });
									},
									onContinue: () => {
										this.#h({ type: 'continue' });
									},
									retry: this.options.retry ?? 0,
									retryDelay: this.options.retryDelay,
									networkMode: this.options.networkMode,
								})),
								this.#p.promise
							),
							n = 'pending' === this.state.status;
						try {
							if (!n) {
								this.#h({ type: 'pending', variables: e }),
									await this.#y.config.onMutate?.(e, this);
								const t = await this.options.onMutate?.(e);
								t !== this.state.context &&
									this.#h({ type: 'pending', context: t, variables: e });
							}
							const r = await t();
							return (
								await this.#y.config.onSuccess?.(
									r,
									e,
									this.state.context,
									this,
								),
								await this.options.onSuccess?.(r, e, this.state.context),
								await this.#y.config.onSettled?.(
									r,
									null,
									this.state.variables,
									this.state.context,
									this,
								),
								await this.options.onSettled?.(r, null, e, this.state.context),
								this.#h({ type: 'success', data: r }),
								r
							);
						} catch (t) {
							try {
								throw (
									(await this.#y.config.onError?.(
										t,
										e,
										this.state.context,
										this,
									),
									await this.options.onError?.(t, e, this.state.context),
									await this.#y.config.onSettled?.(
										void 0,
										t,
										this.state.variables,
										this.state.context,
										this,
									),
									await this.options.onSettled?.(
										void 0,
										t,
										e,
										this.state.context,
									),
									t)
								);
							} finally {
								this.#h({ type: 'error', error: t });
							}
						}
					}
					#h(e) {
						(this.state = (t => {
							switch (e.type) {
								case 'failed':
									return {
										...t,
										failureCount: e.failureCount,
										failureReason: e.error,
									};
								case 'pause':
									return { ...t, isPaused: !0 };
								case 'continue':
									return { ...t, isPaused: !1 };
								case 'pending':
									return {
										...t,
										context: e.context,
										data: void 0,
										failureCount: 0,
										failureReason: null,
										error: null,
										isPaused: !mt(this.options.networkMode),
										status: 'pending',
										variables: e.variables,
										submittedAt: Date.now(),
									};
								case 'success':
									return {
										...t,
										data: e.data,
										failureCount: 0,
										failureReason: null,
										error: null,
										status: 'success',
										isPaused: !1,
									};
								case 'error':
									return {
										...t,
										data: void 0,
										error: e.error,
										failureCount: t.failureCount + 1,
										failureReason: e.error,
										isPaused: !1,
										status: 'error',
									};
							}
						})(this.state)),
							ct.batch(() => {
								this.#s.forEach(t => {
									t.onMutationUpdate(e);
								}),
									this.#y.notify({
										mutation: this,
										type: 'updated',
										action: e,
									});
							});
					}
				},
				Et = class extends ft {
					constructor(e = {}) {
						super(), (this.config = e), (this.#v = []), (this.#g = 0);
					}
					#v;
					#g;
					#b;
					build(e, t, n) {
						const r = new kt({
							mutationCache: this,
							mutationId: ++this.#g,
							options: e.defaultMutationOptions(t),
							state: n,
						});
						return this.add(r), r;
					}
					add(e) {
						this.#v.push(e), this.notify({ type: 'added', mutation: e });
					}
					remove(e) {
						(this.#v = this.#v.filter(t => t !== e)),
							this.notify({ type: 'removed', mutation: e });
					}
					clear() {
						ct.batch(() => {
							this.#v.forEach(e => {
								this.remove(e);
							});
						});
					}
					getAll() {
						return this.#v;
					}
					find(e) {
						const t = { exact: !0, ...e };
						return this.#v.find(e => Ye(t, e));
					}
					findAll(e = {}) {
						return this.#v.filter(t => Ye(e, t));
					}
					notify(e) {
						ct.batch(() => {
							this.listeners.forEach(t => {
								t(e);
							});
						});
					}
					resumePausedMutations() {
						return (
							(this.#b = (this.#b ?? Promise.resolve())
								.then(() => {
									const e = this.#v.filter(e => e.state.isPaused);
									return ct.batch(() =>
										e.reduce(
											(e, t) => e.then(() => t.continue().catch(Ke)),
											Promise.resolve(),
										),
									);
								})
								.then(() => {
									this.#b = void 0;
								})),
							this.#b
						);
					}
				};
			function xt(e, { pages: t, pageParams: n }) {
				const r = t.length - 1;
				return e.getNextPageParam(t[r], t, n[r], n);
			}
			function Ct(e, { pages: t, pageParams: n }) {
				return e.getPreviousPageParam?.(t[0], t, n[0], n);
			}
			var Ot = o.createContext(void 0),
				_t = ({ client: e, children: t }) => (
					o.useEffect(
						() => (
							e.mount(),
							() => {
								e.unmount();
							}
						),
						[e],
					),
					o.createElement(Ot.Provider, { value: e }, t)
				),
				Pt = new (class {
					#w;
					#y;
					#i;
					#S;
					#k;
					#E;
					#x;
					#C;
					constructor(e = {}) {
						(this.#w = e.queryCache || new St()),
							(this.#y = e.mutationCache || new Et()),
							(this.#i = e.defaultOptions || {}),
							(this.#S = new Map()),
							(this.#k = new Map()),
							(this.#E = 0);
					}
					mount() {
						this.#E++,
							1 === this.#E &&
								((this.#x = dt.subscribe(() => {
									dt.isFocused() &&
										(this.resumePausedMutations(), this.#w.onFocus());
								})),
								(this.#C = pt.subscribe(() => {
									pt.isOnline() &&
										(this.resumePausedMutations(), this.#w.onOnline());
								})));
					}
					unmount() {
						this.#E--,
							0 === this.#E &&
								(this.#x?.(),
								(this.#x = void 0),
								this.#C?.(),
								(this.#C = void 0));
					}
					isFetching(e) {
						return this.#w.findAll({ ...e, fetchStatus: 'fetching' }).length;
					}
					isMutating(e) {
						return this.#y.findAll({ ...e, status: 'pending' }).length;
					}
					getQueryData(e) {
						return this.#w.find({ queryKey: e })?.state.data;
					}
					ensureQueryData(e) {
						const t = this.getQueryData(e.queryKey);
						return void 0 !== t ? Promise.resolve(t) : this.fetchQuery(e);
					}
					getQueriesData(e) {
						return this.getQueryCache()
							.findAll(e)
							.map(({ queryKey: e, state: t }) => [e, t.data]);
					}
					setQueryData(e, t, n) {
						const r = this.#w.find({ queryKey: e }),
							a = r?.state.data,
							o = (function (e, t) {
								return 'function' == typeof e ? e(t) : e;
							})(t, a);
						if (void 0 === o) return;
						const i = this.defaultQueryOptions({ queryKey: e });
						return this.#w.build(this, i).setData(o, { ...n, manual: !0 });
					}
					setQueriesData(e, t, n) {
						return ct.batch(() =>
							this.getQueryCache()
								.findAll(e)
								.map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
						);
					}
					getQueryState(e) {
						return this.#w.find({ queryKey: e })?.state;
					}
					removeQueries(e) {
						const t = this.#w;
						ct.batch(() => {
							t.findAll(e).forEach(e => {
								t.remove(e);
							});
						});
					}
					resetQueries(e, t) {
						const n = this.#w,
							r = { type: 'active', ...e };
						return ct.batch(
							() => (
								n.findAll(e).forEach(e => {
									e.reset();
								}),
								this.refetchQueries(r, t)
							),
						);
					}
					cancelQueries(e = {}, t = {}) {
						const n = { revert: !0, ...t },
							r = ct.batch(() => this.#w.findAll(e).map(e => e.cancel(n)));
						return Promise.all(r).then(Ke).catch(Ke);
					}
					invalidateQueries(e = {}, t = {}) {
						return ct.batch(() => {
							if (
								(this.#w.findAll(e).forEach(e => {
									e.invalidate();
								}),
								'none' === e.refetchType)
							)
								return Promise.resolve();
							const n = { ...e, type: e.refetchType ?? e.type ?? 'active' };
							return this.refetchQueries(n, t);
						});
					}
					refetchQueries(e = {}, t) {
						const n = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 },
							r = ct.batch(() =>
								this.#w
									.findAll(e)
									.filter(e => !e.isDisabled())
									.map(e => {
										let t = e.fetch(void 0, n);
										return (
											n.throwOnError || (t = t.catch(Ke)),
											'paused' === e.state.fetchStatus ? Promise.resolve() : t
										);
									}),
							);
						return Promise.all(r).then(Ke);
					}
					fetchQuery(e) {
						const t = this.defaultQueryOptions(e);
						void 0 === t.retry && (t.retry = !1);
						const n = this.#w.build(this, t);
						return n.isStaleByTime(t.staleTime)
							? n.fetch(t)
							: Promise.resolve(n.state.data);
					}
					prefetchQuery(e) {
						return this.fetchQuery(e).then(Ke).catch(Ke);
					}
					fetchInfiniteQuery(e) {
						return (
							(e.behavior =
								((t = e.pages),
								{
									onFetch: (e, n) => {
										const r = async () => {
											const n = e.options,
												r = e.fetchOptions?.meta?.fetchMore?.direction,
												a = e.state.data?.pages || [],
												o = e.state.data?.pageParams || [],
												i = { pages: [], pageParams: [] };
											let l = !1;
											const s =
													e.options.queryFn ||
													(() =>
														Promise.reject(
															new Error(
																`Missing queryFn: '${e.options.queryHash}'`,
															),
														)),
												u = async (t, n, r) => {
													if (l) return Promise.reject();
													if (null == n && t.pages.length)
														return Promise.resolve(t);
													const a = {
														queryKey: e.queryKey,
														pageParam: n,
														direction: r ? 'backward' : 'forward',
														meta: e.options.meta,
													};
													var o;
													(o = a),
														Object.defineProperty(o, 'signal', {
															enumerable: !0,
															get: () => (
																e.signal.aborted
																	? (l = !0)
																	: e.signal.addEventListener('abort', () => {
																			l = !0;
																		}),
																e.signal
															),
														});
													const i = await s(a),
														{ maxPages: u } = e.options,
														c = r ? ut : st;
													return {
														pages: c(t.pages, i, u),
														pageParams: c(t.pageParams, n, u),
													};
												};
											let c;
											if (r && a.length) {
												const e = 'backward' === r,
													t = { pages: a, pageParams: o },
													i = (e ? Ct : xt)(n, t);
												c = await u(t, i, e);
											} else {
												c = await u(i, o[0] ?? n.initialPageParam);
												const e = t ?? a.length;
												for (let t = 1; t < e; t++) {
													const e = xt(n, c);
													c = await u(c, e);
												}
											}
											return c;
										};
										e.options.persister
											? (e.fetchFn = () =>
													e.options.persister?.(
														r,
														{
															queryKey: e.queryKey,
															meta: e.options.meta,
															signal: e.signal,
														},
														n,
													))
											: (e.fetchFn = r);
									},
								})),
							this.fetchQuery(e)
						);
						var t;
					}
					prefetchInfiniteQuery(e) {
						return this.fetchInfiniteQuery(e).then(Ke).catch(Ke);
					}
					resumePausedMutations() {
						return this.#y.resumePausedMutations();
					}
					getQueryCache() {
						return this.#w;
					}
					getMutationCache() {
						return this.#y;
					}
					getDefaultOptions() {
						return this.#i;
					}
					setDefaultOptions(e) {
						this.#i = e;
					}
					setQueryDefaults(e, t) {
						this.#S.set(et(e), { queryKey: e, defaultOptions: t });
					}
					getQueryDefaults(e) {
						const t = [...this.#S.values()];
						let n = {};
						return (
							t.forEach(t => {
								tt(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
							}),
							n
						);
					}
					setMutationDefaults(e, t) {
						this.#k.set(et(e), { mutationKey: e, defaultOptions: t });
					}
					getMutationDefaults(e) {
						const t = [...this.#k.values()];
						let n = {};
						return (
							t.forEach(t => {
								tt(e, t.mutationKey) && (n = { ...n, ...t.defaultOptions });
							}),
							n
						);
					}
					defaultQueryOptions(e) {
						if (e?._defaulted) return e;
						const t = {
							...this.#i.queries,
							...(e?.queryKey && this.getQueryDefaults(e.queryKey)),
							...e,
							_defaulted: !0,
						};
						return (
							t.queryHash || (t.queryHash = Ze(t.queryKey, t)),
							void 0 === t.refetchOnReconnect &&
								(t.refetchOnReconnect = 'always' !== t.networkMode),
							void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
							void 0 === t.networkMode &&
								t.persister &&
								(t.networkMode = 'offlineFirst'),
							t
						);
					}
					defaultMutationOptions(e) {
						return e?._defaulted
							? e
							: {
									...this.#i.mutations,
									...(e?.mutationKey &&
										this.getMutationDefaults(e.mutationKey)),
									...e,
									_defaulted: !0,
								};
					}
					clear() {
						this.#w.clear(), this.#y.clear();
					}
				})({ defaultOptions: { queries: { refetchOnWindowFocus: !1 } } });
			var Rt = Symbol.for('immer-nothing'),
				Nt = Symbol.for('immer-draftable'),
				Tt = Symbol.for('immer-state');
			function jt(e, ...t) {
				throw new Error(
					`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`,
				);
			}
			var Ft = Object.getPrototypeOf;
			function Lt(e) {
				return !!e && !!e[Tt];
			}
			function Dt(e) {
				return (
					!!e &&
					(zt(e) ||
						Array.isArray(e) ||
						!!e[Nt] ||
						!!e.constructor?.[Nt] ||
						qt(e) ||
						Qt(e))
				);
			}
			var At = Object.prototype.constructor.toString();
			function zt(e) {
				if (!e || 'object' != typeof e) return !1;
				const t = Ft(e);
				if (null === t) return !0;
				const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
				return (
					n === Object ||
					('function' == typeof n && Function.toString.call(n) === At)
				);
			}
			function Mt(e, t) {
				0 === Ut(e)
					? Object.entries(e).forEach(([n, r]) => {
							t(n, r, e);
						})
					: e.forEach((n, r) => t(r, n, e));
			}
			function Ut(e) {
				const t = e[Tt];
				return t ? t.type_ : Array.isArray(e) ? 1 : qt(e) ? 2 : Qt(e) ? 3 : 0;
			}
			function It(e, t) {
				return 2 === Ut(e)
					? e.has(t)
					: Object.prototype.hasOwnProperty.call(e, t);
			}
			function Bt(e, t, n) {
				const r = Ut(e);
				2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
			}
			function qt(e) {
				return e instanceof Map;
			}
			function Qt(e) {
				return e instanceof Set;
			}
			function Wt(e) {
				return e.copy_ || e.base_;
			}
			function Ht(e, t) {
				if (qt(e)) return new Map(e);
				if (Qt(e)) return new Set(e);
				if (Array.isArray(e)) return Array.prototype.slice.call(e);
				if (!t && zt(e)) {
					if (!Ft(e)) {
						const t = Object.create(null);
						return Object.assign(t, e);
					}
					return { ...e };
				}
				const n = Object.getOwnPropertyDescriptors(e);
				delete n[Tt];
				let r = Reflect.ownKeys(n);
				for (let t = 0; t < r.length; t++) {
					const a = r[t],
						o = n[a];
					!1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
						(o.get || o.set) &&
							(n[a] = {
								configurable: !0,
								writable: !0,
								enumerable: o.enumerable,
								value: e[a],
							});
				}
				return Object.create(Ft(e), n);
			}
			function $t(e, t = !1) {
				return (
					Kt(e) ||
						Lt(e) ||
						!Dt(e) ||
						(Ut(e) > 1 && (e.set = e.add = e.clear = e.delete = Vt),
						Object.freeze(e),
						t && Mt(e, (e, t) => $t(t, !0))),
					e
				);
			}
			function Vt() {
				jt(2);
			}
			function Kt(e) {
				return Object.isFrozen(e);
			}
			var Gt,
				Xt = {};
			function Jt(e) {
				const t = Xt[e];
				return t || jt(0), t;
			}
			function Yt() {
				return Gt;
			}
			function Zt(e, t) {
				t &&
					(Jt('Patches'),
					(e.patches_ = []),
					(e.inversePatches_ = []),
					(e.patchListener_ = t));
			}
			function en(e) {
				tn(e), e.drafts_.forEach(rn), (e.drafts_ = null);
			}
			function tn(e) {
				e === Gt && (Gt = e.parent_);
			}
			function nn(e) {
				return (Gt = {
					drafts_: [],
					parent_: Gt,
					immer_: e,
					canAutoFreeze_: !0,
					unfinalizedDrafts_: 0,
				});
			}
			function rn(e) {
				const t = e[Tt];
				0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
			}
			function an(e, t) {
				t.unfinalizedDrafts_ = t.drafts_.length;
				const n = t.drafts_[0];
				return (
					void 0 !== e && e !== n
						? (n[Tt].modified_ && (en(t), jt(4)),
							Dt(e) && ((e = on(t, e)), t.parent_ || sn(t, e)),
							t.patches_ &&
								Jt('Patches').generateReplacementPatches_(
									n[Tt].base_,
									e,
									t.patches_,
									t.inversePatches_,
								))
						: (e = on(t, n, [])),
					en(t),
					t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
					e !== Rt ? e : void 0
				);
			}
			function on(e, t, n) {
				if (Kt(t)) return t;
				const r = t[Tt];
				if (!r) return Mt(t, (a, o) => ln(e, r, t, a, o, n)), t;
				if (r.scope_ !== e) return t;
				if (!r.modified_) return sn(e, r.base_, !0), r.base_;
				if (!r.finalized_) {
					(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
					const t = r.copy_;
					let a = t,
						o = !1;
					3 === r.type_ && ((a = new Set(t)), t.clear(), (o = !0)),
						Mt(a, (a, i) => ln(e, r, t, a, i, n, o)),
						sn(e, t, !1),
						n &&
							e.patches_ &&
							Jt('Patches').generatePatches_(
								r,
								n,
								e.patches_,
								e.inversePatches_,
							);
				}
				return r.copy_;
			}
			function ln(e, t, n, r, a, o, i) {
				if (Lt(a)) {
					const i = on(
						e,
						a,
						o && t && 3 !== t.type_ && !It(t.assigned_, r)
							? o.concat(r)
							: void 0,
					);
					if ((Bt(n, r, i), !Lt(i))) return;
					e.canAutoFreeze_ = !1;
				} else i && n.add(a);
				if (Dt(a) && !Kt(a)) {
					if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
					on(e, a), (t && t.scope_.parent_) || sn(e, a);
				}
			}
			function sn(e, t, n = !1) {
				!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && $t(t, n);
			}
			var un = {
					get(e, t) {
						if (t === Tt) return e;
						const n = Wt(e);
						if (!It(n, t))
							return (function (e, t, n) {
								const r = dn(t, n);
								return r
									? 'value' in r
										? r.value
										: r.get?.call(e.draft_)
									: void 0;
							})(e, n, t);
						const r = n[t];
						return e.finalized_ || !Dt(r)
							? r
							: r === fn(e.base_, t)
								? (hn(e), (e.copy_[t] = mn(r, e)))
								: r;
					},
					has: (e, t) => t in Wt(e),
					ownKeys: e => Reflect.ownKeys(Wt(e)),
					set(e, t, n) {
						const r = dn(Wt(e), t);
						if (r?.set) return r.set.call(e.draft_, n), !0;
						if (!e.modified_) {
							const r = fn(Wt(e), t),
								i = r?.[Tt];
							if (i && i.base_ === n)
								return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
							if (
								((a = n) === (o = r)
									? 0 !== a || 1 / a == 1 / o
									: a != a && o != o) &&
								(void 0 !== n || It(e.base_, t))
							)
								return !0;
							hn(e), pn(e);
						}
						var a, o;
						return (
							(e.copy_[t] === n && (void 0 !== n || t in e.copy_)) ||
								(Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
								((e.copy_[t] = n), (e.assigned_[t] = !0)),
							!0
						);
					},
					deleteProperty: (e, t) => (
						void 0 !== fn(e.base_, t) || t in e.base_
							? ((e.assigned_[t] = !1), hn(e), pn(e))
							: delete e.assigned_[t],
						e.copy_ && delete e.copy_[t],
						!0
					),
					getOwnPropertyDescriptor(e, t) {
						const n = Wt(e),
							r = Reflect.getOwnPropertyDescriptor(n, t);
						return r
							? {
									writable: !0,
									configurable: 1 !== e.type_ || 'length' !== t,
									enumerable: r.enumerable,
									value: n[t],
								}
							: r;
					},
					defineProperty() {
						jt(11);
					},
					getPrototypeOf: e => Ft(e.base_),
					setPrototypeOf() {
						jt(12);
					},
				},
				cn = {};
			function fn(e, t) {
				const n = e[Tt];
				return (n ? Wt(n) : e)[t];
			}
			function dn(e, t) {
				if (!(t in e)) return;
				let n = Ft(e);
				for (; n; ) {
					const e = Object.getOwnPropertyDescriptor(n, t);
					if (e) return e;
					n = Ft(n);
				}
			}
			function pn(e) {
				e.modified_ || ((e.modified_ = !0), e.parent_ && pn(e.parent_));
			}
			function hn(e) {
				e.copy_ ||
					(e.copy_ = Ht(e.base_, e.scope_.immer_.useStrictShallowCopy_));
			}
			function mn(e, t) {
				const n = qt(e)
					? Jt('MapSet').proxyMap_(e, t)
					: Qt(e)
						? Jt('MapSet').proxySet_(e, t)
						: (function (e, t) {
								const n = Array.isArray(e),
									r = {
										type_: n ? 1 : 0,
										scope_: t ? t.scope_ : Yt(),
										modified_: !1,
										finalized_: !1,
										assigned_: {},
										parent_: t,
										base_: e,
										draft_: null,
										copy_: null,
										revoke_: null,
										isManual_: !1,
									};
								let a = r,
									o = un;
								n && ((a = [r]), (o = cn));
								const { revoke: i, proxy: l } = Proxy.revocable(a, o);
								return (r.draft_ = l), (r.revoke_ = i), l;
							})(e, t);
				return (t ? t.scope_ : Yt()).drafts_.push(n), n;
			}
			function yn(e) {
				return Lt(e) || jt(10), vn(e);
			}
			function vn(e) {
				if (!Dt(e) || Kt(e)) return e;
				const t = e[Tt];
				let n;
				if (t) {
					if (!t.modified_) return t.base_;
					(t.finalized_ = !0),
						(n = Ht(e, t.scope_.immer_.useStrictShallowCopy_));
				} else n = Ht(e, !0);
				return (
					Mt(n, (e, t) => {
						Bt(n, e, vn(t));
					}),
					t && (t.finalized_ = !1),
					n
				);
			}
			Mt(un, (e, t) => {
				cn[e] = function () {
					return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
				};
			}),
				(cn.deleteProperty = function (e, t) {
					return cn.set.call(this, e, t, void 0);
				}),
				(cn.set = function (e, t, n) {
					return un.set.call(this, e[0], t, n, e[0]);
				});
			var gn = new (class {
					constructor(e) {
						(this.autoFreeze_ = !0),
							(this.useStrictShallowCopy_ = !1),
							(this.produce = (e, t, n) => {
								if ('function' == typeof e && 'function' != typeof t) {
									const n = t;
									t = e;
									const r = this;
									return function (e = n, ...a) {
										return r.produce(e, e => t.call(this, e, ...a));
									};
								}
								let r;
								if (
									('function' != typeof t && jt(6),
									void 0 !== n && 'function' != typeof n && jt(7),
									Dt(e))
								) {
									const a = nn(this),
										o = mn(e, void 0);
									let i = !0;
									try {
										(r = t(o)), (i = !1);
									} finally {
										i ? en(a) : tn(a);
									}
									return Zt(a, n), an(r, a);
								}
								if (!e || 'object' != typeof e) {
									if (
										((r = t(e)),
										void 0 === r && (r = e),
										r === Rt && (r = void 0),
										this.autoFreeze_ && $t(r, !0),
										n)
									) {
										const t = [],
											a = [];
										Jt('Patches').generateReplacementPatches_(e, r, t, a),
											n(t, a);
									}
									return r;
								}
								jt(1);
							}),
							(this.produceWithPatches = (e, t) => {
								if ('function' == typeof e)
									return (t, ...n) =>
										this.produceWithPatches(t, t => e(t, ...n));
								let n, r;
								return [
									this.produce(e, t, (e, t) => {
										(n = e), (r = t);
									}),
									n,
									r,
								];
							}),
							'boolean' == typeof e?.autoFreeze &&
								this.setAutoFreeze(e.autoFreeze),
							'boolean' == typeof e?.useStrictShallowCopy &&
								this.setUseStrictShallowCopy(e.useStrictShallowCopy);
					}
					createDraft(e) {
						Dt(e) || jt(8), Lt(e) && (e = yn(e));
						const t = nn(this),
							n = mn(e, void 0);
						return (n[Tt].isManual_ = !0), tn(t), n;
					}
					finishDraft(e, t) {
						const n = e && e[Tt];
						(n && n.isManual_) || jt(9);
						const { scope_: r } = n;
						return Zt(r, t), an(void 0, r);
					}
					setAutoFreeze(e) {
						this.autoFreeze_ = e;
					}
					setUseStrictShallowCopy(e) {
						this.useStrictShallowCopy_ = e;
					}
					applyPatches(e, t) {
						let n;
						for (n = t.length - 1; n >= 0; n--) {
							const r = t[n];
							if (0 === r.path.length && 'replace' === r.op) {
								e = r.value;
								break;
							}
						}
						n > -1 && (t = t.slice(n + 1));
						const r = Jt('Patches').applyPatches_;
						return Lt(e) ? r(e, t) : this.produce(e, e => r(e, t));
					}
				})(),
				bn = gn.produce;
			gn.produceWithPatches.bind(gn),
				gn.setAutoFreeze.bind(gn),
				gn.setUseStrictShallowCopy.bind(gn),
				gn.applyPatches.bind(gn),
				gn.createDraft.bind(gn),
				gn.finishDraft.bind(gn);
			var wn = e => (Array.isArray(e) ? e : [e]);
			Symbol(), Object.getPrototypeOf({});
			var Sn =
					'undefined' != typeof WeakRef
						? WeakRef
						: class {
								constructor(e) {
									this.value = e;
								}
								deref() {
									return this.value;
								}
							},
				kn = 0,
				En = 1;
			function xn() {
				return { s: kn, v: void 0, o: null, p: null };
			}
			function Cn(e, t = {}) {
				let n = xn();
				const { resultEqualityCheck: r } = t;
				let a,
					o = 0;
				function i() {
					let t = n;
					const { length: i } = arguments;
					for (let e = 0, n = i; e < n; e++) {
						const n = arguments[e];
						if (
							'function' == typeof n ||
							('object' == typeof n && null !== n)
						) {
							let e = t.o;
							null === e && (t.o = e = new WeakMap());
							const r = e.get(n);
							void 0 === r ? ((t = xn()), e.set(n, t)) : (t = r);
						} else {
							let e = t.p;
							null === e && (t.p = e = new Map());
							const r = e.get(n);
							void 0 === r ? ((t = xn()), e.set(n, t)) : (t = r);
						}
					}
					const l = t;
					let s;
					if (
						(t.s === En ? (s = t.v) : ((s = e.apply(null, arguments)), o++),
						(l.s = En),
						r)
					) {
						const e = a?.deref?.() ?? a;
						null != e && r(e, s) && ((s = e), 0 !== o && o--),
							(a =
								('object' == typeof s && null !== s) || 'function' == typeof s
									? new Sn(s)
									: s);
					}
					return (l.v = s), s;
				}
				return (
					(i.clearCache = () => {
						(n = xn()), i.resetResultsCount();
					}),
					(i.resultsCount = () => o),
					(i.resetResultsCount = () => {
						o = 0;
					}),
					i
				);
			}
			function On(e, ...t) {
				const n =
						'function' == typeof e ? { memoize: e, memoizeOptions: t } : e,
					r = (...e) => {
						let t,
							r = 0,
							a = 0,
							o = {},
							i = e.pop();
						'object' == typeof i && ((o = i), (i = e.pop())),
							(function (
								e,
								t = 'expected a function, instead received ' + typeof e,
							) {
								if ('function' != typeof e) throw new TypeError(t);
							})(
								i,
								`createSelector expects an output function after the inputs, but received: [${typeof i}]`,
							);
						const l = { ...n, ...o },
							{
								memoize: s,
								memoizeOptions: u = [],
								argsMemoize: c = Cn,
								argsMemoizeOptions: f = [],
								devModeChecks: d = {},
							} = l,
							p = wn(u),
							h = wn(f),
							m = (function (e) {
								const t = Array.isArray(e[0]) ? e[0] : e;
								return (
									(function (
										e,
										t = 'expected all items to be functions, instead received the following types: ',
									) {
										if (!e.every(e => 'function' == typeof e)) {
											const n = e
												.map(e =>
													'function' == typeof e
														? `function ${e.name || 'unnamed'}()`
														: typeof e,
												)
												.join(', ');
											throw new TypeError(`${t}[${n}]`);
										}
									})(
										t,
										'createSelector expects all input-selectors to be functions, but received the following types: ',
									),
									t
								);
							})(e),
							y = s(
								function () {
									return r++, i.apply(null, arguments);
								},
								...p,
							),
							v = c(
								function () {
									a++;
									const e = (function (e, t) {
										const n = [],
											{ length: r } = e;
										for (let a = 0; a < r; a++) n.push(e[a].apply(null, t));
										return n;
									})(m, arguments);
									return (t = y.apply(null, e)), t;
								},
								...h,
							);
						return Object.assign(v, {
							resultFunc: i,
							memoizedResultFunc: y,
							dependencies: m,
							dependencyRecomputations: () => a,
							resetDependencyRecomputations: () => {
								a = 0;
							},
							lastResult: () => t,
							recomputations: () => r,
							resetRecomputations: () => {
								r = 0;
							},
							memoize: s,
							argsMemoize: c,
						});
					};
				return Object.assign(r, { withTypes: () => r }), r;
			}
			var _n = On(Cn),
				Pn = Object.assign(
					(e, t = _n) => {
						!(function (
							e,
							t = 'expected an object, instead received ' + typeof e,
						) {
							if ('object' != typeof e) throw new TypeError(t);
						})(
							e,
							'createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ' +
								typeof e,
						);
						const n = Object.keys(e);
						return t(
							n.map(t => e[t]),
							(...e) => e.reduce((e, t, r) => ((e[n[r]] = t), e), {}),
						);
					},
					{ withTypes: () => Pn },
				);
			function Rn(e) {
				return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
			}
			var Nn = (() =>
					('function' == typeof Symbol && Symbol.observable) ||
					'@@observable')(),
				Tn = () => Math.random().toString(36).substring(7).split('').join('.'),
				jn = {
					INIT: `@@redux/INIT${Tn()}`,
					REPLACE: `@@redux/REPLACE${Tn()}`,
					PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Tn()}`,
				};
			function Fn(e) {
				if ('object' != typeof e || null === e) return !1;
				let t = e;
				for (; null !== Object.getPrototypeOf(t); )
					t = Object.getPrototypeOf(t);
				return (
					Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
				);
			}
			function Ln(e, t, n) {
				if ('function' != typeof e) throw new Error(Rn(2));
				if (
					('function' == typeof t && 'function' == typeof n) ||
					('function' == typeof n && 'function' == typeof arguments[3])
				)
					throw new Error(Rn(0));
				if (
					('function' == typeof t && void 0 === n && ((n = t), (t = void 0)),
					void 0 !== n)
				) {
					if ('function' != typeof n) throw new Error(Rn(1));
					return n(Ln)(e, t);
				}
				let r = e,
					a = t,
					o = new Map(),
					i = o,
					l = 0,
					s = !1;
				function u() {
					i === o &&
						((i = new Map()),
						o.forEach((e, t) => {
							i.set(t, e);
						}));
				}
				function c() {
					if (s) throw new Error(Rn(3));
					return a;
				}
				function f(e) {
					if ('function' != typeof e) throw new Error(Rn(4));
					if (s) throw new Error(Rn(5));
					let t = !0;
					u();
					const n = l++;
					return (
						i.set(n, e),
						function () {
							if (t) {
								if (s) throw new Error(Rn(6));
								(t = !1), u(), i.delete(n), (o = null);
							}
						}
					);
				}
				function d(e) {
					if (!Fn(e)) throw new Error(Rn(7));
					if (void 0 === e.type) throw new Error(Rn(8));
					if ('string' != typeof e.type) throw new Error(Rn(17));
					if (s) throw new Error(Rn(9));
					try {
						(s = !0), (a = r(a, e));
					} finally {
						s = !1;
					}
					return (
						(o = i).forEach(e => {
							e();
						}),
						e
					);
				}
				return (
					d({ type: jn.INIT }),
					{
						dispatch: d,
						subscribe: f,
						getState: c,
						replaceReducer: function (e) {
							if ('function' != typeof e) throw new Error(Rn(10));
							(r = e), d({ type: jn.REPLACE });
						},
						[Nn]: function () {
							const e = f;
							return {
								subscribe(t) {
									if ('object' != typeof t || null === t)
										throw new Error(Rn(11));
									function n() {
										const e = t;
										e.next && e.next(c());
									}
									return n(), { unsubscribe: e(n) };
								},
								[Nn]() {
									return this;
								},
							};
						},
					}
				);
			}
			function Dn(...e) {
				return 0 === e.length
					? e => e
					: 1 === e.length
						? e[0]
						: e.reduce(
								(e, t) =>
									(...n) =>
										e(t(...n)),
							);
			}
			function An(e) {
				return ({ dispatch: t, getState: n }) =>
					r =>
					a =>
						'function' == typeof a ? a(t, n, e) : r(a);
			}
			var zn = An(),
				Mn = An,
				Un =
					(((...e) => {
						On(...e);
					})(Cn),
					'undefined' != typeof window &&
					window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
						? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
						: function () {
								if (0 !== arguments.length)
									return 'object' == typeof arguments[0]
										? Dn
										: Dn.apply(null, arguments);
							});
			function In(e, t) {
				function n(...n) {
					if (t) {
						let r = t(...n);
						if (!r) throw new Error(rr(0));
						return {
							type: e,
							payload: r.payload,
							...('meta' in r && { meta: r.meta }),
							...('error' in r && { error: r.error }),
						};
					}
					return { type: e, payload: n[0] };
				}
				return (
					(n.toString = () => `${e}`),
					(n.type = e),
					(n.match = t =>
						(function (e) {
							return Fn(e) && 'type' in e && 'string' == typeof e.type;
						})(t) && t.type === e),
					n
				);
			}
			'undefined' != typeof window &&
				window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__;
			var Bn = class e extends Array {
				constructor(...t) {
					super(...t), Object.setPrototypeOf(this, e.prototype);
				}
				static get [Symbol.species]() {
					return e;
				}
				concat(...e) {
					return super.concat.apply(this, e);
				}
				prepend(...t) {
					return 1 === t.length && Array.isArray(t[0])
						? new e(...t[0].concat(this))
						: new e(...t.concat(this));
				}
			};
			function qn(e) {
				return Dt(e) ? bn(e, () => {}) : e;
			}
			function Qn(e, t, n) {
				if (e.has(t)) {
					let r = e.get(t);
					return n.update && ((r = n.update(r, t, e)), e.set(t, r)), r;
				}
				if (!n.insert) throw new Error(rr(10));
				const r = n.insert(t, e);
				return e.set(t, r), r;
			}
			var Wn = e => t => {
					setTimeout(t, e);
				},
				Hn =
					'undefined' != typeof window && window.requestAnimationFrame
						? window.requestAnimationFrame
						: Wn(10);
			function $n(e) {
				const t = {},
					n = [];
				let r;
				const a = {
					addCase(e, n) {
						const r = 'string' == typeof e ? e : e.type;
						if (!r) throw new Error(rr(28));
						if (r in t) throw new Error(rr(29));
						return (t[r] = n), a;
					},
					addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), a),
					addDefaultCase: e => ((r = e), a),
				};
				return e(a), [t, n, r];
			}
			var Vn = Symbol.for('rtk-slice-createasyncthunk');
			function Kn(e, t) {
				return `${e}/${t}`;
			}
			function Gn(e, t, n, r) {
				function a(a, ...o) {
					let i = n.call(e, a);
					return void 0 === i && r && (i = e.getInitialState()), t(i, ...o);
				}
				return (a.unwrapped = t), a;
			}
			var Xn = (function ({ creators: e } = {}) {
				const t = e?.asyncThunk?.[Vn];
				return function (e) {
					const { name: n, reducerPath: r = n } = e;
					if (!n) throw new Error(rr(11));
					const a =
							('function' == typeof e.reducers
								? e.reducers(
										(function () {
											function e(e, t) {
												return {
													_reducerDefinitionType: 'asyncThunk',
													payloadCreator: e,
													...t,
												};
											}
											return (
												(e.withTypes = () => e),
												{
													reducer: e =>
														Object.assign(
															{ [e.name]: (...t) => e(...t) }[e.name],
															{ _reducerDefinitionType: 'reducer' },
														),
													preparedReducer: (e, t) => ({
														_reducerDefinitionType: 'reducerWithPrepare',
														prepare: e,
														reducer: t,
													}),
													asyncThunk: e,
												}
											);
										})(),
									)
								: e.reducers) || {},
						o = Object.keys(a),
						i = {
							sliceCaseReducersByName: {},
							sliceCaseReducersByType: {},
							actionCreators: {},
							sliceMatchers: [],
						},
						l = {
							addCase(e, t) {
								const n = 'string' == typeof e ? e : e.type;
								if (!n) throw new Error(rr(12));
								if (n in i.sliceCaseReducersByType) throw new Error(rr(13));
								return (i.sliceCaseReducersByType[n] = t), l;
							},
							addMatcher: (e, t) => (
								i.sliceMatchers.push({ matcher: e, reducer: t }), l
							),
							exposeAction: (e, t) => ((i.actionCreators[e] = t), l),
							exposeCaseReducer: (e, t) => (
								(i.sliceCaseReducersByName[e] = t), l
							),
						};
					function s() {
						const [t = {}, n = [], r] =
								'function' == typeof e.extraReducers
									? $n(e.extraReducers)
									: [e.extraReducers],
							a = { ...t, ...i.sliceCaseReducersByType };
						return (function (e, t) {
							let o,
								[l, s, u] = $n(e => {
									for (let t in a) e.addCase(t, a[t]);
									for (let t of i.sliceMatchers)
										e.addMatcher(t.matcher, t.reducer);
									for (let t of n) e.addMatcher(t.matcher, t.reducer);
									r && e.addDefaultCase(r);
								});
							if ('function' == typeof e) o = () => qn(e());
							else {
								const t = qn(e);
								o = () => t;
							}
							function c(e = o(), t) {
								let n = [
									l[t.type],
									...s
										.filter(({ matcher: e }) => e(t))
										.map(({ reducer: e }) => e),
								];
								return (
									0 === n.filter(e => !!e).length && (n = [u]),
									n.reduce((e, n) => {
										if (n) {
											if (Lt(e)) {
												const r = n(e, t);
												return void 0 === r ? e : r;
											}
											if (Dt(e)) return bn(e, e => n(e, t));
											{
												const r = n(e, t);
												if (void 0 === r) {
													if (null === e) return e;
													throw new Error(rr(9));
												}
												return r;
											}
										}
										return e;
									}, e)
								);
							}
							return (c.getInitialState = o), c;
						})(e.initialState);
					}
					o.forEach(r => {
						const o = a[r],
							i = {
								reducerName: r,
								type: Kn(n, r),
								createNotation: 'function' == typeof e.reducers,
							};
						!(function (e) {
							return 'asyncThunk' === e._reducerDefinitionType;
						})(o)
							? (function (
									{ type: e, reducerName: t, createNotation: n },
									r,
									a,
								) {
									let o, i;
									if ('reducer' in r) {
										if (
											n &&
											!(function (e) {
												return (
													'reducerWithPrepare' === e._reducerDefinitionType
												);
											})(r)
										)
											throw new Error(rr(17));
										(o = r.reducer), (i = r.prepare);
									} else o = r;
									a.addCase(e, o)
										.exposeCaseReducer(t, o)
										.exposeAction(t, i ? In(e, i) : In(e));
								})(i, o, l)
							: (function ({ type: e, reducerName: t }, n, r, a) {
									if (!a) throw new Error(rr(18));
									const {
											payloadCreator: o,
											fulfilled: i,
											pending: l,
											rejected: s,
											settled: u,
											options: c,
										} = n,
										f = a(e, o, c);
									r.exposeAction(t, f),
										i && r.addCase(f.fulfilled, i),
										l && r.addCase(f.pending, l),
										s && r.addCase(f.rejected, s),
										u && r.addMatcher(f.settled, u),
										r.exposeCaseReducer(t, {
											fulfilled: i || Jn,
											pending: l || Jn,
											rejected: s || Jn,
											settled: u || Jn,
										});
								})(i, o, l, t);
					});
					const u = e => e,
						c = new WeakMap();
					let f;
					const d = {
						name: n,
						reducerPath: r,
						reducer: (e, t) => (f || (f = s()), f(e, t)),
						actions: i.actionCreators,
						caseReducers: i.sliceCaseReducersByName,
						getInitialState: () => (f || (f = s()), f.getInitialState()),
						getSelectors(t = u) {
							const n = Qn(c, this, { insert: () => new WeakMap() });
							return Qn(n, t, {
								insert: () => {
									const n = {};
									for (const [r, a] of Object.entries(e.selectors ?? {}))
										n[r] = Gn(this, a, t, this !== d);
									return n;
								},
							});
						},
						selectSlice(e) {
							let t = e[this.reducerPath];
							return (
								void 0 === t && this !== d && (t = this.getInitialState()), t
							);
						},
						get selectors() {
							return this.getSelectors(this.selectSlice);
						},
						injectInto(e, { reducerPath: t, ...n } = {}) {
							const r = t ?? this.reducerPath;
							return (
								e.inject({ reducerPath: r, reducer: this.reducer }, n),
								{ ...this, reducerPath: r }
							);
						},
					};
					return d;
				};
			})();
			function Jn() {}
			var Yn,
				Zn,
				er,
				{ assign: tr } = Object,
				nr = 'listenerMiddleware';
			function rr(e) {
				return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
			}
			In(`${nr}/add`),
				In(`${nr}/removeAll`),
				In(`${nr}/remove`),
				Symbol.for('rtk-state-proxy-original');
			var ar = 'username',
				or = 'token',
				ir = Xn({
					name: 'user',
					initialState: {
						username:
							null !== (Zn = localStorage.getItem(ar)) && void 0 !== Zn
								? Zn
								: '',
						token:
							null !== (er = localStorage.getItem(or)) && void 0 !== er
								? er
								: '',
					},
					reducers: {
						login: function (e, t) {
							(e.token = t.payload.token),
								(e.username = t.payload.username),
								localStorage.setItem(or, e.token),
								localStorage.setItem(ar, e.username);
						},
						logout: function (e) {
							localStorage.removeItem(or),
								localStorage.removeItem(ar),
								(e.username = ''),
								(e.token = '');
						},
					},
				}),
				lr = (Yn = ir.actions).login,
				sr = Yn.logout;
			const ur = (function (e) {
					const t = function (e) {
							const {
								thunk: t = !0,
								immutableCheck: n = !0,
								serializableCheck: r = !0,
								actionCreatorCheck: a = !0,
							} = e ?? {};
							let o = new Bn();
							return (
								t &&
									('boolean' == typeof t
										? o.push(zn)
										: o.push(Mn(t.extraArgument))),
								o
							);
						},
						{
							reducer: n,
							middleware: r,
							devTools: a = !0,
							preloadedState: o,
							enhancers: i,
						} = e || {};
					let l, s;
					if ('function' == typeof n) l = n;
					else {
						if (!Fn(n)) throw new Error(rr(1));
						l = (function (e) {
							const t = Object.keys(e),
								n = {};
							for (let r = 0; r < t.length; r++) {
								const a = t[r];
								'function' == typeof e[a] && (n[a] = e[a]);
							}
							const r = Object.keys(n);
							let a;
							try {
								!(function (e) {
									Object.keys(e).forEach(t => {
										const n = e[t];
										if (void 0 === n(void 0, { type: jn.INIT }))
											throw new Error(Rn(12));
										if (
											void 0 === n(void 0, { type: jn.PROBE_UNKNOWN_ACTION() })
										)
											throw new Error(Rn(13));
									});
								})(n);
							} catch (e) {
								a = e;
							}
							return function (e = {}, t) {
								if (a) throw a;
								let o = !1;
								const i = {};
								for (let a = 0; a < r.length; a++) {
									const l = r[a],
										s = n[l],
										u = e[l],
										c = s(u, t);
									if (void 0 === c) throw (t && t.type, new Error(Rn(14)));
									(i[l] = c), (o = o || c !== u);
								}
								return (o = o || r.length !== Object.keys(e).length), o ? i : e;
							};
						})(n);
					}
					s = 'function' == typeof r ? r(t) : t();
					let u = Dn;
					a && (u = Un({ trace: !1, ...('object' == typeof a && a) }));
					const c = (function (...e) {
							return t => (n, r) => {
								const a = t(n, r);
								let o = () => {
									throw new Error(Rn(15));
								};
								const i = {
										getState: a.getState,
										dispatch: (e, ...t) => o(e, ...t),
									},
									l = e.map(e => e(i));
								return (o = Dn(...l)(a.dispatch)), { ...a, dispatch: o };
							};
						})(...s),
						f = (e =>
							function (t) {
								const { autoBatch: n = !0 } = t ?? {};
								let r = new Bn(e);
								return (
									n &&
										r.push(
											(
												(e = { type: 'raf' }) =>
												t =>
												(...n) => {
													const r = t(...n);
													let a = !0,
														o = !1,
														i = !1;
													const l = new Set(),
														s =
															'tick' === e.type
																? queueMicrotask
																: 'raf' === e.type
																	? Hn
																	: 'callback' === e.type
																		? e.queueNotification
																		: Wn(e.timeout),
														u = () => {
															(i = !1), o && ((o = !1), l.forEach(e => e()));
														};
													return Object.assign({}, r, {
														subscribe(e) {
															const t = r.subscribe(() => a && e());
															return (
																l.add(e),
																() => {
																	t(), l.delete(e);
																}
															);
														},
														dispatch(e) {
															try {
																return (
																	(a = !e?.meta?.RTK_autoBatch),
																	(o = !a),
																	o && (i || ((i = !0), s(u))),
																	r.dispatch(e)
																);
															} finally {
																a = !0;
															}
														},
													});
												}
											)('object' == typeof n ? n : void 0),
										),
									r
								);
							})(c);
					return Ln(l, o, u(...('function' == typeof i ? i(f) : f())));
				})({ reducer: { userSlice: ir.reducer } }),
				cr = function () {
					var e = (0, o.useContext)(We),
						t = e.theme,
						n = e.setTheme;
					return {
						theme: t,
						toggleTheme: function () {
							var e = t === qe.DARK ? qe.NORMAL : qe.DARK;
							n(e), localStorage.setItem(He, e);
						},
					};
				};
			var fr = class extends ft {
				constructor(e, t) {
					super(),
						(this.options = t),
						(this.#O = e),
						(this.#_ = null),
						this.bindMethods(),
						this.setOptions(t);
				}
				#O;
				#P = void 0;
				#R = void 0;
				#N = void 0;
				#T;
				#j;
				#_;
				#F;
				#L;
				#D;
				#A;
				#z;
				#M;
				#U = new Set();
				bindMethods() {
					this.refetch = this.refetch.bind(this);
				}
				onSubscribe() {
					1 === this.listeners.size &&
						(this.#P.addObserver(this),
						dr(this.#P, this.options) ? this.#I() : this.updateResult(),
						this.#B());
				}
				onUnsubscribe() {
					this.hasListeners() || this.destroy();
				}
				shouldFetchOnReconnect() {
					return pr(this.#P, this.options, this.options.refetchOnReconnect);
				}
				shouldFetchOnWindowFocus() {
					return pr(this.#P, this.options, this.options.refetchOnWindowFocus);
				}
				destroy() {
					(this.listeners = new Set()),
						this.#q(),
						this.#Q(),
						this.#P.removeObserver(this);
				}
				setOptions(e, t) {
					const n = this.options,
						r = this.#P;
					if (
						((this.options = this.#O.defaultQueryOptions(e)),
						rt(n, this.options) ||
							this.#O
								.getQueryCache()
								.notify({
									type: 'observerOptionsUpdated',
									query: this.#P,
									observer: this,
								}),
						void 0 !== this.options.enabled &&
							'boolean' != typeof this.options.enabled)
					)
						throw new Error('Expected enabled to be a boolean');
					this.options.queryKey || (this.options.queryKey = n.queryKey),
						this.#W();
					const a = this.hasListeners();
					a && hr(this.#P, r, this.options, n) && this.#I(),
						this.updateResult(t),
						!a ||
							(this.#P === r &&
								this.options.enabled === n.enabled &&
								this.options.staleTime === n.staleTime) ||
							this.#H();
					const o = this.#$();
					!a ||
						(this.#P === r &&
							this.options.enabled === n.enabled &&
							o === this.#M) ||
						this.#V(o);
				}
				getOptimisticResult(e) {
					const t = this.#O.getQueryCache().build(this.#O, e),
						n = this.createResult(t, e);
					return (
						(r = n),
						!rt(this.getCurrentResult(), r) &&
							((this.#N = n),
							(this.#j = this.options),
							(this.#T = this.#P.state)),
						n
					);
					var r;
				}
				getCurrentResult() {
					return this.#N;
				}
				trackResult(e) {
					const t = {};
					return (
						Object.keys(e).forEach(n => {
							Object.defineProperty(t, n, {
								configurable: !1,
								enumerable: !0,
								get: () => (this.#U.add(n), e[n]),
							});
						}),
						t
					);
				}
				getCurrentQuery() {
					return this.#P;
				}
				refetch({ ...e } = {}) {
					return this.fetch({ ...e });
				}
				fetchOptimistic(e) {
					const t = this.#O.defaultQueryOptions(e),
						n = this.#O.getQueryCache().build(this.#O, t);
					return (
						(n.isFetchingOptimistic = !0),
						n.fetch().then(() => this.createResult(n, t))
					);
				}
				fetch(e) {
					return this.#I({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
						() => (this.updateResult(), this.#N),
					);
				}
				#I(e) {
					this.#W();
					let t = this.#P.fetch(this.options, e);
					return e?.throwOnError || (t = t.catch(Ke)), t;
				}
				#H() {
					if ((this.#q(), Ve || this.#N.isStale || !Ge(this.options.staleTime)))
						return;
					const e = Xe(this.#N.dataUpdatedAt, this.options.staleTime) + 1;
					this.#A = setTimeout(() => {
						this.#N.isStale || this.updateResult();
					}, e);
				}
				#$() {
					return (
						('function' == typeof this.options.refetchInterval
							? this.options.refetchInterval(this.#P)
							: this.options.refetchInterval) ?? !1
					);
				}
				#V(e) {
					this.#Q(),
						(this.#M = e),
						!Ve &&
							!1 !== this.options.enabled &&
							Ge(this.#M) &&
							0 !== this.#M &&
							(this.#z = setInterval(() => {
								(this.options.refetchIntervalInBackground || dt.isFocused()) &&
									this.#I();
							}, this.#M));
				}
				#B() {
					this.#H(), this.#V(this.#$());
				}
				#q() {
					this.#A && (clearTimeout(this.#A), (this.#A = void 0));
				}
				#Q() {
					this.#z && (clearInterval(this.#z), (this.#z = void 0));
				}
				createResult(e, t) {
					const n = this.#P,
						r = this.options,
						a = this.#N,
						o = this.#T,
						i = this.#j,
						l = e !== n ? e.state : this.#R,
						{ state: s } = e;
					let u,
						{ error: c, errorUpdatedAt: f, fetchStatus: d, status: p } = s,
						h = !1;
					if (t._optimisticResults) {
						const a = this.hasListeners(),
							o = !a && dr(e, t),
							i = a && hr(e, n, t, r);
						(o || i) &&
							((d = mt(e.options.networkMode) ? 'fetching' : 'paused'),
							s.dataUpdatedAt || (p = 'pending')),
							'isRestoring' === t._optimisticResults && (d = 'idle');
					}
					if (t.select && void 0 !== s.data)
						if (a && s.data === o?.data && t.select === this.#F) u = this.#L;
						else
							try {
								(this.#F = t.select),
									(u = t.select(s.data)),
									(u = lt(a?.data, u, t)),
									(this.#L = u),
									(this.#_ = null);
							} catch (e) {
								this.#_ = e;
							}
					else u = s.data;
					if (void 0 !== t.placeholderData && void 0 === u && 'pending' === p) {
						let e;
						if (
							a?.isPlaceholderData &&
							t.placeholderData === i?.placeholderData
						)
							e = a.data;
						else if (
							((e =
								'function' == typeof t.placeholderData
									? t.placeholderData(this.#D?.state.data, this.#D)
									: t.placeholderData),
							t.select && void 0 !== e)
						)
							try {
								(e = t.select(e)), (this.#_ = null);
							} catch (e) {
								this.#_ = e;
							}
						void 0 !== e &&
							((p = 'success'), (u = lt(a?.data, e, t)), (h = !0));
					}
					this.#_ &&
						((c = this.#_), (u = this.#L), (f = Date.now()), (p = 'error'));
					const m = 'fetching' === d,
						y = 'pending' === p,
						v = 'error' === p,
						g = y && m;
					return {
						status: p,
						fetchStatus: d,
						isPending: y,
						isSuccess: 'success' === p,
						isError: v,
						isInitialLoading: g,
						isLoading: g,
						data: u,
						dataUpdatedAt: s.dataUpdatedAt,
						error: c,
						errorUpdatedAt: f,
						failureCount: s.fetchFailureCount,
						failureReason: s.fetchFailureReason,
						errorUpdateCount: s.errorUpdateCount,
						isFetched: s.dataUpdateCount > 0 || s.errorUpdateCount > 0,
						isFetchedAfterMount:
							s.dataUpdateCount > l.dataUpdateCount ||
							s.errorUpdateCount > l.errorUpdateCount,
						isFetching: m,
						isRefetching: m && !y,
						isLoadingError: v && 0 === s.dataUpdatedAt,
						isPaused: 'paused' === d,
						isPlaceholderData: h,
						isRefetchError: v && 0 !== s.dataUpdatedAt,
						isStale: mr(e, t),
						refetch: this.refetch,
					};
				}
				updateResult(e) {
					const t = this.#N,
						n = this.createResult(this.#P, this.options);
					if (
						((this.#T = this.#P.state),
						(this.#j = this.options),
						void 0 !== this.#T.data && (this.#D = this.#P),
						rt(n, t))
					)
						return;
					this.#N = n;
					const r = {};
					!1 !== e?.listeners &&
						(() => {
							if (!t) return !0;
							const { notifyOnChangeProps: e } = this.options,
								n = 'function' == typeof e ? e() : e;
							if ('all' === n || (!n && !this.#U.size)) return !0;
							const r = new Set(n ?? this.#U);
							return (
								this.options.throwOnError && r.add('error'),
								Object.keys(this.#N).some(e => {
									const n = e;
									return this.#N[n] !== t[n] && r.has(n);
								})
							);
						})() &&
						(r.listeners = !0),
						this.#K({ ...r, ...e });
				}
				#W() {
					const e = this.#O.getQueryCache().build(this.#O, this.options);
					if (e === this.#P) return;
					const t = this.#P;
					(this.#P = e),
						(this.#R = e.state),
						this.hasListeners() &&
							(t?.removeObserver(this), e.addObserver(this));
				}
				onQueryUpdate() {
					this.updateResult(), this.hasListeners() && this.#B();
				}
				#K(e) {
					ct.batch(() => {
						e.listeners &&
							this.listeners.forEach(e => {
								e(this.#N);
							}),
							this.#O
								.getQueryCache()
								.notify({ query: this.#P, type: 'observerResultsUpdated' });
					});
				}
			};
			function dr(e, t) {
				return (
					(function (e, t) {
						return !(
							!1 === t.enabled ||
							e.state.dataUpdatedAt ||
							('error' === e.state.status && !1 === t.retryOnMount)
						);
					})(e, t) ||
					(e.state.dataUpdatedAt > 0 && pr(e, t, t.refetchOnMount))
				);
			}
			function pr(e, t, n) {
				if (!1 !== t.enabled) {
					const r = 'function' == typeof n ? n(e) : n;
					return 'always' === r || (!1 !== r && mr(e, t));
				}
				return !1;
			}
			function hr(e, t, n, r) {
				return (
					!1 !== n.enabled &&
					(e !== t || !1 === r.enabled) &&
					(!n.suspense || 'error' !== e.state.status) &&
					mr(e, n)
				);
			}
			function mr(e, t) {
				return e.isStaleByTime(t.staleTime);
			}
			var yr = o.createContext(
					(function () {
						let e = !1;
						return {
							clearReset: () => {
								e = !1;
							},
							reset: () => {
								e = !0;
							},
							isReset: () => e,
						};
					})(),
				),
				vr = o.createContext(!1);
			vr.Provider;
			function gr(e, t) {
				return (function (e, t, n) {
					const r = (e => {
							const t = o.useContext(Ot);
							if (e) return e;
							if (!t)
								throw new Error(
									'No QueryClient set, use QueryClientProvider to set one',
								);
							return t;
						})(n),
						a = o.useContext(vr),
						i = o.useContext(yr),
						l = r.defaultQueryOptions(e);
					(l._optimisticResults = a ? 'isRestoring' : 'optimistic'),
						(e => {
							e.suspense &&
								'number' != typeof e.staleTime &&
								(e.staleTime = 1e3);
						})(l),
						((e, t) => {
							(e.suspense || e.throwOnError) &&
								(t.isReset() || (e.retryOnMount = !1));
						})(l, i),
						(e => {
							o.useEffect(() => {
								e.clearReset();
							}, [e]);
						})(i);
					const [s] = o.useState(() => new t(r, l)),
						u = s.getOptimisticResult(l);
					if (
						(o.useSyncExternalStore(
							o.useCallback(
								e => {
									const t = a ? () => {} : s.subscribe(ct.batchCalls(e));
									return s.updateResult(), t;
								},
								[s, a],
							),
							() => s.getCurrentResult(),
							() => s.getCurrentResult(),
						),
						o.useEffect(() => {
							s.setOptions(l, { listeners: !1 });
						}, [l, s]),
						((e, t) => e?.suspense && t.isPending)(l, u))
					)
						throw ((e, t, n) =>
							t.fetchOptimistic(e).catch(() => {
								n.clearReset();
							}))(l, s, i);
					if (
						(({
							result: e,
							errorResetBoundary: t,
							throwOnError: n,
							query: r,
						}) => {
							return (
								e.isError &&
								!t.isReset() &&
								!e.isFetching &&
								r &&
								((a = n),
								(o = [e.error, r]),
								'function' == typeof a ? a(...o) : !!a)
							);
							var a, o;
						})({
							result: u,
							errorResetBoundary: i,
							throwOnError: l.throwOnError,
							query: r.getQueryCache().get(l.queryHash),
						})
					)
						throw u.error;
					return l.notifyOnChangeProps ? u : s.trackResult(u);
				})(e, fr, t);
			}
			function br(e, t) {
				return function () {
					return e.apply(t, arguments);
				};
			}
			const { toString: wr } = Object.prototype,
				{ getPrototypeOf: Sr } = Object,
				kr =
					((Er = Object.create(null)),
					e => {
						const t = wr.call(e);
						return Er[t] || (Er[t] = t.slice(8, -1).toLowerCase());
					});
			var Er;
			const xr = e => ((e = e.toLowerCase()), t => kr(t) === e),
				Cr = e => t => typeof t === e,
				{ isArray: Or } = Array,
				_r = Cr('undefined'),
				Pr = xr('ArrayBuffer'),
				Rr = Cr('string'),
				Nr = Cr('function'),
				Tr = Cr('number'),
				jr = e => null !== e && 'object' == typeof e,
				Fr = e => {
					if ('object' !== kr(e)) return !1;
					const t = Sr(e);
					return !(
						(null !== t &&
							t !== Object.prototype &&
							null !== Object.getPrototypeOf(t)) ||
						Symbol.toStringTag in e ||
						Symbol.iterator in e
					);
				},
				Lr = xr('Date'),
				Dr = xr('File'),
				Ar = xr('Blob'),
				zr = xr('FileList'),
				Mr = xr('URLSearchParams');
			function Ur(e, t, { allOwnKeys: n = !1 } = {}) {
				if (null == e) return;
				let r, a;
				if (('object' != typeof e && (e = [e]), Or(e)))
					for (r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
				else {
					const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
						o = a.length;
					let i;
					for (r = 0; r < o; r++) (i = a[r]), t.call(null, e[i], i, e);
				}
			}
			function Ir(e, t) {
				t = t.toLowerCase();
				const n = Object.keys(e);
				let r,
					a = n.length;
				for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
				return null;
			}
			const Br =
					'undefined' != typeof globalThis
						? globalThis
						: 'undefined' != typeof self
							? self
							: 'undefined' != typeof window
								? window
								: global,
				qr = e => !_r(e) && e !== Br,
				Qr =
					((Wr = 'undefined' != typeof Uint8Array && Sr(Uint8Array)),
					e => Wr && e instanceof Wr);
			var Wr;
			const Hr = xr('HTMLFormElement'),
				$r = (
					({ hasOwnProperty: e }) =>
					(t, n) =>
						e.call(t, n)
				)(Object.prototype),
				Vr = xr('RegExp'),
				Kr = (e, t) => {
					const n = Object.getOwnPropertyDescriptors(e),
						r = {};
					Ur(n, (n, a) => {
						let o;
						!1 !== (o = t(n, a, e)) && (r[a] = o || n);
					}),
						Object.defineProperties(e, r);
				},
				Gr = 'abcdefghijklmnopqrstuvwxyz',
				Xr = '0123456789',
				Jr = { DIGIT: Xr, ALPHA: Gr, ALPHA_DIGIT: Gr + Gr.toUpperCase() + Xr },
				Yr = xr('AsyncFunction'),
				Zr = {
					isArray: Or,
					isArrayBuffer: Pr,
					isBuffer: function (e) {
						return (
							null !== e &&
							!_r(e) &&
							null !== e.constructor &&
							!_r(e.constructor) &&
							Nr(e.constructor.isBuffer) &&
							e.constructor.isBuffer(e)
						);
					},
					isFormData: e => {
						let t;
						return (
							e &&
							(('function' == typeof FormData && e instanceof FormData) ||
								(Nr(e.append) &&
									('formdata' === (t = kr(e)) ||
										('object' === t &&
											Nr(e.toString) &&
											'[object FormData]' === e.toString()))))
						);
					},
					isArrayBufferView: function (e) {
						let t;
						return (
							(t =
								'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
									? ArrayBuffer.isView(e)
									: e && e.buffer && Pr(e.buffer)),
							t
						);
					},
					isString: Rr,
					isNumber: Tr,
					isBoolean: e => !0 === e || !1 === e,
					isObject: jr,
					isPlainObject: Fr,
					isUndefined: _r,
					isDate: Lr,
					isFile: Dr,
					isBlob: Ar,
					isRegExp: Vr,
					isFunction: Nr,
					isStream: e => jr(e) && Nr(e.pipe),
					isURLSearchParams: Mr,
					isTypedArray: Qr,
					isFileList: zr,
					forEach: Ur,
					merge: function e() {
						const { caseless: t } = (qr(this) && this) || {},
							n = {},
							r = (r, a) => {
								const o = (t && Ir(n, a)) || a;
								Fr(n[o]) && Fr(r)
									? (n[o] = e(n[o], r))
									: Fr(r)
										? (n[o] = e({}, r))
										: Or(r)
											? (n[o] = r.slice())
											: (n[o] = r);
							};
						for (let e = 0, t = arguments.length; e < t; e++)
							arguments[e] && Ur(arguments[e], r);
						return n;
					},
					extend: (e, t, n, { allOwnKeys: r } = {}) => (
						Ur(
							t,
							(t, r) => {
								n && Nr(t) ? (e[r] = br(t, n)) : (e[r] = t);
							},
							{ allOwnKeys: r },
						),
						e
					),
					trim: e =>
						e.trim
							? e.trim()
							: e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
					stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
					inherits: (e, t, n, r) => {
						(e.prototype = Object.create(t.prototype, r)),
							(e.prototype.constructor = e),
							Object.defineProperty(e, 'super', { value: t.prototype }),
							n && Object.assign(e.prototype, n);
					},
					toFlatObject: (e, t, n, r) => {
						let a, o, i;
						const l = {};
						if (((t = t || {}), null == e)) return t;
						do {
							for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
								(i = a[o]),
									(r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
							e = !1 !== n && Sr(e);
						} while (e && (!n || n(e, t)) && e !== Object.prototype);
						return t;
					},
					kindOf: kr,
					kindOfTest: xr,
					endsWith: (e, t, n) => {
						(e = String(e)),
							(void 0 === n || n > e.length) && (n = e.length),
							(n -= t.length);
						const r = e.indexOf(t, n);
						return -1 !== r && r === n;
					},
					toArray: e => {
						if (!e) return null;
						if (Or(e)) return e;
						let t = e.length;
						if (!Tr(t)) return null;
						const n = new Array(t);
						for (; t-- > 0; ) n[t] = e[t];
						return n;
					},
					forEachEntry: (e, t) => {
						const n = (e && e[Symbol.iterator]).call(e);
						let r;
						for (; (r = n.next()) && !r.done; ) {
							const n = r.value;
							t.call(e, n[0], n[1]);
						}
					},
					matchAll: (e, t) => {
						let n;
						const r = [];
						for (; null !== (n = e.exec(t)); ) r.push(n);
						return r;
					},
					isHTMLForm: Hr,
					hasOwnProperty: $r,
					hasOwnProp: $r,
					reduceDescriptors: Kr,
					freezeMethods: e => {
						Kr(e, (t, n) => {
							if (Nr(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(n))
								return !1;
							const r = e[n];
							Nr(r) &&
								((t.enumerable = !1),
								'writable' in t
									? (t.writable = !1)
									: t.set ||
										(t.set = () => {
											throw Error(
												"Can not rewrite read-only method '" + n + "'",
											);
										}));
						});
					},
					toObjectSet: (e, t) => {
						const n = {},
							r = e => {
								e.forEach(e => {
									n[e] = !0;
								});
							};
						return Or(e) ? r(e) : r(String(e).split(t)), n;
					},
					toCamelCase: e =>
						e
							.toLowerCase()
							.replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
								return t.toUpperCase() + n;
							}),
					noop: () => {},
					toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
					findKey: Ir,
					global: Br,
					isContextDefined: qr,
					ALPHABET: Jr,
					generateString: (e = 16, t = Jr.ALPHA_DIGIT) => {
						let n = '';
						const { length: r } = t;
						for (; e--; ) n += t[(Math.random() * r) | 0];
						return n;
					},
					isSpecCompliantForm: function (e) {
						return !!(
							e &&
							Nr(e.append) &&
							'FormData' === e[Symbol.toStringTag] &&
							e[Symbol.iterator]
						);
					},
					toJSONObject: e => {
						const t = new Array(10),
							n = (e, r) => {
								if (jr(e)) {
									if (t.indexOf(e) >= 0) return;
									if (!('toJSON' in e)) {
										t[r] = e;
										const a = Or(e) ? [] : {};
										return (
											Ur(e, (e, t) => {
												const o = n(e, r + 1);
												!_r(o) && (a[t] = o);
											}),
											(t[r] = void 0),
											a
										);
									}
								}
								return e;
							};
						return n(e, 0);
					},
					isAsyncFn: Yr,
					isThenable: e => e && (jr(e) || Nr(e)) && Nr(e.then) && Nr(e.catch),
				};
			function ea(e, t, n, r, a) {
				Error.call(this),
					Error.captureStackTrace
						? Error.captureStackTrace(this, this.constructor)
						: (this.stack = new Error().stack),
					(this.message = e),
					(this.name = 'AxiosError'),
					t && (this.code = t),
					n && (this.config = n),
					r && (this.request = r),
					a && (this.response = a);
			}
			Zr.inherits(ea, Error, {
				toJSON: function () {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: Zr.toJSONObject(this.config),
						code: this.code,
						status:
							this.response && this.response.status
								? this.response.status
								: null,
					};
				},
			});
			const ta = ea.prototype,
				na = {};
			[
				'ERR_BAD_OPTION_VALUE',
				'ERR_BAD_OPTION',
				'ECONNABORTED',
				'ETIMEDOUT',
				'ERR_NETWORK',
				'ERR_FR_TOO_MANY_REDIRECTS',
				'ERR_DEPRECATED',
				'ERR_BAD_RESPONSE',
				'ERR_BAD_REQUEST',
				'ERR_CANCELED',
				'ERR_NOT_SUPPORT',
				'ERR_INVALID_URL',
			].forEach(e => {
				na[e] = { value: e };
			}),
				Object.defineProperties(ea, na),
				Object.defineProperty(ta, 'isAxiosError', { value: !0 }),
				(ea.from = (e, t, n, r, a, o) => {
					const i = Object.create(ta);
					return (
						Zr.toFlatObject(
							e,
							i,
							function (e) {
								return e !== Error.prototype;
							},
							e => 'isAxiosError' !== e,
						),
						ea.call(i, e.message, t, n, r, a),
						(i.cause = e),
						(i.name = e.name),
						o && Object.assign(i, o),
						i
					);
				});
			const ra = ea;
			function aa(e) {
				return Zr.isPlainObject(e) || Zr.isArray(e);
			}
			function oa(e) {
				return Zr.endsWith(e, '[]') ? e.slice(0, -2) : e;
			}
			function ia(e, t, n) {
				return e
					? e
							.concat(t)
							.map(function (e, t) {
								return (e = oa(e)), !n && t ? '[' + e + ']' : e;
							})
							.join(n ? '.' : '')
					: t;
			}
			const la = Zr.toFlatObject(Zr, {}, null, function (e) {
					return /^is[A-Z]/.test(e);
				}),
				sa = function (e, t, n) {
					if (!Zr.isObject(e)) throw new TypeError('target must be an object');
					t = t || new FormData();
					const r = (n = Zr.toFlatObject(
							n,
							{ metaTokens: !0, dots: !1, indexes: !1 },
							!1,
							function (e, t) {
								return !Zr.isUndefined(t[e]);
							},
						)).metaTokens,
						a = n.visitor || u,
						o = n.dots,
						i = n.indexes,
						l =
							(n.Blob || ('undefined' != typeof Blob && Blob)) &&
							Zr.isSpecCompliantForm(t);
					if (!Zr.isFunction(a))
						throw new TypeError('visitor must be a function');
					function s(e) {
						if (null === e) return '';
						if (Zr.isDate(e)) return e.toISOString();
						if (!l && Zr.isBlob(e))
							throw new ra('Blob is not supported. Use a Buffer instead.');
						return Zr.isArrayBuffer(e) || Zr.isTypedArray(e)
							? l && 'function' == typeof Blob
								? new Blob([e])
								: Buffer.from(e)
							: e;
					}
					function u(e, n, a) {
						let l = e;
						if (e && !a && 'object' == typeof e)
							if (Zr.endsWith(n, '{}'))
								(n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
							else if (
								(Zr.isArray(e) &&
									(function (e) {
										return Zr.isArray(e) && !e.some(aa);
									})(e)) ||
								((Zr.isFileList(e) || Zr.endsWith(n, '[]')) &&
									(l = Zr.toArray(e)))
							)
								return (
									(n = oa(n)),
									l.forEach(function (e, r) {
										!Zr.isUndefined(e) &&
											null !== e &&
											t.append(
												!0 === i ? ia([n], r, o) : null === i ? n : n + '[]',
												s(e),
											);
									}),
									!1
								);
						return !!aa(e) || (t.append(ia(a, n, o), s(e)), !1);
					}
					const c = [],
						f = Object.assign(la, {
							defaultVisitor: u,
							convertValue: s,
							isVisitable: aa,
						});
					if (!Zr.isObject(e)) throw new TypeError('data must be an object');
					return (
						(function e(n, r) {
							if (!Zr.isUndefined(n)) {
								if (-1 !== c.indexOf(n))
									throw Error('Circular reference detected in ' + r.join('.'));
								c.push(n),
									Zr.forEach(n, function (n, o) {
										!0 ===
											(!(Zr.isUndefined(n) || null === n) &&
												a.call(t, n, Zr.isString(o) ? o.trim() : o, r, f)) &&
											e(n, r ? r.concat(o) : [o]);
									}),
									c.pop();
							}
						})(e),
						t
					);
				};
			function ua(e) {
				const t = {
					'!': '%21',
					"'": '%27',
					'(': '%28',
					')': '%29',
					'~': '%7E',
					'%20': '+',
					'%00': '\0',
				};
				return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
					return t[e];
				});
			}
			function ca(e, t) {
				(this._pairs = []), e && sa(e, this, t);
			}
			const fa = ca.prototype;
			(fa.append = function (e, t) {
				this._pairs.push([e, t]);
			}),
				(fa.toString = function (e) {
					const t = e
						? function (t) {
								return e.call(this, t, ua);
							}
						: ua;
					return this._pairs
						.map(function (e) {
							return t(e[0]) + '=' + t(e[1]);
						}, '')
						.join('&');
				});
			const da = ca;
			function pa(e) {
				return encodeURIComponent(e)
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',')
					.replace(/%20/g, '+')
					.replace(/%5B/gi, '[')
					.replace(/%5D/gi, ']');
			}
			function ha(e, t, n) {
				if (!t) return e;
				const r = (n && n.encode) || pa,
					a = n && n.serialize;
				let o;
				if (
					((o = a
						? a(t, n)
						: Zr.isURLSearchParams(t)
							? t.toString()
							: new da(t, n).toString(r)),
					o)
				) {
					const t = e.indexOf('#');
					-1 !== t && (e = e.slice(0, t)),
						(e += (-1 === e.indexOf('?') ? '?' : '&') + o);
				}
				return e;
			}
			const ma = class {
					constructor() {
						this.handlers = [];
					}
					use(e, t, n) {
						return (
							this.handlers.push({
								fulfilled: e,
								rejected: t,
								synchronous: !!n && n.synchronous,
								runWhen: n ? n.runWhen : null,
							}),
							this.handlers.length - 1
						);
					}
					eject(e) {
						this.handlers[e] && (this.handlers[e] = null);
					}
					clear() {
						this.handlers && (this.handlers = []);
					}
					forEach(e) {
						Zr.forEach(this.handlers, function (t) {
							null !== t && e(t);
						});
					}
				},
				ya = {
					silentJSONParsing: !0,
					forcedJSONParsing: !0,
					clarifyTimeoutError: !1,
				},
				va = {
					isBrowser: !0,
					classes: {
						URLSearchParams:
							'undefined' != typeof URLSearchParams ? URLSearchParams : da,
						FormData: 'undefined' != typeof FormData ? FormData : null,
						Blob: 'undefined' != typeof Blob ? Blob : null,
					},
					protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
				},
				ga = 'undefined' != typeof window && 'undefined' != typeof document,
				ba =
					((wa = 'undefined' != typeof navigator && navigator.product),
					ga && ['ReactNative', 'NativeScript', 'NS'].indexOf(wa) < 0);
			var wa;
			const Sa =
					'undefined' != typeof WorkerGlobalScope &&
					self instanceof WorkerGlobalScope &&
					'function' == typeof self.importScripts,
				ka = { ...e, ...va },
				Ea = function (e) {
					function t(e, n, r, a) {
						let o = e[a++];
						if ('__proto__' === o) return !0;
						const i = Number.isFinite(+o),
							l = a >= e.length;
						return (
							(o = !o && Zr.isArray(r) ? r.length : o),
							l
								? (Zr.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
								: ((r[o] && Zr.isObject(r[o])) || (r[o] = []),
									t(e, n, r[o], a) &&
										Zr.isArray(r[o]) &&
										(r[o] = (function (e) {
											const t = {},
												n = Object.keys(e);
											let r;
											const a = n.length;
											let o;
											for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
											return t;
										})(r[o])),
									!i)
						);
					}
					if (Zr.isFormData(e) && Zr.isFunction(e.entries)) {
						const n = {};
						return (
							Zr.forEachEntry(e, (e, r) => {
								t(
									(function (e) {
										return Zr.matchAll(/\w+|\[(\w*)]/g, e).map(e =>
											'[]' === e[0] ? '' : e[1] || e[0],
										);
									})(e),
									r,
									n,
									0,
								);
							}),
							n
						);
					}
					return null;
				},
				xa = {
					transitional: ya,
					adapter: ['xhr', 'http'],
					transformRequest: [
						function (e, t) {
							const n = t.getContentType() || '',
								r = n.indexOf('application/json') > -1,
								a = Zr.isObject(e);
							if (
								(a && Zr.isHTMLForm(e) && (e = new FormData(e)),
								Zr.isFormData(e))
							)
								return r ? JSON.stringify(Ea(e)) : e;
							if (
								Zr.isArrayBuffer(e) ||
								Zr.isBuffer(e) ||
								Zr.isStream(e) ||
								Zr.isFile(e) ||
								Zr.isBlob(e)
							)
								return e;
							if (Zr.isArrayBufferView(e)) return e.buffer;
							if (Zr.isURLSearchParams(e))
								return (
									t.setContentType(
										'application/x-www-form-urlencoded;charset=utf-8',
										!1,
									),
									e.toString()
								);
							let o;
							if (a) {
								if (n.indexOf('application/x-www-form-urlencoded') > -1)
									return (function (e, t) {
										return sa(
											e,
											new ka.classes.URLSearchParams(),
											Object.assign(
												{
													visitor: function (e, t, n, r) {
														return ka.isNode && Zr.isBuffer(e)
															? (this.append(t, e.toString('base64')), !1)
															: r.defaultVisitor.apply(this, arguments);
													},
												},
												t,
											),
										);
									})(e, this.formSerializer).toString();
								if (
									(o = Zr.isFileList(e)) ||
									n.indexOf('multipart/form-data') > -1
								) {
									const t = this.env && this.env.FormData;
									return sa(
										o ? { 'files[]': e } : e,
										t && new t(),
										this.formSerializer,
									);
								}
							}
							return a || r
								? (t.setContentType('application/json', !1),
									(function (e, t, n) {
										if (Zr.isString(e))
											try {
												return (0, JSON.parse)(e), Zr.trim(e);
											} catch (e) {
												if ('SyntaxError' !== e.name) throw e;
											}
										return (0, JSON.stringify)(e);
									})(e))
								: e;
						},
					],
					transformResponse: [
						function (e) {
							const t = this.transitional || xa.transitional,
								n = t && t.forcedJSONParsing,
								r = 'json' === this.responseType;
							if (e && Zr.isString(e) && ((n && !this.responseType) || r)) {
								const n = !(t && t.silentJSONParsing) && r;
								try {
									return JSON.parse(e);
								} catch (e) {
									if (n) {
										if ('SyntaxError' === e.name)
											throw ra.from(
												e,
												ra.ERR_BAD_RESPONSE,
												this,
												null,
												this.response,
											);
										throw e;
									}
								}
							}
							return e;
						},
					],
					timeout: 0,
					xsrfCookieName: 'XSRF-TOKEN',
					xsrfHeaderName: 'X-XSRF-TOKEN',
					maxContentLength: -1,
					maxBodyLength: -1,
					env: { FormData: ka.classes.FormData, Blob: ka.classes.Blob },
					validateStatus: function (e) {
						return e >= 200 && e < 300;
					},
					headers: {
						common: {
							Accept: 'application/json, text/plain, */*',
							'Content-Type': void 0,
						},
					},
				};
			Zr.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], e => {
				xa.headers[e] = {};
			});
			const Ca = xa,
				Oa = Zr.toObjectSet([
					'age',
					'authorization',
					'content-length',
					'content-type',
					'etag',
					'expires',
					'from',
					'host',
					'if-modified-since',
					'if-unmodified-since',
					'last-modified',
					'location',
					'max-forwards',
					'proxy-authorization',
					'referer',
					'retry-after',
					'user-agent',
				]),
				_a = Symbol('internals');
			function Pa(e) {
				return e && String(e).trim().toLowerCase();
			}
			function Ra(e) {
				return !1 === e || null == e
					? e
					: Zr.isArray(e)
						? e.map(Ra)
						: String(e);
			}
			function Na(e, t, n, r, a) {
				return Zr.isFunction(r)
					? r.call(this, t, n)
					: (a && (t = n),
						Zr.isString(t)
							? Zr.isString(r)
								? -1 !== t.indexOf(r)
								: Zr.isRegExp(r)
									? r.test(t)
									: void 0
							: void 0);
			}
			class Ta {
				constructor(e) {
					e && this.set(e);
				}
				set(e, t, n) {
					const r = this;
					function a(e, t, n) {
						const a = Pa(t);
						if (!a) throw new Error('header name must be a non-empty string');
						const o = Zr.findKey(r, a);
						(!o ||
							void 0 === r[o] ||
							!0 === n ||
							(void 0 === n && !1 !== r[o])) &&
							(r[o || t] = Ra(e));
					}
					const o = (e, t) => Zr.forEach(e, (e, n) => a(e, n, t));
					return (
						Zr.isPlainObject(e) || e instanceof this.constructor
							? o(e, t)
							: Zr.isString(e) &&
								  (e = e.trim()) &&
								  !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
								? o(
										(e => {
											const t = {};
											let n, r, a;
											return (
												e &&
													e.split('\n').forEach(function (e) {
														(a = e.indexOf(':')),
															(n = e.substring(0, a).trim().toLowerCase()),
															(r = e.substring(a + 1).trim()),
															!n ||
																(t[n] && Oa[n]) ||
																('set-cookie' === n
																	? t[n]
																		? t[n].push(r)
																		: (t[n] = [r])
																	: (t[n] = t[n] ? t[n] + ', ' + r : r));
													}),
												t
											);
										})(e),
										t,
									)
								: null != e && a(t, e, n),
						this
					);
				}
				get(e, t) {
					if ((e = Pa(e))) {
						const n = Zr.findKey(this, e);
						if (n) {
							const e = this[n];
							if (!t) return e;
							if (!0 === t)
								return (function (e) {
									const t = Object.create(null),
										n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
									let r;
									for (; (r = n.exec(e)); ) t[r[1]] = r[2];
									return t;
								})(e);
							if (Zr.isFunction(t)) return t.call(this, e, n);
							if (Zr.isRegExp(t)) return t.exec(e);
							throw new TypeError('parser must be boolean|regexp|function');
						}
					}
				}
				has(e, t) {
					if ((e = Pa(e))) {
						const n = Zr.findKey(this, e);
						return !(!n || void 0 === this[n] || (t && !Na(0, this[n], n, t)));
					}
					return !1;
				}
				delete(e, t) {
					const n = this;
					let r = !1;
					function a(e) {
						if ((e = Pa(e))) {
							const a = Zr.findKey(n, e);
							!a || (t && !Na(0, n[a], a, t)) || (delete n[a], (r = !0));
						}
					}
					return Zr.isArray(e) ? e.forEach(a) : a(e), r;
				}
				clear(e) {
					const t = Object.keys(this);
					let n = t.length,
						r = !1;
					for (; n--; ) {
						const a = t[n];
						(e && !Na(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
					}
					return r;
				}
				normalize(e) {
					const t = this,
						n = {};
					return (
						Zr.forEach(this, (r, a) => {
							const o = Zr.findKey(n, a);
							if (o) return (t[o] = Ra(r)), void delete t[a];
							const i = e
								? (function (e) {
										return e
											.trim()
											.toLowerCase()
											.replace(
												/([a-z\d])(\w*)/g,
												(e, t, n) => t.toUpperCase() + n,
											);
									})(a)
								: String(a).trim();
							i !== a && delete t[a], (t[i] = Ra(r)), (n[i] = !0);
						}),
						this
					);
				}
				concat(...e) {
					return this.constructor.concat(this, ...e);
				}
				toJSON(e) {
					const t = Object.create(null);
					return (
						Zr.forEach(this, (n, r) => {
							null != n &&
								!1 !== n &&
								(t[r] = e && Zr.isArray(n) ? n.join(', ') : n);
						}),
						t
					);
				}
				[Symbol.iterator]() {
					return Object.entries(this.toJSON())[Symbol.iterator]();
				}
				toString() {
					return Object.entries(this.toJSON())
						.map(([e, t]) => e + ': ' + t)
						.join('\n');
				}
				get [Symbol.toStringTag]() {
					return 'AxiosHeaders';
				}
				static from(e) {
					return e instanceof this ? e : new this(e);
				}
				static concat(e, ...t) {
					const n = new this(e);
					return t.forEach(e => n.set(e)), n;
				}
				static accessor(e) {
					const t = (this[_a] = this[_a] = { accessors: {} }).accessors,
						n = this.prototype;
					function r(e) {
						const r = Pa(e);
						t[r] ||
							((function (e, t) {
								const n = Zr.toCamelCase(' ' + t);
								['get', 'set', 'has'].forEach(r => {
									Object.defineProperty(e, r + n, {
										value: function (e, n, a) {
											return this[r].call(this, t, e, n, a);
										},
										configurable: !0,
									});
								});
							})(n, e),
							(t[r] = !0));
					}
					return Zr.isArray(e) ? e.forEach(r) : r(e), this;
				}
			}
			Ta.accessor([
				'Content-Type',
				'Content-Length',
				'Accept',
				'Accept-Encoding',
				'User-Agent',
				'Authorization',
			]),
				Zr.reduceDescriptors(Ta.prototype, ({ value: e }, t) => {
					let n = t[0].toUpperCase() + t.slice(1);
					return {
						get: () => e,
						set(e) {
							this[n] = e;
						},
					};
				}),
				Zr.freezeMethods(Ta);
			const ja = Ta;
			function Fa(e, t) {
				const n = this || Ca,
					r = t || n,
					a = ja.from(r.headers);
				let o = r.data;
				return (
					Zr.forEach(e, function (e) {
						o = e.call(n, o, a.normalize(), t ? t.status : void 0);
					}),
					a.normalize(),
					o
				);
			}
			function La(e) {
				return !(!e || !e.__CANCEL__);
			}
			function Da(e, t, n) {
				ra.call(this, null == e ? 'canceled' : e, ra.ERR_CANCELED, t, n),
					(this.name = 'CanceledError');
			}
			Zr.inherits(Da, ra, { __CANCEL__: !0 });
			const Aa = Da,
				za = ka.hasStandardBrowserEnv
					? {
							write(e, t, n, r, a, o) {
								const i = [e + '=' + encodeURIComponent(t)];
								Zr.isNumber(n) &&
									i.push('expires=' + new Date(n).toGMTString()),
									Zr.isString(r) && i.push('path=' + r),
									Zr.isString(a) && i.push('domain=' + a),
									!0 === o && i.push('secure'),
									(document.cookie = i.join('; '));
							},
							read(e) {
								const t = document.cookie.match(
									new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
								);
								return t ? decodeURIComponent(t[3]) : null;
							},
							remove(e) {
								this.write(e, '', Date.now() - 864e5);
							},
						}
					: { write() {}, read: () => null, remove() {} };
			function Ma(e, t) {
				return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
					? (function (e, t) {
							return t
								? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '')
								: e;
						})(e, t)
					: t;
			}
			const Ua = ka.hasStandardBrowserEnv
				? (function () {
						const e = /(msie|trident)/i.test(navigator.userAgent),
							t = document.createElement('a');
						let n;
						function r(n) {
							let r = n;
							return (
								e && (t.setAttribute('href', r), (r = t.href)),
								t.setAttribute('href', r),
								{
									href: t.href,
									protocol: t.protocol ? t.protocol.replace(/:$/, '') : '',
									host: t.host,
									search: t.search ? t.search.replace(/^\?/, '') : '',
									hash: t.hash ? t.hash.replace(/^#/, '') : '',
									hostname: t.hostname,
									port: t.port,
									pathname:
										'/' === t.pathname.charAt(0)
											? t.pathname
											: '/' + t.pathname,
								}
							);
						}
						return (
							(n = r(window.location.href)),
							function (e) {
								const t = Zr.isString(e) ? r(e) : e;
								return t.protocol === n.protocol && t.host === n.host;
							}
						);
					})()
				: function () {
						return !0;
					};
			function Ia(e, t) {
				let n = 0;
				const r = (function (e, t) {
					e = e || 10;
					const n = new Array(e),
						r = new Array(e);
					let a,
						o = 0,
						i = 0;
					return (
						(t = void 0 !== t ? t : 1e3),
						function (l) {
							const s = Date.now(),
								u = r[i];
							a || (a = s), (n[o] = l), (r[o] = s);
							let c = i,
								f = 0;
							for (; c !== o; ) (f += n[c++]), (c %= e);
							if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), s - a < t))
								return;
							const d = u && s - u;
							return d ? Math.round((1e3 * f) / d) : void 0;
						}
					);
				})(50, 250);
				return a => {
					const o = a.loaded,
						i = a.lengthComputable ? a.total : void 0,
						l = o - n,
						s = r(l);
					n = o;
					const u = {
						loaded: o,
						total: i,
						progress: i ? o / i : void 0,
						bytes: l,
						rate: s || void 0,
						estimated: s && i && o <= i ? (i - o) / s : void 0,
						event: a,
					};
					(u[t ? 'download' : 'upload'] = !0), e(u);
				};
			}
			const Ba = {
				http: null,
				xhr:
					'undefined' != typeof XMLHttpRequest &&
					function (e) {
						return new Promise(function (t, n) {
							let r = e.data;
							const a = ja.from(e.headers).normalize();
							let o,
								i,
								{ responseType: l, withXSRFToken: s } = e;
							function u() {
								e.cancelToken && e.cancelToken.unsubscribe(o),
									e.signal && e.signal.removeEventListener('abort', o);
							}
							if (Zr.isFormData(r))
								if (
									ka.hasStandardBrowserEnv ||
									ka.hasStandardBrowserWebWorkerEnv
								)
									a.setContentType(!1);
								else if (!1 !== (i = a.getContentType())) {
									const [e, ...t] = i
										? i
												.split(';')
												.map(e => e.trim())
												.filter(Boolean)
										: [];
									a.setContentType(
										[e || 'multipart/form-data', ...t].join('; '),
									);
								}
							let c = new XMLHttpRequest();
							if (e.auth) {
								const t = e.auth.username || '',
									n = e.auth.password
										? unescape(encodeURIComponent(e.auth.password))
										: '';
								a.set('Authorization', 'Basic ' + btoa(t + ':' + n));
							}
							const f = Ma(e.baseURL, e.url);
							function d() {
								if (!c) return;
								const r = ja.from(
									'getAllResponseHeaders' in c && c.getAllResponseHeaders(),
								);
								!(function (e, t, n) {
									const r = n.config.validateStatus;
									n.status && r && !r(n.status)
										? t(
												new ra(
													'Request failed with status code ' + n.status,
													[ra.ERR_BAD_REQUEST, ra.ERR_BAD_RESPONSE][
														Math.floor(n.status / 100) - 4
													],
													n.config,
													n.request,
													n,
												),
											)
										: e(n);
								})(
									function (e) {
										t(e), u();
									},
									function (e) {
										n(e), u();
									},
									{
										data:
											l && 'text' !== l && 'json' !== l
												? c.response
												: c.responseText,
										status: c.status,
										statusText: c.statusText,
										headers: r,
										config: e,
										request: c,
									},
								),
									(c = null);
							}
							if (
								(c.open(
									e.method.toUpperCase(),
									ha(f, e.params, e.paramsSerializer),
									!0,
								),
								(c.timeout = e.timeout),
								'onloadend' in c
									? (c.onloadend = d)
									: (c.onreadystatechange = function () {
											c &&
												4 === c.readyState &&
												(0 !== c.status ||
													(c.responseURL &&
														0 === c.responseURL.indexOf('file:'))) &&
												setTimeout(d);
										}),
								(c.onabort = function () {
									c &&
										(n(new ra('Request aborted', ra.ECONNABORTED, e, c)),
										(c = null));
								}),
								(c.onerror = function () {
									n(new ra('Network Error', ra.ERR_NETWORK, e, c)), (c = null);
								}),
								(c.ontimeout = function () {
									let t = e.timeout
										? 'timeout of ' + e.timeout + 'ms exceeded'
										: 'timeout exceeded';
									const r = e.transitional || ya;
									e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
										n(
											new ra(
												t,
												r.clarifyTimeoutError ? ra.ETIMEDOUT : ra.ECONNABORTED,
												e,
												c,
											),
										),
										(c = null);
								}),
								ka.hasStandardBrowserEnv &&
									(s && Zr.isFunction(s) && (s = s(e)),
									s || (!1 !== s && Ua(f))))
							) {
								const t =
									e.xsrfHeaderName &&
									e.xsrfCookieName &&
									za.read(e.xsrfCookieName);
								t && a.set(e.xsrfHeaderName, t);
							}
							void 0 === r && a.setContentType(null),
								'setRequestHeader' in c &&
									Zr.forEach(a.toJSON(), function (e, t) {
										c.setRequestHeader(t, e);
									}),
								Zr.isUndefined(e.withCredentials) ||
									(c.withCredentials = !!e.withCredentials),
								l && 'json' !== l && (c.responseType = e.responseType),
								'function' == typeof e.onDownloadProgress &&
									c.addEventListener('progress', Ia(e.onDownloadProgress, !0)),
								'function' == typeof e.onUploadProgress &&
									c.upload &&
									c.upload.addEventListener('progress', Ia(e.onUploadProgress)),
								(e.cancelToken || e.signal) &&
									((o = t => {
										c &&
											(n(!t || t.type ? new Aa(null, e, c) : t),
											c.abort(),
											(c = null));
									}),
									e.cancelToken && e.cancelToken.subscribe(o),
									e.signal &&
										(e.signal.aborted
											? o()
											: e.signal.addEventListener('abort', o)));
							const p = (function (e) {
								const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
								return (t && t[1]) || '';
							})(f);
							p && -1 === ka.protocols.indexOf(p)
								? n(
										new ra(
											'Unsupported protocol ' + p + ':',
											ra.ERR_BAD_REQUEST,
											e,
										),
									)
								: c.send(r || null);
						});
					},
			};
			Zr.forEach(Ba, (e, t) => {
				if (e) {
					try {
						Object.defineProperty(e, 'name', { value: t });
					} catch (e) {}
					Object.defineProperty(e, 'adapterName', { value: t });
				}
			});
			const qa = e => `- ${e}`,
				Qa = e => Zr.isFunction(e) || null === e || !1 === e,
				Wa = e => {
					e = Zr.isArray(e) ? e : [e];
					const { length: t } = e;
					let n, r;
					const a = {};
					for (let o = 0; o < t; o++) {
						let t;
						if (
							((n = e[o]),
							(r = n),
							!Qa(n) && ((r = Ba[(t = String(n)).toLowerCase()]), void 0 === r))
						)
							throw new ra(`Unknown adapter '${t}'`);
						if (r) break;
						a[t || '#' + o] = r;
					}
					if (!r) {
						const e = Object.entries(a).map(
							([e, t]) =>
								`adapter ${e} ` +
								(!1 === t
									? 'is not supported by the environment'
									: 'is not available in the build'),
						);
						let n = t
							? e.length > 1
								? 'since :\n' + e.map(qa).join('\n')
								: ' ' + qa(e[0])
							: 'as no adapter specified';
						throw new ra(
							'There is no suitable adapter to dispatch the request ' + n,
							'ERR_NOT_SUPPORT',
						);
					}
					return r;
				};
			function Ha(e) {
				if (
					(e.cancelToken && e.cancelToken.throwIfRequested(),
					e.signal && e.signal.aborted)
				)
					throw new Aa(null, e);
			}
			function $a(e) {
				return (
					Ha(e),
					(e.headers = ja.from(e.headers)),
					(e.data = Fa.call(e, e.transformRequest)),
					-1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
						e.headers.setContentType('application/x-www-form-urlencoded', !1),
					Wa(e.adapter || Ca.adapter)(e).then(
						function (t) {
							return (
								Ha(e),
								(t.data = Fa.call(e, e.transformResponse, t)),
								(t.headers = ja.from(t.headers)),
								t
							);
						},
						function (t) {
							return (
								La(t) ||
									(Ha(e),
									t &&
										t.response &&
										((t.response.data = Fa.call(
											e,
											e.transformResponse,
											t.response,
										)),
										(t.response.headers = ja.from(t.response.headers)))),
								Promise.reject(t)
							);
						},
					)
				);
			}
			const Va = e => (e instanceof ja ? e.toJSON() : e);
			function Ka(e, t) {
				t = t || {};
				const n = {};
				function r(e, t, n) {
					return Zr.isPlainObject(e) && Zr.isPlainObject(t)
						? Zr.merge.call({ caseless: n }, e, t)
						: Zr.isPlainObject(t)
							? Zr.merge({}, t)
							: Zr.isArray(t)
								? t.slice()
								: t;
				}
				function a(e, t, n) {
					return Zr.isUndefined(t)
						? Zr.isUndefined(e)
							? void 0
							: r(void 0, e, n)
						: r(e, t, n);
				}
				function o(e, t) {
					if (!Zr.isUndefined(t)) return r(void 0, t);
				}
				function i(e, t) {
					return Zr.isUndefined(t)
						? Zr.isUndefined(e)
							? void 0
							: r(void 0, e)
						: r(void 0, t);
				}
				function l(n, a, o) {
					return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
				}
				const s = {
					url: o,
					method: o,
					data: o,
					baseURL: i,
					transformRequest: i,
					transformResponse: i,
					paramsSerializer: i,
					timeout: i,
					timeoutMessage: i,
					withCredentials: i,
					withXSRFToken: i,
					adapter: i,
					responseType: i,
					xsrfCookieName: i,
					xsrfHeaderName: i,
					onUploadProgress: i,
					onDownloadProgress: i,
					decompress: i,
					maxContentLength: i,
					maxBodyLength: i,
					beforeRedirect: i,
					transport: i,
					httpAgent: i,
					httpsAgent: i,
					cancelToken: i,
					socketPath: i,
					responseEncoding: i,
					validateStatus: l,
					headers: (e, t) => a(Va(e), Va(t), !0),
				};
				return (
					Zr.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
						const o = s[r] || a,
							i = o(e[r], t[r], r);
						(Zr.isUndefined(i) && o !== l) || (n[r] = i);
					}),
					n
				);
			}
			const Ga = {};
			['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
				(e, t) => {
					Ga[e] = function (n) {
						return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
					};
				},
			);
			const Xa = {};
			Ga.transitional = function (e, t, n) {
				function r(e, t) {
					return (
						"[Axios v1.6.7] Transitional option '" +
						e +
						"'" +
						t +
						(n ? '. ' + n : '')
					);
				}
				return (n, a, o) => {
					if (!1 === e)
						throw new ra(
							r(a, ' has been removed' + (t ? ' in ' + t : '')),
							ra.ERR_DEPRECATED,
						);
					return (
						t &&
							!Xa[a] &&
							((Xa[a] = !0),
							console.warn(
								r(
									a,
									' has been deprecated since v' +
										t +
										' and will be removed in the near future',
								),
							)),
						!e || e(n, a, o)
					);
				};
			};
			const Ja = {
					assertOptions: function (e, t, n) {
						if ('object' != typeof e)
							throw new ra(
								'options must be an object',
								ra.ERR_BAD_OPTION_VALUE,
							);
						const r = Object.keys(e);
						let a = r.length;
						for (; a-- > 0; ) {
							const o = r[a],
								i = t[o];
							if (i) {
								const t = e[o],
									n = void 0 === t || i(t, o, e);
								if (!0 !== n)
									throw new ra(
										'option ' + o + ' must be ' + n,
										ra.ERR_BAD_OPTION_VALUE,
									);
							} else if (!0 !== n)
								throw new ra('Unknown option ' + o, ra.ERR_BAD_OPTION);
						}
					},
					validators: Ga,
				},
				Ya = Ja.validators;
			class Za {
				constructor(e) {
					(this.defaults = e),
						(this.interceptors = { request: new ma(), response: new ma() });
				}
				async request(e, t) {
					try {
						return await this._request(e, t);
					} catch (e) {
						if (e instanceof Error) {
							let t;
							Error.captureStackTrace
								? Error.captureStackTrace((t = {}))
								: (t = new Error());
							const n = t.stack ? t.stack.replace(/^.+\n/, '') : '';
							e.stack
								? n &&
									!String(e.stack).endsWith(n.replace(/^.+\n.+\n/, '')) &&
									(e.stack += '\n' + n)
								: (e.stack = n);
						}
						throw e;
					}
				}
				_request(e, t) {
					'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
						(t = Ka(this.defaults, t));
					const { transitional: n, paramsSerializer: r, headers: a } = t;
					void 0 !== n &&
						Ja.assertOptions(
							n,
							{
								silentJSONParsing: Ya.transitional(Ya.boolean),
								forcedJSONParsing: Ya.transitional(Ya.boolean),
								clarifyTimeoutError: Ya.transitional(Ya.boolean),
							},
							!1,
						),
						null != r &&
							(Zr.isFunction(r)
								? (t.paramsSerializer = { serialize: r })
								: Ja.assertOptions(
										r,
										{ encode: Ya.function, serialize: Ya.function },
										!0,
									)),
						(t.method = (
							t.method ||
							this.defaults.method ||
							'get'
						).toLowerCase());
					let o = a && Zr.merge(a.common, a[t.method]);
					a &&
						Zr.forEach(
							['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
							e => {
								delete a[e];
							},
						),
						(t.headers = ja.concat(o, a));
					const i = [];
					let l = !0;
					this.interceptors.request.forEach(function (e) {
						('function' == typeof e.runWhen && !1 === e.runWhen(t)) ||
							((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
					});
					const s = [];
					let u;
					this.interceptors.response.forEach(function (e) {
						s.push(e.fulfilled, e.rejected);
					});
					let c,
						f = 0;
					if (!l) {
						const e = [$a.bind(this), void 0];
						for (
							e.unshift.apply(e, i),
								e.push.apply(e, s),
								c = e.length,
								u = Promise.resolve(t);
							f < c;

						)
							u = u.then(e[f++], e[f++]);
						return u;
					}
					c = i.length;
					let d = t;
					for (f = 0; f < c; ) {
						const e = i[f++],
							t = i[f++];
						try {
							d = e(d);
						} catch (e) {
							t.call(this, e);
							break;
						}
					}
					try {
						u = $a.call(this, d);
					} catch (e) {
						return Promise.reject(e);
					}
					for (f = 0, c = s.length; f < c; ) u = u.then(s[f++], s[f++]);
					return u;
				}
				getUri(e) {
					return ha(
						Ma((e = Ka(this.defaults, e)).baseURL, e.url),
						e.params,
						e.paramsSerializer,
					);
				}
			}
			Zr.forEach(['delete', 'get', 'head', 'options'], function (e) {
				Za.prototype[e] = function (t, n) {
					return this.request(
						Ka(n || {}, { method: e, url: t, data: (n || {}).data }),
					);
				};
			}),
				Zr.forEach(['post', 'put', 'patch'], function (e) {
					function t(t) {
						return function (n, r, a) {
							return this.request(
								Ka(a || {}, {
									method: e,
									headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
									url: n,
									data: r,
								}),
							);
						};
					}
					(Za.prototype[e] = t()), (Za.prototype[e + 'Form'] = t(!0));
				});
			const eo = Za;
			class to {
				constructor(e) {
					if ('function' != typeof e)
						throw new TypeError('executor must be a function.');
					let t;
					this.promise = new Promise(function (e) {
						t = e;
					});
					const n = this;
					this.promise.then(e => {
						if (!n._listeners) return;
						let t = n._listeners.length;
						for (; t-- > 0; ) n._listeners[t](e);
						n._listeners = null;
					}),
						(this.promise.then = e => {
							let t;
							const r = new Promise(e => {
								n.subscribe(e), (t = e);
							}).then(e);
							return (
								(r.cancel = function () {
									n.unsubscribe(t);
								}),
								r
							);
						}),
						e(function (e, r, a) {
							n.reason || ((n.reason = new Aa(e, r, a)), t(n.reason));
						});
				}
				throwIfRequested() {
					if (this.reason) throw this.reason;
				}
				subscribe(e) {
					this.reason
						? e(this.reason)
						: this._listeners
							? this._listeners.push(e)
							: (this._listeners = [e]);
				}
				unsubscribe(e) {
					if (!this._listeners) return;
					const t = this._listeners.indexOf(e);
					-1 !== t && this._listeners.splice(t, 1);
				}
				static source() {
					let e;
					return {
						token: new to(function (t) {
							e = t;
						}),
						cancel: e,
					};
				}
			}
			const no = to,
				ro = {
					Continue: 100,
					SwitchingProtocols: 101,
					Processing: 102,
					EarlyHints: 103,
					Ok: 200,
					Created: 201,
					Accepted: 202,
					NonAuthoritativeInformation: 203,
					NoContent: 204,
					ResetContent: 205,
					PartialContent: 206,
					MultiStatus: 207,
					AlreadyReported: 208,
					ImUsed: 226,
					MultipleChoices: 300,
					MovedPermanently: 301,
					Found: 302,
					SeeOther: 303,
					NotModified: 304,
					UseProxy: 305,
					Unused: 306,
					TemporaryRedirect: 307,
					PermanentRedirect: 308,
					BadRequest: 400,
					Unauthorized: 401,
					PaymentRequired: 402,
					Forbidden: 403,
					NotFound: 404,
					MethodNotAllowed: 405,
					NotAcceptable: 406,
					ProxyAuthenticationRequired: 407,
					RequestTimeout: 408,
					Conflict: 409,
					Gone: 410,
					LengthRequired: 411,
					PreconditionFailed: 412,
					PayloadTooLarge: 413,
					UriTooLong: 414,
					UnsupportedMediaType: 415,
					RangeNotSatisfiable: 416,
					ExpectationFailed: 417,
					ImATeapot: 418,
					MisdirectedRequest: 421,
					UnprocessableEntity: 422,
					Locked: 423,
					FailedDependency: 424,
					TooEarly: 425,
					UpgradeRequired: 426,
					PreconditionRequired: 428,
					TooManyRequests: 429,
					RequestHeaderFieldsTooLarge: 431,
					UnavailableForLegalReasons: 451,
					InternalServerError: 500,
					NotImplemented: 501,
					BadGateway: 502,
					ServiceUnavailable: 503,
					GatewayTimeout: 504,
					HttpVersionNotSupported: 505,
					VariantAlsoNegotiates: 506,
					InsufficientStorage: 507,
					LoopDetected: 508,
					NotExtended: 510,
					NetworkAuthenticationRequired: 511,
				};
			Object.entries(ro).forEach(([e, t]) => {
				ro[t] = e;
			});
			const ao = ro,
				oo = (function e(t) {
					const n = new eo(t),
						r = br(eo.prototype.request, n);
					return (
						Zr.extend(r, eo.prototype, n, { allOwnKeys: !0 }),
						Zr.extend(r, n, null, { allOwnKeys: !0 }),
						(r.create = function (n) {
							return e(Ka(t, n));
						}),
						r
					);
				})(Ca);
			(oo.Axios = eo),
				(oo.CanceledError = Aa),
				(oo.CancelToken = no),
				(oo.isCancel = La),
				(oo.VERSION = '1.6.7'),
				(oo.toFormData = sa),
				(oo.AxiosError = ra),
				(oo.Cancel = oo.CanceledError),
				(oo.all = function (e) {
					return Promise.all(e);
				}),
				(oo.spread = function (e) {
					return function (t) {
						return e.apply(null, t);
					};
				}),
				(oo.isAxiosError = function (e) {
					return Zr.isObject(e) && !0 === e.isAxiosError;
				}),
				(oo.mergeConfig = Ka),
				(oo.AxiosHeaders = ja),
				(oo.formToJSON = e => Ea(Zr.isHTMLForm(e) ? new FormData(e) : e)),
				(oo.getAdapter = Wa),
				(oo.HttpStatusCode = ao),
				(oo.default = oo);
			const io = oo;
			var lo = 'http://localhost:3000';
			const so = function () {
				(this.urls = {
					catalog: '/api/catalog',
					auth: '/api/auth',
					products: '/api/product/all',
					filter: '/api/filter',
				}),
					(this.api = io.create({ baseURL: lo }));
			};
			var uo,
				co =
					((uo = function (e, t) {
						return (
							(uo =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								}),
							uo(e, t)
						);
					}),
					function (e, t) {
						if ('function' != typeof t && null !== t)
							throw new TypeError(
								'Class extends value ' +
									String(t) +
									' is not a constructor or null',
							);
						function n() {
							this.constructor = e;
						}
						uo(e, t),
							(e.prototype =
								null === t
									? Object.create(t)
									: ((n.prototype = t.prototype), new n()));
					}),
				fo = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						co(t, e),
						(t.prototype.getCatalog = function () {
							return (
								(e = this),
								(t = void 0),
								(r = function () {
									return (function (e, t) {
										var n,
											r,
											a,
											o,
											i = {
												label: 0,
												sent: function () {
													if (1 & a[0]) throw a[1];
													return a[1];
												},
												trys: [],
												ops: [],
											};
										return (
											(o = { next: l(0), throw: l(1), return: l(2) }),
											'function' == typeof Symbol &&
												(o[Symbol.iterator] = function () {
													return this;
												}),
											o
										);
										function l(l) {
											return function (s) {
												return (function (l) {
													if (n)
														throw new TypeError(
															'Generator is already executing.',
														);
													for (; o && ((o = 0), l[0] && (i = 0)), i; )
														try {
															if (
																((n = 1),
																r &&
																	(a =
																		2 & l[0]
																			? r.return
																			: l[0]
																				? r.throw ||
																					((a = r.return) && a.call(r), 0)
																				: r.next) &&
																	!(a = a.call(r, l[1])).done)
															)
																return a;
															switch (
																((r = 0), a && (l = [2 & l[0], a.value]), l[0])
															) {
																case 0:
																case 1:
																	a = l;
																	break;
																case 4:
																	return i.label++, { value: l[1], done: !1 };
																case 5:
																	i.label++, (r = l[1]), (l = [0]);
																	continue;
																case 7:
																	(l = i.ops.pop()), i.trys.pop();
																	continue;
																default:
																	if (
																		!(
																			(a =
																				(a = i.trys).length > 0 &&
																				a[a.length - 1]) ||
																			(6 !== l[0] && 2 !== l[0])
																		)
																	) {
																		i = 0;
																		continue;
																	}
																	if (
																		3 === l[0] &&
																		(!a || (l[1] > a[0] && l[1] < a[3]))
																	) {
																		i.label = l[1];
																		break;
																	}
																	if (6 === l[0] && i.label < a[1]) {
																		(i.label = a[1]), (a = l);
																		break;
																	}
																	if (a && i.label < a[2]) {
																		(i.label = a[2]), i.ops.push(l);
																		break;
																	}
																	a[2] && i.ops.pop(), i.trys.pop();
																	continue;
															}
															l = t.call(e, i);
														} catch (e) {
															(l = [6, e]), (r = 0);
														} finally {
															n = a = 0;
														}
													if (5 & l[0]) throw l[1];
													return { value: l[0] ? l[1] : void 0, done: !0 };
												})([l, s]);
											};
										}
									})(this, function (e) {
										switch (e.label) {
											case 0:
												return [4, this.api.get(this.urls.catalog)];
											case 1:
												return [2, e.sent()];
										}
									});
								}),
								new ((n = void 0) || (n = Promise))(function (a, o) {
									function i(e) {
										try {
											s(r.next(e));
										} catch (e) {
											o(e);
										}
									}
									function l(e) {
										try {
											s(r.throw(e));
										} catch (e) {
											o(e);
										}
									}
									function s(e) {
										var t;
										e.done
											? a(e.value)
											: ((t = e.value),
												t instanceof n
													? t
													: new n(function (e) {
															e(t);
														})).then(i, l);
									}
									s((r = r.apply(e, t || [])).next());
								})
							);
							var e, t, n, r;
						}),
						t
					);
				})(so);
			const po = new fo(),
				ho = { catalog: 'K_wDbjMp', item: 'xBXiVnOe', img: 'kXRUCiI7' };
			var mo = (function () {
					var e = function (t, n) {
						return (
							(e =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								}),
							e(t, n)
						);
					};
					return function (t, n) {
						if ('function' != typeof n && null !== n)
							throw new TypeError(
								'Class extends value ' +
									String(n) +
									' is not a constructor or null',
							);
						function r() {
							this.constructor = t;
						}
						e(t, n),
							(t.prototype =
								null === n
									? Object.create(n)
									: ((r.prototype = n.prototype), new r()));
					};
				})(),
				yo = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						mo(t, e),
						(t.prototype.getAllProducts = function (e, t) {
							return (
								(n = this),
								(r = void 0),
								(o = function () {
									var n;
									return (function (e, t) {
										var n,
											r,
											a,
											o,
											i = {
												label: 0,
												sent: function () {
													if (1 & a[0]) throw a[1];
													return a[1];
												},
												trys: [],
												ops: [],
											};
										return (
											(o = { next: l(0), throw: l(1), return: l(2) }),
											'function' == typeof Symbol &&
												(o[Symbol.iterator] = function () {
													return this;
												}),
											o
										);
										function l(l) {
											return function (s) {
												return (function (l) {
													if (n)
														throw new TypeError(
															'Generator is already executing.',
														);
													for (; o && ((o = 0), l[0] && (i = 0)), i; )
														try {
															if (
																((n = 1),
																r &&
																	(a =
																		2 & l[0]
																			? r.return
																			: l[0]
																				? r.throw ||
																					((a = r.return) && a.call(r), 0)
																				: r.next) &&
																	!(a = a.call(r, l[1])).done)
															)
																return a;
															switch (
																((r = 0), a && (l = [2 & l[0], a.value]), l[0])
															) {
																case 0:
																case 1:
																	a = l;
																	break;
																case 4:
																	return i.label++, { value: l[1], done: !1 };
																case 5:
																	i.label++, (r = l[1]), (l = [0]);
																	continue;
																case 7:
																	(l = i.ops.pop()), i.trys.pop();
																	continue;
																default:
																	if (
																		!(
																			(a =
																				(a = i.trys).length > 0 &&
																				a[a.length - 1]) ||
																			(6 !== l[0] && 2 !== l[0])
																		)
																	) {
																		i = 0;
																		continue;
																	}
																	if (
																		3 === l[0] &&
																		(!a || (l[1] > a[0] && l[1] < a[3]))
																	) {
																		i.label = l[1];
																		break;
																	}
																	if (6 === l[0] && i.label < a[1]) {
																		(i.label = a[1]), (a = l);
																		break;
																	}
																	if (a && i.label < a[2]) {
																		(i.label = a[2]), i.ops.push(l);
																		break;
																	}
																	a[2] && i.ops.pop(), i.trys.pop();
																	continue;
															}
															l = t.call(e, i);
														} catch (e) {
															(l = [6, e]), (r = 0);
														} finally {
															n = a = 0;
														}
													if (5 & l[0]) throw l[1];
													return { value: l[0] ? l[1] : void 0, done: !0 };
												})([l, s]);
											};
										}
									})(this, function (r) {
										switch (r.label) {
											case 0:
												return [
													4,
													this.api.get(this.urls.products, {
														params: { filters: e, type: t },
													}),
												];
											case 1:
												return (n = r.sent()), console.log(n), [2, n];
										}
									});
								}),
								new ((a = void 0) || (a = Promise))(function (e, t) {
									function i(e) {
										try {
											s(o.next(e));
										} catch (e) {
											t(e);
										}
									}
									function l(e) {
										try {
											s(o.throw(e));
										} catch (e) {
											t(e);
										}
									}
									function s(t) {
										var n;
										t.done
											? e(t.value)
											: ((n = t.value),
												n instanceof a
													? n
													: new a(function (e) {
															e(n);
														})).then(i, l);
									}
									s((o = o.apply(n, r || [])).next());
								})
							);
							var n, r, a, o;
						}),
						t
					);
				})(so);
			const vo = new yo();
			var go = function (e, t, n) {
				if (n || 2 === arguments.length)
					for (var r, a = 0, o = t.length; a < o; a++)
						(!r && a in t) ||
							(r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
				return e.concat(r || Array.prototype.slice.call(t));
			};
			const bo = function (e, t, n) {
				return (
					void 0 === t && (t = {}),
					void 0 === n && (n = []),
					go(
						go(
							[e],
							Object.entries(t)
								.filter(function (e) {
									return e[1];
								})
								.map(function (e) {
									return e[0];
								}),
							!0,
						),
						n,
						!0,
					).join(' ')
				);
			};
			var wo = (function () {
					var e = function (t, n) {
						return (
							(e =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								}),
							e(t, n)
						);
					};
					return function (t, n) {
						if ('function' != typeof n && null !== n)
							throw new TypeError(
								'Class extends value ' +
									String(n) +
									' is not a constructor or null',
							);
						function r() {
							this.constructor = t;
						}
						e(t, n),
							(t.prototype =
								null === n
									? Object.create(n)
									: ((r.prototype = n.prototype), new r()));
					};
				})(),
				So = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						wo(t, e),
						(t.prototype.getFilter = function (e) {
							return (
								(t = this),
								(n = void 0),
								(a = function () {
									return (function (e, t) {
										var n,
											r,
											a,
											o,
											i = {
												label: 0,
												sent: function () {
													if (1 & a[0]) throw a[1];
													return a[1];
												},
												trys: [],
												ops: [],
											};
										return (
											(o = { next: l(0), throw: l(1), return: l(2) }),
											'function' == typeof Symbol &&
												(o[Symbol.iterator] = function () {
													return this;
												}),
											o
										);
										function l(l) {
											return function (s) {
												return (function (l) {
													if (n)
														throw new TypeError(
															'Generator is already executing.',
														);
													for (; o && ((o = 0), l[0] && (i = 0)), i; )
														try {
															if (
																((n = 1),
																r &&
																	(a =
																		2 & l[0]
																			? r.return
																			: l[0]
																				? r.throw ||
																					((a = r.return) && a.call(r), 0)
																				: r.next) &&
																	!(a = a.call(r, l[1])).done)
															)
																return a;
															switch (
																((r = 0), a && (l = [2 & l[0], a.value]), l[0])
															) {
																case 0:
																case 1:
																	a = l;
																	break;
																case 4:
																	return i.label++, { value: l[1], done: !1 };
																case 5:
																	i.label++, (r = l[1]), (l = [0]);
																	continue;
																case 7:
																	(l = i.ops.pop()), i.trys.pop();
																	continue;
																default:
																	if (
																		!(
																			(a =
																				(a = i.trys).length > 0 &&
																				a[a.length - 1]) ||
																			(6 !== l[0] && 2 !== l[0])
																		)
																	) {
																		i = 0;
																		continue;
																	}
																	if (
																		3 === l[0] &&
																		(!a || (l[1] > a[0] && l[1] < a[3]))
																	) {
																		i.label = l[1];
																		break;
																	}
																	if (6 === l[0] && i.label < a[1]) {
																		(i.label = a[1]), (a = l);
																		break;
																	}
																	if (a && i.label < a[2]) {
																		(i.label = a[2]), i.ops.push(l);
																		break;
																	}
																	a[2] && i.ops.pop(), i.trys.pop();
																	continue;
															}
															l = t.call(e, i);
														} catch (e) {
															(l = [6, e]), (r = 0);
														} finally {
															n = a = 0;
														}
													if (5 & l[0]) throw l[1];
													return { value: l[0] ? l[1] : void 0, done: !0 };
												})([l, s]);
											};
										}
									})(this, function (t) {
										switch (t.label) {
											case 0:
												return [
													4,
													this.api.get(this.urls.filter, {
														params: { type: e },
													}),
												];
											case 1:
												return [2, t.sent()];
										}
									});
								}),
								new ((r = void 0) || (r = Promise))(function (e, o) {
									function i(e) {
										try {
											s(a.next(e));
										} catch (e) {
											o(e);
										}
									}
									function l(e) {
										try {
											s(a.throw(e));
										} catch (e) {
											o(e);
										}
									}
									function s(t) {
										var n;
										t.done
											? e(t.value)
											: ((n = t.value),
												n instanceof r
													? n
													: new r(function (e) {
															e(n);
														})).then(i, l);
									}
									s((a = a.apply(t, n || [])).next());
								})
							);
							var t, n, r, a;
						}),
						t
					);
				})(so);
			const ko = new So();
			var Eo = function () {
					return (
						(Eo =
							Object.assign ||
							function (e) {
								for (var t, n = 1, r = arguments.length; n < r; n++)
									for (var a in (t = arguments[n]))
										Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
								return e;
							}),
						Eo.apply(this, arguments)
					);
				},
				xo = (0, o.memo)(function (e) {
					var t,
						r,
						a = e.filters,
						i = e.setFilters,
						l = Ee()[1],
						s =
							((t = Z().type),
							(r = gr({
								queryKey: ['filter', t],
								queryFn: function () {
									return (
										(e = void 0),
										(n = void 0),
										(a = function () {
											return (function (e, t) {
												var n,
													r,
													a,
													o,
													i = {
														label: 0,
														sent: function () {
															if (1 & a[0]) throw a[1];
															return a[1];
														},
														trys: [],
														ops: [],
													};
												return (
													(o = { next: l(0), throw: l(1), return: l(2) }),
													'function' == typeof Symbol &&
														(o[Symbol.iterator] = function () {
															return this;
														}),
													o
												);
												function l(l) {
													return function (s) {
														return (function (l) {
															if (n)
																throw new TypeError(
																	'Generator is already executing.',
																);
															for (; o && ((o = 0), l[0] && (i = 0)), i; )
																try {
																	if (
																		((n = 1),
																		r &&
																			(a =
																				2 & l[0]
																					? r.return
																					: l[0]
																						? r.throw ||
																							((a = r.return) && a.call(r), 0)
																						: r.next) &&
																			!(a = a.call(r, l[1])).done)
																	)
																		return a;
																	switch (
																		((r = 0),
																		a && (l = [2 & l[0], a.value]),
																		l[0])
																	) {
																		case 0:
																		case 1:
																			a = l;
																			break;
																		case 4:
																			return (
																				i.label++, { value: l[1], done: !1 }
																			);
																		case 5:
																			i.label++, (r = l[1]), (l = [0]);
																			continue;
																		case 7:
																			(l = i.ops.pop()), i.trys.pop();
																			continue;
																		default:
																			if (
																				!(
																					(a =
																						(a = i.trys).length > 0 &&
																						a[a.length - 1]) ||
																					(6 !== l[0] && 2 !== l[0])
																				)
																			) {
																				i = 0;
																				continue;
																			}
																			if (
																				3 === l[0] &&
																				(!a || (l[1] > a[0] && l[1] < a[3]))
																			) {
																				i.label = l[1];
																				break;
																			}
																			if (6 === l[0] && i.label < a[1]) {
																				(i.label = a[1]), (a = l);
																				break;
																			}
																			if (a && i.label < a[2]) {
																				(i.label = a[2]), i.ops.push(l);
																				break;
																			}
																			a[2] && i.ops.pop(), i.trys.pop();
																			continue;
																	}
																	l = t.call(e, i);
																} catch (e) {
																	(l = [6, e]), (r = 0);
																} finally {
																	n = a = 0;
																}
															if (5 & l[0]) throw l[1];
															return { value: l[0] ? l[1] : void 0, done: !0 };
														})([l, s]);
													};
												}
											})(this, function (e) {
												switch (e.label) {
													case 0:
														return [4, ko.getFilter(t)];
													case 1:
														return [2, e.sent().data];
												}
											});
										}),
										new ((r = void 0) || (r = Promise))(function (t, o) {
											function i(e) {
												try {
													s(a.next(e));
												} catch (e) {
													o(e);
												}
											}
											function l(e) {
												try {
													s(a.throw(e));
												} catch (e) {
													o(e);
												}
											}
											function s(e) {
												var n;
												e.done
													? t(e.value)
													: ((n = e.value),
														n instanceof r
															? n
															: new r(function (e) {
																	e(n);
																})).then(i, l);
											}
											s((a = a.apply(e, n || [])).next());
										})
									);
									var e, n, r, a;
								},
							})),
							r),
						u = s.data,
						c = s.isLoading;
					if (
						((0, o.useEffect)(
							function () {
								l(a);
							},
							[a],
						),
						c)
					)
						return (0, n.jsx)('div', {
							children:
								'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
						});
					return (0, n.jsx)('div', {
						className: bo('esGfT4Ue', {}, []),
						children: Object.entries(u).map(function (e, t) {
							var r = e[0],
								o = e[1];
							return (0, n.jsxs)(
								'div',
								{
									children: [
										(0, n.jsx)('span', { children: r }),
										(0, n.jsx)('div', {
											children: o.map(function (e, t) {
												var o = !!a[r] && a[r].includes(e);
												return (0, n.jsxs)(
													'div',
													{
														children: [
															(0, n.jsx)('input', {
																type: 'checkbox',
																onChange: function (t) {
																	return (function (e, t, n) {
																		return e
																			? (function (e, t) {
																					i(function (n) {
																						var r = Eo({}, n);
																						return (
																							n[e]
																								? r[e].push(t)
																								: (r[e] = [t]),
																							r
																						);
																					});
																				})(t, n)
																			: (function (e, t) {
																					i(function (n) {
																						var r = Eo({}, n);
																						return (
																							n[e] &&
																								(r[e] = r[e].filter(
																									function (e) {
																										return e != t;
																									},
																								)),
																							r
																						);
																					});
																				})(t, n);
																	})(t.target.checked, r, e);
																},
																checked: o,
															}),
															(0, n.jsx)('span', { children: e }),
														],
													},
													t,
												);
											}),
										}),
									],
								},
								t,
							);
						}),
					});
				});
			const Co = xo,
				Oo = {
					device: 'rcSE7_Mh',
					center: '_94Hlw4g',
					right: 'lBKFWOsV',
					image: 'DDZyWyye',
					attribute_title: 'pTN4sFr5',
				},
				_o = function (e) {
					var t = e.className,
						r = e.children;
					return (0, n.jsx)('span', {
						className: bo('RQDavCzh', {}, [t]),
						children: r,
					});
				};
			var Po = function () {
				return (
					(Po =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var a in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
							return e;
						}),
					Po.apply(this, arguments)
				);
			};
			const Ro = function (e) {
					var t = e.children,
						r = e.className,
						a = (function (e, t) {
							var n = {};
							for (var r in e)
								Object.prototype.hasOwnProperty.call(e, r) &&
									t.indexOf(r) < 0 &&
									(n[r] = e[r]);
							if (
								null != e &&
								'function' == typeof Object.getOwnPropertySymbols
							) {
								var a = 0;
								for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
									t.indexOf(r[a]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
										(n[r[a]] = e[r[a]]);
							}
							return n;
						})(e, ['children', 'className']);
					return (0, n.jsx)(
						'button',
						Po({}, a, { className: bo('a4nOaSMD', {}, [r]), children: t }),
					);
				},
				No = function (e) {
					var t = e.product,
						r = t.img,
						a = t.name,
						o = t.price,
						i = t.attributes;
					return (0, n.jsxs)('div', {
						className: Oo.device,
						children: [
							(0, n.jsx)('div', {
								className: Oo.left,
								children: (0, n.jsx)('img', {
									className: Oo.image,
									src: ''.concat(lo, '/img').concat(r),
								}),
							}),
							(0, n.jsxs)('div', {
								className: Oo.center,
								children: [
									(0, n.jsx)(_o, { children: a }),
									(0, n.jsx)('div', {
										className: Oo.attributes,
										children: i.map(function (e) {
											return (0, n.jsxs)(
												'div',
												{
													className: Oo.attribute,
													children: [
														(0, n.jsx)('span', {
															className: Oo.attribute_title,
															children: e.title,
														}),
														':',
														(0, n.jsx)('span', {
															className: Oo.attribute_description,
															children: e.description,
														}),
													],
												},
												e.id,
											);
										}),
									}),
								],
							}),
							(0, n.jsxs)('div', {
								className: Oo.right,
								children: [
									(0, n.jsxs)(_o, { children: [o, '₽'] }),
									(0, n.jsx)(Ro, { children: 'В корзину' }),
								],
							}),
						],
					});
				};
			var To, jo, Fo;
			!(function (e) {
				(e.DEVICES = 'devices'),
					(e.CATALOG = 'catalog'),
					(e.NOT_FOUND = 'not_found');
			})(Fo || (Fo = {}));
			var Lo =
					(((To = {})[Fo.DEVICES] = '/:type'),
					(To[Fo.CATALOG] = '/'),
					(To[Fo.NOT_FOUND] = '*'),
					To),
				Do =
					(((jo = {})[Fo.DEVICES] = {
						path: Lo.devices,
						element: (0, n.jsx)(function () {
							var e,
								t,
								r =
									((e = Ee()[0]),
									(t = {}),
									e.forEach(function (e, n) {
										t[n] ? t[n].push(e) : (t[n] = [e]);
									}),
									t),
								a = (0, o.useState)(r),
								i = a[0],
								l = a[1],
								s = (function (e, t) {
									var n = gr({
										queryKey: ['products', t],
										queryFn: function () {
											return (
												(n = void 0),
												(r = void 0),
												(o = function () {
													return (function (e, t) {
														var n,
															r,
															a,
															o,
															i = {
																label: 0,
																sent: function () {
																	if (1 & a[0]) throw a[1];
																	return a[1];
																},
																trys: [],
																ops: [],
															};
														return (
															(o = { next: l(0), throw: l(1), return: l(2) }),
															'function' == typeof Symbol &&
																(o[Symbol.iterator] = function () {
																	return this;
																}),
															o
														);
														function l(l) {
															return function (s) {
																return (function (l) {
																	if (n)
																		throw new TypeError(
																			'Generator is already executing.',
																		);
																	for (; o && ((o = 0), l[0] && (i = 0)), i; )
																		try {
																			if (
																				((n = 1),
																				r &&
																					(a =
																						2 & l[0]
																							? r.return
																							: l[0]
																								? r.throw ||
																									((a = r.return) && a.call(r),
																									0)
																								: r.next) &&
																					!(a = a.call(r, l[1])).done)
																			)
																				return a;
																			switch (
																				((r = 0),
																				a && (l = [2 & l[0], a.value]),
																				l[0])
																			) {
																				case 0:
																				case 1:
																					a = l;
																					break;
																				case 4:
																					return (
																						i.label++, { value: l[1], done: !1 }
																					);
																				case 5:
																					i.label++, (r = l[1]), (l = [0]);
																					continue;
																				case 7:
																					(l = i.ops.pop()), i.trys.pop();
																					continue;
																				default:
																					if (
																						!(
																							(a =
																								(a = i.trys).length > 0 &&
																								a[a.length - 1]) ||
																							(6 !== l[0] && 2 !== l[0])
																						)
																					) {
																						i = 0;
																						continue;
																					}
																					if (
																						3 === l[0] &&
																						(!a || (l[1] > a[0] && l[1] < a[3]))
																					) {
																						i.label = l[1];
																						break;
																					}
																					if (6 === l[0] && i.label < a[1]) {
																						(i.label = a[1]), (a = l);
																						break;
																					}
																					if (a && i.label < a[2]) {
																						(i.label = a[2]), i.ops.push(l);
																						break;
																					}
																					a[2] && i.ops.pop(), i.trys.pop();
																					continue;
																			}
																			l = t.call(e, i);
																		} catch (e) {
																			(l = [6, e]), (r = 0);
																		} finally {
																			n = a = 0;
																		}
																	if (5 & l[0]) throw l[1];
																	return {
																		value: l[0] ? l[1] : void 0,
																		done: !0,
																	};
																})([l, s]);
															};
														}
													})(this, function (n) {
														switch (n.label) {
															case 0:
																return [4, vo.getAllProducts(e, t)];
															case 1:
																return [2, n.sent().data];
														}
													});
												}),
												new ((a = void 0) || (a = Promise))(function (e, t) {
													function i(e) {
														try {
															s(o.next(e));
														} catch (e) {
															t(e);
														}
													}
													function l(e) {
														try {
															s(o.throw(e));
														} catch (e) {
															t(e);
														}
													}
													function s(t) {
														var n;
														t.done
															? e(t.value)
															: ((n = t.value),
																n instanceof a
																	? n
																	: new a(function (e) {
																			e(n);
																		})).then(i, l);
													}
													s((o = o.apply(n, r || [])).next());
												})
											);
											var n, r, a, o;
										},
									});
									return n;
								})(i, Z().type),
								u = s.data,
								c = s.isLoading,
								f = s.isError,
								d = s.error,
								p = s.refetch;
							return (
								(0, o.useEffect)(
									function () {
										p();
									},
									[i],
								),
								c
									? 'загрузка...'
									: f
										? d.message
										: (0, n.jsxs)('div', {
												className: 'nylZEHkM',
												children: [
													(0, n.jsx)(Co, { filters: i, setFilters: l }),
													(0, n.jsx)('div', {
														className: 'yfkRSb5i',
														children: u.map(function (e) {
															return (0, n.jsx)(No, { product: e }, e.id);
														}),
													}),
												],
											})
							);
						}, {}),
					}),
					(jo[Fo.CATALOG] = {
						path: Lo.catalog,
						element: (0, n.jsx)(function () {
							var e = gr({
									queryKey: ['catalog'],
									queryFn: function () {
										return po.getCatalog();
									},
								}),
								t = e.data,
								r = e.isLoading,
								a = e.error,
								o = e.isError;
							return (
								e.status,
								r
									? (0, n.jsx)('span', { children: 'Загрузка...' })
									: o
										? a.message
										: (0, n.jsx)('div', {
												className: ho.catalog,
												children: t.data.map(function (e) {
													return (0, n.jsxs)(
														we,
														{
															to: '/'.concat(e.name),
															className: ho.item,
															children: [
																(0, n.jsx)('div', {
																	className: ho.img,
																	children: (0, n.jsx)('img', {
																		src: ''.concat(lo, '/img').concat(e.img),
																		alt: e.name,
																	}),
																}),
																(0, n.jsx)('span', {
																	className: ho.name,
																	children: e.name_ru,
																}),
															],
														},
														e.id,
													);
												}),
											})
							);
						}, {}),
					}),
					(jo[Fo.NOT_FOUND] = {
						path: Lo.not_found,
						element: (0, n.jsx)('div', { children: 'not found baby' }),
					}),
					jo);
			const Ao = function () {
				return (0, n.jsx)(o.Suspense, {
					fallback: (0, n.jsx)('div', { children: 'загрузка😡😡😡' }),
					children: (0, n.jsx)(de, {
						children: Object.values(Do).map(function (e) {
							return (0, n.jsx)(
								ce,
								{ element: e.element, path: e.path },
								e.path,
							);
						}),
					}),
				});
			};
			var zo = (0, o.createContext)({});
			const Mo = function (e) {
					var t,
						r = e.children,
						a = e.open,
						o = e.setOpen,
						i = cr().theme;
					function s() {
						o(!1);
					}
					var u = (((t = {}).x_7leCI_ = a), t);
					return (0, l.createPortal)(
						(0, n.jsx)('div', {
							className: bo('m5y8PtrK', u, [i]),
							children: (0, n.jsx)('div', {
								className: 'lA3PFz20',
								onClick: s,
								children: (0, n.jsx)('div', {
									className: 'WwbwxePa',
									onClick: function (e) {
										return (function (e) {
											e.stopPropagation();
										})(e);
									},
									children: (0, n.jsx)(zo.Provider, {
										value: { closeModal: s },
										children: r,
									}),
								}),
							}),
						}),
						document.getElementById('modal'),
					);
				},
				Uo = function (e) {
					var t = e.tabs,
						r = e.tab,
						a = e.changeTab;
					return (0, n.jsx)('div', {
						className: 'KYUnO1rK',
						children: t.map(function (e) {
							var t;
							return (0, n.jsx)(
								Ro,
								{
									className: bo(
										'BbF4ytsU',
										((t = {}), (t.Sv56vB3Z = r === e), t),
									),
									onClick: function () {
										a(e);
									},
									children: e,
								},
								e,
							);
						}),
					});
				};
			var Io = (function () {
					var e = function (t, n) {
						return (
							(e =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (e, t) {
										e.__proto__ = t;
									}) ||
								function (e, t) {
									for (var n in t)
										Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
								}),
							e(t, n)
						);
					};
					return function (t, n) {
						if ('function' != typeof n && null !== n)
							throw new TypeError(
								'Class extends value ' +
									String(n) +
									' is not a constructor or null',
							);
						function r() {
							this.constructor = t;
						}
						e(t, n),
							(t.prototype =
								null === n
									? Object.create(n)
									: ((r.prototype = n.prototype), new r()));
					};
				})(),
				Bo = function (e, t, n, r) {
					return new (n || (n = Promise))(function (a, o) {
						function i(e) {
							try {
								s(r.next(e));
							} catch (e) {
								o(e);
							}
						}
						function l(e) {
							try {
								s(r.throw(e));
							} catch (e) {
								o(e);
							}
						}
						function s(e) {
							var t;
							e.done
								? a(e.value)
								: ((t = e.value),
									t instanceof n
										? t
										: new n(function (e) {
												e(t);
											})).then(i, l);
						}
						s((r = r.apply(e, t || [])).next());
					});
				},
				qo = function (e, t) {
					var n,
						r,
						a,
						o,
						i = {
							label: 0,
							sent: function () {
								if (1 & a[0]) throw a[1];
								return a[1];
							},
							trys: [],
							ops: [],
						};
					return (
						(o = { next: l(0), throw: l(1), return: l(2) }),
						'function' == typeof Symbol &&
							(o[Symbol.iterator] = function () {
								return this;
							}),
						o
					);
					function l(l) {
						return function (s) {
							return (function (l) {
								if (n) throw new TypeError('Generator is already executing.');
								for (; o && ((o = 0), l[0] && (i = 0)), i; )
									try {
										if (
											((n = 1),
											r &&
												(a =
													2 & l[0]
														? r.return
														: l[0]
															? r.throw || ((a = r.return) && a.call(r), 0)
															: r.next) &&
												!(a = a.call(r, l[1])).done)
										)
											return a;
										switch (((r = 0), a && (l = [2 & l[0], a.value]), l[0])) {
											case 0:
											case 1:
												a = l;
												break;
											case 4:
												return i.label++, { value: l[1], done: !1 };
											case 5:
												i.label++, (r = l[1]), (l = [0]);
												continue;
											case 7:
												(l = i.ops.pop()), i.trys.pop();
												continue;
											default:
												if (
													!(
														(a = (a = i.trys).length > 0 && a[a.length - 1]) ||
														(6 !== l[0] && 2 !== l[0])
													)
												) {
													i = 0;
													continue;
												}
												if (
													3 === l[0] &&
													(!a || (l[1] > a[0] && l[1] < a[3]))
												) {
													i.label = l[1];
													break;
												}
												if (6 === l[0] && i.label < a[1]) {
													(i.label = a[1]), (a = l);
													break;
												}
												if (a && i.label < a[2]) {
													(i.label = a[2]), i.ops.push(l);
													break;
												}
												a[2] && i.ops.pop(), i.trys.pop();
												continue;
										}
										l = t.call(e, i);
									} catch (e) {
										(l = [6, e]), (r = 0);
									} finally {
										n = a = 0;
									}
								if (5 & l[0]) throw l[1];
								return { value: l[0] ? l[1] : void 0, done: !0 };
							})([l, s]);
						};
					}
				},
				Qo = (function (e) {
					function t() {
						return (null !== e && e.apply(this, arguments)) || this;
					}
					return (
						Io(t, e),
						(t.prototype.login = function (e, t) {
							return Bo(this, void 0, void 0, function () {
								return qo(this, function (n) {
									switch (n.label) {
										case 0:
											return (
												n.trys.push([0, 2, , 3]),
												[
													4,
													this.api.get(this.urls.auth, {
														params: { username: e, password: t },
													}),
												]
											);
										case 1:
										case 2:
											return [2, n.sent()];
										case 3:
											return [2];
									}
								});
							});
						}),
						(t.prototype.registration = function (e, t) {
							return Bo(this, void 0, void 0, function () {
								return qo(this, function (n) {
									switch (n.label) {
										case 0:
											return (
												n.trys.push([0, 2, , 3]),
												[
													4,
													this.api.post(this.urls.auth, {
														username: e,
														password: t,
													}),
												]
											);
										case 1:
										case 2:
											return [2, n.sent()];
										case 3:
											return [2];
									}
								});
							});
						}),
						t
					);
				})(so);
			const Wo = new Qo();
			var Ho = function () {
				return (
					(Ho =
						Object.assign ||
						function (e) {
							for (var t, n = 1, r = arguments.length; n < r; n++)
								for (var a in (t = arguments[n]))
									Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
							return e;
						}),
					Ho.apply(this, arguments)
				);
			};
			const $o = function (e) {
					var t = e.className,
						r = (function (e, t) {
							var n = {};
							for (var r in e)
								Object.prototype.hasOwnProperty.call(e, r) &&
									t.indexOf(r) < 0 &&
									(n[r] = e[r]);
							if (
								null != e &&
								'function' == typeof Object.getOwnPropertySymbols
							) {
								var a = 0;
								for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
									t.indexOf(r[a]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
										(n[r[a]] = e[r[a]]);
							}
							return n;
						})(e, ['className']);
					return (0, n.jsx)(
						'input',
						Ho({ 'data-testid': 'input' }, r, {
							className: bo('X8EVbQ1x', {}, [t]),
						}),
					);
				},
				Vo = 'TxjEbNHl',
				Ko = 'XEZ9pBdO',
				Go = 'kdGv7HUt';
			const Xo = function () {
				var e = (0, o.useState)(''),
					t = e[0],
					r = e[1],
					a = (0, o.useState)(''),
					i = a[0],
					l = a[1],
					s = Qe(),
					u = (0, o.useContext)(zo);
				return (0, n.jsxs)('form', {
					className: Vo,
					children: [
						(0, n.jsxs)('div', {
							className: Ko,
							children: [
								(0, n.jsx)($o, {
									type: 'text',
									placeholder: 'login',
									value: t,
									onChange: function (e) {
										return r(e.target.value);
									},
								}),
								(0, n.jsx)($o, {
									type: 'password',
									minLength: 8,
									placeholder: 'password',
									required: !0,
									value: i,
									onChange: function (e) {
										l(e.target.value);
									},
								}),
							],
						}),
						(0, n.jsx)(Ro, {
							className: Go,
							onClick: function (e) {
								return (function (e) {
									return (
										(n = this),
										(a = void 0),
										(c = function () {
											var n;
											return (function (e, t) {
												var n,
													r,
													a,
													o,
													i = {
														label: 0,
														sent: function () {
															if (1 & a[0]) throw a[1];
															return a[1];
														},
														trys: [],
														ops: [],
													};
												return (
													(o = { next: l(0), throw: l(1), return: l(2) }),
													'function' == typeof Symbol &&
														(o[Symbol.iterator] = function () {
															return this;
														}),
													o
												);
												function l(l) {
													return function (s) {
														return (function (l) {
															if (n)
																throw new TypeError(
																	'Generator is already executing.',
																);
															for (; o && ((o = 0), l[0] && (i = 0)), i; )
																try {
																	if (
																		((n = 1),
																		r &&
																			(a =
																				2 & l[0]
																					? r.return
																					: l[0]
																						? r.throw ||
																							((a = r.return) && a.call(r), 0)
																						: r.next) &&
																			!(a = a.call(r, l[1])).done)
																	)
																		return a;
																	switch (
																		((r = 0),
																		a && (l = [2 & l[0], a.value]),
																		l[0])
																	) {
																		case 0:
																		case 1:
																			a = l;
																			break;
																		case 4:
																			return (
																				i.label++, { value: l[1], done: !1 }
																			);
																		case 5:
																			i.label++, (r = l[1]), (l = [0]);
																			continue;
																		case 7:
																			(l = i.ops.pop()), i.trys.pop();
																			continue;
																		default:
																			if (
																				!(
																					(a =
																						(a = i.trys).length > 0 &&
																						a[a.length - 1]) ||
																					(6 !== l[0] && 2 !== l[0])
																				)
																			) {
																				i = 0;
																				continue;
																			}
																			if (
																				3 === l[0] &&
																				(!a || (l[1] > a[0] && l[1] < a[3]))
																			) {
																				i.label = l[1];
																				break;
																			}
																			if (6 === l[0] && i.label < a[1]) {
																				(i.label = a[1]), (a = l);
																				break;
																			}
																			if (a && i.label < a[2]) {
																				(i.label = a[2]), i.ops.push(l);
																				break;
																			}
																			a[2] && i.ops.pop(), i.trys.pop();
																			continue;
																	}
																	l = t.call(e, i);
																} catch (e) {
																	(l = [6, e]), (r = 0);
																} finally {
																	n = a = 0;
																}
															if (5 & l[0]) throw l[1];
															return { value: l[0] ? l[1] : void 0, done: !0 };
														})([l, s]);
													};
												}
											})(this, function (a) {
												switch (a.label) {
													case 0:
														return e.preventDefault(), [4, Wo.login(t, i)];
													case 1:
														return (n = a.sent()) instanceof Error &&
															'AxiosError' === n.name
															? [2, alert(n.response.data.message)]
															: ('data' in n &&
																	s(
																		lr({
																			token: n.data.token,
																			username: n.data.username,
																		}),
																	),
																r(''),
																l(''),
																u.closeModal(),
																[2]);
												}
											});
										}),
										new ((o = void 0) || (o = Promise))(function (e, t) {
											function r(e) {
												try {
													l(c.next(e));
												} catch (e) {
													t(e);
												}
											}
											function i(e) {
												try {
													l(c.throw(e));
												} catch (e) {
													t(e);
												}
											}
											function l(t) {
												var n;
												t.done
													? e(t.value)
													: ((n = t.value),
														n instanceof o
															? n
															: new o(function (e) {
																	e(n);
																})).then(r, i);
											}
											l((c = c.apply(n, a || [])).next());
										})
									);
									var n, a, o, c;
								})(e);
							},
							children: 'Войти',
						}),
					],
				});
			};
			const Jo = function () {
					var e = (0, o.useState)(''),
						t = e[0],
						r = e[1],
						a = (0, o.useState)(''),
						i = a[0],
						l = a[1],
						s = Qe(),
						u = (0, o.useContext)(zo);
					return (0, n.jsxs)('form', {
						className: Vo,
						children: [
							(0, n.jsxs)('div', {
								className: Ko,
								children: [
									(0, n.jsx)($o, {
										type: 'text',
										placeholder: 'login',
										value: t,
										onChange: function (e) {
											return r(e.target.value);
										},
									}),
									(0, n.jsx)($o, {
										type: 'password',
										minLength: 8,
										placeholder: 'password',
										required: !0,
										value: i,
										onChange: function (e) {
											l(e.target.value);
										},
									}),
								],
							}),
							(0, n.jsx)(Ro, {
								className: Go,
								onClick: function (e) {
									return (function (e) {
										return (
											(n = this),
											(r = void 0),
											(o = function () {
												var n;
												return (function (e, t) {
													var n,
														r,
														a,
														o,
														i = {
															label: 0,
															sent: function () {
																if (1 & a[0]) throw a[1];
																return a[1];
															},
															trys: [],
															ops: [],
														};
													return (
														(o = { next: l(0), throw: l(1), return: l(2) }),
														'function' == typeof Symbol &&
															(o[Symbol.iterator] = function () {
																return this;
															}),
														o
													);
													function l(l) {
														return function (s) {
															return (function (l) {
																if (n)
																	throw new TypeError(
																		'Generator is already executing.',
																	);
																for (; o && ((o = 0), l[0] && (i = 0)), i; )
																	try {
																		if (
																			((n = 1),
																			r &&
																				(a =
																					2 & l[0]
																						? r.return
																						: l[0]
																							? r.throw ||
																								((a = r.return) && a.call(r), 0)
																							: r.next) &&
																				!(a = a.call(r, l[1])).done)
																		)
																			return a;
																		switch (
																			((r = 0),
																			a && (l = [2 & l[0], a.value]),
																			l[0])
																		) {
																			case 0:
																			case 1:
																				a = l;
																				break;
																			case 4:
																				return (
																					i.label++, { value: l[1], done: !1 }
																				);
																			case 5:
																				i.label++, (r = l[1]), (l = [0]);
																				continue;
																			case 7:
																				(l = i.ops.pop()), i.trys.pop();
																				continue;
																			default:
																				if (
																					!(
																						(a =
																							(a = i.trys).length > 0 &&
																							a[a.length - 1]) ||
																						(6 !== l[0] && 2 !== l[0])
																					)
																				) {
																					i = 0;
																					continue;
																				}
																				if (
																					3 === l[0] &&
																					(!a || (l[1] > a[0] && l[1] < a[3]))
																				) {
																					i.label = l[1];
																					break;
																				}
																				if (6 === l[0] && i.label < a[1]) {
																					(i.label = a[1]), (a = l);
																					break;
																				}
																				if (a && i.label < a[2]) {
																					(i.label = a[2]), i.ops.push(l);
																					break;
																				}
																				a[2] && i.ops.pop(), i.trys.pop();
																				continue;
																		}
																		l = t.call(e, i);
																	} catch (e) {
																		(l = [6, e]), (r = 0);
																	} finally {
																		n = a = 0;
																	}
																if (5 & l[0]) throw l[1];
																return {
																	value: l[0] ? l[1] : void 0,
																	done: !0,
																};
															})([l, s]);
														};
													}
												})(this, function (r) {
													switch (r.label) {
														case 0:
															return (
																e.preventDefault(), [4, Wo.registration(t, i)]
															);
														case 1:
															return (n = r.sent()) instanceof Error &&
																'AxiosError' === n.name
																? [2, alert(n.response.data.message)]
																: ('data' in n &&
																		s(
																			lr({
																				token: n.data.token,
																				username: n.data.username,
																			}),
																		),
																	u.closeModal(),
																	[2]);
													}
												});
											}),
											new ((a = void 0) || (a = Promise))(function (e, t) {
												function i(e) {
													try {
														s(o.next(e));
													} catch (e) {
														t(e);
													}
												}
												function l(e) {
													try {
														s(o.throw(e));
													} catch (e) {
														t(e);
													}
												}
												function s(t) {
													var n;
													t.done
														? e(t.value)
														: ((n = t.value),
															n instanceof a
																? n
																: new a(function (e) {
																		e(n);
																	})).then(i, l);
												}
												s((o = o.apply(n, r || [])).next());
											})
										);
										var n, r, a, o;
									})(e);
								},
								children: 'Зарегестрироваться',
							}),
						],
					});
				},
				Yo = function () {
					var e = (0, o.useState)('войти'),
						t = e[0],
						r = e[1],
						a = {
							войти: (0, n.jsx)(Xo, {}),
							зарегестрироваться: (0, n.jsx)(Jo, {}),
						};
					return (0, n.jsxs)('div', {
						className: 'kCDYiHRb',
						children: [
							(0, n.jsx)(Uo, { tabs: Object.keys(a), tab: t, changeTab: r }),
							a[t],
						],
					});
				};
			var Zo, ei;
			function ti() {
				return (
					(ti = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					ti.apply(this, arguments)
				);
			}
			const ni = function (e) {
				return o.createElement(
					'svg',
					ti(
						{
							xmlns: 'http://www.w3.org/2000/svg',
							fill: 'none',
							viewBox: '0 0 24 24',
						},
						e,
					),
					Zo ||
						(Zo = o.createElement(
							'g',
							{
								strokeMiterlimit: 10,
								strokeWidth: 1.5,
								clipPath: 'url(#lightmode_svg__a)',
							},
							o.createElement('path', {
								d: 'M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M12 19v4m0-22v4',
							}),
						)),
					ei ||
						(ei = o.createElement(
							'defs',
							null,
							o.createElement(
								'clipPath',
								{ id: 'lightmode_svg__a' },
								o.createElement('path', { fill: '#fff', d: 'M0 0h24v24H0z' }),
							),
						)),
				);
			};
			var ri;
			function ai() {
				return (
					(ai = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					ai.apply(this, arguments)
				);
			}
			const oi = function (e) {
					return o.createElement(
						'svg',
						ai(
							{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 48 48' },
							e,
						),
						ri ||
							(ri = o.createElement('path', {
								d: 'M32.8 29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7 0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3 9.7 2.1 16.9 2.5 25c.5 10.7 9 19.5 19.7 20.4 10.6.9 19.8-6 22.5-15.6.4-1.4-1-2.6-2.3-2q-4.35 1.95-9.6 1.5',
								className: 'darkmode_svg__c',
							})),
					);
				},
				ii = 'Z9mUKKVl',
				li = function () {
					var e,
						t = cr(),
						r = t.theme,
						a = t.toggleTheme,
						o =
							(((e = {})[qe.DARK] = (0, n.jsx)(oi, { className: ii })),
							(e[qe.NORMAL] = (0, n.jsx)(ni, { className: ii })),
							e);
					return (0, n.jsx)(Ro, {
						className: 'DFsPLFVL',
						onClick: a,
						children: o[r],
					});
				},
				si = 'CpTJuO0w';
			var ui;
			function ci() {
				return (
					(ci = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					ci.apply(this, arguments)
				);
			}
			const fi = function (e) {
				return o.createElement(
					'svg',
					ci(
						{
							xmlns: 'http://www.w3.org/2000/svg',
							fill: 'none',
							viewBox: '0 0 24 24',
						},
						e,
					),
					ui ||
						(ui = o.createElement('path', {
							d: 'M2.25 3A.75.75 0 0 1 3 2.25h1.382a1.75 1.75 0 0 1 1.565.967l-.67.336.67-.336.517 1.033h13.674a1.25 1.25 0 0 1 1.086 1.87l-3.285 5.748a1.75 1.75 0 0 1-1.52.882H8.917l-1.324 2.117a.25.25 0 0 0 .212.383H19a.75.75 0 0 1 0 1.5H7.804c-1.374 0-2.212-1.512-1.484-2.677l1.352-2.163-2.363-6.615-.703-1.407a.25.25 0 0 0-.224-.138H3A.75.75 0 0 1 2.25 3m4.814 2.75 1.965 5.5h7.39a.25.25 0 0 0 .218-.126l3.07-5.374zM10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3',
							clipRule: 'evenodd',
						})),
				);
			};
			var di;
			function pi() {
				return (
					(pi = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					pi.apply(this, arguments)
				);
			}
			const hi = function (e) {
				return o.createElement(
					'svg',
					pi(
						{
							xmlns: 'http://www.w3.org/2000/svg',
							fill: 'none',
							viewBox: '0 0 20 20',
						},
						e,
					),
					di ||
						(di = o.createElement('path', {
							d: 'M10.125 1.77a8.356 8.356 0 0 0-6.432 13.69c1.466-1.5 3.436-2.736 6.432-2.736 2.995 0 4.964 1.226 6.433 2.734A8.356 8.356 0 0 0 10.125 1.77m5.36 14.765c-1.259-1.301-2.865-2.292-5.36-2.292-2.492 0-4.099.997-5.36 2.293a8.32 8.32 0 0 0 5.36 1.945c2.04 0 3.91-.732 5.36-1.946M.25 10.125C.25 4.671 4.671.25 10.125.25S20 4.671 20 10.125 15.579 20 10.125 20 .25 15.579.25 10.125m9.875-4.518a2.599 2.599 0 1 0 0 5.198 2.599 2.599 0 0 0 0-5.198M6.007 8.206a4.118 4.118 0 1 1 8.236 0 4.118 4.118 0 0 1-8.236 0',
							clipRule: 'evenodd',
						})),
				);
			};
			var mi, yi;
			function vi() {
				return (
					(vi = Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var n = arguments[t];
									for (var r in n)
										Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
								}
								return e;
							}),
					vi.apply(this, arguments)
				);
			}
			const gi = function (e) {
				return o.createElement(
					'svg',
					vi(
						{
							xmlns: 'http://www.w3.org/2000/svg',
							xmlSpace: 'preserve',
							width: 800,
							height: 800,
							viewBox: '0 0 471.2 471.2',
						},
						e,
					),
					mi ||
						(mi = o.createElement('path', {
							d: 'M227.619 444.2h-122.9c-33.4 0-60.5-27.2-60.5-60.5V87.5c0-33.4 27.2-60.5 60.5-60.5h124.9c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-124.9c-48.3 0-87.5 39.3-87.5 87.5v296.2c0 48.3 39.3 87.5 87.5 87.5h122.9c7.5 0 13.5-6 13.5-13.5s-6.1-13.5-13.5-13.5',
						})),
					yi ||
						(yi = o.createElement('path', {
							d: 'm450.019 226.1-85.8-85.8c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l62.8 62.8h-273.9c-7.5 0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h273.9l-62.8 62.8c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l85.8-85.8c5.4-5.4 5.4-14 .1-19.2',
						})),
				);
			};
			var bi = (0, o.memo)(function (e) {
				var t = e.className,
					r = De(function (e) {
						return e.userSlice;
					}),
					a = Qe(),
					i = (0, o.useState)(!1),
					l = i[0],
					s = i[1];
				return (0, n.jsxs)('div', {
					className: bo('YC5yKeo4', {}, [t]),
					children: [
						(0, n.jsx)(we, {
							to: '/',
							className: 'zwOTW7Ec',
							children: 'shodon store',
						}),
						(0, n.jsx)('nav', {
							className: 'ofyPKodC',
							children: r.token
								? (0, n.jsxs)(n.Fragment, {
										children: [
											(0, n.jsx)(li, {}),
											(0, n.jsx)(we, {
												to: '/basket',
												className: 'mO2kYv5w',
												children: (0, n.jsx)(fi, { className: si }),
											}),
											(0, n.jsx)(gi, {
												className: si,
												onClick: function () {
													return a(sr());
												},
											}),
										],
									})
								: (0, n.jsxs)(n.Fragment, {
										children: [
											(0, n.jsx)('div', {}),
											(0, n.jsx)(li, {}),
											(0, n.jsx)(hi, {
												className: si,
												onClick: function () {
													return s(!0);
												},
											}),
										],
									}),
						}),
						(0, n.jsx)(Mo, {
							open: l,
							setOpen: s,
							children: (0, n.jsx)(Yo, {}),
						}),
					],
				});
			});
			const wi = bi;
			(0, r.s)(document.getElementById('root')).render(
				(0, n.jsx)(n.Fragment, {
					children: (0, n.jsx)(
						function (e) {
							let { basename: n, children: r, future: a, window: i } = e,
								l = o.useRef();
							var s;
							null == l.current &&
								(l.current =
									(void 0 === (s = { window: i, v5Compat: !0 }) && (s = {}),
									(function (e, n, r, a) {
										void 0 === a && (a = {});
										let { window: o = document.defaultView, v5Compat: i = !1 } =
												a,
											l = o.history,
											s = t.Pop,
											d = null,
											y = v();
										function v() {
											return (l.state || { idx: null }).idx;
										}
										function g() {
											s = t.Pop;
											let e = v(),
												n = null == e ? null : e - y;
											(y = e),
												d && d({ action: s, location: w.location, delta: n });
										}
										function b(e) {
											let t =
													'null' !== o.location.origin
														? o.location.origin
														: o.location.href,
												n = 'string' == typeof e ? e : m(e);
											return (
												f(
													t,
													'No window.location.(origin|href) available to create URL for href: ' +
														n,
												),
												new URL(n, t)
											);
										}
										null == y &&
											((y = 0), l.replaceState(u({}, l.state, { idx: y }), ''));
										let w = {
											get action() {
												return s;
											},
											get location() {
												return e(o, l);
											},
											listen(e) {
												if (d)
													throw new Error(
														'A history only accepts one active listener',
													);
												return (
													o.addEventListener(c, g),
													(d = e),
													() => {
														o.removeEventListener(c, g), (d = null);
													}
												);
											},
											createHref: e => n(o, e),
											createURL: b,
											encodeLocation(e) {
												let t = b(e);
												return {
													pathname: t.pathname,
													search: t.search,
													hash: t.hash,
												};
											},
											push: function (e, n) {
												s = t.Push;
												let a = h(w.location, e, n);
												r && r(a, e), (y = v() + 1);
												let u = p(a, y),
													c = w.createHref(a);
												try {
													l.pushState(u, '', c);
												} catch (e) {
													if (
														e instanceof DOMException &&
														'DataCloneError' === e.name
													)
														throw e;
													o.location.assign(c);
												}
												i &&
													d &&
													d({ action: s, location: w.location, delta: 1 });
											},
											replace: function (e, n) {
												s = t.Replace;
												let a = h(w.location, e, n);
												r && r(a, e), (y = v());
												let o = p(a, y),
													u = w.createHref(a);
												l.replaceState(o, '', u),
													i &&
														d &&
														d({ action: s, location: w.location, delta: 0 });
											},
											go: e => l.go(e),
										};
										return w;
									})(
										function (e, t) {
											let { pathname: n, search: r, hash: a } = e.location;
											return h(
												'',
												{ pathname: n, search: r, hash: a },
												(t.state && t.state.usr) || null,
												(t.state && t.state.key) || 'default',
											);
										},
										function (e, t) {
											return 'string' == typeof t ? t : m(t);
										},
										null,
										s,
									)));
							let d = l.current,
								[y, v] = o.useState({ action: d.action, location: d.location }),
								{ v7_startTransition: g } = a || {},
								b = o.useCallback(
									e => {
										g && ve ? ve(() => v(e)) : v(e);
									},
									[v, g],
								);
							return (
								o.useLayoutEffect(() => d.listen(b), [d, b]),
								o.createElement(fe, {
									basename: n,
									children: r,
									location: y.location,
									navigationType: y.action,
									navigator: d,
									future: a,
								})
							);
						},
						{
							children: (0, n.jsx)(
								function ({
									store: e,
									context: t,
									children: n,
									serverState: r,
									stabilityCheck: a = 'once',
									identityFunctionCheck: o = 'once',
								}) {
									const i = Ce.useMemo(() => {
											const t = (function (e, t) {
												let n,
													r = Ae,
													a = 0,
													o = !1;
												function i() {
													u.onStateChange && u.onStateChange();
												}
												function l() {
													a++,
														n ||
															((n = t ? t.addNestedSub(i) : e.subscribe(i)),
															(r = (function () {
																let e = null,
																	t = null;
																return {
																	clear() {
																		(e = null), (t = null);
																	},
																	notify() {
																		(() => {
																			let t = e;
																			for (; t; ) t.callback(), (t = t.next);
																		})();
																	},
																	get() {
																		const t = [];
																		let n = e;
																		for (; n; ) t.push(n), (n = n.next);
																		return t;
																	},
																	subscribe(n) {
																		let r = !0;
																		const a = (t = {
																			callback: n,
																			next: null,
																			prev: t,
																		});
																		return (
																			a.prev ? (a.prev.next = a) : (e = a),
																			function () {
																				r &&
																					null !== e &&
																					((r = !1),
																					a.next
																						? (a.next.prev = a.prev)
																						: (t = a.prev),
																					a.prev
																						? (a.prev.next = a.next)
																						: (e = a.next));
																			}
																		);
																	},
																};
															})()));
												}
												function s() {
													a--,
														n &&
															0 === a &&
															(n(), (n = void 0), r.clear(), (r = Ae));
												}
												const u = {
													addNestedSub: function (e) {
														l();
														const t = r.subscribe(e);
														let n = !1;
														return () => {
															n || ((n = !0), t(), s());
														};
													},
													notifyNestedSubs: function () {
														r.notify();
													},
													handleChangeWrapper: i,
													isSubscribed: function () {
														return o;
													},
													trySubscribe: function () {
														o || ((o = !0), l());
													},
													tryUnsubscribe: function () {
														o && ((o = !1), s());
													},
													getListeners: () => r,
												};
												return u;
											})(e);
											return {
												store: e,
												subscription: t,
												getServerState: r ? () => r : void 0,
												stabilityCheck: a,
												identityFunctionCheck: o,
											};
										}, [e, r, a, o]),
										l = Ce.useMemo(() => e.getState(), [e]);
									ze(() => {
										const { subscription: t } = i;
										return (
											(t.onStateChange = t.notifyNestedSubs),
											t.trySubscribe(),
											l !== e.getState() && t.notifyNestedSubs(),
											() => {
												t.tryUnsubscribe(), (t.onStateChange = void 0);
											}
										);
									}, [i, l]);
									const s = t || Re;
									return Ce.createElement(s.Provider, { value: i }, n);
								},
								{
									store: ur,
									children: (0, n.jsx)(
										function (e) {
											var t = e.children,
												r = (0, o.useState)($e),
												a = r[0],
												i = r[1],
												l = (0, o.useMemo)(
													function () {
														return { theme: a, setTheme: i };
													},
													[a],
												);
											return (0, n.jsx)(We.Provider, { value: l, children: t });
										},
										{
											children: (0, n.jsx)(
												function (e) {
													var t = e.children;
													return (0, n.jsx)(_t, { client: Pt, children: t });
												},
												{
													children: (0, n.jsx)(function () {
														var e = cr().theme;
														return (0, n.jsx)('div', {
															className: bo('app', {}, [e]),
															children: (0, n.jsxs)('div', {
																className: 'body',
																children: [
																	(0, n.jsx)(wi, {}),
																	(0, n.jsx)(Ao, {}),
																],
															}),
														});
													}, {}),
												},
											),
										},
									),
								},
							),
						},
					),
				}),
			);
		})();
})();
