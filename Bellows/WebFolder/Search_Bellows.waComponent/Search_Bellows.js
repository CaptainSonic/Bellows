
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
	$$('component1_slExt').addHandle(130);	
	$$('component1_slInt').addHandle(130);	
	$$('component1_slL2').addHandle(130);	
	$$('component1_slL3').addHandle(130);	


	// @region namespaceDeclaration// @startlock
	var cbxOutil = {};	// @checkbox
	var slL3 = {};	// @slider
	var slL2 = {};	// @slider
	var slInt = {};	// @slider
	var slExt = {};	// @slider
	var cbxInt = {};	// @checkbox
	var cbxL2 = {};	// @checkbox
	var cbxL3 = {};	// @checkbox
	var cbxExt = {};	// @checkbox
	var cbxMatiere = {};	// @checkbox
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

	cbxOutil.click = function cbxOutil_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxOutil').getValue()) {
			$$('component1_cbOutil').show();
		} else {
			$$('component1_cbOutil').hide();
		}
	};// @lock

	slL3.slidechange = function slL3_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgL3').setValue(event.data.values[0]); 
		$$('component1_stdL3').setValue(event.data.values[1]);
	};// @lock

	slL3.slide = function slL3_slide (event)// @startlock
	{// @endlock
		$$('component1_stgL3').setValue(event.data.values[0]); 
		$$('component1_stdL3').setValue(event.data.values[1]);
	};// @lock

	slL2.slidechange = function slL2_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgL2').setValue(event.data.values[0]); 
		$$('component1_stdL2').setValue(event.data.values[1]);
	};// @lock

	slL2.slide = function slL2_slide (event)// @startlock
	{// @endlock
		$$('component1_stgL2').setValue(event.data.values[0]); 
		$$('component1_stdL2').setValue(event.data.values[1]);
	};// @lock

	slInt.slidechange = function slInt_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgInt').setValue(event.data.values[0]); 
		$$('component1_stdInt').setValue(event.data.values[1]);
	};// @lock

	slInt.slide = function slInt_slide (event)// @startlock
	{// @endlock
		$$('component1_stgInt').setValue(event.data.values[0]); 
		$$('component1_stdInt').setValue(event.data.values[1]);
	};// @lock

	slExt.slidechange = function slExt_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgExt').setValue(event.data.values[0]); 
		$$('component1_stdExt').setValue(event.data.values[1]);
	};// @lock

	slExt.slide = function slExt_slide (event)// @startlock
	{// @endlock
		$$('component1_stgExt').setValue(event.data.values[0]); 
		$$('component1_stdExt').setValue(event.data.values[1]);
	};// @lock

	cbxInt.click = function cbxInt_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxInt').getValue()) {
			$$('component1_slInt').show();
			$$('component1_stgInt').show();
			$$('component1_stdInt').show();
			$$('component1_slInt').setValues([5,20]);
		} else {
			$$('component1_slInt').hide();
			$$('component1_stgInt').hide();
			$$('component1_stdInt').hide();
		}
	};// @lock

	cbxL2.click = function cbxL2_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxL2').getValue()) {
			$$('component1_slL2').show();
			$$('component1_stgL2').show();
			$$('component1_stdL2').show();
			$$('component1_slL2').setValues([10,30]);
		} else {
			$$('component1_slL2').hide();
			$$('component1_stgL2').hide();
			$$('component1_stdL2').hide();
		}
	};// @lock

	cbxL3.click = function cbxL3_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxL3').getValue()) {
			$$('component1_slL3').show();
			$$('component1_stgL3').show();
			$$('component1_stdL3').show();
			$$('component1_slL3').setValues([10,30]);
		} else {
			$$('component1_slL3').hide();
			$$('component1_stgL3').hide();
			$$('component1_stdL3').hide();
		}
	};// @lock

	cbxExt.click = function cbxExt_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxExt').getValue()) {
			$$('component1_slExt').show();
			$$('component1_stgExt').show();
			$$('component1_stdExt').show();
			$$('component1_slExt').setValues([10,30]);
		} else {
			$$('component1_slExt').hide();
			$$('component1_stgExt').hide();
			$$('component1_stdExt').hide();
		}
	};// @lock

	cbxMatiere.click = function cbxMatiere_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxMatiere').getValue()) {
			$$('component1_cbMatiere').show();
		} else {
			$$('component1_cbMatiere').hide();
		}
	};// @lock

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
		var LQuery, pRef, pCode, pMat, pOutil, pForm, p1C1, p2C1, p1C2, p2C2;
		
		$$('component1_btShow').show();
		$$('component1_Conception').show();
		$$('component1_Hydro').show();
		$$('component1_ListBell').enable();
		$$('component1_ListBell').setReadOnly(true);
		$$('component1_PanelSearch').hide();
		
		
		LQuery = "Reference = :1 ";
		if ($$('component1_sRef').getValue().length = 0) {
			pRef = "*";
		} else {
			pRef = "*" + $$('component1_sRef').getValue() + "*";
		}
		
		
		if ($$('component1_sCode').getValue().length = 0) {
			pCode = "*";
		} else {
			pCode = "*" + $$('component1_sCode').getValue() + "*";
			LQuery = LQuery + "and Code = :2 ";
		}
		
		pMat = "*";
		if ($$('component1_cbxMatiere').getValue()) {
			pMat = $$('component1_cbMatiere').getValue();
			LQuery = LQuery + "and Matiere.ID = :3 ";
		}
		
		pOutil = "*";
		if ($$('component1_cbxOutil').getValue()) {
			pOutil = $$('component1_cbOutil').getValue();
			LQuery = LQuery + "and Outil.ID = :4 ";
		}
		
		pForm = "*";
		if ($$('component1_cbForm').getValue() !== "-") {
			pForm = $$('component1_cbForm').getValue();
			LQuery = LQuery + "and Type_Formage = :5 ";
		}
		
		p1C1 = "*";
		if ($$('component1_cbCollet1').getValue() !== "-") {
			p1C1 = $$('component1_cbCollet1').getValue();
			p2C1 = "*";
			if ($$('component1_cbbCollet1').getValue() !== "-") {
				p2C1 = $$('component1_cbbCollet1').getValue();
				LQuery = LQuery + "and ( Collet1 = :6 or Collet1 = :7) ";
			} else {
				LQuery = LQuery + "and Collet1 = :6 ";
			}
		}
		
		p1C2 = "*";
		if ($$('component1_cbCollet2').getValue() !== "-") {
			p1C2 = $$('component1_cbCollet2').getValue();
			p2C2 = "*";
			if ($$('component1_cbbCollet2').getValue() !== "-") {
				p2C2 = $$('component1_cbbCollet2').getValue();
				LQuery = LQuery + "and ( Collet2 = :8 or Collet2 = :9) ";
			} else {
				LQuery = LQuery + "and Collet2 = :8 ";
			}
		}
		
		//WAF.sources.component1_soufflets.query();
		WAF.sources.component1_soufflets.query(LQuery, pRef, pCode, pMat, pOutil, pForm, p1C1, p2C1, p1C2, p2C2);
		
		
		
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
	WAF.addListener(this.id + "_cbxOutil", "click", cbxOutil.click, "WAF");
	WAF.addListener(this.id + "_slL3", "slidechange", slL3.slidechange, "WAF");
	WAF.addListener(this.id + "_slL3", "slide", slL3.slide, "WAF");
	WAF.addListener(this.id + "_slL2", "slidechange", slL2.slidechange, "WAF");
	WAF.addListener(this.id + "_slL2", "slide", slL2.slide, "WAF");
	WAF.addListener(this.id + "_slInt", "slidechange", slInt.slidechange, "WAF");
	WAF.addListener(this.id + "_slInt", "slide", slInt.slide, "WAF");
	WAF.addListener(this.id + "_slExt", "slidechange", slExt.slidechange, "WAF");
	WAF.addListener(this.id + "_slExt", "slide", slExt.slide, "WAF");
	WAF.addListener(this.id + "_cbxInt", "click", cbxInt.click, "WAF");
	WAF.addListener(this.id + "_cbxL2", "click", cbxL2.click, "WAF");
	WAF.addListener(this.id + "_cbxL3", "click", cbxL3.click, "WAF");
	WAF.addListener(this.id + "_cbxExt", "click", cbxExt.click, "WAF");
	WAF.addListener(this.id + "_cbxMatiere", "click", cbxMatiere.click, "WAF");
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
