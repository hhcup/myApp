import axios from "../api";
// 获取会员详情
/*export const getMemberInformation = () => {
    return axios({
        url: "/abc/cMember/cGet",
        method: "get"
    });
};
export const uploadHeadUrl = data => {
    // console.log(data)
    return axios({
        url: `/abc/cMember/uploadHeadUrl`,
        method: "post",
        data
    });
};*/


//笑话
export const getJokes = () => {
    return axios({
        url: "/api/jokes/list/random",
        method: "get"
    });
};
//美女图
export const getGirlsRand = () => {
    return axios({
        url: "/api/image/girl/list/random",
        method: "get"
    });
};
//美女图
export const getGirlsRand = page => {
    return axios({
        url: `/api/image/girl/list?page=${page}`,
        method: "get"
    });
};

// 默认全部导出[[
export default {
    getJokes,
    getGirlsRand,
};
