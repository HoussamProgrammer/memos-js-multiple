// export default class ComponentWithInnerHtml extends HTMLElement {
	
// 	constructor() {
// 		super();

// 		this.innerHTML = this.generateTemplate();
// 		this.extractReferencesElements();
// 		this.updateCommonTexts();
// 	}

// 	extractReferencesElements() {
// 		this.tsButtonContainer = this.querySelector('#tsButtonContainer');
// 		this.tsButtonFrontBlock = this.querySelector('#tsButtonFrontBlock');
// 		this.tsButtonBackBlock = this.querySelector('#tsButtonBackBlock');
// 		this.textElements = this.querySelectorAll('.ts-button-common-text');
// 	}

// 	updateCommonTexts() {
// 		this.textElements.forEach((element) => { element.innerHTML = this.getAttribute('text') });
// 	}

	
// 	generateTemplate() {
// 		let template = `
// 		<div class="ts-button-container" id="tsButtonContainer">
// 			<div class="ts-button-front ts-button-front--primary" id="tsButtonFrontBlock">
// 				<a href="#" class="ts-button-common-link ts-button-common-link--primary"> 
// 					<div class="ts-button-common-text"></div>
// 					<div class="ts-button-common-mark">&#8594;</div> 	
// 				</a> 
// 			</div> 
// 			<div class="ts-button-back ts-button-back--primary" id="tsButtonBackBlock">
// 				<a href="#" class="ts-button-common-link ts-button-common-link--primary"> 
// 					<div class="ts-button-common-text"></div>
// 					<div class="ts-button-common-mark">&#8594;</div> 	
// 				</a> 
// 			</div>
// 	    </div>
// 		`;

// 		return template;
// 	}
// }