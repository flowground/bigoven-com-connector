# ![LOGO](logo.png) BigOven **flow**ground Connector

## Description

A generated **flow**ground connector for the BigOven API (version partner).

Generated from: https://api.apis.guru/v2/specs/bigoven.com/partner/swagger.json<br/>
Generated at: 2019-05-07T17:39:41+03:00

## API Description

#Documentation

This is the documentation for the partner endpoint of the BigOven Recipe and Grocery List API.

The update brings with it Swagger-based documentation. [Swagger](http://swagger.io) is an emerging standard for describing REST-based APIs, and with this Swagger-compliant endpoint (above), you can make ready-to-go interface libraries for your code via [swagger-codegen](https://github.com/swagger-api/swagger-codegen). For instance, it's easy to generate libraries for Node.js, Java, Ruby, ASP.NET MVC, jQuery, php and more!

You can also try out the endpoint calls with your own api_key right here on this page. Be sure to enter your api_key above to use the "Try it out!" buttons on this page.

##Start Here

Developers new to the BigOven API should start with this version, not with the legacy API. We'll be making improvements to this API over time, and doing only bug fixes on the v1 API.



To pretend you're a BigOven user (for instance, to get your recently viewed recipes or your grocery list), you need to pass in Basic Authentication information in the header, just as with the v1 API. We do now require that you make all calls via https. You need to pass your api_key in with every call, though this can now be done on the header (send a request header "X-BigOven-API-Key" set to your api_key value, e.g., Request["X-BigOven-API-Key"]="your-key-here".)

##Migration Notes

For existing partners, we encourage you to [migrate](http://api2.bigoven.com), and while at this writing we have no hard-and-fast termination date for the v1 API, we strongly prefer that you migrate by January 1, 2017. While the changes aren't overly complex, there are several breaking changes, including refactoring of recipe search and results and removal of support for XML. This is not a simply plug-and-play replacement to the v1 API. With respect to an exclusive focus on JSON, the world has spoken, and it prefers JSON for REST-based API's. We've taken numerous steps to refactor the API to make it more REST-compliant. Note that this v2 API will be the preferred API from this point onward, so we encourage developers to migrate to this new format. We have put together some [migration notes](/web/documentation/migration-to-v2) that we encourage you to read carefully.

##Photos

See our [photos documentation](http://api2.bigoven.com/web/documentation/recipe-images). 

For more information on usage of this API, including features, pricing, rate limits, terms and conditions, please visit the [BigOven API website](http://api2.bigoven.com).

## Authorization

Supported authorization schemes:
- API Key- Basic Authentication

## Actions

### Get a food article

*Tags:* `Article`

#### Input Parameters
* `term` - _required_

### Update the article by term

*Tags:* `Article`

#### Input Parameters
* `term` - _required_

### Gets a recipe collection. A recipe collection is a curated set of recipes.

*Tags:* `Collection`

#### Input Parameters
* `id` - _required_ - the collection identifier
* `rpp` - _optional_ - results per page
* `pg` - _optional_ - page number (starting with 1)
* `test` - _optional_
* `sessionForLogging` - _optional_

### Gets a recipe collection metadata. A recipe collection is a curated set of recipes.

*Tags:* `Collection`

#### Input Parameters
* `id` - _required_ - the collection identifier

### Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.

*Tags:* `Collection`

#### Input Parameters
* `test` - _optional_

### Get food glossary article by term (e.g., asparagus). This editorial is (c) BigOven and MUST carry attribution and a link back to the glossary entry on BigOven.com.

*Tags:* `Glossary`

#### Input Parameters
* `term` - _required_ - Keyword used to look up article, e.g., asparagus

### DEPRECATED. Please use "Article", which is a new format for food glossary articles, which separates out the images.

*Tags:* `Glossary`

#### Input Parameters
* `id` - _required_ - identifier of article to retrieve

### Delete all the items on a grocery list; faster operation than a sync with deleted items.

*Tags:* `GroceryList`

### Get the user's grocery list.  User is determined by Basic Authentication.

*Tags:* `GroceryList`

### Clears the checked lines.

*Tags:* `GroceryList`

### Departmentalize a list of strings -- used for ad-hoc grocery list item addition

*Tags:* `GroceryList`

### Add a single line item to the grocery list

*Tags:* `GroceryList`

### /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.

*Tags:* `GroceryList`

#### Input Parameters
* `guid` - _required_

### Update a grocery item by GUID

*Tags:* `GroceryList`

#### Input Parameters
* `guid` - _required_

### Add a single line item to the grocery list

*Tags:* `GroceryList`

### Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that<br/>
>             the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.

*Tags:* `GroceryList`

### Synchronize the grocery list.  Call this with a POST to /grocerylist/sync

*Tags:* `GroceryList`

### POST: /image/avatar<br/>
>              <br/>
>             Testing with Postman (validated 11/20/2015):<br/>
>             1) Remove the Content-Type header; add authentication information<br/>
>             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,<br/>
>             change the type of the input from Text to File.  Browse and choose a JPG.

*Tags:* `Images`

### Indexes this instance.

*Tags:* `Me`

### Puts me.

*Tags:* `Me`

### Puts me personal.

*Tags:* `Me`

### Puts me preferences.

*Tags:* `Me`

### Gets the options.

*Tags:* `Me`

### Puts me.

*Tags:* `Me`

### Skinnies this instance.

*Tags:* `Me`

### Add a new recipe

*Tags:* `Recipe`

### Update a recipe

*Tags:* `Recipe`

### Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.

*Tags:* `Recipe`

#### Input Parameters
* `query` - _required_
* `limit` - _optional_

### Automatics the complete all recipes.

*Tags:* `Recipe`

#### Input Parameters
* `query` - _required_ - The query.
* `limit` - _required_ - The limit.

### Automatics the complete my recipes.

*Tags:* `Recipe`

#### Input Parameters
* `query` - _required_ - The query.
* `limit` - _required_ - The limit.

### Get a list of recipe categories (the ID field can be used for include_cat in search parameters)

*Tags:* `Recipe`

### Gets the pending by user.

*Tags:* `Images`

### DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.

*Tags:* `Review`

#### Input Parameters
* `replyId` - _required_

### Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.

*Tags:* `Review`

#### Input Parameters
* `replyId` - _required_

### Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.<br/>
>             Recommended display is to list top-level reviews with one featured reply underneath. <br/>
>             Currently, the FeaturedReply is the most recent one for that rating.

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_

### Update a given top-level review.

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_

### Get a paged list of replies for a given review.

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_
* `pg` - _optional_ - the page (int), starting with 1
* `rpp` - _optional_ - results per page (int)

### POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_

### POST an image as a new RecipeScan request<br/>
>                 1)  Fetch the filename -- DONE<br/>
>                 2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE<br/>
>                 3)  Create 120 thumbnail size  in pics/scan/120 -- DONE<br/>
>                 4)  Insert the CloudTasks record<br/>
>                 5)  Create the HIT<br/>
>                 6)  Update the CloudTasks record with the HIT ID<br/>
>                 7)  Email the requesing user<br/>
>                 8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail

