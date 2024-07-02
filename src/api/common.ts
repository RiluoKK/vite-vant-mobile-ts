import request from "@/utils/request";
export function getDictList(){
    return request({
        url:"/dict/list"
    })
}