import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js"

CookieConsent.run({
    // En changeant le numero, permet de definir une nouvelle révision des préférences si besoin
    revision: 0,

    // Définition des catégories
    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {},
        legacy:{}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies, in compliance with the GDPR',
                    description: 'Cookie modal description',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept necessary',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    // Sections permettant d'informer l'utilisateur à rattacher à une categorie par linkedCategory
                    sections: [
                        {
                            title: 'Only neccessary cookie',
                            description: 'We use session cookie for security'
                        },
                        {
                            title: 'Collect of datas',
                            description: 'Your datas : (username, password, email, are collected for the best user experience and the security session',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Data sharing',
                            description: 'Your data : username, comments, are shared with other users of the site',
                            linkedCategory: 'necessary',

                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        },
                        {
                            title: 'Data duration',
                            description: 'your data storage is reviewed every 13 months. You have the right to access, rectify and delete',
                        },
                    ]
                }
            }
        }
    }
});