<template>
	<div>
		<el-table :data="tableData" border style="width: 100%">

			<el-table-column fixed prop="title" label="标题" width="300">
			</el-table-column>
			<el-table-column prop="shareUser" label="分享者" width="120">
			</el-table-column>
			<el-table-column prop="superChapterName" label="类别" width="150">
			</el-table-column>

			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="pageChange">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		methods: {
			// 查看按钮的点击事件
			handleClick(row) {
				alert("啦啦啦" + row)
				console.log(row);
			},
			// 分页按钮的点击事件
			pageChange(currentPage) {
				const _this = this
				this.$http.get('/article/list/0/json')
				.then(function(resp) {
					console.log(resp);
					_this.tableData = resp.data.data.datas;
					_this.total = resp.data.data.total;
					_this.pageSize = resp.data.data.size;
				})
				// axios.get('/article/list/' + (currentPage - 1) + '/json')
				// .then(function(resp) {
				// 	console.log(resp);
				// 	_this.tableData = resp.data.data.datas;
				// 	_this.total = resp.data.data.total;
				// 	_this.pageSize = resp.data.data.size;
				// })
			}
		},

		data() {
			return {
				pageSize: 10,
				total: 0,
				tableData: []
			}
		},

		created() {
			const _this = this
			axios.get('/article/list/0/json')
			.then(function(resp) {
				console.log(resp);
				_this.tableData = resp.data.data.datas;
				_this.total = resp.data.data.total;
				_this.pageSize = resp.data.data.size;
			})

		}
	}
</script>

<style>
</style>
