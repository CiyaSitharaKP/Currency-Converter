# Currency Converter
This is a simple web-based currency converter that allows users to convert an amount from one currency to another using **hardcoded exchange rates (base: USD)**.

##  Features

- Select currencies from dropdowns
- Convert amounts between over 150 currencies
- Instant conversion without page reload
- Easy to extend or integrate with live APIs

##  Project Structure

- `index.html` – Markup structure of the app
- `style.css` – Basic styling 
- `script.js` – Currency conversion logic using hardcoded exchange rates

##  How It Works

1. On page load, all currency options are populated from the `exchangeRates` object.
2. User selects a **from** and **to** currency and inputs an amount.
3. On form submission, the amount is converted using the formula:
                convertedAmount = (amount / fromRate) * toRate
4. Result is displayed below the form.

##  License

This project is open source.
