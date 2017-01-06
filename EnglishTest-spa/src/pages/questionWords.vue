
	
<template>
	<div>
		<div class="question-title">
			<goBack></goBack>				
		</div>

		<div class="question-container">

			<div class="question-title">
				<questionTitle txt=" 大学组试卷/词汇 "> </questionTitle>				
			</div>
		   <!--列表-->
		    <div class="question-list">
		        <ul>
		        
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        1. Many people think that the standards of public ________ have declined.
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="yi-a" value="a" v-model="form.words.no1">
		                                <label for="yi-a"  class="radio-11-9">A.morality</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-b" value="b"  v-model="form.words.no1">
		                                <label for="yi-b" class="radio-11-9">B.rightness</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-c" value="c"  v-model="form.words.no1">
		                                <label for="yi-c" class="radio-11-9">C.mortality</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-d" value="d"  v-model="form.words.no1">
		                                <label for="yi-d" class="radio-11-9">D.mentality</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
			         <li>
			             <div class="mar">
			                 <div class="question">
			                     2. People were surprised to find that he had the ability to ______ everything he was involved in.
			                 </div>
			                 <div class="options">
			                     <ul>
			                         <li>
			                             <input type="radio" id="er-a" value="a" v-model="form.words.no2">
			                             <label for="er-a"  class="radio-11-9">A.precede</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="er-b" value="b"  v-model="form.words.no2">
			                             <label for="er-b" class="radio-11-9">B.dominate</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="er-c" value="c"  v-model="form.words.no2">
			                             <label for="er-c" class="radio-11-9">C.effect</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="er-d" value="d"  v-model="form.words.no2">
			                             <label for="er-d" class="radio-11-9">D.instruct</label>
			                         </li>
			                     </ul>
			                 </div>
			             </div>
			         </li>
			         <li>
			             <div class="mar">
			                 <div class="question">
			                     3. The problems requiring immediate solution will be given _______ at the meeting.
			                 </div>
			                 <div class="options">
			                     <ul>
			                         <li>
			                             <input type="radio" id="san-a" value="a" v-model="form.words.no3">
			                             <label for="san-a"  class="radio-11-9">A.priority</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="san-b" value="b"  v-model="form.words.no3">
			                             <label for="san-b" class="radio-11-9">B.urgency</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="san-c" value="c"  v-model="form.words.no3">
			                             <label for="san-c" class="radio-11-9">C.superiority</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="san-d" value="d"  v-model="form.words.no3">
			                             <label for="san-d" class="radio-11-9">D.emergency</label>
			                         </li>
			                     </ul>
			                 </div>
			             </div>
			         </li>
			         <li>
			             <div class="mar">
			                 <div class="question">
			                     4. My sister is quite _________ and plans to get an M. A. degree within one year.
			                 </div>
			                 <div class="options">
			                     <ul>
			                         <li>
			                             <input type="radio" id="si-a" value="a" v-model="form.words.no4">
			                             <label for="si-a"  class="radio-11-9">A.aggressive</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="si-b" value="b"  v-model="form.words.no4">
			                             <label for="si-b" class="radio-11-9">B.enthusiastic</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="si-c" value="c"  v-model="form.words.no4">
			                             <label for="si-c" class="radio-11-9">C.considerate</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="si-d" value="d"  v-model="form.words.no4">
			                             <label for="si-d" class="radio-11-9">D.ambitious</label>
			                         </li>
			                     </ul>
			                 </div>
			             </div>
			         </li>
			         <li>
			             <div class="mar">
			                 <div class="question">
			                     5. His ________ was telling him that something was wrong.
			                 </div>
			                 <div class="options">
			                     <ul>
			                         <li>
			                             <input type="radio" id="wu-a" value="a" v-model="form.words.no5">
			                             <label for="wu-a"  class="radio-11-9">A.intuition</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="wu-b" value="b"  v-model="form.words.no5">
			                             <label for="wu-b" class="radio-11-9">B.hypothesis</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="wu-c" value="c"  v-model="form.words.no5">
			                             <label for="wu-c" class="radio-11-9">C.inspiration</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="wu-d" value="d"  v-model="form.words.no5">
			                             <label for="wu-d" class="radio-11-9">D.sentiment</label>
			                         </li>
			                     </ul>
			                 </div>
			             </div>
			         </li>
			         <li>
			             <div class="mar">
			                 <div class="question">
			                     6. Sadly, the Giant Panda is one of the many species now in danger of _________.
			                 </div>
			                 <div class="options">
			                     <ul>
			                         <li>
			                             <input type="radio" id="liu-a" value="a" v-model="form.words.no6">
			                             <label for="liu-a"  class="radio-11-9">A.extinction</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="liu-b" value="b"  v-model="form.words.no6">
			                             <label for="liu-b" class="radio-11-9">B.migration</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="liu-c" value="c"  v-model="form.words.no6">
			                             <label for="liu-c" class="radio-11-9">C.destruction</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="liu-d" value="d"  v-model="form.words.no6">
			                             <label for="liu-d" class="radio-11-9">D.extraction</label>
			                         </li>
			                     </ul>
			                 </div>
			             </div>
			         </li>
			         <li>
			             <div class="mar">
			                 <div class="question">
			                     7. For many patients, institutional care is the most _______ and beneficial form of care.
			                 </div>
			                 <div class="options">
			                     <ul>
			                         <li>
			                             <input type="radio" id="qi-a" value="a" v-model="form.words.no7">
			                             <label for="qi-a"  class="radio-11-9">A.pertinent</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="qi-b" value="b"  v-model="form.words.no7">
			                             <label for="qi-b" class="radio-11-9">B.appropriate</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="qi-c" value="c"  v-model="form.words.no7">
			                             <label for="qi-c" class="radio-11-9">C.acute</label>
			                         </li>
			                         <li>
			                             <input type="radio" id="qi-d" value="d"  v-model="form.words.no7">
			                             <label for="qi-d" class="radio-11-9">D.persistent</label>
			                         </li>
			                     </ul>
			                 </div>
			             </div>
			         </li>

		        </ul>
		    </div>   
			
		</div>

		<div class="submit-btn bottom-submit-btn">	
	       	<input value="提   交"   type="submit" @click="doSubmit('words')">
		</div>

	
	</div>
</template>


<script type="text/javascript">
//引入组件
import questionTitle from '../components/questionTitle.vue'
import goBack from '../components/goBack.vue'

//引入store
import store from '../store/store'
import { mapState,mapMutations} from 'vuex'


export default {
	name: 'Words',
	components: {
		questionTitle,
		goBack
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

