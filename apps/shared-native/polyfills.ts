/* eslint-disable import/newline-after-import */
/* eslint no-extend-native: ["error", { "exceptions": ["Date"] }] */

import 'intl'
import 'intl/locale-data/jsonp/en'
import 'intl-pluralrules'
import '@formatjs/intl-locale/polyfill'
import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-listformat/polyfill'
/**
 * We should import more polyfills here if we need them for additional languages
 */
import '@formatjs/intl-numberformat/locale-data/en-GB'
import '@formatjs/intl-numberformat/locale-data/es-PE'
import '@formatjs/intl-numberformat/locale-data/es-MX'

import '@formatjs/intl-listformat/locale-data/en-GB'
import '@formatjs/intl-listformat/locale-data/es-PE'
import '@formatjs/intl-listformat/locale-data/es-MX'

// Fix for DayJS timezone issue:
// https://github.com/iamkun/dayjs/issues/1377#issuecomment-1191900686

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(Date.prototype as any)._toLocaleString = Date.prototype.toLocaleString

Date.prototype.toLocaleString = function toLocaleStringFix(
  a?: Intl.LocalesArgument,
  b?: Intl.DateTimeFormatOptions
): string {
  if (b && Object.keys(b).length === 1 && 'timeZone' in b && a === 'en-US') {
    return Intl.DateTimeFormat('en-us', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: b.timeZone,
    })
      .format(this)
      .replace(/(\d{2})\/(\d{2})\/(\d{4}),/g, '$3-$1-$2')
  }

  // @ts-expect-error we added this to Date above
  return this._toLocaleString(a, b)
}
