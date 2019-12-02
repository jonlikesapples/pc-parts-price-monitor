const Apify = require('apify');

Apify.main(async () => {
    const NEWEGG_URL = "https://www.newegg.com/p/pl?Submit=ENE&IsNodeId=1&N=100007671%20601300154&cm_sp=Cat_CPU-Processors_1-_-Visnav-_-Intel-CPU_3";
    const requestList = new Apify.RequestList({
        sources: [
            { url: NEWEGG_URL },
        ],
    });

    await requestList.initialize();

    const crawler = new Apify.CheerioCrawler({
        requestList,
        handlePageFunction: async ({ request, $ }) => {
            // This function is called when the request page is successful.
            console.log(`pinging ${request.url}`);
            const eachItem = $('.item-info').each(function() {
                const itemName = $(this).find('.item-title').text()
                const price = $(this).find('.price-current').find('strong').html()
                console.log(`${itemName} costs ${price}`);
            })
        },
        handleFailedRequestFunction: async ({ request }) => {
            // This function is called when the crawling of a request failed too many times
            await Apify.pushData({
                url: request.url,
                succeeded: false,
                errors: request.errorMessages,
            });
        },
    });

    await crawler.run();
    console.log('[+] Crawler finished.');
});
