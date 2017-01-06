
	
<template>
	<div>

			<div class="question-title">
				<goBack></goBack>				
			</div>
			<div class="question-title">
				<questionTitle txt=" 大学组试卷/口语 "> </questionTitle>				
			</div>

		    <!--列表-->
		    <div class="question-list">
		        <ul>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        1. I was just looking for ways to get discount on museum tickets, and some of the tips that people shared online ________!
		                    </div>
		                    <div class="options  li-whole">
		                        <ul>
		                            <li>
		                                <input type="radio" id="yi-a3" value="a" v-model="form.spoken.no1">
		                                <label for="yi-a3"  class="radio-11-9">A.came in really handy</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-b3" value="b"  v-model="form.spoken.no1">
		                                <label for="yi-b3" class="radio-11-9">B.came in really handful</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-c3" value="c"  v-model="form.spoken.no1">
		                                <label for="yi-c3" class="radio-11-9">C.came in really hand</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-d3" value="d"  v-model="form.spoken.no1">
		                                <label for="yi-d3" class="radio-11-9">D.came in really handing</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        2. I have been aged and weathered, and my pleasant childhood has gone_______.
		                    </div>
		                    <div class="options li-whole">
		                        <ul>
		                            <li>
		                                <input type="radio" id="er-a3" value="a" v-model="form.spoken.no2">
		                                <label for="er-a3"  class="radio-11-9">A. temperamentally</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="er-b3" value="b"  v-model="form.spoken.no2">
		                                <label for="er-b3" class="radio-11-9">B.impermanent</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="er-c3" value="c"  v-model="form.spoken.no2">
		                                <label for="er-c3" class="radio-11-9">C.for good</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="er-d3" value="d"  v-model="form.spoken.no2">
		                                <label for="er-d3" class="radio-11-9">D.for now</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        3. She was_____after learning her boyfriend was dating another woman.
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="san-a3" value="a" v-model="form.spoken.no3">
		                                <label for="san-a3"  class="radio-11-9">A.pissed off</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="san-b3" value="b"  v-model="form.spoken.no3">
		                                <label for="san-b3" class="radio-11-9">B. turned off</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="san-c3" value="c"  v-model="form.spoken.no3">
		                                <label for="san-c3" class="radio-11-9">C.set off</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="san-d3" value="d"  v-model="form.spoken.no3">
		                                <label for="san-d3" class="radio-11-9">D.put of</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        4. A: Let's hit the gym tonight!<br/>
		                        B: ______, I just hurt my knees yesterday.
		                    </div>
		                    <div class="options li-whole">
		                        <ul>
		                            <li>
		                                <input type="radio" id="si-a3" value="a" v-model="form.spoken.no4">
		                                <label for="si-a3"  class="radio-11-9">A. Let me under the hook</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="si-b3" value="b"  v-model="form.spoken.no4">
		                                <label for="si-b3" class="radio-11-9">B. Let me off the hook</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="si-c3" value="c"  v-model="form.spoken.no4">
		                                <label for="si-c3" class="radio-11-9">C.Let me on the hook</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="si-d3" value="d"  v-model="form.spoken.no4">
		                                <label for="si-d3" class="radio-11-9">D.Let me down the hook</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        5.	A: It really irritates me when a person's cell phone ______ during a movie!<br/>
		                        B: Yeah, me too. It really ______ my nerves.
		                    </div>
		                    <div class="options li-whole">
		                        <ul>
		                            <li>
		                                <input type="radio" id="wu-a3" value="a" v-model="form.spoken.no5">
		                                <label for="wu-a3"  class="radio-11-9">A. goes up; gets on</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="wu-b3" value="b"  v-model="form.spoken.no5">
		                                <label for="wu-b3" class="radio-11-9">B. goes up; gets in</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="wu-c3" value="c"  v-model="form.spoken.no5">
		                                <label for="wu-c3" class="radio-11-9">C.goes off; gets on</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="wu-d3" value="d"  v-model="form.spoken.no5">
		                                <label for="wu-d3" class="radio-11-9">D.goes off; gets in</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        6.	A: Where did you say your brother lives?<br/>
		                        B: He lives all the way in Qingdao. I only get to see him once in a blue moon.

		                    </div>
		                    <div class="options ">
		                        <ul>
		                            <li>
		                                <input type="radio" id="liu-a3" value="a" v-model="form.spoken.no6">
		                                <label for="liu-a3"  class="radio-11-9">A.我常常去看他</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="liu-b3" value="b"  v-model="form.spoken.no6">
		                                <label for="liu-b3" class="radio-11-9">B. 我偶尔去看他</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="liu-c3" value="c"  v-model="form.spoken.no6">
		                                <label for="liu-c3" class="radio-11-9">C.我几乎不去看他</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="liu-d3" value="d"  v-model="form.spoken.no6">
		                                <label for="liu-d3" class="radio-11-9">D.我从来不去看他</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        7.	A: Sometimes I like to go to KFC to pig out!<br/>
		                        B: that’s not true, your eyes are _____ than your stomach.

		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="qi-a3" value="a" v-model="form.spoken.no7">
		                                <label for="qi-a3"  class="radio-11-9">A. rounder</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="qi-b3" value="b"  v-model="form.spoken.no7">
		                                <label for="qi-b3" class="radio-11-9">B. smaller</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="qi-c3" value="c"  v-model="form.spoken.no7">
		                                <label for="qi-c3" class="radio-11-9">C. bigger</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="qi-d3" value="d"  v-model="form.spoken.no7">
		                                <label for="qi-d3" class="radio-11-9">D. deeper</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		        </ul>
		    </div>
		<div class="submit-btn bottom-submit-btn animated bounceInUp">	
	       	<input value="提   交"   type="submit" @click="doSubmit('spoken')">
		</div>
	</div>
</template>

	
<script type="text/javascript">
//引入组件
import questionTitle from '../components/questionTitle.vue'
import goBack from '../components/goBack.vue'

import store from '../store/store'
import { mapState,mapMutations } from 'vuex'


export default {
	name: 'University',
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