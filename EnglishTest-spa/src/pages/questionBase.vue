


<template>
	<div>

		<header>
			<Banner></Banner>
		</header>
		<div class="mar">
		 <!--基本情况部分-->
		    <div id="basic-form-container">
		        <ul>
		            <li>
		                <div class="w-130 mr-10">
		                    <div class=" checkInput">
		                        <input type="text" placeholder="姓名" v-model="form.basic.name" @blur="checkEmpty({val:form.basic.name,event:$event})" />
		                    </div>
		                </div>
		                <div class="w-65 mr-10">
		                    <div class="checkInput">
		                        <input type="text" placeholder="性别"  v-model="form.basic.sex" @blur="checkEmpty({val:form.basic.sex,event:$event})"   />
		                    </div>
		                </div>
		                <div class="w-65">
		                    <div class=" checkInput">
		                        <input type="text" placeholder="年龄"   v-model="form.basic.age" @blur="checkEmpty({val:form.basic.age,event:$event})"  />
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="w-205 mr-10">
		                    <div class="checkInput">
		                        <input type="text" placeholder="联系电话" v-model="form.basic.tel" @blur="checkNumber({val:form.basic.tel,event:$event})" />
		                    </div>
		                </div>
		                <div class="w-65">
		                    <div class="checkInput select-after"  id="addAddress">
		                        <div class="address_input">
		                        	<select id="shengshi"  v-model="form.basic.where" @blur="checkEmpty({val:form.basic.where,event:$event})" >
		                        		<option>地址</option>
		                        		<option>和平区</option>
		                        		<option>河北区</option>
		                        		<option>河东区</option>
		                        		<option>河西区</option>
		                        		<option>南开区</option>
		                        		<option>红桥区</option>
		                        		<option>东丽区</option>
		                        		<option>滨海新区</option>
		                        		<option>西青区</option>
		                        		<option>津南区</option>
		                        		<option>北辰区</option>
		                        		<option>武清区</option>
		                        		<option>宝坻区</option>
		                        		<option>静海区</option>
		                        		<option>宁河区</option>
		                        	</select>
		                        </div>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="w">
		                    <div class="checkInput">
		                        <input type="text" placeholder="学生身份证号" v-model="form.basic.idNumber" @blur="checkId({val:form.basic.idNumber,event:$event})"/>
		                    </div>
		                </div>

		            </li>
		            <li>
		                <div class="w-130 mr-10">
		                    <div class="checkInput">
		                        <input type="text" placeholder="学校" v-model="form.basic.school" @blur="checkEmpty({val:form.basic.school,event:$event})"/>
		                    </div>
		                </div>
		                <div class="w-140">
		                    <div class="checkInput">
		                        <input type="text" placeholder="几年几班" v-model="form.basic.class" @blur="checkEmpty({val:form.basic.class,event:$event})"/>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="w">
		                    <div class="checkInput">
		                        <input type="text" placeholder="家长姓名" v-model="form.basic.parentName" @blur="checkEmpty({val:form.basic.parentName,event:$event})"/>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="w">
		                    <div class="checkInput">
		                        <input type="text" placeholder="家长微信" v-model="form.basic.parentWechat" @blur="checkEmpty({val:form.basic.parentWechat,event:$event})"/>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="w">
		                    <div class="checkInput">
		                        <input type="text" placeholder="家长联系电话" v-model="form.basic.parentTel" @blur="checkNumber({val:form.basic.parentTel,event:$event})"/>
		                    </div>
		                </div>
		            </li>
		        </ul>
		        <p>
		            *请填写真实有效信息
		        </p>
		    </div>
		</div>



		<div class="submit-btn bottom-submit-btn animated bounceInUp">	
	       	<input value="提   交"   type="submit" @click="doSubmit('base')">
		</div>
	</div>
</template>


<script type="text/javascript">

//引入组件
import Banner from '../components/Banner.vue'
import submitBtn from '../components/submitBtn.vue'

import store from '../store/store'
import { mapState,mapMutations} from 'vuex'


export default {
	name: 'questionBase',
	components: {
		Banner,
		submitBtn
	},
	store,
	computed:{
		...mapState([
			'form'
		])
	},
	methods :{
		...mapMutations([
			'checkEmpty',
			'checkNumber',
			'checkId',
			'doSubmit'
		]), 
	}
}

</script>

















