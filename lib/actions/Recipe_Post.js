/**
 * Auto-generated action file for "BigOven" API.
 *
 * Generated at: 2019-05-07T14:39:41.799Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / bigoven-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Recipe_Post'
 * Endpoint Path: '/recipe'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "ActiveMinutes": "ActiveMinutes",
    "AdTags": "AdTags",
    "AdminBoost": "AdminBoost",
    "AllCategoriesText": "AllCategoriesText",
    "BookmarkImageURL": "BookmarkImageURL",
    "BookmarkSiteLogo": "BookmarkSiteLogo",
    "BookmarkURL": "BookmarkURL",
    "Category": "Category",
    "Collection": "Collection",
    "CollectionID": "CollectionID",
    "CreationDate": "CreationDate",
    "Cuisine": "Cuisine",
    "Description": "Description",
    "FavoriteCount": "FavoriteCount",
    "HeroPhotoUrl": "HeroPhotoUrl",
    "ImageSquares": "ImageSquares",
    "ImageURL": "ImageURL",
    "Ingredients": "Ingredients",
    "IngredientsTextBlock": "IngredientsTextBlock",
    "Instructions": "Instructions",
    "IsBookmark": "IsBookmark",
    "IsPrivate": "IsPrivate",
    "IsRecipeScan": "IsRecipeScan",
    "IsSponsored": "IsSponsored",
    "LastModified": "LastModified",
    "MaxImageSquare": "MaxImageSquare",
    "MedalCount": "MedalCount",
    "MenuCount": "MenuCount",
    "Microcategory": "Microcategory",
    "NotesCount": "NotesCount",
    "CaloriesFromFat": "CaloriesFromFat",
    "Cholesterol": "Cholesterol",
    "CholesterolPct": "CholesterolPct",
    "DietaryFiber": "DietaryFiber",
    "DietaryFiberPct": "DietaryFiberPct",
    "MonoFat": "MonoFat",
    "PolyFat": "PolyFat",
    "Potassium": "Potassium",
    "PotassiumPct": "PotassiumPct",
    "Protein": "Protein",
    "ProteinPct": "ProteinPct",
    "SatFat": "SatFat",
    "SatFatPct": "SatFatPct",
    "SingularYieldUnit": "SingularYieldUnit",
    "Sodium": "Sodium",
    "SodiumPct": "SodiumPct",
    "Sugar": "Sugar",
    "TotalCalories": "TotalCalories",
    "TotalCarbs": "TotalCarbs",
    "TotalCarbsPct": "TotalCarbsPct",
    "TotalFat": "TotalFat",
    "TotalFatPct": "TotalFatPct",
    "TransFat": "TransFat",
    "NutritionInfo": "NutritionInfo",
    "FirstName": "FirstName",
    "ImageURL48": "ImageURL48",
    "IsKitchenHelper": "IsKitchenHelper",
    "IsPremium": "IsPremium",
    "IsUsingRecurly": "IsUsingRecurly",
    "LastName": "LastName",
    "MemberSince": "MemberSince",
    "PhotoUrl": "PhotoUrl",
    "PremiumExpiryDate": "PremiumExpiryDate",
    "UserID": "UserID",
    "UserName": "UserName",
    "Poster": "Poster",
    "PrimaryIngredient": "PrimaryIngredient",
    "RecipeID": "RecipeID",
    "ReviewCount": "ReviewCount",
    "StarRating": "StarRating",
    "Subcategory": "Subcategory",
    "Title": "Title",
    "TotalMinutes": "TotalMinutes",
    "VariantOfRecipeID": "VariantOfRecipeID",
    "VerifiedByClass": "VerifiedByClass",
    "VerifiedDateTime": "VerifiedDateTime",
    "WebURL": "WebURL",
    "YieldNumber": "YieldNumber",
    "YieldUnit": "YieldUnit",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['api_key'] = cfg['api_key'];
    securities['basic'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: 'Recipe_Post',
        pathName: '/recipe',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}