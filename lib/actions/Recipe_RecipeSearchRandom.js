/**
 * Auto-generated action file for "BigOven" API.
 *
 * Generated at: 2019-05-07T14:39:41.809Z
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
 * Operation: 'Recipe_RecipeSearchRandom'
 * Endpoint Path: '/recipes/top25random'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "any_kw",
    "folder",
    "coll",
    "filter",
    "title_kw",
    "userId",
    "username",
    "token",
    "photos",
    "boostmine",
    "include_cat",
    "exclude_cat",
    "include_primarycat",
    "exclude_primarycat",
    "include_ing",
    "exclude_ing",
    "cuisine",
    "db",
    "userset",
    "servingsMin",
    "totalMins",
    "maxIngredients",
    "minIngredients",
    "vtn",
    "vgn",
    "chs",
    "glf",
    "ntf",
    "dyf",
    "sff",
    "slf",
    "tnf",
    "wmf",
    "rmf",
    "cps",
    "champion",
    "synonyms"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "any_kw": "any_kw",
    "folder": "folder",
    "coll": "coll",
    "filter": "filter",
    "title_kw": "title_kw",
    "userId": "userId",
    "username": "username",
    "token": "token",
    "photos": "photos",
    "boostmine": "boostmine",
    "include_cat": "include_cat",
    "exclude_cat": "exclude_cat",
    "include_primarycat": "include_primarycat",
    "exclude_primarycat": "exclude_primarycat",
    "include_ing": "include_ing",
    "exclude_ing": "exclude_ing",
    "cuisine": "cuisine",
    "db": "db",
    "userset": "userset",
    "servingsMin": "servingsMin",
    "totalMins": "totalMins",
    "maxIngredients": "maxIngredients",
    "minIngredients": "minIngredients",
    "vtn": "vtn",
    "vgn": "vgn",
    "chs": "chs",
    "glf": "glf",
    "ntf": "ntf",
    "dyf": "dyf",
    "sff": "sff",
    "slf": "slf",
    "tnf": "tnf",
    "wmf": "wmf",
    "rmf": "rmf",
    "cps": "cps",
    "champion": "champion",
    "synonyms": "synonyms"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

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
        operationId: 'Recipe_RecipeSearchRandom',
        pathName: '/recipes/top25random',
        method: 'get',
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