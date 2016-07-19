(function(){
       var CONTEXT ="http://wx.mljiatest.cn/wechat.action";

      var  UPLOAD_URL = "http://upload.mljiatest.cn/upload/image";


      var Url={
        MENU:CONTEXT +"/admin/sys/menu",
        CUSTOM_LIST:CONTEXT +"/admin/user/search",
        APP_LIST:CONTEXT + "/admin/app/list",
        INDEX_STATIC:CONTEXT + "/admin/index",
        APP_DETAIL:CONTEXT +"/admin/app/user/list",
        DATA_LIST: CONTEXT + "/admin/platform/list",
        USER_UNBIND:CONTEXT + "/admin/user/unbind/",
        MENU_ALL: CONTEXT + "/admin/sys/allmenu/",
        MENU_DETAIL:CONTEXT + "/admin/menu/view/",
        MENU_DEL:CONTEXT + "/admin/menu/del/",
        MENU_SAVE:CONTEXT + "/admin/menu/save",
        MENU_EXPORTAll:CONTEXT+'/admin/menu/exportAll',
        LOGIN:CONTEXT +"/admin/login",
        /*意见反馈列表*/
         COMMENT : CONTEXT +"/admin/comment/list",

        /*待发布素材模板列表*/
          UNEXPORT_MATERIAL : CONTEXT +"/admin/material/unexport/list",
        /*发布素材模板列表*/
          HISTORY_MATERIAL : CONTEXT +"/admin/material/export/list",
        /*添加素材模板*/
          ADD_MATERIAL : CONTEXT+"/admin/material/add",

          UPDATE_MATERIAL : CONTEXT +"/admin/material/update",
        /*获取店铺类型*/
          GET_TAGS : CONTEXT +"/admin/material/tag/list",
        /*获取店铺列表*/
          GET_SHOPS : CONTEXT +"/admin/material/shop/list",
        /*获取素材详情*/
          MATERIAL_INFO : CONTEXT +"/admin/material/info",
        /*发布素材模板*/
          EXPORT_MATERIAL : CONTEXT +"/admin/material/export",
        /*撤消发布素材模板*/
          REVERSE_MATERIAL : CONTEXT +"/admin/material/reverse",
        /*删除素材模板*/
          DEL_MATERIAL : CONTEXT +"/admin/material/del",
        /*素材模板预览*/
          PREVIEW_MATERIAL : CONTEXT +"/admin/material/preview",
        /**美丽秘籍列表 */
          TAG_RELS : CONTEXT +"/admin/material/tagrel/list",
        /**秘籍详情 */
          TAG_INFO : CONTEXT +"/admin/material/tagrel/info",
        /* 图片库列表*/
          MATERIAL_LIST : CONTEXT +"/admin/image/list",
        /**添加图片 */
          ADD_IMAGE : CONTEXT +"/admin/image/add",
        /**删除图片 */
          DEL_IMAGE : CONTEXT + "/admin/image/del",
    };
    window.Url=Url;
    window.UPLOAD_URL = UPLOAD_URL;
    /*::::::::::::::::::::::::::::::::::::::::::::::::::::::
     菜单配置url
     ::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    
    
    

})();
