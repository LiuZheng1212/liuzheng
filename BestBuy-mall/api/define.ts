// 枚举
enum Code {
	SUCCESS = 200
}
// meta
type Meta = {
	msg: string,
	status: number
}

// 轮播图
interface SwiperData {
	image_src: string,
	open_type: string,
	goods_id: number,
	navigator_url: string
}


// 导航栏
type NavMessage = Array<{
	name: string,
	image_src: string,
	open_type: string,
	navigator_url: string
}>

interface NavData {
	message: NavMessage,
	meta: Meta
}


// 楼层
type ProductList = Array<{
	name: string,
	image_src: string,
	open_type: string,
	navigator_url: string
}>

type FloorMessage = Array<{
	floor_title: {
		name: string,
		image_src: string
	}
	product_list: ProductList

}>
interface FloorData {
	message: FloorMessage,
	meta: Meta
}


// 分类
type CateMessage = Array<{
	cat_id: number,
	cat_name: string,
	cat_pid: number,
	cat_level: number,
	cat_deleted: boolean,
	cat_icon: string,
	children: Array<CateMessage>
}>

interface CateData {
	message: CateMessage,
	meta: Meta
}

// 搜索
type SearchMessage = Array<{
	goods_id: number,
	goods_name: string
}>
interface SearchData {
	message: SearchMessage,
	meta: Meta
}

// 详情
type DetailsMessage = {
	goods_id: number,
	cat_id: number,
	goods_name: string,
	goods_price: number,
	goods_number: number,
	goods_weight: number,
	goods_introduce: string,
	goods_state: number,
	is_del: string,
	add_time: number,
	upd_time: number,
	delete_time: null,
	hot_mumber: number,
	is_promote: boolean,
	cat_one_id: number,
	cat_two_id: number,
	cat_three_id: number,
	goods_cat: string,
	pics: Array<{
		pics_id: number,
		goods_id: number,
		pics_big: string,
		pics_mid: string,
		pics_sma: string,
		pics_big_url: string,
		pics_mid_url: string,
		pics_sma_url: string
	}>,
	attrs: Array<{
		goods_id: number,
		attr_id: number,
		attr_value: string,
		add_price: number,
		attr_name: string,
		attr_sel: string,
		attr_write: string,
		attr_vals: string
	}>
}

interface DetailsData {
	message: DetailsMessage,
	meta: Meta
}

export {
	SwiperData,
	NavData,
	FloorData,
	FloorMessage,
	Code,
	CateData,
	CateMessage,
	SearchData,
	DetailsData
}