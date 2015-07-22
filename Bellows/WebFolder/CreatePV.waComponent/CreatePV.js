
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'CreatePV';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	$$("cQuick").hide();
	$$("component1_ListPV").setRowHeight(20);
	$$("component1_ListMet").setRowHeight(22);
	sources.component1_soufflets.query("Actif is true order by Reference");
	$$('component1_cAction').setValue("");
	$$('component1_cMet').setValue("");
	$$('component1_bSave').hide();
	$$('component1_btUndo').hide();
	$$('component1_btUpd').hide();
	$$('component1_btNew').show();
	
	var vUser;
	
	vUser = WAF.directory.currentUser().userName;
	sources.component1_userParam.query("Utilisateur.Login = :1", vUser);
	sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
			var vRole;
			elem = sources.component1_utilisateurs;
			if (elem.length > 0) {
				$$("component1_cRole").setValue(elem.Fonction);
				if (elem.Fonction === "Administrateur") {
					sources.component1_pVProduction.query("ID > 0 order by Date_Creation desc");
				} else {
					sources.component1_pVProduction.query("UID_Creation = :1 order by Date_Creation desc", elem.Nom_Prenom);
				}
			} else {
				$$("component1_cRole").setValue("-");
			};		
	}, params:[vUser] });

	// @region namespaceDeclaration// @startlock
	var Raid5 = {};	// @textField
	var Raid4 = {};	// @textField
	var Raid3 = {};	// @textField
	var Raid2 = {};	// @textField
	var Raid1 = {};	// @textField
	var Lc25 = {};	// @textField
	var Lc24 = {};	// @textField
	var Lc23 = {};	// @textField
	var Lc22 = {};	// @textField
	var Lc21 = {};	// @textField
	var Dc25 = {};	// @textField
	var Dc24 = {};	// @textField
	var Dc23 = {};	// @textField
	var Dc22 = {};	// @textField
	var Dc21 = {};	// @textField
	var Lc15 = {};	// @textField
	var Lc14 = {};	// @textField
	var Lc13 = {};	// @textField
	var Lc12 = {};	// @textField
	var Lc11 = {};	// @textField
	var Dc15 = {};	// @textField
	var Dc14 = {};	// @textField
	var Dc13 = {};	// @textField
	var Dc12 = {};	// @textField
	var Dc11 = {};	// @textField
	var L25 = {};	// @textField
	var L24 = {};	// @textField
	var L23 = {};	// @textField
	var L22 = {};	// @textField
	var L21 = {};	// @textField
	var Nb5 = {};	// @textField
	var Nb4 = {};	// @textField
	var Nb3 = {};	// @textField
	var Nb2 = {};	// @textField
	var Nb1 = {};	// @textField
	var Ext5 = {};	// @textField
	var Int5 = {};	// @textField
	var n5 = {};	// @textField
	var Ext4 = {};	// @textField
	var Int4 = {};	// @textField
	var n4 = {};	// @textField
	var Ext3 = {};	// @textField
	var Int3 = {};	// @textField
	var n3 = {};	// @textField
	var Ext2 = {};	// @textField
	var Int2 = {};	// @textField
	var n2 = {};	// @textField
	var Ext1 = {};	// @textField
	var Int1 = {};	// @textField
	var n1 = {};	// @textField
	var ExtOnde = {};	// @textField
	var IntOnde = {};	// @textField
	var ListPV = {};	// @dataGrid
	var btUpd = {};	// @button
	var RefBel = {};	// @textField
	var btUndo = {};	// @button
	var btNew = {};	// @button
	var cbBellows = {};	// @combobox
	var bSave = {};	// @button
	var cNumLanc = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	Raid5.blur = function Raid5_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Raid5').setValue(vNb);
	};// @lock

	Raid4.blur = function Raid4_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Raid4').setValue(vNb);
	};// @lock

	Raid3.blur = function Raid3_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Raid3').setValue(vNb);
	};// @lock

	Raid2.blur = function Raid2_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Raid2').setValue(vNb);
	};// @lock

	Raid1.blur = function Raid1_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Raid1').setValue(vNb);
	};// @lock

	Lc25.blur = function Lc25_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc25').setValue(vNb);
	};// @lock

	Lc24.blur = function Lc24_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc24').setValue(vNb);
	};// @lock

	Lc23.blur = function Lc23_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc23').setValue(vNb);
	};// @lock

	Lc22.blur = function Lc22_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc22').setValue(vNb);
	};// @lock

	Lc21.blur = function Lc21_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc21').setValue(vNb);
	};// @lock

	Dc25.blur = function Dc25_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc25').setValue(vNb);
	};// @lock

	Dc24.blur = function Dc24_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc24').setValue(vNb);
	};// @lock

	Dc23.blur = function Dc23_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc23').setValue(vNb);
	};// @lock

	Dc22.blur = function Dc22_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc22').setValue(vNb);
	};// @lock

	Dc21.blur = function Dc21_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc21').setValue(vNb);
	};// @lock

	Lc15.blur = function Lc15_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc15').setValue(vNb);
	};// @lock

	Lc14.blur = function Lc14_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc14').setValue(vNb);
	};// @lock

	Lc13.blur = function Lc13_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc13').setValue(vNb);
	};// @lock

	Lc12.blur = function Lc12_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc12').setValue(vNb);
	};// @lock

	Lc11.blur = function Lc11_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Lc11').setValue(vNb);
	};// @lock

	Dc15.blur = function Dc15_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc15').setValue(vNb);
	};// @lock

	Dc14.blur = function Dc14_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc14').setValue(vNb);
	};// @lock

	Dc13.blur = function Dc13_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc13').setValue(vNb);
	};// @lock

	Dc12.blur = function Dc12_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc12').setValue(vNb);
	};// @lock

	Dc11.blur = function Dc11_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseFloat(vNb);
		$$('component1_Dc11').setValue(vNb);
	};// @lock

	L25.blur = function L25_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_L25').setValue(vNb);
	};// @lock

	L24.blur = function L24_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_L24').setValue(vNb);
	};// @lock

	L23.blur = function L23_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_L23').setValue(vNb);
	};// @lock

	L22.blur = function L22_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_L22').setValue(vNb);
	};// @lock

	L21.blur = function L21_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_L21').setValue(vNb);
	};// @lock

	Nb5.blur = function Nb5_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_Nb5').setValue(vNb);
	};// @lock

	Nb4.blur = function Nb4_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_Nb4').setValue(vNb);
	};// @lock

	Nb3.blur = function Nb3_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_Nb3').setValue(vNb);
	};// @lock

	Nb2.blur = function Nb2_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_Nb2').setValue(vNb);
	};// @lock

	Nb1.blur = function Nb1_blur (event)// @startlock
	{// @endlock
		var vNb;
		vNb = event.currentTarget.value;
		vNb = vNb.replace(",",".");
		vNb = parseInt(vNb,10);
		$$('component1_Nb1').setValue(vNb);
		
	};// @lock

	Ext5.blur = function Ext5_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vExtOnde = event.currentTarget.value;
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = $$('component1_Int5').getValue();
		vIntOnde = vIntOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int5').setValue(vIntOnde);
		$$('component1_Ext5').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat(((vExtOnde - vIntOnde)/2),10);
			//alert("Ext " + vExtOnde + " - Int " + vIntOnde + " - Haut " + vHautOnde);
			$$('component1_Haut5').setValue(vHautOnde);
		} else {
			$$('component1_Haut5').setValue("");
		}
	};// @lock

	Int5.blur = function Int5_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_Ext5').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int5').setValue(vIntOnde);
		$$('component1_Ext5').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_Haut5').setValue(vHautOnde);
		} else {
			$$('component1_Haut5').setValue("");
		}
	};// @lock

	n5.blur = function n5_blur (event)// @startlock
	{// @endlock
		var vNum;
		vNum = event.currentTarget.value;
		if ((vNum.length > 0) && ($$('component1_mes5').getValue() === "0Vide")){
			$$('component1_mes5').setValue("0A créer");
		}
		if ((vNum.length === 0) && ($$('component1_mes5').getValue() === "0A créer")){
			$$('component1_mes5').setValue("0Vide");
		}
	};// @lock

	Ext4.blur = function Ext4_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vExtOnde = event.currentTarget.value;
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = $$('component1_Int4').getValue();
		vIntOnde = vIntOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int4').setValue(vIntOnde);
		$$('component1_Ext4').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat(((vExtOnde - vIntOnde)/2),10);
			//alert("Ext " + vExtOnde + " - Int " + vIntOnde + " - Haut " + vHautOnde);
			$$('component1_Haut4').setValue(vHautOnde);
		} else {
			$$('component1_Haut4').setValue("");
		}
	};// @lock

	Int4.blur = function Int4_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_Ext4').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int4').setValue(vIntOnde);
		$$('component1_Ext4').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_Haut4').setValue(vHautOnde);
		} else {
			$$('component1_Haut4').setValue("");
		}
	};// @lock

	n4.blur = function n4_blur (event)// @startlock
	{// @endlock
		var vNum;
		vNum = event.currentTarget.value;
		if ((vNum.length > 0) && ($$('component1_mes4').getValue() === "0Vide")){
			$$('component1_mes4').setValue("0A créer");
		}
		if ((vNum.length === 0) && ($$('component1_mes4').getValue() === "0A créer")){
			$$('component1_mes4').setValue("0Vide");
		}
	};// @lock

	Ext3.blur = function Ext3_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vExtOnde = event.currentTarget.value;
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = $$('component1_Int3').getValue();
		vIntOnde = vIntOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int3').setValue(vIntOnde);
		$$('component1_Ext3').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat(((vExtOnde - vIntOnde)/2),10);
			//alert("Ext " + vExtOnde + " - Int " + vIntOnde + " - Haut " + vHautOnde);
			$$('component1_Haut3').setValue(vHautOnde);
		} else {
			$$('component1_Haut3').setValue("");
		}
	};// @lock

	Int3.blur = function Int3_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_Ext3').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int3').setValue(vIntOnde);
		$$('component1_Ext3').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_Haut3').setValue(vHautOnde);
		} else {
			$$('component1_Haut3').setValue("");
		}
	};// @lock

	n3.blur = function n3_blur (event)// @startlock
	{// @endlock
		var vNum;
		vNum = event.currentTarget.value;
		if ((vNum.length > 0) && ($$('component1_mes3').getValue() === "0Vide")){
			$$('component1_mes3').setValue("0A créer");
		}
		if ((vNum.length === 0) && ($$('component1_mes3').getValue() === "0A créer")){
			$$('component1_mes3').setValue("0Vide");
		}
	};// @lock

	Ext2.blur = function Ext2_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vExtOnde = event.currentTarget.value;
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = $$('component1_Int2').getValue();
		vIntOnde = vIntOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int2').setValue(vIntOnde);
		$$('component1_Ext2').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat(((vExtOnde - vIntOnde)/2),10);
			//alert("Ext " + vExtOnde + " - Int " + vIntOnde + " - Haut " + vHautOnde);
			$$('component1_Haut2').setValue(vHautOnde);
		} else {
			$$('component1_Haut2').setValue("");
		}
	};// @lock

	Int2.blur = function Int2_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_Ext2').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int2').setValue(vIntOnde);
		$$('component1_Ext2').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_Haut2').setValue(vHautOnde);
		} else {
			$$('component1_Haut2').setValue("");
		}
	};// @lock

	n2.blur = function n2_blur (event)// @startlock
	{// @endlock
		var vNum;
		vNum = event.currentTarget.value;
		if ((vNum.length > 0) && ($$('component1_mes2').getValue() === "0Vide")){
			$$('component1_mes2').setValue("0A créer");
		}
		if ((vNum.length === 0) && ($$('component1_mes2').getValue() === "0A créer")){
			$$('component1_mes2').setValue("0Vide");
		}
	};// @lock

	Ext1.blur = function Ext1_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vExtOnde = event.currentTarget.value;
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = $$('component1_Int1').getValue();
		vIntOnde = vIntOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int1').setValue(vIntOnde);
		$$('component1_Ext1').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_Haut1').setValue(vHautOnde);
		} else {
			$$('component1_Haut1').setValue("");
		}
	};// @lock

	Int1.blur = function Int1_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_Ext1').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		$$('component1_Int1').setValue(vIntOnde);
		$$('component1_Ext1').setValue(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_Haut1').setValue(vHautOnde);
		} else {
			$$('component1_Haut1').setValue("");
		}
	};// @lock

	n1.blur = function n1_blur (event)// @startlock
	{// @endlock
		var vNum;
		vNum = event.currentTarget.value;
		if ((vNum.length > 0) && ($$('component1_mes1').getValue() === "0Vide")){
			$$('component1_mes1').setValue("0A créer");
		}
		if ((vNum.length === 0) && ($$('component1_mes1').getValue() === "0A créer")){
			$$('component1_mes1').setValue("0Vide");
		}
	};// @lock

	ExtOnde.blur = function ExtOnde_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vExtOnde = event.currentTarget.value;
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = $$('component1_IntOnde').getValue();
		vIntOnde = vIntOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat(((vExtOnde - vIntOnde)/2),10);
			//alert("Ext " + vExtOnde + " - Int " + vIntOnde + " - Haut " + vHautOnde);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	IntOnde.blur = function IntOnde_blur (event)// @startlock
	{// @endlock
		var vIntOnde, vExtOnde, vHautOnde;
		
		vIntOnde = event.currentTarget.value;
		vIntOnde = vIntOnde.replace(",",".");
		vExtOnde = $$('component1_ExtOnde').getValue();
		vExtOnde = vExtOnde.replace(",",".");
		vIntOnde = parseFloat(vIntOnde);
		vExtOnde = parseFloat(vExtOnde);
		if ((vIntOnde > 0) && (vExtOnde > 0)) {
			vHautOnde = parseFloat((vExtOnde - vIntOnde)/2);
			$$('component1_HautOnde').setValue(vHautOnde);
		} else {
			$$('component1_HautOnde').setValue("");
		}
	};// @lock

	ListPV.onRowClick = function ListPV_onRowClick (event)// @startlock
	{// @endlock

		var vbNam, NbMet, vAction, vMet, v, vPVID, ibx;
		
		vbNam = $$('component1_RefBel').getValue();
		sources.component1_ficheMethode.query("Soufflet.Reference=:1", vbNam);
		sources.component1_soufflets.query("Reference=:1", vbNam);
		
		for (var i = 1; i < 6; i++) {
			v = "component1_n"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Int"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Ext"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Haut"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Nb"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_L2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Dc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Lc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Dc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Lc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Raid"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_mes"+i;
			$$(v).setValue("0Vide");
			$$(v).setReadOnly(false);
		}
		
		vPVID = sources.component1_pVProduction.ID;
		sources.component1_mesures.query("PV.ID = :1 order by ID", { onSuccess: function(event) {
			var ind, nb,v, MesCol, v ;
			MesCol = sources.component1_mesures;
			ind = MesCol.length;
			ibx = 1;
			for (var i = 0; i < ind; i++) {
				MesCol.getElement(i, { onSuccess: function(event) {
					var elem = event.element;
					if (ibx < 6) {
						v = "component1_n"+ibx;
						$$(v).setValue(elem.Num_Piece);
						$$(v).setReadOnly(true);
						v = "component1_Int"+ibx;
						$$(v).setValue(elem.Int_Onde);
						$$(v).setReadOnly(true);
						v = "component1_Ext"+ibx;
						$$(v).setValue(elem.Ext_Onde);
						$$(v).setReadOnly(true);
						v = "component1_Haut"+ibx;
						$$(v).setValue(elem.Haut_Onde);
						$$(v).setReadOnly(true);
						v = "component1_Nb"+ibx;
						$$(v).setValue(elem.Nb_Ondes);
						$$(v).setReadOnly(true);
						v = "component1_L2"+ibx;
						$$(v).setValue(elem.L2);
						$$(v).setReadOnly(true);
						v = "component1_Dc1"+ibx;
						$$(v).setValue(elem.Diam_Collet1);
						$$(v).setReadOnly(true);
						v = "component1_Lc1"+ibx;
						$$(v).setValue(elem.Long_Collet1);
						$$(v).setReadOnly(true);
						v = "component1_Dc2"+ibx;
						$$(v).setValue(elem.Diam_Collet2);
						$$(v).setReadOnly(true);
						v = "component1_Lc2"+ibx;
						$$(v).setValue(elem.Long_Collet2);
						$$(v).setReadOnly(true);
						v = "component1_Raid"+ibx;
						$$(v).setValue(elem.Raideur);
						$$(v).setReadOnly(true);
						v = "component1_mes"+ibx;
						$$(v).setValue(elem.ID);
						ibx += 1;
					}
				}});
			}
		}, params:[vPVID]});
		
		
		$$('component1_btUpd').show();
	};// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		var v;
		
		$$('component1_cAction').setValue("Modifier");
		$$('component1_cMet').setValue("?");
		$$('component1_bSave').show();
		$$('component1_bSave').enable();
		$$('component1_btUndo').show();
		$$('component1_btNew').hide();
		$$('component1_btUpd').hide();
		$$('component1_cbBellows').hide();
		$$('component1_RefBel').show();
		$$('component1_ListPV').hide();
		$$('component1_IntOnde').setReadOnly(false);
		$$('component1_mIntOnde').setReadOnly(false);
		$$('component1_MIntOnde').setReadOnly(false);
		$$('component1_ExtOnde').setReadOnly(false);
		$$('component1_mExtOnde').setReadOnly(false);
		$$('component1_MExtOnde').setReadOnly(false);
		$$('component1_HautOnde').setReadOnly(true);
		$$('component1_mHautOnde').setReadOnly(false);
		$$('component1_MHautOnde').setReadOnly(false);
		$$('component1_nbOnde').setReadOnly(false);
		$$('component1_L2').setReadOnly(false);
		$$('component1_mL2').setReadOnly(false);
		$$('component1_ML2').setReadOnly(false);
		$$('component1_DiaCol1').setReadOnly(false);
		$$('component1_mDiaCol1').setReadOnly(false);
		$$('component1_MDiaCol1').setReadOnly(false);
		$$('component1_LongCol1').setReadOnly(false);
		$$('component1_mLongCol1').setReadOnly(false);
		$$('component1_MLongCol1').setReadOnly(false);
		$$('component1_DiaCol2').setReadOnly(false);
		$$('component1_mDiaCol2').setReadOnly(false);
		$$('component1_MDiaCol2').setReadOnly(false);
		$$('component1_LongCol2').setReadOnly(false);
		$$('component1_mLongCol2').setReadOnly(false);
		$$('component1_MLongCol2').setReadOnly(false);
		$$('component1_Raideur').setReadOnly(false);
		$$('component1_cbBellows').setReadOnly(false);
		$$('component1_cNumLanc').setReadOnly(true);
		
		for (var i = 1; i < 6; i++) {
			v = "component1_mes"+i;
			if ($$(v).getValue() !== "0Vide") {
				v = "component1_n"+i;
				$$(v).setReadOnly(true);
			}
			v = "component1_Int"+i;
			$$(v).setReadOnly(false);
			v = "component1_Ext"+i;
			$$(v).setReadOnly(false);
			v = "component1_Haut"+i;
			$$(v).setReadOnly(true);
			v = "component1_Nb"+i;
			$$(v).setReadOnly(false);
			v = "component1_L2"+i;
			$$(v).setReadOnly(false);
			v = "component1_Dc1"+i;
			$$(v).setReadOnly(false);
			v = "component1_Lc1"+i;
			$$(v).setReadOnly(false);
			v = "component1_Dc2"+i;
			$$(v).setReadOnly(false);
			v = "component1_Lc2"+i;
			$$(v).setReadOnly(false);
			v = "component1_Raid"+i;
			$$(v).setReadOnly(false);
			
		}
		
				
	};// @lock

	RefBel.change = function RefBel_change (event)// @startlock
	{// @endlock
		var CNum, CCom, cQua;
		CNum = $$('component1_cNumLanc').getValue();
		
		if ((CNum.length > 2)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	RefBel.blur = function RefBel_blur (event)// @startlock
	{// @endlock
		var CodeEntry, NbSamCode, vAction;
		
		CodeEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.PVProduction.query("Num_Lancement=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamCode = myCollection.length;
					if (NbSamCode > 0) {
						alert("Ce numéro de lancement (" + CodeEntry +") est déjà utilisé. Merci de saisir un numéro de lancement différent.");	
						$$('component1_cNumLanc').setValue(null);
						$$('component1_bSave').disable();
						}
					}, params:[CodeEntry] 
				});
		}
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		var v;
		
		for (var i = 1; i < 6; i++) {
			v = "component1_n"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Int"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Ext"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Haut"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Nb"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_L2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Dc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Lc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Dc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Lc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_Raid"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(false);
			v = "component1_mes"+i;
			$$(v).setValue("0Vide");
			$$(v).setReadOnly(false);
		}
		
		sources.component1_soufflets.query("Actif is true order by Reference");
		$$('component1').loadComponent("/CreatePV.waComponent");
				
	};// @lock

	btNew.click = function btNew_click (event)// @startlock
	{// @endlock
		var v;
		
		sources.component1_pVProduction.addNewElement();
		$$('component1_cAction').setValue("Créer");
		$$('component1_cMet').setValue("?");
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_btUndo').show();
		$$('component1_btNew').hide();
		$$('component1_btUpd').hide();
		$$('component1_cbBellows').show();
		$$('component1_RefBel').hide();
		$$('component1_ListPV').hide();
		$$('component1_IntOnde').setReadOnly(false);
		$$('component1_mIntOnde').setReadOnly(false);
		$$('component1_MIntOnde').setReadOnly(false);
		$$('component1_ExtOnde').setReadOnly(false);
		$$('component1_mExtOnde').setReadOnly(false);
		$$('component1_MExtOnde').setReadOnly(false);
		$$('component1_HautOnde').setReadOnly(true);
		$$('component1_mHautOnde').setReadOnly(false);
		$$('component1_MHautOnde').setReadOnly(false);
		$$('component1_nbOnde').setReadOnly(false);
		$$('component1_L2').setReadOnly(false);
		$$('component1_mL2').setReadOnly(false);
		$$('component1_ML2').setReadOnly(false);
		$$('component1_DiaCol1').setReadOnly(false);
		$$('component1_mDiaCol1').setReadOnly(false);
		$$('component1_MDiaCol1').setReadOnly(false);
		$$('component1_LongCol1').setReadOnly(false);
		$$('component1_mLongCol1').setReadOnly(false);
		$$('component1_MLongCol1').setReadOnly(false);
		$$('component1_DiaCol2').setReadOnly(false);
		$$('component1_mDiaCol2').setReadOnly(false);
		$$('component1_MDiaCol2').setReadOnly(false);
		$$('component1_LongCol2').setReadOnly(false);
		$$('component1_mLongCol2').setReadOnly(false);
		$$('component1_MLongCol2').setReadOnly(false);
		$$('component1_Raideur').setReadOnly(false);
		$$('component1_cbBellows').setReadOnly(false);
		$$('component1_cNumLanc').setReadOnly(false);
		
		for (var i = 1; i < 6; i++) {
			v = "component1_n"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Int"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Ext"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Haut"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Nb"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_L2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Dc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Lc1"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Dc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Lc2"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_Raid"+i;
			$$(v).setValue("");
			$$(v).setReadOnly(true);
			v = "component1_mes"+i;
			$$(v).setValue("0Vide");
			$$(v).setReadOnly(true);
		}
						
	};// @lock

	cbBellows.change = function cbBellows_change (event)// @startlock
	{// @endlock
	var vbID, NbMet, vAction, vMet;
		
		vbID = $$('component1_cbBellows').getValue();
		vAction = $$('component1_cAction').getValue();
		vMet = $$('component1_cMet').getValue();
		if (vAction === "Créer") {
			ds.FicheMethode.query("Soufflet.ID=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbMet = myCollection.length;
					//alert("Recherche une fiche méthode pour le soufflet " + vbID + ". On en trouve " + NbMet);
					if (vMet === "?") {
						if (NbMet === 0) {
							sources.component1_ficheMethode.addNewElement();
							//alert("Il n'y a pas de valeurs de tolérance existantes pour ce soufflet. Merci de les renseigner si vous les avez.");	
							$$('component1_cMet').setValue("Nouveau");
							} else {
							sources.component1_ficheMethode.query("Soufflet.ID=:1", vbID);
							$$('component1_cMet').setValue("Trouvé");
							}
						}
					}, params:[vbID] 
				});
		}
	};// @lock

	cbBellows.blur = function cbBellows_blur (event)// @startlock
	{// @endlock
		
	};// @lock

	cbBellows.click = function cbBellows_click (event)// @startlock
	{// @endlock
		sources.component1_ficheMethode.query("Soufflet.ID=0");
		$$('component1_cMet').setValue("?");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var v, vNb, vID, vEnCreation;
		
		sources.component1_pVProduction.Soufflet.set(sources.component1_soufflets);
		sources.component1_pVProduction.save();
		sources.component1_ficheMethode.Soufflet.set(sources.component1_soufflets);
		sources.component1_ficheMethode.save();
		$$('component1_cbBellows').hide();
		$$('component1_RefBel').show();
		$$('component1_ListPV').show();
		$$('component1_IntOnde').setReadOnly(true);
		$$('component1_mIntOnde').setReadOnly(true);
		$$('component1_MIntOnde').setReadOnly(true);
		$$('component1_ExtOnde').setReadOnly(true);
		$$('component1_mExtOnde').setReadOnly(true);
		$$('component1_MExtOnde').setReadOnly(true);
		$$('component1_HautOnde').setReadOnly(true);
		$$('component1_mHautOnde').setReadOnly(true);
		$$('component1_MHautOnde').setReadOnly(true);
		$$('component1_nbOnde').setReadOnly(true);
		$$('component1_L2').setReadOnly(true);
		$$('component1_mL2').setReadOnly(true);
		$$('component1_ML2').setReadOnly(true);
		$$('component1_DiaCol1').setReadOnly(true);
		$$('component1_mDiaCol1').setReadOnly(true);
		$$('component1_MDiaCol1').setReadOnly(true);
		$$('component1_LongCol1').setReadOnly(true);
		$$('component1_mLongCol1').setReadOnly(true);
		$$('component1_MLongCol1').setReadOnly(true);
		$$('component1_DiaCol2').setReadOnly(true);
		$$('component1_mDiaCol2').setReadOnly(true);
		$$('component1_MDiaCol2').setReadOnly(true);
		$$('component1_LongCol2').setReadOnly(true);
		$$('component1_mLongCol2').setReadOnly(true);
		$$('component1_MLongCol2').setReadOnly(true);
		$$('component1_Raideur').setReadOnly(true);
		$$('component1_cNumLanc').setReadOnly(true);
		$$('component1_bSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_btUpd').hide();
		$$('component1_btNew').show();
		
		
		for (var i = 1; i < 6; i++) {
			v = "component1_mes"+i;
			
			if ($$(v).getValue() === "0A créer") {
				$$(v).setValue("0Créé");
				vEnCreation = 1;
				sources.component1_mesures.addNewElement();
				sources.component1_mesures.PV.set(sources.component1_pVProduction);
				v = "component1_n"+i;
				sources.component1_mesures.Num_Piece = $$(v).getValue();
				v = "component1_Int"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Int_Onde = vNb;
				v = "component1_Ext"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Ext_Onde = vNb;
				v = "component1_Haut"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Haut_Onde = vNb;
				v = "component1_Nb"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseInt(vNb,10);
				sources.component1_mesures.Nb_Ondes = vNb;
				v = "component1_L2"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseInt(vNb,10);
				sources.component1_mesures.L2 = vNb;
				v = "component1_Dc1"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Diam_Collet1 = vNb;
				v = "component1_Lc1"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Long_Collet1 = vNb;
				v = "component1_Dc2"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Diam_Collet2 = vNb;
				v = "component1_Lc2"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Long_Collet2 = vNb;
				v = "component1_Raid"+i;
				vNb = $$(v).getValue();
				vNb = vNb.replace("NaN","0");
		        vNb = parseFloat(vNb);
				sources.component1_mesures.Raideur = vNb;
				sources.component1_mesures.save();
			}
			vID = $$(v).getValue();
			vID = parseInt(vID,10);
			if (vID > 0) {
				sources.component1_mesures.query("ID=:1", { onSuccess:function(event) {
					    var v, iBox, vNb;
					    iBox = event.userData.boxn;
						v = "component1_n"+iBox;
						sources.component1_mesures.Num_Piece = $$(v).getValue();
						v = "component1_Int"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Int_Onde = vNb;
						v = "component1_Ext"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Ext_Onde = vNb;
						v = "component1_Haut"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Haut_Onde = vNb;
						v = "component1_Nb"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseInt(vNb,10);
						sources.component1_mesures.Nb_Ondes = vNb;
						v = "component1_L2"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseInt(vNb,10);
						sources.component1_mesures.L2 = vNb;
						v = "component1_Dc1"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Diam_Collet1 = vNb;
						v = "component1_Lc1"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Long_Collet1 = vNb;
						v = "component1_Dc2"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Diam_Collet2 = vNb;
						v = "component1_Lc2"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Long_Collet2 = vNb;
						v = "component1_Raid"+iBox;
						vNb = $$(v).getValue();
						vNb = vNb.replace("NaN","0");
		        		vNb = parseFloat(vNb);
						sources.component1_mesures.Raideur = vNb;
						sources.component1_mesures.save();
					}, params:[vID], userData: {boxn:i}});

			}
			
			v = "component1_n"+i;
			$$(v).setReadOnly(true);
			v = "component1_Int"+i;
			$$(v).setReadOnly(true);
			v = "component1_Ext"+i;
			$$(v).setReadOnly(true);
			v = "component1_Haut"+i;
			$$(v).setReadOnly(true);
			v = "component1_Nb"+i;
			$$(v).setReadOnly(true);
			v = "component1_L2"+i;
			$$(v).setReadOnly(true);
			v = "component1_Dc1"+i;
			$$(v).setReadOnly(true);
			v = "component1_Lc1"+i;
			$$(v).setReadOnly(true);
			v = "component1_Dc2"+i;
			$$(v).setReadOnly(true);
			v = "component1_Lc2"+i;
			$$(v).setReadOnly(true);
			v = "component1_Raid"+i;
			$$(v).setReadOnly(true);
			
		}
						
	};// @lock

	cNumLanc.change = function cNumLanc_change (event)// @startlock
	{// @endlock
		var CNum, CCom, cQua;
		CNum = $$('component1_cNumLanc').getValue();
		
		if ((CNum.length > 2)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cNumLanc.blur = function cNumLanc_blur (event)// @startlock
	{// @endlock
		var CodeEntry, NbSamCode, vAction;
		
		CodeEntry = event.currentTarget.value;
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			ds.PVProduction.query("Num_Lancement=:1", { 
				onSuccess:function(event) {
					var myCollection = event.entityCollection;
					NbSamCode = myCollection.length;
					if (NbSamCode > 0) {
						alert("Ce numéro de lancement (" + CodeEntry +") est déjà utilisé. Merci de saisir un numéro de lancement différent.");	
						$$('component1_cNumLanc').setValue(null);
						$$('component1_bSave').disable();
						}
					}, params:[CodeEntry] 
				});
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_Raid5", "blur", Raid5.blur, "WAF");
	WAF.addListener(this.id + "_Raid4", "blur", Raid4.blur, "WAF");
	WAF.addListener(this.id + "_Raid3", "blur", Raid3.blur, "WAF");
	WAF.addListener(this.id + "_Raid2", "blur", Raid2.blur, "WAF");
	WAF.addListener(this.id + "_Raid1", "blur", Raid1.blur, "WAF");
	WAF.addListener(this.id + "_Lc25", "blur", Lc25.blur, "WAF");
	WAF.addListener(this.id + "_Lc24", "blur", Lc24.blur, "WAF");
	WAF.addListener(this.id + "_Lc23", "blur", Lc23.blur, "WAF");
	WAF.addListener(this.id + "_Lc22", "blur", Lc22.blur, "WAF");
	WAF.addListener(this.id + "_Lc21", "blur", Lc21.blur, "WAF");
	WAF.addListener(this.id + "_Dc25", "blur", Dc25.blur, "WAF");
	WAF.addListener(this.id + "_Dc24", "blur", Dc24.blur, "WAF");
	WAF.addListener(this.id + "_Dc23", "blur", Dc23.blur, "WAF");
	WAF.addListener(this.id + "_Dc22", "blur", Dc22.blur, "WAF");
	WAF.addListener(this.id + "_Dc21", "blur", Dc21.blur, "WAF");
	WAF.addListener(this.id + "_Lc15", "blur", Lc15.blur, "WAF");
	WAF.addListener(this.id + "_Lc14", "blur", Lc14.blur, "WAF");
	WAF.addListener(this.id + "_Lc13", "blur", Lc13.blur, "WAF");
	WAF.addListener(this.id + "_Lc12", "blur", Lc12.blur, "WAF");
	WAF.addListener(this.id + "_Lc11", "blur", Lc11.blur, "WAF");
	WAF.addListener(this.id + "_Dc15", "blur", Dc15.blur, "WAF");
	WAF.addListener(this.id + "_Dc14", "blur", Dc14.blur, "WAF");
	WAF.addListener(this.id + "_Dc13", "blur", Dc13.blur, "WAF");
	WAF.addListener(this.id + "_Dc12", "blur", Dc12.blur, "WAF");
	WAF.addListener(this.id + "_Dc11", "blur", Dc11.blur, "WAF");
	WAF.addListener(this.id + "_L25", "blur", L25.blur, "WAF");
	WAF.addListener(this.id + "_L24", "blur", L24.blur, "WAF");
	WAF.addListener(this.id + "_L23", "blur", L23.blur, "WAF");
	WAF.addListener(this.id + "_L22", "blur", L22.blur, "WAF");
	WAF.addListener(this.id + "_L21", "blur", L21.blur, "WAF");
	WAF.addListener(this.id + "_Nb5", "blur", Nb5.blur, "WAF");
	WAF.addListener(this.id + "_Nb4", "blur", Nb4.blur, "WAF");
	WAF.addListener(this.id + "_Nb3", "blur", Nb3.blur, "WAF");
	WAF.addListener(this.id + "_Nb2", "blur", Nb2.blur, "WAF");
	WAF.addListener(this.id + "_Nb1", "blur", Nb1.blur, "WAF");
	WAF.addListener(this.id + "_Ext5", "blur", Ext5.blur, "WAF");
	WAF.addListener(this.id + "_Int5", "blur", Int5.blur, "WAF");
	WAF.addListener(this.id + "_n5", "blur", n5.blur, "WAF");
	WAF.addListener(this.id + "_Ext4", "blur", Ext4.blur, "WAF");
	WAF.addListener(this.id + "_Int4", "blur", Int4.blur, "WAF");
	WAF.addListener(this.id + "_n4", "blur", n4.blur, "WAF");
	WAF.addListener(this.id + "_Ext3", "blur", Ext3.blur, "WAF");
	WAF.addListener(this.id + "_Int3", "blur", Int3.blur, "WAF");
	WAF.addListener(this.id + "_n3", "blur", n3.blur, "WAF");
	WAF.addListener(this.id + "_Ext2", "blur", Ext2.blur, "WAF");
	WAF.addListener(this.id + "_Int2", "blur", Int2.blur, "WAF");
	WAF.addListener(this.id + "_n2", "blur", n2.blur, "WAF");
	WAF.addListener(this.id + "_Ext1", "blur", Ext1.blur, "WAF");
	WAF.addListener(this.id + "_Int1", "blur", Int1.blur, "WAF");
	WAF.addListener(this.id + "_n1", "blur", n1.blur, "WAF");
	WAF.addListener(this.id + "_ExtOnde", "blur", ExtOnde.blur, "WAF");
	WAF.addListener(this.id + "_IntOnde", "blur", IntOnde.blur, "WAF");
	WAF.addListener(this.id + "_ListPV", "onRowClick", ListPV.onRowClick, "WAF");
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
	WAF.addListener(this.id + "_RefBel", "change", RefBel.change, "WAF");
	WAF.addListener(this.id + "_RefBel", "blur", RefBel.blur, "WAF");
	WAF.addListener(this.id + "_cbBellows", "change", cbBellows.change, "WAF");
	WAF.addListener(this.id + "_cbBellows", "blur", cbBellows.blur, "WAF");
	WAF.addListener(this.id + "_cbBellows", "click", cbBellows.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btNew", "click", btNew.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_cNumLanc", "change", cNumLanc.change, "WAF");
	WAF.addListener(this.id + "_cNumLanc", "blur", cNumLanc.blur, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