*Tags:* `Recipe`

#### Input Parameters
* `test` - _optional_
* `devicetype` - _optional_
* `lat` - _optional_
* `lng` - _optional_

### Delete a Recipe (you must be authenticated as an owner of the recipe)

*Tags:* `Recipe`

#### Input Parameters
* `id` - _required_

### Return full Recipe detail. Returns 403 if the recipe is owned by someone else.

*Tags:* `Recipe`

#### Input Parameters
* `id` - _required_ - the Recipe ID to retrieve
* `prefetch` - _optional_

### Zaps the recipe.

*Tags:* `Recipe`

#### Input Parameters
* `id` - _required_ - The identifier.

### Feedback on a Recipe -- for internal BigOven editors

*Tags:* `Recipe`

#### Input Parameters
* `recipeId` - _required_

### POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption<br/>
>              <br/>
>              Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint<br/>
>              needs a multipart/mime content header and will not parse JSON in the body along with it.<br/>
>             <br/>
>              Testing with Postman (validated 11/20/2015):<br/>
>              1) Remove the Content-Type header; add authentication information<br/>
>              2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,<br/>
>              change the type of the input from Text to File.  Browse and choose a JPG.

*Tags:* `Images`

#### Input Parameters
* `recipeId` - _required_
* `caption` - _optional_
* `lat` - _optional_
* `lng` - _optional_

### Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.

*Tags:* `Images`

#### Input Parameters
* `recipeId` - _required_ - Recipe ID (required)

### HTTP POST a new note into the system.

*Tags:* `Note`

#### Input Parameters
* `recipeId` - _required_ - recipeId (int)

### Delete a review<br/>
>                 do a DELETE Http request of /note/{ID}

*Tags:* `Note`

#### Input Parameters
* `recipeId` - _required_ - recipeId (int)
* `noteId` - _required_ - noteId (int)

### Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.

*Tags:* `Note`

