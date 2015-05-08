
(function Component (id) {// @lock

// Add the code that needs to be shared between components here
var wURL = window.location.href,
	wPathname = window.location.pathname,
	iFrame;

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
	$$('component1_slDiamCollet1').addHandle(800);	
	$$('component1_slDiamCollet2').addHandle(800);	
	$$('component1_slExt').addHandle(800);	
	$$('component1_slInt').addHandle(800);	
	$$('component1_slL2').addHandle(200);	
	$$('component1_slL3').addHandle(200);
	$$('component1_slEp').addHandle(2000);	


	// @region namespaceDeclaration// @startlock
	var slEp = {};	// @slider
	var cbxEp = {};	// @checkbox
	var btExport = {};	// @buttonImage
	var btReset = {};	// @buttonImage
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

	slEp.slidechange = function slEp_slidechange (event)// @startlock
	{// @endlock
		$$('component1_stgEp').setValue(event.data.values[0]/1000); 
		$$('component1_stdEp').setValue(event.data.values[1]/1000);
	};// @lock

	slEp.slide = function slEp_slide (event)// @startlock
	{// @endlock
		$$('component1_stgEp').setValue(event.data.values[0]/1000); 
		$$('component1_stdEp').setValue(event.data.values[1]/1000);
	};// @lock

	cbxEp.click = function cbxEp_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxEp').getValue()) {
			$$('component1_slEp').show();
			$$('component1_stgEp').show();
			$$('component1_stdEp').show();
			$$('component1_slEp').setValues([84,165]);
		} else {
			$$('component1_slEp').hide();
			$$('component1_stgEp').hide();
			$$('component1_stdEp').hide();
		}
	};// @lock

	btExport.click = function btExport_click (event)// @startlock
	{// @endlock
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/exportBellows";
			wExportURL += ".xls";
		} else {
			wExportURL = wURL;
			wExportURL += "exportBellows";
			wExportURL += ".xls";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
	};// @lock

	btReset.click = function btReset_click (event)// @startlock
	{// @endlock
		$$('component1_slInt').hide();
		$$('component1_stgInt').hide();
		$$('component1_stdInt').hide();
		$$('component1_slL2').hide();
		$$('component1_stgL2').hide();
		$$('component1_stdL2').hide();
		$$('component1_slL3').hide();
		$$('component1_stgL3').hide();
		$$('component1_stdL3').hide();
		$$('component1_slEp').hide();
		$$('component1_stgEp').hide();
		$$('component1_stdEp').hide();
		$$('component1_slExt').hide();
		$$('component1_stgExt').hide();
		$$('component1_stdExt').hide();
		$$('component1_slDiamCollet1').hide();
		$$('component1_stgCol1').hide();
		$$('component1_stdCol1').hide();
		$$('component1_slDiamCollet2').hide();
		$$('component1_stgCol2').hide();
		$$('component1_stdCol2').hide();
		$$('component1_slOndes').hide();
		$$('component1_stgOndes').hide();
		$$('component1_stdOndes').hide();
		$$('component1_slParois').hide();
		$$('component1_stgParois').hide();
		$$('component1_stdParois').hide();
		$$('component1_cbMatiere').hide();
		$$('component1_cbOutil').hide();
		$$('component1_sRef').setValue(null);
		$$('component1_sCode').setValue(null);
		$$('component1_cbCollet1').setValue("-");
		$$('component1_cbbCollet1').setValue("-");
		$$('component1_cbCollet2').setValue("-");
		$$('component1_cbbCollet2').setValue("-");
		$$('component1_cbForm').setValue("-");
		$$('component1_cbxInt').uncheck();
		$$('component1_cbxL2').uncheck();
		$$('component1_cbxL3').uncheck();
		$$('component1_cbxEp').uncheck();
		$$('component1_cbxExt').uncheck();
		$$('component1_cbxInt').uncheck();
		$$('component1_cbxDiamCollet2').uncheck();
		$$('component1_cbxDiamCollet1').uncheck();
		$$('component1_cbxOndes').uncheck();
		$$('component1_cbxParois').uncheck();
		$$('component1_cbxMatiere').uncheck();
		$$('component1_cbxOutil').uncheck();
		
	};// @lock

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
		var LQuery, pRef, pCode, pMat, pOutil, pForm, p1C1, p2C1, p1C2, p2C2, pParm, pParM, vUser;
		
		$$('component1_btShow').show();
		$$('component1_btExport').show();
		$$('component1_Conception').show();
		$$('component1_Hydro').show();
		$$('component1_ListBell').enable();
		$$('component1_ListBell').setReadOnly(true);
		$$('component1_PanelSearch').hide();
		
		
		
		if ($$('component1_sRef').getValue().length = 0) {
			LQuery = "Reference = '*' and Actif is true ";
		} else {
			LQuery = "Reference = '*" + $$('component1_sRef').getValue() + "*' and Actif is true ";
		}
		
				
		if ($$('component1_sCode').getValue().length = 0) {
			pCode = "*";
		} else {
			LQuery = LQuery + "and Code = '*" + $$('component1_sCode').getValue() + "*' ";
		}
		
		pMat = "*";
		if ($$('component1_cbxMatiere').getValue()) {
			pMat = $$('component1_cbMatiere').getValue();
			LQuery = LQuery + "and Matiere.ID = " + pMat + " ";
		}
		
		pOutil = "*";
		if ($$('component1_cbxOutil').getValue()) {
			pOutil = $$('component1_cbOutil').getValue();
			LQuery = LQuery + "and Outil.ID = " + pOutil + " ";
		}
		
		pForm = "*";
		if ($$('component1_cbForm').getValue() !== "-") {
			pForm = $$('component1_cbForm').getValue();
			LQuery = LQuery + "and Type_Formage = '" + pForm + "' ";
		}
		
		p1C1 = "*";
		if ($$('component1_cbCollet1').getValue() !== "-") {
			p1C1 = $$('component1_cbCollet1').getValue();
			p2C1 = "*";
			if ($$('component1_cbbCollet1').getValue() !== "-") {
				p2C1 = $$('component1_cbbCollet1').getValue();
				LQuery = LQuery + "and ( Collet1 = '" + p1C1 + "'  or Collet1 = '" + p2C1 + "' ) ";
			} else {
				LQuery = LQuery + "and Collet1 = '" + p1C1 + "' ";
			}
		}
		
		p1C2 = "*";
		if ($$('component1_cbCollet2').getValue() !== "-") {
			p1C2 = $$('component1_cbCollet2').getValue();
			p2C2 = "*";
			if ($$('component1_cbbCollet2').getValue() !== "-") {
				p2C2 = $$('component1_cbbCollet2').getValue();
				LQuery = LQuery + "and ( Collet1 = '" + p1C2 + "'  or Collet1 = '" + p2C2 + "' ) ";
			} else {
				LQuery = LQuery + "and Collet1 = '" + p1C2 + "' ";
			}
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxParois').getValue()) {
			pParm = parseInt($$('component1_stgParois').getValue(),10);
			pParM = parseInt($$('component1_stdParois').getValue(),10);
			//alert("Min "+ pParm + "  Max "+pParM);
			LQuery = LQuery + "and ( Nb_Parois >= " + pParm + " and Nb_Parois <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxOndes').getValue()) {
			pParm = $$('component1_stgOndes').getValue();
			pParM = $$('component1_stdOndes').getValue();
			LQuery = LQuery + "and ( Nb_Ondes >= " + pParm + " and Nb_Ondes <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxDiamCollet1').getValue()) {
			pParm = $$('component1_stgCol1').getValue();
			pParM = $$('component1_stdCol1').getValue();
			LQuery = LQuery + "and ( Diam_Collet1 >= " + pParm + " and Diam_Collet1 <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxDiamCollet2').getValue()) {
			pParm = $$('component1_stgCol2').getValue();
			pParM = $$('component1_stdCol2').getValue();
			LQuery = LQuery + "and ( Diam_Collet2 >= " + pParm + " and Diam_Collet2 <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxExt').getValue()) {
			pParm = $$('component1_stgExt').getValue();
			pParM = $$('component1_stdExt').getValue();
			LQuery = LQuery + "and ( Ext_Onde >= " + pParm + " and Ext_Onde <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxInt').getValue()) {
			pParm = $$('component1_stgInt').getValue();
			pParM = $$('component1_stdInt').getValue();
			LQuery = LQuery + "and ( Int_Onde >= " + pParm + " and Int_Onde <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxL2').getValue()) {
			pParm = $$('component1_stgL2').getValue();
			pParM = $$('component1_stdL2').getValue();
			LQuery = LQuery + "and ( L2 >= " + pParm + " and L2 <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxL3').getValue()) {
			pParm = $$('component1_stgL3').getValue();
			pParM = $$('component1_stdL3').getValue();
			LQuery = LQuery + "and ( L3 >= " + pParm + " and L3 <= " + pParM + ") ";
		}
		
		pParm = 0;
		pParM = 0;
		if ($$('component1_cbxEp').getValue()) {
			pParm = $$('component1_stgEp').getValue();
			pParM = $$('component1_stdEp').getValue();
			LQuery = LQuery + "and ( Ep_Parois >= " + pParm + " and Ep_Parois <= " + pParM + ") ";
		}
		
		//alert(LQuery);
		//WAF.sources.component1_soufflets.query();
		
		vUser = WAF.directory.currentUser().userName;
		//alert(vUser);
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
			var vUser;
			vUser = WAF.directory.currentUser().userName;
    		sources.component1_userParam.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
    			elem = sources.component1_userParam;
    			if (elem.length === 0) {
     				sources.component1_userParam.addNewElement();
     				sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
      					sources.component1_userParam.Utilisateur.set(sources.component1_utilisateurs);
      					sources.component1_userParam.StQuery = LQuery;
      		      		sources.component1_userParam.save();
     				}, params:[vUser] });
    			} else {
     				sources.component1_userParam.StQuery = LQuery;
     				sources.component1_userParam.save();
    			}
    		}, params:[vUser] });
    		
    	}, params:[vUser] });
		
		WAF.sources.component1_soufflets.query(LQuery);
		
		
		
	};// @lock

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').hide();
		$$('component1_btExport').hide();
		$$('component1_Conception').hide();
		$$('component1_Hydro').hide();
		$$('component1_ListBell').disable();
		$$('component1_PanelSearch').show();
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_slEp", "slidechange", slEp.slidechange, "WAF");
	WAF.addListener(this.id + "_slEp", "slide", slEp.slide, "WAF");
	WAF.addListener(this.id + "_cbxEp", "click", cbxEp.click, "WAF");
	WAF.addListener(this.id + "_btExport", "click", btExport.click, "WAF");
	WAF.addListener(this.id + "_btReset", "click", btReset.click, "WAF");
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
