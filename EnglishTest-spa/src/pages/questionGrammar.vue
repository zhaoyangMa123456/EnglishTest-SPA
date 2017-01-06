
	
<template>
	<div>

			<div class="question-title">
				<goBack></goBack>				
			</div>
			<div class="question-title">
				<questionTitle txt=" 大学组试卷/语法 "> </questionTitle>				
			</div>

		    <!--列表-->
		    <div class="question-list">
		        <ul>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        1.__________ you don't like him is none of my business.
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="yi-a2" value="a" v-model="form.grammar.no1">
		                                <label for="yi-a2"  class="radio-11-9">A.What</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-b2" value="b"  v-model="form.grammar.no1">
		                                <label for="yi-b2" class="radio-11-9">B.Who</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-c2" value="c"  v-model="form.grammar.no1">
		                                <label for="yi-c2" class="radio-11-9">C.That</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="yi-d2" value="d"  v-model="form.grammar.no1">
		                                <label for="yi-d2" class="radio-11-9">D.Whether</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        2. Go and get your coat. It’ s _______you left it.
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="er-a2" value="a" v-model="form.grammar.no2">
		                                <label for="er-a2"  class="radio-11-9">A. where</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="er-b2" value="b"  v-model="form.grammar.no2">
		                                <label for="er-b2" class="radio-11-9">B.there</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="er-c2" value="c"  v-model="form.grammar.no2">
		                                <label for="er-c2" class="radio-11-9">C.there where</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="er-d2" value="d"  v-model="form.grammar.no2">
		                                <label for="er-d2" class="radio-11-9">D.where there</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        3. Is this museum _____ some German friends visited last Wednesday?
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="san-a2" value="a" v-model="form.grammar.no3">
		                                <label for="san-a2"  class="radio-11-9">A.that</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="san-b2" value="b"  v-model="form.grammar.no3">
		                                <label for="san-b2" class="radio-11-9">B.where</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="san-c2" value="c"  v-model="form.grammar.no3">
		                                <label for="san-c2" class="radio-11-9">C.in which</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="san-d2" value="d"  v-model="form.grammar.no3">
		                                <label for="san-d2" class="radio-11-9">D.the one</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        4. Between the two roads _______ a TV tower called "Skyscraper Tower".
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="si-a2" value="a" v-model="form.grammar.no4">
		                                <label for="si-a2"  class="radio-11-9">A.stands</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="si-b2" value="b"  v-model="form.grammar.no4">
		                                <label for="si-b2" class="radio-11-9">B.standing</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="si-c2" value="c"  v-model="form.grammar.no4">
		                                <label for="si-c2" class="radio-11-9">C.which stands</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="si-d2" value="d"  v-model="form.grammar.no4">
		                                <label for="si-d2" class="radio-11-9">D.Stand</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        5.When they got to the cinema, the film ______ for the ten minutes.
		                    </div>
		                    <div class="options">
		                        <ul>
		                            <li>
		                                <input type="radio" id="wu-a2" value="a" v-model="form.grammar.no5">
		                                <label for="wu-a2"  class="radio-11-9">A. had been on</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="wu-b2" value="b"  v-model="form.grammar.no5">
		                                <label for="wu-b2" class="radio-11-9">B.has begun</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="wu-c2" value="c"  v-model="form.grammar.no5">
		                                <label for="wu-c2" class="radio-11-9">C.began</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="wu-d2" value="d"  v-model="form.grammar.no5">
		                                <label for="wu-d2" class="radio-11-9">D.had begun</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>
		            <li>
		                <div class="mar">
		                    <div class="question">
		                        6. The house, _____ was destroyed in the terrible fire, has been repaired.
		                    </div>
		                    <div class="options li-whole">
		                        <ul>
		                            <li>
		                                <input type="radio" id="liu-a2" value="a" v-model="form.grammar.no6">
		                                <label for="liu-a2"  class="radio-11-9">A. the roof of which</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="liu-b2" value="b"  v-model="form.grammar.no6">
		                                <label for="liu-b2" class="radio-11-9">B.which roof</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="liu-c2" value="c"  v-model="form.grammar.no6">
		                                <label for="liu-c2" class="radio-11-9">C.its roof</label>
		                            </li>
		                            <li>
		                                <input type="radio" id="liu-d2" value="d"  v-model="form.grammar.no6">
		                                <label for="liu-d2" class="radio-11-9">D.the roof</label>
		                            </li>
		                        </ul>
		                    </div>
		                </div>
		            </li>

		        </ul>
		    </div>

		<div class="submit-btn bottom-submit-btn animated bounceInUp">	
	       	<input value="提   交"   type="submit" @click="doSubmit('grammar')">
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