// 这项目所有的接口地址放在这里
//基地址
var BASEURL = "http://39.99.130.177:8000"
var APIURL = {
    deng_lu: BASEURL + "/admin/login",
    xin_xi: BASEURL + "/admin/getuser",
    tui_chu: BASEURL + "/admin/logout",

    //文章类别
    //获取文章
    category_search: BASEURL + "/admin/category_search",
    //添加文章
    category_add: BASEURL + "/admin/category_add",
    //删除文章
    category_del: BASEURL + "/admin/category_delete"
}