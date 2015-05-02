﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Search_Bellows';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("component1_ListBell").setRowHeight(22);
	$$('component1_slParois').addHandle(30);
	$$('component1_slOndes').addHandle(40);
	$$('component1_slDiamCollet1').addHandle(130);	
	$$('component1_slDiamCollet2').addHandle(130);	


	// @region namespaceDeclaration// @startlock
	var cbxDiamCollet2 = {};	// @checkbox
	var slDiamCollet2 = {};	// @slider
	var slDiamCollet1 = {};	// @slider
	var cbxDiamCollet1 = {};	// @checkbox
	var slOndes = {};	// @slider
	var cbxOndes = {};	// @checkbox
	var slParois = {};	// @slider
	var cbxParois = {};	// @checkbox
	var btSearch = {};	// @buttonImage
	var btShow = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	cbxDiamCollet2.click = function cbxDiamCollet2_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxDiamCollet2').getValue()) {
			$$('component1_slDiamCollet2').show();
			$$('component1_stgCol2').show();
			$$('component1_stdCol2').show();
			$$('component1_slDiamCollet2').setValues([10,30]);
		} else {
			$$('component1_slDiamCollet2').hide();
			$$('component1_stgCol2').hide();
			$$('component1_stdCol2').hide();
		}
	};// @lock

	slDiamCollet2.slidechange = function slDiamCollet2_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgCol2').setValue(event.data.values[0]); 
		$$('component1_stdCol2').setValue(event.data.values[1]);
	};// @lock

	slDiamCollet2.slide = function slDiamCollet2_slide (event)// @startlock
	{// @endlock
		$$('component1_stgCol2').setValue(event.data.values[0]); 
		$$('component1_stdCol2').setValue(event.data.values[1]);
	};// @lock

	slDiamCollet1.slidechange = function slDiamCollet1_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgCol1').setValue(event.data.values[0]); 
		$$('component1_stdCol1').setValue(event.data.values[1]);
	};// @lock

	slDiamCollet1.slide = function slDiamCollet1_slide (event)// @startlock
	{// @endlock
		$$('component1_stgCol1').setValue(event.data.values[0]); 
		$$('component1_stdCol1').setValue(event.data.values[1]);
	};// @lock

	cbxDiamCollet1.click = function cbxDiamCollet1_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxDiamCollet1').getValue()) {
			$$('component1_slDiamCollet1').show();
			$$('component1_stgCol1').show();
			$$('component1_stdCol1').show();
			$$('component1_slDiamCollet1').setValues([10,30]);
		} else {
			$$('component1_slDiamCollet1').hide();
			$$('component1_stgCol1').hide();
			$$('component1_stdCol1').hide();
		}
	};// @lock

	slOndes.slidechange = function slOndes_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgOndes').setValue(event.data.values[0]); 
		$$('component1_stdOndes').setValue(event.data.values[1]);
	};// @lock

	slOndes.slide = function slOndes_slide (event)// @startlock
	{// @endlock
		$$('component1_stgOndes').setValue(event.data.values[0]); 
		$$('component1_stdOndes').setValue(event.data.values[1]);
	};// @lock

	cbxOndes.click = function cbxOndes_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxOndes').getValue()) {
			$$('component1_slOndes').show();
			$$('component1_stgOndes').show();
			$$('component1_stdOndes').show();
			$$('component1_slOndes').setValues([3,18]);
		} else {
			$$('component1_slOndes').hide();
			$$('component1_stgOndes').hide();
			$$('component1_stdOndes').hide();
		}
	};// @lock

	slParois.slidechange = function slParois_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgParois').setValue(event.data.values[0]); 
		$$('component1_stdParois').setValue(event.data.values[1]);

	};// @lock

	slParois.slide = function slParois_slide (event)// @startlock
	{// @endlock
		$$('component1_stgParois').setValue(event.data.values[0]); 
		$$('component1_stdParois').setValue(event.data.values[1]);

	};// @lock

	cbxParois.click = function cbxParois_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxParois').getValue()) {
			$$('component1_slParois').show();
			$$('component1_stgParois').show();
			$$('component1_stdParois').show();
			$$('component1_slParois').setValues([1,2]);
		} else {
			$$('component1_slParois').hide();
			$$('component1_stgParois').hide();
			$$('component1_stdParois').hide();
		}

	};// @lock

	btSearch.click = function btSearch_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').show();
		$$('component1_Conception').show();
		$$('component1_Hydro').show();
		$$('component1_ListBell').enable();
		$$('component1_ListBell').setReadOnly(true);
		$$('component1_PanelSearch').hide();
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').hide();
		$$('component1_Conception').hide();
		$$('component1_Hydro').hide();
		$$('component1_ListBell').disable();
		$$('component1_PanelSearch').show();
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbxDiamCollet2", "click", cbxDiamCollet2.click, "WAF");
	WAF.addListener(this.id + "_slDiamCollet2", "slidechange", slDiamCollet2.slidechange, "WAF");
	WAF.addListener(this.id + "_slDiamCollet2", "slide", slDiamCollet2.slide, "WAF");
	WAF.addListener(this.id + "_slDiamCollet1", "slidechange", slDiamCollet1.slidechange, "WAF");
	WAF.addListener(this.id + "_slDiamCollet1", "slide", slDiamCollet1.slide, "WAF");
	WAF.addListener(this.id + "_cbxDiamCollet1", "click", cbxDiamCollet1.click, "WAF");
	WAF.addListener(this.id + "_slOndes", "slidechange", slOndes.slidechange, "WAF");
	WAF.addListener(this.id + "_slOndes", "slide", slOndes.slide, "WAF");
	WAF.addListener(this.id + "_cbxOndes", "click", cbxOndes.click, "WAF");
	WAF.addListener(this.id + "_slParois", "slidechange", slParois.slidechange, "WAF");
	WAF.addListener(this.id + "_slParois", "slide", slParois.slide, "WAF");
	WAF.addListener(this.id + "_cbxParois", "click", cbxParois.click, "WAF");
	WAF.addListener(this.id + "_btSearch", "click", btSearch.click, "WAF");
	WAF.addListener(this.id + "_btShow", "click", btShow.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
