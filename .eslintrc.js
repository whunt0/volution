module.exports = {
    "env": {
        "browser" : true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        //"linebreak-style": [
        //    "error",
        //    "unix"
        //],
        "no-console" : "off",
        "no-unused-vars" : "off",
        //"quotes": [
        //    "error",
        //    "single"
        //],
        "jsx-quotes" : [
            "error",
            "prefer-single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
