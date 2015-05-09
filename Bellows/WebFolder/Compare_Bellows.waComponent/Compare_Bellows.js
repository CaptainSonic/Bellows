
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Compare_Bellows';
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
	$$('component1_slL2').addHandle(400);	
	$$('component1_slL3').addHandle(400);	
	$$('component1_slEp').addHandle(2000);	


	
	// @region namespaceDeclaration// @startlock
	var slEp = {};	// @slider
	var cbxEp = {};	// @checkbox
	var btShow = {};	// @buttonImage
	var btReset = {};	// @buttonImage
	var slL3 = {};	// @slider
	var slL2 = {};	// @slider
	var slInt = {};	// @slider
	var slExt = {};	// @slider
	var cbxL3 = {};	// @checkbox
	var cbxL2 = {};	// @checkbox
	var cbxInt = {};	// @checkbox
	var cbxExt = {};	// @checkbox
	var slDiamCollet2 = {};	// @slider
	var slDiamCollet1 = {};	// @slider
	var cbxDiamCollet2 = {};	// @checkbox
	var cbxDiamCollet1 = {};	// @checkbox
	var cbxOutil = {};	// @checkbox
	var cbxMatiere = {};	// @checkbox
	var slOndes = {};	// @slider
	var cbxOndes = {};	// @checkbox
	var cbxParois = {};	// @checkbox
	var btSearch = {};	// @buttonImage
	var slParois = {};	// @slider
	var Btz3 = {};	// @buttonImage
	var Btc3 = {};	// @buttonImage
	var Btz2 = {};	// @buttonImage
	var Btc2 = {};	// @buttonImage
	var Btz1 = {};	// @buttonImage
	var Btc1 = {};	// @buttonImage
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

	btShow.click = function btShow_click (event)// @startlock
	{// @endlock
		$$('component1_btShow').hide();
		$$('component1_Btc1').hide();
		$$('component1_Btc2').hide();
		$$('component1_Btc3').hide();
		$$('component1_Btz1').hide();
		$$('component1_Btz2').hide();
		$$('component1_Btz3').hide();
		$$('component1_ListBell').disable();
		$$('component1_PanelSearch').show();
		
		
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

	cbxOutil.click = function cbxOutil_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbxOutil').getValue()) {
			$$('component1_cbOutil').show();
		} else {
			$$('component1_cbOutil').hide();
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
		var LQuery, pRef, pCode, pMat, pOutil, pForm, p1C1, p2C1, p1C2, p2C2, pParm, pParM;
		
		$$('component1_btShow').show();
		$$('component1_Btc1').show();
		$$('component1_Btc2').show();
		$$('component1_Btc3').show();
		$$('component1_Btz1').show();
		$$('component1_Btz2').show();
		$$('component1_Btz3').show();
		$$('component1_ListBell').enable();
		$$('component1_ListBell').setReadOnly(true);
		$$('component1_PanelSearch').hide();
		
		
		
		if ($$('component1_sRef').getValue().length === 0) {
			LQuery = "Reference = '*' and Actif is true ";
		} else {
			LQuery = "Reference = '*" + $$('component1_sRef').getValue() + "*' and Actif is true ";
		}
		
				
		if ($$('component1_sCode').getValue().length === 0) {
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
		WAF.sources.component1_soufflets.query(LQuery);
		
		
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

	Btz3.click = function Btz3_click (event)// @startlock
	{// @endlock
		$$('component1_A3').setValue("");
		$$('component1_B3').setValue("");
		$$('component1_C3').setValue(0);
		$$('component1_D3').setValue("");
		$$('component1_E3').setValue("");
		$$('component1_F3').setValue("");
		$$('component1_G3').setValue(0);
		$$('component1_H3').setValue(0);
		$$('component1_I3').setValue(0);
		$$('component1_J3').setValue("");
		$$('component1_K3').setValue(0);
		$$('component1_L3').setValue("");
		$$('component1_M3').setValue(0);
		$$('component1_N3').setValue(0);
		$$('component1_O3').setValue(0);
		$$('component1_P3').setValue(0);
		$$('component1_Q3').setValue(0);
		$$('component1_R3').setValue(0);
		$$('component1_S3').setValue(0);
		$$('component1_T3').setValue(0);
		$$('component1_U3').setValue("");
		$$('component1_V3').setValue("");
		$$('component1_W3').setValue("");
		$$('component1_X3').setValue("");
		$$('component1_Y3').setValue("");
		$$('component1_Z3').setValue(0);
	};// @lock

	Btc3.click = function Btc3_click (event)// @startlock
	{// @endlock
		$$('component1_A3').setValue($$('component1_Ac').getValue());
		$$('component1_B3').setValue($$('component1_Bc').getValue());
		$$('component1_C3').setValue($$('component1_Cc').getValue());
		$$('component1_D3').setValue($$('component1_Dc').getValue());
		$$('component1_E3').setValue($$('component1_Ec').getValue());
		$$('component1_F3').setValue($$('component1_Fc').getValue());
		$$('component1_G3').setValue($$('component1_Gc').getValue());
		$$('component1_H3').setValue($$('component1_Hc').getValue());
		$$('component1_I3').setValue($$('component1_Ic').getValue());
		$$('component1_J3').setValue($$('component1_Jc').getValue());
		$$('component1_K3').setValue($$('component1_Kc').getValue());
		$$('component1_L3').setValue($$('component1_Lc').getValue());
		$$('component1_M3').setValue($$('component1_Mc').getValue());
		$$('component1_N3').setValue($$('component1_Nc').getValue());
		$$('component1_O3').setValue($$('component1_Oc').getValue());
		$$('component1_P3').setValue($$('component1_Pc').getValue());
		$$('component1_Q3').setValue($$('component1_Qc').getValue());
		$$('component1_R3').setValue($$('component1_Rc').getValue());
		$$('component1_S3').setValue($$('component1_Sc').getValue());
		$$('component1_T3').setValue($$('component1_Tc').getValue());
		$$('component1_U3').setValue($$('component1_Uc').getValue());
		$$('component1_V3').setValue($$('component1_Vc').getValue());
		$$('component1_W3').setValue($$('component1_Wc').getValue());
		$$('component1_X3').setValue($$('component1_Xc').getValue());
		$$('component1_Y3').setValue($$('component1_Yc').getValue());
		$$('component1_Z3').setValue($$('component1_Zc').getValue());
	};// @lock

	Btz2.click = function Btz2_click (event)// @startlock
	{// @endlock
		$$('component1_A2').setValue("");
		$$('component1_B2').setValue("");
		$$('component1_C2').setValue(0);
		$$('component1_D2').setValue("");
		$$('component1_E2').setValue("");
		$$('component1_F2').setValue("");
		$$('component1_G2').setValue(0);
		$$('component1_H2').setValue(0);
		$$('component1_I2').setValue(0);
		$$('component1_J2').setValue("");
		$$('component1_K2').setValue(0);
		$$('component1_L2').setValue("");
		$$('component1_M2').setValue(0);
		$$('component1_N2').setValue(0);
		$$('component1_O2').setValue(0);
		$$('component1_P2').setValue(0);
		$$('component1_Q2').setValue(0);
		$$('component1_R2').setValue(0);
		$$('component1_S2').setValue(0);
		$$('component1_T2').setValue(0);
		$$('component1_U2').setValue("");
		$$('component1_V2').setValue("");
		$$('component1_W2').setValue("");
		$$('component1_X2').setValue("");
		$$('component1_Y2').setValue("");
		$$('component1_Z2').setValue(0);
	};// @lock

	Btc2.click = function Btc2_click (event)// @startlock
	{// @endlock
		$$('component1_A2').setValue($$('component1_Ac').getValue());
		$$('component1_B2').setValue($$('component1_Bc').getValue());
		$$('component1_C2').setValue($$('component1_Cc').getValue());
		$$('component1_D2').setValue($$('component1_Dc').getValue());
		$$('component1_E2').setValue($$('component1_Ec').getValue());
		$$('component1_F2').setValue($$('component1_Fc').getValue());
		$$('component1_G2').setValue($$('component1_Gc').getValue());
		$$('component1_H2').setValue($$('component1_Hc').getValue());
		$$('component1_I2').setValue($$('component1_Ic').getValue());
		$$('component1_J2').setValue($$('component1_Jc').getValue());
		$$('component1_K2').setValue($$('component1_Kc').getValue());
		$$('component1_L2').setValue($$('component1_Lc').getValue());
		$$('component1_M2').setValue($$('component1_Mc').getValue());
		$$('component1_N2').setValue($$('component1_Nc').getValue());
		$$('component1_O2').setValue($$('component1_Oc').getValue());
		$$('component1_P2').setValue($$('component1_Pc').getValue());
		$$('component1_Q2').setValue($$('component1_Qc').getValue());
		$$('component1_R2').setValue($$('component1_Rc').getValue());
		$$('component1_S2').setValue($$('component1_Sc').getValue());
		$$('component1_T2').setValue($$('component1_Tc').getValue());
		$$('component1_U2').setValue($$('component1_Uc').getValue());
		$$('component1_V2').setValue($$('component1_Vc').getValue());
		$$('component1_W2').setValue($$('component1_Wc').getValue());
		$$('component1_X2').setValue($$('component1_Xc').getValue());
		$$('component1_Y2').setValue($$('component1_Yc').getValue());
		$$('component1_Z2').setValue($$('component1_Zc').getValue());
	};// @lock

	Btz1.click = function Btz1_click (event)// @startlock
	{// @endlock
		$$('component1_A1').setValue("");
		$$('component1_B1').setValue("");
		$$('component1_C1').setValue(0);
		$$('component1_D1').setValue("");
		$$('component1_E1').setValue("");
		$$('component1_F1').setValue("");
		$$('component1_G1').setValue(0);
		$$('component1_H1').setValue(0);
		$$('component1_I1').setValue(0);
		$$('component1_J1').setValue("");
		$$('component1_K1').setValue(0);
		$$('component1_L1').setValue("");
		$$('component1_M1').setValue(0);
		$$('component1_N1').setValue(0);
		$$('component1_O1').setValue(0);
		$$('component1_P1').setValue(0);
		$$('component1_Q1').setValue(0);
		$$('component1_R1').setValue(0);
		$$('component1_S1').setValue(0);
		$$('component1_T1').setValue(0);
		$$('component1_U1').setValue("");
		$$('component1_V1').setValue("");
		$$('component1_W1').setValue("");
		$$('component1_X1').setValue("");
		$$('component1_Y1').setValue("");
		$$('component1_Z1').setValue(0);
	};// @lock

	Btc1.click = function Btc1_click (event)// @startlock
	{// @endlock
		$$('component1_A1').setValue($$('component1_Ac').getValue());
		$$('component1_B1').setValue($$('component1_Bc').getValue());
		$$('component1_C1').setValue($$('component1_Cc').getValue());
		$$('component1_D1').setValue($$('component1_Dc').getValue());
		$$('component1_E1').setValue($$('component1_Ec').getValue());
		$$('component1_F1').setValue($$('component1_Fc').getValue());
		$$('component1_G1').setValue($$('component1_Gc').getValue());
		$$('component1_H1').setValue($$('component1_Hc').getValue());
		$$('component1_I1').setValue($$('component1_Ic').getValue());
		$$('component1_J1').setValue($$('component1_Jc').getValue());
		$$('component1_K1').setValue($$('component1_Kc').getValue());
		$$('component1_L1').setValue($$('component1_Lc').getValue());
		$$('component1_M1').setValue($$('component1_Mc').getValue());
		$$('component1_N1').setValue($$('component1_Nc').getValue());
		$$('component1_O1').setValue($$('component1_Oc').getValue());
		$$('component1_P1').setValue($$('component1_Pc').getValue());
		$$('component1_Q1').setValue($$('component1_Qc').getValue());
		$$('component1_R1').setValue($$('component1_Rc').getValue());
		$$('component1_S1').setValue($$('component1_Sc').getValue());
		$$('component1_T1').setValue($$('component1_Tc').getValue());
		$$('component1_U1').setValue($$('component1_Uc').getValue());
		$$('component1_V1').setValue($$('component1_Vc').getValue());
		$$('component1_W1').setValue($$('component1_Wc').getValue());
		$$('component1_X1').setValue($$('component1_Xc').getValue());
		$$('component1_Y1').setValue($$('component1_Yc').getValue());
		$$('component1_Z1').setValue($$('component1_Zc').getValue());
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_slEp", "slidechange", slEp.slidechange, "WAF");
	WAF.addListener(this.id + "_slEp", "slide", slEp.slide, "WAF");
	WAF.addListener(this.id + "_cbxEp", "click", cbxEp.click, "WAF");
	WAF.addListener(this.id + "_btShow", "click", btShow.click, "WAF");
	WAF.addListener(this.id + "_btReset", "click", btReset.click, "WAF");
	WAF.addListener(this.id + "_slL3", "slidechange", slL3.slidechange, "WAF");
	WAF.addListener(this.id + "_slL3", "slide", slL3.slide, "WAF");
	WAF.addListener(this.id + "_slL2", "slidechange", slL2.slidechange, "WAF");
	WAF.addListener(this.id + "_slL2", "slide", slL2.slide, "WAF");
	WAF.addListener(this.id + "_slInt", "slidechange", slInt.slidechange, "WAF");
	WAF.addListener(this.id + "_slInt", "slide", slInt.slide, "WAF");
	WAF.addListener(this.id + "_slExt", "slidechange", slExt.slidechange, "WAF");
	WAF.addListener(this.id + "_slExt", "slide", slExt.slide, "WAF");
	WAF.addListener(this.id + "_cbxL3", "click", cbxL3.click, "WAF");
	WAF.addListener(this.id + "_cbxL2", "click", cbxL2.click, "WAF");
	WAF.addListener(this.id + "_cbxInt", "click", cbxInt.click, "WAF");
	WAF.addListener(this.id + "_cbxExt", "click", cbxExt.click, "WAF");
	WAF.addListener(this.id + "_slDiamCollet2", "slidechange", slDiamCollet2.slidechange, "WAF");
	WAF.addListener(this.id + "_slDiamCollet2", "slide", slDiamCollet2.slide, "WAF");
	WAF.addListener(this.id + "_slDiamCollet1", "slidechange", slDiamCollet1.slidechange, "WAF");
	WAF.addListener(this.id + "_slDiamCollet1", "slide", slDiamCollet1.slide, "WAF");
	WAF.addListener(this.id + "_cbxDiamCollet2", "click", cbxDiamCollet2.click, "WAF");
	WAF.addListener(this.id + "_cbxDiamCollet1", "click", cbxDiamCollet1.click, "WAF");
	WAF.addListener(this.id + "_cbxOutil", "click", cbxOutil.click, "WAF");
	WAF.addListener(this.id + "_cbxMatiere", "click", cbxMatiere.click, "WAF");
	WAF.addListener(this.id + "_slOndes", "slidechange", slOndes.slidechange, "WAF");
	WAF.addListener(this.id + "_slOndes", "slide", slOndes.slide, "WAF");
	WAF.addListener(this.id + "_cbxOndes", "click", cbxOndes.click, "WAF");
	WAF.addListener(this.id + "_cbxParois", "click", cbxParois.click, "WAF");
	WAF.addListener(this.id + "_btSearch", "click", btSearch.click, "WAF");
	WAF.addListener(this.id + "_slParois", "slidechange", slParois.slidechange, "WAF");
	WAF.addListener(this.id + "_slParois", "slide", slParois.slide, "WAF");
	WAF.addListener(this.id + "_Btz3", "click", Btz3.click, "WAF");
	WAF.addListener(this.id + "_Btc3", "click", Btc3.click, "WAF");
	WAF.addListener(this.id + "_Btz2", "click", Btz2.click, "WAF");
	WAF.addListener(this.id + "_Btc2", "click", Btc2.click, "WAF");
	WAF.addListener(this.id + "_Btz1", "click", Btz1.click, "WAF");
	WAF.addListener(this.id + "_Btc1", "click", Btc1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