#### Input Parameters
* `recipeId` - _required_ - recipe identifier (integer)
* `noteId` - _required_ - The note ID (note -- it's not the RecipeID)

### HTTP PUT (update) a Recipe note (RecipeNote).

*Tags:* `Note`

#### Input Parameters
* `recipeId` - _required_
* `noteId` - _required_

### recipe/100/notes

*Tags:* `Note`

#### Input Parameters
* `recipeId` - _required_ - recipeId (int)
* `pg` - _optional_ - page (int, starting from 1)
* `rpp` - _optional_ - recipeId

### Get all the photos for a recipe

*Tags:* `Images`

#### Input Parameters
* `recipeId` - _required_ - Recipe ID (required)
* `pg` - _optional_
* `rpp` - _optional_

### Get recipes related to the given recipeId

*Tags:* `Recipe`

#### Input Parameters
* `recipeId` - _required_
* `pg` - _required_
* `rpp` - _required_

### Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers

*Tags:* `Review`

#### Input Parameters
* `recipeId` - _required_

### Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.

*Tags:* `Review`

#### Input Parameters
* `recipeId` - _required_

### Delete a review by recipeId and reviewId. DEPRECATED. Please see recipe/review/{reviewId} for the preferred method.<br/>
>             (We are moving from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.)

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_
* `recipeId` - _required_

### Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.<br/>
>             Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.<br/>
>             We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then<br/>
>             an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review <br/>
>             per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed<br/>
>             which do NOT carry the "DEPRECATED" flag.

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_ - int
* `recipeId` - _required_ - int

### HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.<br/>
>             We are moving to a string-based primary key system, no longer integers, for reviews and replies.

*Tags:* `Review`

#### Input Parameters
* `reviewId` - _required_ - reviewId (int)
* `recipeId` - _required_ - recipeId (int)

### Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.

*Tags:* `Review`

#### Input Parameters
* `recipeId` - _required_ - recipe id (int)
* `pg` - _optional_ - the page (int), starting with 1
* `rpp` - _optional_ - results per page (int)

### Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.

*Tags:* `Images`

#### Input Parameters
* `recipeId` - _required_ - the recipe identifier (int)

### Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.<br/>
>             Use any_kw to search across the entire recipe.<br/>
>             If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).<br/>
>             If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.<br/>
>             If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.<br/>
>             To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips<br/>
>             To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.<br/>
>             All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).<br/>
>             So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25<br/>
>             If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).<br/>
>             Or, you can set username=theirusername<br/>
>             vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps<br/>
>             cuisine<br/>
>             photos<br/>
>             filter=added,try,favorites,myrecipes\r\n\r\n<br/>
>             folder=FolderNameCaseSensitive<br/>
>             coll=ID of Collection

*Tags:* `Recipe`

#### Input Parameters
* `any_kw` - _optional_ - Search anywhere in the recipe for the keyword
* `folder` - _optional_ - Search in a specific folder name for the authenticated user
* `coll` - _optional_ - Limit to a collection ID number
* `filter` - _optional_ - optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set
* `title_kw` - _optional_ - Search just in the recipe title for the keyword
* `userId` - _optional_ - Set the target userid to search their public recipes
* `username` - _optional_ - Set the target username to search their public recipes
* `token` - _optional_
* `photos` - _optional_ - if set to true, limit search results to photos only
* `boostmine` - _optional_ - if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)
* `include_cat` - _optional_ - integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".
* `exclude_cat` - _optional_ - like include_cat, set this to an integer to exclude a specific category
* `include_primarycat` - _optional_ - csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
* `exclude_primarycat` - _optional_ - csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
* `include_ing` - _optional_ - A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken
* `exclude_ing` - _optional_ - A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)
* `cuisine` - _optional_ - Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese
* `db` - _optional_
* `userset` - _optional_ - If set to a given username, it'll force the search to filter to just that username
* `servingsMin` - _optional_ - Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."
* `totalMins` - _optional_ - Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)
* `maxIngredients` - _optional_ - Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less
* `minIngredients` - _optional_ - Optional. If supplied, will restrict results to recipes that have at least {minIngredients}
* `rpp` - _optional_ - integer; results per page
* `pg` - _optional_ - integer: the page number
* `vtn` - _optional_ - when set to 1, limit to vegetarian (Powersearch-capable plan required)
* `vgn` - _optional_ - when set to 1, limit to vegan (Powersearch-capable plan required)
* `chs` - _optional_ - when set to 1, limit to contains-cheese (Powersearch-capable plan required)
* `glf` - _optional_ - when set to 1, limit to gluten-free (Powersearch-capable plan required)
* `ntf` - _optional_ - when set to 1, limit to nut-free (Powersearch-capable plan required)
* `dyf` - _optional_ - when set to 1, limit to dairy-free (Powersearch-capable plan required)
* `sff` - _optional_ - when set to 1, limit to seafood-free (Powersearch-capable plan required)
* `slf` - _optional_ - when set to 1, limit to shellfish-free (Powersearch-capable plan required)
* `tnf` - _optional_ - when set to 1, limit to tree-nut free (Powersearch-capable plan required)
* `wmf` - _optional_ - when set to 1, limit to white-meat free (Powersearch-capable plan required)
* `rmf` - _optional_ - when set to 1, limit to red-meat free (Powersearch-capable plan required)
* `cps` - _optional_ - when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)
* `champion` - _optional_ - optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.
* `synonyms` - _optional_ - optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)

