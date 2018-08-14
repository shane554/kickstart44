import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    // address of new  deployed factory instance
    '0x9F5ff42F20dE40bD09fF5fC1dA0e45F0350Eb807'
);

// we need access to our web 3 instance
// we import factory.js
export default instance;
