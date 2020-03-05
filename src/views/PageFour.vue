<template>
	<div>
		<el-form style="width: 80%;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

			<el-form-item label="时间" prop="date">
				<el-input v-model="ruleForm.date" readonly></el-input>
			</el-form-item>
			<el-form-item label="姓名" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="地址" prop="address">
				<el-input v-model="ruleForm.address"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
				<el-button @click="test()">测试</el-button>
			</el-form-item>

		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					date: '',
					name: '',
					address: ''
				},
				rules: {
					date: [{
						required: true, // 是否校验数据
						message: '请输入时间',
						trigger: 'blur' // 失去焦点时触发
					}],
					name: [{
						required: true,
						message: '请输入姓名',
						trigger: 'blur'
					}],
					address: [{
						required: true,
						message: '请输入地址',
						trigger: 'blur'
					}]
				}
			};
		},
		created() {
			if (this.$route.query.row != null) {
				this.ruleForm = this.$route.query.row;
				console.log(this.$route.query.row);
			}
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$message("添加成功")
						// 添加成功跳转页面
						this.$router.push('/pageThree')
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			test() {
				console.log(this.ruleForm);
			}
		}
	}
</script>

<style>
</style>
