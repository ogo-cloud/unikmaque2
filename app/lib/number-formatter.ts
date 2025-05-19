const naira = new Intl.NumberFormat('en-NG', {
    currency:"NGN",
    currencyDisplay:"symbol",
    style:"currency",
    maximumFractionDigits:2
});

export {naira};