### Get a random, home-page-quality Recipe.

*Tags:* `Recipe`

### Get the recipe/comment tuples for those recipes with 4 or 5 star ratings

*Tags:* `Recipe`

#### Input Parameters
* `pg` - _optional_ - page, starting with 1
* `rpp` - _optional_ - results per page

### Get a list of recipes that the authenticated user has most recently viewed

*Tags:* `Recipe`

#### Input Parameters
* `pg` - _optional_ - Page number starting with 1
* `rpp` - _optional_ - results per page

### Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.<br/>
>             Use any_kw to search across the entire recipe.<br/>
>             If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).<br/>
>             If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.<br/>
>             If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.<br/>
>             To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips<br/>
>             To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.<br/>
>             All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).<br/>
>             So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25<br/>
>             If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).<br/>
>             Or, you can set username=theirusername<br/>
>             vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps<br/>
>             cuisine<br/>
>             photos<br/>
>             filter=added,try,favorites,myrecipes\r\n\r\n<br/>
>             folder=FolderNameCaseSensitive<br/>
>             coll=ID of Collection

*Tags:* `Recipe`

#### Input Parameters
* `any_kw` - _optional_ - Search anywhere in the recipe for the keyword
* `folder` - _optional_ - Search in a specific folder name for the authenticated user
* `coll` - _optional_ - Limit to a collection ID number
* `filter` - _optional_ - optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set
* `title_kw` - _optional_ - Search just in the recipe title for the keyword
* `userId` - _optional_ - Set the target userid to search their public recipes
* `username` - _optional_ - Set the target username to search their public recipes
* `token` - _optional_
* `photos` - _optional_ - if set to true, limit search results to photos only
* `boostmine` - _optional_ - if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)
* `include_cat` - _optional_ - integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".
* `exclude_cat` - _optional_ - like include_cat, set this to an integer to exclude a specific category
* `include_primarycat` - _optional_ - csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
* `exclude_primarycat` - _optional_ - csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
* `include_ing` - _optional_ - A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken
* `exclude_ing` - _optional_ - A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)
* `cuisine` - _optional_ - Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese
* `db` - _optional_
* `userset` - _optional_ - If set to a given username, it'll force the search to filter to just that username
* `servingsMin` - _optional_ - Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."
* `totalMins` - _optional_ - Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)
* `maxIngredients` - _optional_ - Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less
* `minIngredients` - _optional_ - Optional. If supplied, will restrict results to recipes that have at least {minIngredients}
* `vtn` - _optional_ - when set to 1, limit to vegetarian (Powersearch-capable plan required)
* `vgn` - _optional_ - when set to 1, limit to vegan (Powersearch-capable plan required)
* `chs` - _optional_ - when set to 1, limit to contains-cheese (Powersearch-capable plan required)
* `glf` - _optional_ - when set to 1, limit to gluten-free (Powersearch-capable plan required)
* `ntf` - _optional_ - when set to 1, limit to nut-free (Powersearch-capable plan required)
* `dyf` - _optional_ - when set to 1, limit to dairy-free (Powersearch-capable plan required)
* `sff` - _optional_ - when set to 1, limit to seafood-free (Powersearch-capable plan required)
* `slf` - _optional_ - when set to 1, limit to shellfish-free (Powersearch-capable plan required)
* `tnf` - _optional_ - when set to 1, limit to tree-nut free (Powersearch-capable plan required)
* `wmf` - _optional_ - when set to 1, limit to white-meat free (Powersearch-capable plan required)
* `rmf` - _optional_ - when set to 1, limit to red-meat free (Powersearch-capable plan required)
* `cps` - _optional_ - when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)
* `champion` - _optional_ - optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.
* `synonyms` - _optional_ - optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)

## License

**flow**ground :- Telekom iPaaS / bigoven-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
