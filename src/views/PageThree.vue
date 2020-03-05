<template>
	<div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column prop="date" label="日期" width="120">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="80">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>

			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click.native.prevent="deleteRow(scope,scope.$index, tableData)" type="text" size="small">
						移除
					</el-button>

					<el-button @click="updateRow(scope.row)" type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>

		</el-table>
		<el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="pageChange">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageSize: 5,
				total: 16,
				currentPage: 1,
				tableData: [],
				listData: [{
					date: '2016-05-02',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2017-11-14',
					name: '李小名1',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2018-01-01',
					name: '赵匡胤1',
					address: '河南省开封市宋城皇宫'
				}, {
					date: '2017-11-14',
					name: '李小名1',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2016-05-02',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2017-11-14',
					name: '李小名2',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2018-01-01',
					name: '赵匡胤2',
					address: '河南省开封市宋城皇宫'
				}, {
					date: '2017-11-14',
					name: '李小名2',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2016-05-02',
					name: '王小虎2',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2017-11-14',
					name: '李小名2',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2018-01-01',
					name: '赵匡胤3',
					address: '河南省开封市宋城皇宫'
				}, {
					date: '2017-11-14',
					name: '李小名3',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2016-05-02',
					name: '王小虎3',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2017-11-14',
					name: '李小名3',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, {
					date: '2018-01-01',
					name: '赵匡胤3',
					address: '河南省开封市宋城皇宫'
				}, {
					date: '2017-11-14',
					name: '李小名4',
					address: '浙江省杭州市西湖区沙秀路 99 号'
				}, ]
			}
		},
		created() {
			this.tableData = this.listData.slice(0, 5)
		},

		methods: {
			deleteRow(scope, index, rows) {
				// index为当前页的第n条,从0开始
				console.log(this.currentPage);
				// 移除选中数据
				rows.splice(index, 1);
				this.listData.splice((this.currentPage - 1) * 5 + index, 1);
				this.total = this.listData.length;
				// location.reload();
			},
			updateRow(row) {
				this.$router.push({
					path: '/pageFour',
					query: {
						row: row
					}
				})
			},

			// 分页,从1开始
			pageChange(currentPage) {
				this.currentPage = currentPage;
				this.tableData = this.listData.slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
				this.total = this.listData.length;
			}
		}
	}
</script>

<style>
</style>
