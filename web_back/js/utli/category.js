//所有与文章分类相关的操作都放在这里
var category = {
    //获取文章
    get: function () {
        return $.get(APIURL.category_search)

    },
    //添加文章
    add: function (name, slug) {
        return $.post(APIURL.category_add,
            {
                name: name,
                slug: slug,

            }
        )
    },

    //删除文章
    del: function (weiyi) {
        return $.post(APIURL.category_del, { id: weiyi })

    },
    //编辑文章
    edit: function (id, name, slug) {
        return $.post(APIURL.category_edit,
            {
                id: id,
                name: name,
                slug: slug

            }
        )
    }

}