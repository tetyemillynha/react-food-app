import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XIGPC8hjHWY48rASpPVRXOPHcupAsC2BjyrLRRWyiCtA5vi_W2yas7Upz7bwrL72lKEnQqOwiUVjkbL1SMedJNpx34BQWOjRixF97JeMtMJURSim5Nh2LV3GXeXOY3Yx',
    }
});