module.exports = {
    "name": "GenericWidgets",
    "publisher": "ADA University",
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
    },
    {
        "type": "QuickButtonPagesCard",
        "source": "./src/cards/QuickButtonPagesCard",
        "title": "Quick Button Pages",
        "displayCardType": "Quick Button Pages",
        "description": "List of pages accessed through card with Buttons",
        "template": {
            "image": "./src/assets/quickbuttonpages.png",
            "title": "Quick Button Pages Template"
        },
        "customConfiguration": {
            "source": "./src/cards/QuickButtonPagesTemplateConfig.jsx"
        }
    }],
    "page": {
        "source": "./src/page/router.jsx"
    }
}