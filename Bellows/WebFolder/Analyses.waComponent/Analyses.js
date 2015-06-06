
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Analyses';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("cQuick").hide();
	sources.component1_soufflets.query("ID>0 order by Reference");
	
	
	// @region namespaceDeclaration// @startlock
	var btDraw = {};	// @buttonImage
	var M49 = {};	// @textField
	var M48 = {};	// @textField
	var M47 = {};	// @textField
	var M46 = {};	// @textField
	var M45 = {};	// @textField
	var M44 = {};	// @textField
	var M43 = {};	// @textField
	var M40 = {};	// @textField
	var M42 = {};	// @textField
	var M41 = {};	// @textField
	var M39 = {};	// @textField
	var M38 = {};	// @textField
	var M37 = {};	// @textField
	var M36 = {};	// @textField
	var M35 = {};	// @textField
	var M34 = {};	// @textField
	var M33 = {};	// @textField
	var M30 = {};	// @textField
	var M32 = {};	// @textField
	var M31 = {};	// @textField
	var M29 = {};	// @textField
	var M28 = {};	// @textField
	var M27 = {};	// @textField
	var M26 = {};	// @textField
	var M25 = {};	// @textField
	var M24 = {};	// @textField
	var M23 = {};	// @textField
	var M20 = {};	// @textField
	var M22 = {};	// @textField
	var M21 = {};	// @textField
	var M19 = {};	// @textField
	var M18 = {};	// @textField
	var M17 = {};	// @textField
	var M16 = {};	// @textField
	var M15 = {};	// @textField
	var M14 = {};	// @textField
	var M13 = {};	// @textField
	var M10 = {};	// @textField
	var M12 = {};	// @textField
	var M11 = {};	// @textField
	var M9 = {};	// @textField
	var M8 = {};	// @textField
	var M7 = {};	// @textField
	var M6 = {};	// @textField
	var M5 = {};	// @textField
	var M4 = {};	// @textField
	var M3 = {};	// @textField
	var M2 = {};	// @textField
	var M1 = {};	// @textField
	var M0 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	btDraw.click = function btDraw_click (event)// @startlock
	{// @endlock
		var vRefB, vValRef, vScale, vScalM, vScalm, vTm, vTM, vTol, vUnit, vColor, vRet;
		$$("cchg").show();

		for (var i = 0; i < 50; i++) {
			v = "component1_M"+i;
			$$(v).hide();
			$$(v).setBackgroundColor("#56AAFF");
			$$(v).setValue("-");
		}
		
		vTM = parseFloat($$("component1_cTM").getValue()); 
		vTm = parseFloat($$("component1_cTm").getValue()); 
		vRet = String.fromCharCode(13);
		//alert ("Max. tolérance : " + vTM + " - Min. tolérance : " + vTm);
		if (vTM >= vTm) {
			vTol = vTM;
		} else {
			vTol = vTm;
		}
		
		vScale = 1;
		if (vTol <= 1) {
			vScale = 10;
		}
		if (vTol <= 0.5) {
			vScale = 20;
		}
		if (vTol <= 0.1) {
			vScale = 100;
		}
		if (vTol <= 0.05) {
			vScale = 200;
		}
		if (vTol <= 0.01) {
			vScale = 1000;
		}
		if (vTol <= 0.005) {
			vScale = 2000;
		}
		if (vTol <= 0.001) {
			vScale = 10000;
		}
		vScaleM = (3/vScale);
		vScalem = -1*(3/vScale);
		
		vRefB = $$("component1_cbBellows").getValue(); 
		vValRef = " ";
		vUnit = " mm";
		switch ($$("component1_cbElem").getValue()) {
			case 'Ep. parois':
				vValRef = sources.component1_soufflets.Ep_Parois;
				break;
			case 'Ø Collet 1':
				vValRef = sources.component1_soufflets.Diam_Collet1;
				break;
			case 'Ø Collet 2':
				vValRef = sources.component1_soufflets.Diam_Collet2;
				break;
			case 'Ø Ext. Onde':
				vValRef = sources.component1_soufflets.Ext_Onde;
				break;
			case 'Ø Int. Onde':
				vValRef = sources.component1_soufflets.Int_Onde;
				break;
			case 'L2':
				vValRef = sources.component1_soufflets.L2;
				break;
			case 'L3':
				vValRef = sources.component1_soufflets.L3;
				break;
			case 'Raideur':
				vValRef = sources.component1_soufflets.Raideur;
				vUnit = " daN/mm";
				break;
		}
			
		$$("component1_cValRef").setValue(vValRef+vUnit);
		$$("component1_cT1p").setValue("+" + (10/vScale) + vUnit);
		$$("component1_cT2p").setValue("+" + (20/vScale) + vUnit);
		$$("component1_cT3p").setValue("+" + (30/vScale) + vUnit);
		$$("component1_cT1m").setValue("-" + (10/vScale) + vUnit);
		$$("component1_cT2m").setValue("-" + (20/vScale) + vUnit);
		$$("component1_cT3m").setValue("-" + (30/vScale) + vUnit);
		
		
		sources.component1_mesures.query("PV.Soufflet.ID = :1 order by ID desc", { onSuccess: function(event) {
			var ind, ibx, nb,v, MesCol, vInfo, vMesure, vDiff, vTop, vLeft, vSize, vRet;
			MesCol = sources.component1_mesures;
			vRet = String.fromCharCode(13);
			ind = MesCol.length;
			for (var i = 0; i < ind; i++) {
				MesCol.getElement(i, { onSuccess: function(event) {
					var elem = event.element;
					v = "component1_M"+i;
					switch ($$("component1_cbElem").getValue()) {
						case 'Ep. parois':
						vMesure = elem.Ep_Parois;
						break;
					case 'Ø Collet 1':
						vMesure = elem.Diam_Collet1;
						break;
					case 'Ø Collet 2':
						vMesure = elem.Diam_Collet2;
						break;
					case 'Ø Ext. Onde':
						vMesure = elem.Ext_Onde;
						break;
					case 'Ø Int. Onde':
						vMesure = elem.Int_Onde;
						break;
					case 'L2':
						vMesure = elem.L2;
						break;
					case 'L3':
						vMesure = elem.L3;
						break;
					case 'Raideur':
						vMesure = elem.Raideur;
						break;
					}
					vColor = "#56AAFF";
					vDiff = vMesure - vValRef;
					if (vDiff > 0) {
						vLeft = 82+(14*i);
						vSize = parseInt(8+(9*((vDiff*vScale)-1)),10);
						if (vSize > 269) {
							vSize = 269;
							vColor = "#FF0000";
						}
						vTop = 298 - vSize;
					} else {
						vTop = 299;
						vLeft = 82+(14*i);
						vSize  = parseInt(8+(9*((-vDiff*vScale)-1)),10);
						if (vSize > 269) {
							vSize = 269;
							vColor = "#FF0000";
						}
					}
					if (vSize <= 0) {
						vSize = 0;
						vColor = "#C0C0C0";
					}
					vInfo = "Informations sur la mesure réalisée " + "\n\n";
					vInfo += "N° Lancement : " + "\n";
					vInfo += " : " + "\n";
					vInfo += "Pièce : " + String(elem.Num_Piece) + "\n";
					vInfo += "Ecart constaté : " + String(Math.round(vDiff*10000)/10000) + " " + vUnit;
					$$(v).setValue(vInfo);
					$$(v).move(vLeft,vTop);
					$$(v).resize(13,vSize);
					$$(v).setBackgroundColor(vColor);
					$$(v).show();
				}});
			}
		}, params:[vRefB]});
		
		$$("cchg").hide();
		
	};// @lock

	M49.mouseover = function M49_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M49").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M49.mouseout = function M49_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M48.mouseover = function M48_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M48").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M48.mouseout = function M48_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M47.mouseover = function M47_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M47").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M47.mouseout = function M47_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M46.mouseover = function M46_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M46").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M46.mouseout = function M46_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M45.mouseover = function M45_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M45").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M45.mouseout = function M45_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M44.mouseover = function M44_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M44").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M44.mouseout = function M44_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M43.mouseover = function M43_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M43").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M43.mouseout = function M43_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M40.mouseover = function M40_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M40").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M40.mouseout = function M40_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M42.mouseover = function M42_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M42").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M42.mouseout = function M42_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M41.mouseover = function M41_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M41").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M41.mouseout = function M41_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M39.mouseover = function M39_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M39").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M39.mouseout = function M39_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M38.mouseover = function M38_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M38").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M38.mouseout = function M38_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M37.mouseover = function M37_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M37").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M37.mouseout = function M37_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M36.mouseover = function M36_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M36").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M36.mouseout = function M36_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M35.mouseover = function M35_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M35").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M35.mouseout = function M35_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M34.mouseover = function M34_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M34").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M34.mouseout = function M34_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M33.mouseover = function M33_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M33").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M33.mouseout = function M33_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M30.mouseover = function M30_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M30").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M30.mouseout = function M30_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M32.mouseover = function M32_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M32").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M32.mouseout = function M32_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M31.mouseover = function M31_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M31").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M31.mouseout = function M31_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M29.mouseover = function M29_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M29").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M29.mouseout = function M29_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M28.mouseover = function M28_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M28").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M28.mouseout = function M28_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M27.mouseover = function M27_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M27").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M27.mouseout = function M27_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M26.mouseover = function M26_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M26").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M26.mouseout = function M26_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M25.mouseover = function M25_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M25").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M25.mouseout = function M25_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M24.mouseover = function M24_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M24").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M24.mouseout = function M24_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M23.mouseover = function M23_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M23").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M23.mouseout = function M23_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M20.mouseover = function M20_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M20").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M20.mouseout = function M20_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M22.mouseover = function M22_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M22").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M22.mouseout = function M22_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M21.mouseover = function M21_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M21").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M21.mouseout = function M21_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M19.mouseover = function M19_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M19").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M19.mouseout = function M19_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M18.mouseover = function M18_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M18").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M18.mouseout = function M18_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M17.mouseover = function M17_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M17").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M17.mouseout = function M17_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M16.mouseover = function M16_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M16").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M16.mouseout = function M16_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M15.mouseover = function M15_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M15").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M15.mouseout = function M15_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M14.mouseover = function M14_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M14").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M14.mouseout = function M14_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M13.mouseover = function M13_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M13").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M13.mouseout = function M13_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M10.mouseover = function M10_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M10").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M10.mouseout = function M10_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M12.mouseover = function M12_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M12").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M12.mouseout = function M12_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M11.mouseover = function M11_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M11").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M11.mouseout = function M11_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M9.mouseover = function M9_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M9").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M9.mouseout = function M9_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M8.mouseover = function M8_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M8").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M8.mouseout = function M8_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M7.mouseover = function M7_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M7").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M7.mouseout = function M7_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M6.mouseover = function M6_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M6").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M6.mouseout = function M6_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M5.mouseover = function M5_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M5").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M5.mouseout = function M5_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M4.mouseover = function M4_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M4").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M4.mouseout = function M4_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M3.mouseout = function M3_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M3.mouseover = function M3_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M3").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M2.mouseout = function M2_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M2.mouseover = function M2_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M2").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M1.mouseout = function M1_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	M1.mouseover = function M1_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M1").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M0.mouseover = function M0_mouseover (event)// @startlock
	{// @endlock
		$$("component1_cHelp").setValue($$("component1_M0").getValue());
		$$("component1_cHelp").show();
	};// @lock

	M0.mouseout = function M0_mouseout (event)// @startlock
	{// @endlock
		$$("component1_cHelp").hide();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btDraw", "click", btDraw.click, "WAF");
	WAF.addListener(this.id + "_M49", "mouseover", M49.mouseover, "WAF");
	WAF.addListener(this.id + "_M49", "mouseout", M49.mouseout, "WAF");
	WAF.addListener(this.id + "_M48", "mouseover", M48.mouseover, "WAF");
	WAF.addListener(this.id + "_M48", "mouseout", M48.mouseout, "WAF");
	WAF.addListener(this.id + "_M47", "mouseover", M47.mouseover, "WAF");
	WAF.addListener(this.id + "_M47", "mouseout", M47.mouseout, "WAF");
	WAF.addListener(this.id + "_M46", "mouseover", M46.mouseover, "WAF");
	WAF.addListener(this.id + "_M46", "mouseout", M46.mouseout, "WAF");
	WAF.addListener(this.id + "_M45", "mouseover", M45.mouseover, "WAF");
	WAF.addListener(this.id + "_M45", "mouseout", M45.mouseout, "WAF");
	WAF.addListener(this.id + "_M44", "mouseover", M44.mouseover, "WAF");
	WAF.addListener(this.id + "_M44", "mouseout", M44.mouseout, "WAF");
	WAF.addListener(this.id + "_M43", "mouseover", M43.mouseover, "WAF");
	WAF.addListener(this.id + "_M43", "mouseout", M43.mouseout, "WAF");
	WAF.addListener(this.id + "_M40", "mouseover", M40.mouseover, "WAF");
	WAF.addListener(this.id + "_M40", "mouseout", M40.mouseout, "WAF");
	WAF.addListener(this.id + "_M42", "mouseover", M42.mouseover, "WAF");
	WAF.addListener(this.id + "_M42", "mouseout", M42.mouseout, "WAF");
	WAF.addListener(this.id + "_M41", "mouseover", M41.mouseover, "WAF");
	WAF.addListener(this.id + "_M41", "mouseout", M41.mouseout, "WAF");
	WAF.addListener(this.id + "_M39", "mouseover", M39.mouseover, "WAF");
	WAF.addListener(this.id + "_M39", "mouseout", M39.mouseout, "WAF");
	WAF.addListener(this.id + "_M38", "mouseover", M38.mouseover, "WAF");
	WAF.addListener(this.id + "_M38", "mouseout", M38.mouseout, "WAF");
	WAF.addListener(this.id + "_M37", "mouseover", M37.mouseover, "WAF");
	WAF.addListener(this.id + "_M37", "mouseout", M37.mouseout, "WAF");
	WAF.addListener(this.id + "_M36", "mouseover", M36.mouseover, "WAF");
	WAF.addListener(this.id + "_M36", "mouseout", M36.mouseout, "WAF");
	WAF.addListener(this.id + "_M35", "mouseover", M35.mouseover, "WAF");
	WAF.addListener(this.id + "_M35", "mouseout", M35.mouseout, "WAF");
	WAF.addListener(this.id + "_M34", "mouseover", M34.mouseover, "WAF");
	WAF.addListener(this.id + "_M34", "mouseout", M34.mouseout, "WAF");
	WAF.addListener(this.id + "_M33", "mouseover", M33.mouseover, "WAF");
	WAF.addListener(this.id + "_M33", "mouseout", M33.mouseout, "WAF");
	WAF.addListener(this.id + "_M30", "mouseover", M30.mouseover, "WAF");
	WAF.addListener(this.id + "_M30", "mouseout", M30.mouseout, "WAF");
	WAF.addListener(this.id + "_M32", "mouseover", M32.mouseover, "WAF");
	WAF.addListener(this.id + "_M32", "mouseout", M32.mouseout, "WAF");
	WAF.addListener(this.id + "_M31", "mouseover", M31.mouseover, "WAF");
	WAF.addListener(this.id + "_M31", "mouseout", M31.mouseout, "WAF");
	WAF.addListener(this.id + "_M29", "mouseover", M29.mouseover, "WAF");
	WAF.addListener(this.id + "_M29", "mouseout", M29.mouseout, "WAF");
	WAF.addListener(this.id + "_M28", "mouseover", M28.mouseover, "WAF");
	WAF.addListener(this.id + "_M28", "mouseout", M28.mouseout, "WAF");
	WAF.addListener(this.id + "_M27", "mouseover", M27.mouseover, "WAF");
	WAF.addListener(this.id + "_M27", "mouseout", M27.mouseout, "WAF");
	WAF.addListener(this.id + "_M26", "mouseover", M26.mouseover, "WAF");
	WAF.addListener(this.id + "_M26", "mouseout", M26.mouseout, "WAF");
	WAF.addListener(this.id + "_M25", "mouseover", M25.mouseover, "WAF");
	WAF.addListener(this.id + "_M25", "mouseout", M25.mouseout, "WAF");
	WAF.addListener(this.id + "_M24", "mouseover", M24.mouseover, "WAF");
	WAF.addListener(this.id + "_M24", "mouseout", M24.mouseout, "WAF");
	WAF.addListener(this.id + "_M23", "mouseover", M23.mouseover, "WAF");
	WAF.addListener(this.id + "_M23", "mouseout", M23.mouseout, "WAF");
	WAF.addListener(this.id + "_M20", "mouseover", M20.mouseover, "WAF");
	WAF.addListener(this.id + "_M20", "mouseout", M20.mouseout, "WAF");
	WAF.addListener(this.id + "_M22", "mouseover", M22.mouseover, "WAF");
	WAF.addListener(this.id + "_M22", "mouseout", M22.mouseout, "WAF");
	WAF.addListener(this.id + "_M21", "mouseover", M21.mouseover, "WAF");
	WAF.addListener(this.id + "_M21", "mouseout", M21.mouseout, "WAF");
	WAF.addListener(this.id + "_M19", "mouseover", M19.mouseover, "WAF");
	WAF.addListener(this.id + "_M19", "mouseout", M19.mouseout, "WAF");
	WAF.addListener(this.id + "_M18", "mouseover", M18.mouseover, "WAF");
	WAF.addListener(this.id + "_M18", "mouseout", M18.mouseout, "WAF");
	WAF.addListener(this.id + "_M17", "mouseover", M17.mouseover, "WAF");
	WAF.addListener(this.id + "_M17", "mouseout", M17.mouseout, "WAF");
	WAF.addListener(this.id + "_M16", "mouseover", M16.mouseover, "WAF");
	WAF.addListener(this.id + "_M16", "mouseout", M16.mouseout, "WAF");
	WAF.addListener(this.id + "_M15", "mouseover", M15.mouseover, "WAF");
	WAF.addListener(this.id + "_M15", "mouseout", M15.mouseout, "WAF");
	WAF.addListener(this.id + "_M14", "mouseover", M14.mouseover, "WAF");
	WAF.addListener(this.id + "_M14", "mouseout", M14.mouseout, "WAF");
	WAF.addListener(this.id + "_M13", "mouseover", M13.mouseover, "WAF");
	WAF.addListener(this.id + "_M13", "mouseout", M13.mouseout, "WAF");
	WAF.addListener(this.id + "_M10", "mouseover", M10.mouseover, "WAF");
	WAF.addListener(this.id + "_M10", "mouseout", M10.mouseout, "WAF");
	WAF.addListener(this.id + "_M12", "mouseover", M12.mouseover, "WAF");
	WAF.addListener(this.id + "_M12", "mouseout", M12.mouseout, "WAF");
	WAF.addListener(this.id + "_M11", "mouseover", M11.mouseover, "WAF");
	WAF.addListener(this.id + "_M11", "mouseout", M11.mouseout, "WAF");
	WAF.addListener(this.id + "_M9", "mouseover", M9.mouseover, "WAF");
	WAF.addListener(this.id + "_M8", "mouseover", M8.mouseover, "WAF");
	WAF.addListener(this.id + "_M7", "mouseover", M7.mouseover, "WAF");
	WAF.addListener(this.id + "_M6", "mouseover", M6.mouseover, "WAF");
	WAF.addListener(this.id + "_M5", "mouseover", M5.mouseover, "WAF");
	WAF.addListener(this.id + "_M4", "mouseover", M4.mouseover, "WAF");
	WAF.addListener(this.id + "_M0", "mouseover", M0.mouseover, "WAF");
	WAF.addListener(this.id + "_M9", "mouseout", M9.mouseout, "WAF");
	WAF.addListener(this.id + "_M8", "mouseout", M8.mouseout, "WAF");
	WAF.addListener(this.id + "_M7", "mouseout", M7.mouseout, "WAF");
	WAF.addListener(this.id + "_M6", "mouseout", M6.mouseout, "WAF");
	WAF.addListener(this.id + "_M5", "mouseout", M5.mouseout, "WAF");
	WAF.addListener(this.id + "_M4", "mouseout", M4.mouseout, "WAF");
	WAF.addListener(this.id + "_M3", "mouseout", M3.mouseout, "WAF");
	WAF.addListener(this.id + "_M2", "mouseout", M2.mouseout, "WAF");
	WAF.addListener(this.id + "_M1", "mouseout", M1.mouseout, "WAF");
	WAF.addListener(this.id + "_M3", "mouseover", M3.mouseover, "WAF");
	WAF.addListener(this.id + "_M2", "mouseover", M2.mouseover, "WAF");
	WAF.addListener(this.id + "_M1", "mouseover", M1.mouseover, "WAF");
	WAF.addListener(this.id + "_M0", "mouseout", M0.mouseout, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
