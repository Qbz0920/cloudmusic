import request from "./require";

export function getTopBanners(){
    return request({
        url: "/banner"
    })
}