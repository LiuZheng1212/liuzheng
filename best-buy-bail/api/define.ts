	/**轮播图数据接口*/
	interface BannerItem {
		image_src :string,
		goods_id:number,
		navigator_url:string,
		open_type:string
	}
	//导航栏数组的接口
	interface HomeCateListItme {
		name:string,
		image_src:string,
		open_type?:string,
		navigator_url?:string
	}
	
	// 楼层数据接口
	interface floorDataItem {
		floor_title:FloorTitle,
		product_list:ProductList
	}
	//楼层数据标题接口
	interface FloorTitle{
		image_src:string,
		name:string
	}
	//楼层数据图片接口
	interface ProductList{
		image_src:string,
		image_width:string,
		name:string,
		navigator_url:string,
		open_type:string
	}
	//首页data数据
	interface homeData {
		bannerList:BannerItem[],
		homeCateList:HomeCateListItme[],
		floorData:floorDataItem[]
	}
	//分类数据接口
	interface CateList{
		cat_deleted:boolean,
		cat_icon:string,
		cat_id:number,
		cat_level:number,
		cat_name:string,
		cat_pid:number
		children?:CateList
	}
	
	//搜索列表
	// interface Goods {
	// 	goods_id:number,
	// 	cat_id:number,
	// 	goods_name:string,
	// 	goods_price:number,
	// 	goods_number:number,
	// 	goods_weight:number,
	// 	goods_big_logo:string,
	// 	goods_small_logo:string,
	// 	add_time:number,
	// 	upd_time:number,
	// 	hot_mumber:number,
	// 	is_promote:boolean,
	// 	cat_one_id:number,
	// 	cat_two_id:number,
	// 	cat_three_id:number
	// }
	
	// interface searchVal {
	// 	total:number,
	// 	pagenum:number,
	// 	goods:Goods
	// }
	
	//获取搜索数据
	interface searchList {
		goods_id:number,
		goods_name:string
	}
	
	//获取商品详情数据
	interface searchDetail{
		goods_id:number,
		cat_id:number,
		goods_name:string,
		goods_price:number,
		goods_number:number,
		goods_weight:number,
		goods_introduce:string,
		goods_state:number,
		is_del:string,
		add_time:number,
		upd_time:number,
		delete_time:null,
		hot_mumber:number,
		is_promote:boolean,
		cat_one_id:number,
		cat_two_id:number,
		cat_three_id:number,
		goods_cat:string,
		pics:GoodsDetailPics[],
		attrs:GoodsDetailAttrs[]
	}
	interface GoodsDetailPics{
		pics_id:number,
		goods_id:number,
		pics_big:string,
		pics_mid:string,
		pics_sma:string,
		pics_big_url:string,
		pics_mid_url:string,
		pics_sma_url:string,
	}
	
	interface GoodsDetailAttrs {
		goods_id:number,
		attr_id:number,
		attr_value:string,
		add_price:number,
		attr_name:string,
		attr_sel:string,
		attr_write:string,
		attr_vals:string,
	}
	export {
		BannerItem,
		HomeCateListItme,
		floorDataItem,
		homeData,
		CateList,
		searchList,
		searchDetail
	}