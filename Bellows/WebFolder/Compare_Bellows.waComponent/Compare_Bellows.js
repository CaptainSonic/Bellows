
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
	
	// @region namespaceDeclaration// @startlock
	var Btz3 = {};	// @buttonImage
	var Btc3 = {};	// @buttonImage
	var Btz2 = {};	// @buttonImage
	var Btc2 = {};	// @buttonImage
	var Btz1 = {};	// @buttonImage
	var Btc1 = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

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
