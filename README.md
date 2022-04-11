# [Upright Quotes](https://zyrouge.github.io/upright-quotes)

✨ Random quotes as JSON and Image. Open-sourced and available for public.

# API Endpoints

## Base URL

-   GitHub Pages: `https://zyrouge.github.io/upright-quotes/api`
-   Github Raw: `https://raw.githubusercontent.com/zyrouge/upright-quotes/gh-pages/api`
-   JsDelivr: `https://cdn.jsdelivr.net/gh/zyrouge/upright-quotes@gh-pages/api`

## Get Metadata

Path: `/meta.json`
JSON Schema:

```jsonc
{
    "size": "number", // Total size of quotes
    "generatedAt": "number" // Milliseconds from epoch
}
```

## Get Quote as JSON

Path: `/quotes/{index-of-quote}.json`
JSON Schema:

```jsonc
{
    "quote": "string",
    "author": "string",
    "color": {
        "primary": "string", // Hex code (eg. #000000)
        "contrast": "string" // Hex code (eg. #ffffff)
    }
}
```

## Get Quote as image

Path: `/quotes/{index-of-quote}.png`

# License

[GPL-3.0 License](./license)
