<template>
	<div>
		<el-form style="width: 80%;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			
			<el-form-item label="标题" prop="title">
				<el-input v-model="ruleForm.title"></el-input>
			</el-form-item>
			<el-form-item label="分享者" prop="shareUser">
				<el-input v-model="ruleForm.shareUser"></el-input>
			</el-form-item>
			<el-form-item label="类别" prop="superChapterName">
				<el-input v-model="ruleForm.superChapterName"></el-input>
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
					title: '',
					shareUser: '',
					superChapterName: '',
				},
				rules: {
					title: [{
							required: true, // 是否校验数据
							message: '请输入标题',
							trigger: 'blur' // 失去焦点时触发
						},
						{
							min: 3,
							max: 20,
							message: '长度在 3 到 20 个字符',
							trigger: 'blur'
						}
					],
					shareUser: [{
						required: true,
						message: '请输入分享者',
						trigger: 'blur'
					}],
					superChapterName: [{
						required: true,
						message: '请输入类别',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$message("添加成功")
						// 添加成功跳转页面
						this.$router.push('/pageOne')
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			test(){
				console.log(this.ruleForm);
			}
		}
	}
</script>

<style>
</style>
