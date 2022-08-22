module.exports = {
    "name": "QuickButtonLinks",
    "publisher": "Sample",
    "cards": [{
        "type": "QuickButtonLinksCard",
        "source": "./src/cards/QuickButtonLinksCard",
        "title": "Quick Button Links",
        "displayCardType": "Quick Button Links",
        "description": "List of links as Buttons",
        "template": {
            "image": "./src/assets/quickbuttonlinks.png",
            "title": "Quick Button Links Template"
        },
        "customConfiguration": {
            "source": "./src/cards/QuickButtonLinksTemplateConfig.jsx"
        }
    }]
}