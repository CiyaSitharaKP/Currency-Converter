const converterForm = document.getElementById("converter-form");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

// Hardcoded exchange rates (base: USD)
const exchangeRates = {
  "USD": 1,
    "AED": 3.67,
    "AFN": 70.22,
    "ALL": 87.87,
    "AMD": 386.87,
    "ANG": 1.79,
    "AOA": 918.07,
    "ARS": 1135.5,
    "AUD": 1.56,
    "AWG": 1.79,
    "AZN": 1.7,
    "BAM": 1.75,
    "BBD": 2,
    "BDT": 121.54,
    "BGN": 1.75,
    "BHD": 0.376,
    "BIF": 2971.59,
    "BMD": 1,
    "BND": 1.3,
    "BOB": 6.93,
    "BRL": 5.64,
    "BSD": 1,
    "BTN": 85.55,
    "BWP": 13.59,
    "BYN": 3.04,
    "BZD": 2,
    "CAD": 1.4,
    "CDF": 2879.95,
    "CHF": 0.836,
    "CLP": 942.3,
    "CNY": 7.21,
    "COP": 4209.04,
    "CRC": 507.67,
    "CUP": 24,
    "CVE": 98.51,
    "CZK": 22.27,
    "DJF": 177.72,
    "DKK": 6.67,
    "DOP": 58.84,
    "DZD": 133.28,
    "EGP": 50.16,
    "ERN": 15,
    "ETB": 133.99,
    "EUR": 0.893,
    "FJD": 2.26,
    "FKP": 0.752,
    "FOK": 6.67,
    "GBP": 0.752,
    "GEL": 2.74,
    "GGP": 0.752,
    "GHS": 12.44,
    "GIP": 0.752,
    "GMD": 72.69,
    "GNF": 8700.48,
    "GTQ": 7.69,
    "GYD": 209.2,
    "HKD": 7.81,
    "HNL": 26,
    "HRK": 6.73,
    "HTG": 130.73,
    "HUF": 360.13,
    "IDR": 16505.7,
    "ILS": 3.55,
    "IMP": 0.752,
    "INR": 85.55,
    "IQD": 1308.55,
    "IRR": 42012.04,
    "ISK": 129.34,
    "JEP": 0.752,
    "JMD": 159.16,
    "JOD": 0.709,
    "JPY": 145.73,
    "KES": 129.19,
    "KGS": 87.4,
    "KHR": 3995.3,
    "KID": 1.56,
    "KMF": 439.54,
    "KRW": 1396.99,
    "KWD": 0.307,
    "KYD": 0.833,
    "KZT": 510.93,
    "LAK": 21762.01,
    "LBP": 89500,
    "LKR": 298.37,
    "LRD": 200.21,
    "LSL": 18.04,
    "LYD": 5.52,
    "MAD": 9.29,
    "MDL": 17.41,
    "MGA": 4503.86,
    "MKD": 54.94,
    "MMK": 2102.56,
    "MNT": 3585.9,
    "MOP": 8.04,
    "MRU": 39.84,
    "MUR": 45.97,
    "MVR": 15.46,
    "MWK": 1742.03,
    "MXN": 19.46,
    "MYR": 4.28,
    "MZN": 63.89,
    "NAD": 18.04,
    "NGN": 1600.81,
    "NIO": 36.8,
    "NOK": 10.42,
    "NPR": 136.88,
    "NZD": 1.7,
    "OMR": 0.384,
    "PAB": 1,
    "PEN": 3.68,
    "PGK": 4.12,
    "PHP": 55.78,
    "PKR": 281.82,
    "PLN": 3.79,
    "PYG": 8031.39,
    "QAR": 3.64,
    "RON": 4.56,
    "RSD": 104.72,
    "RUB": 80.22,
    "RWF": 1455.49,
    "SAR": 3.75,
    "SBD": 8.55,
    "SCR": 14.58,
    "SDG": 511.64,
    "SEK": 9.74,
    "SGD": 1.3,
    "SHP": 0.752,
    "SLE": 22.75,
    "SLL": 22748.08,
    "SOS": 571.3,
    "SRD": 36.49,
    "SSP": 4564.37,
    "STN": 21.89,
    "SYP": 12934.64,
    "SZL": 18.04,
    "THB": 33.25,
    "TJS": 10.4,
    "TMT": 3.5,
    "TND": 3.02,
    "TOP": 2.38,
    "TRY": 38.79,
    "TTD": 6.79,
    "TVD": 1.56,
    "TWD": 30.09,
    "TZS": 2681.73,
    "UAH": 41.48,
    "UGX": 3656.83,
    "UYU": 41.71,
    "UZS": 12955.78,
    "VES": 94.32,
    "VND": 25930,
    "VUV": 119.71,
    "WST": 2.77,
    "XAF": 586.05,
    "XCD": 2.7,
    "XCG": 1.79,
    "XDR": 0.741,
    "XOF": 586.05,
    "XPF": 106.61,
    "YER": 244.46,
    "ZAR": 18.04,
    "ZMW": 26.65,
    "ZWL": 26.86,
};

window.addEventListener("load", populateCurrencies);

converterForm.addEventListener("submit", convertCurrency);

function populateCurrencies() {
  const currencyCodes = Object.keys(exchangeRates);

  currencyCodes.forEach((currency) => {
    const option1 = new Option(currency, currency);
    const option2 = new Option(currency, currency);
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
}

function convertCurrency(e) {
  e.preventDefault();

  const amount = parseFloat(amountInput.value);
  const fromCurrencyValue = fromCurrency.value;
  const toCurrencyValue = toCurrency.value;

  if (amount < 0 || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const rateFrom = exchangeRates[fromCurrencyValue];
  const rateTo = exchangeRates[toCurrencyValue];
  const convertedAmount = ((amount / rateFrom) * rateTo).toFixed(2);

  resultDiv.innerHTML = `${amount} ${fromCurrencyValue} = ${convertedAmount} ${toCurrencyValue}`;
}
