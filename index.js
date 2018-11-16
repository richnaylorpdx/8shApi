'use strict';

const Hapi = require('hapi');
const Wreck = require('wreck');
const server = Hapi.server({
    port: 8000,
    host: 'localhost'
});

const wmlApi = 'http://api.walmartlabs.com/v1/items?ids=14225185,14225186,14225188,14225187,39082884,30146244,12662817,34890820,19716431,42391766,35813552,40611708,40611825,36248492,44109840,23117408,35613901,42248076&apiKey=kjybrqfdgp3u4yv2qzcnjndj';

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'WML API Product Search Tool. Enter a value into URL to search WML API. EXAMPLE: http://localhost:8000/backpack In this example ::backpack:: is the search term';
    }
});

const searchResponse = async function (val) {
    let itemIdContainer = [];
    const { payload } = await Wreck.get(wmlApi);

    JSON.parse(payload).items.filter(item => 
        item.shortDescription.includes(encodeURIComponent(val)) && itemIdContainer.push(` ${item.itemId}`)
    );

    return itemIdContainer.length ? itemIdContainer.toString() : 'Sorry, there are no results for your query';

}

server.route({
    method: 'GET',
    path: '/{query}',
    handler: (request, h) => {

        return searchResponse(request.params.query);

    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();