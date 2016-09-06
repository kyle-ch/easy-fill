var fname;
var lname;
var street;
var apt;
var state;
var zipcode;
var city;
var phone;
var email;
var ccnumber;
var ccmonth;
var ccyear;
var ccv;
var cardtype;

var required = {fname, lname, street, state, zipcode, city, phone, email};

function autofill() {
	if (window.location.toString().indexOf("footlocker") != -1
		|| window.location.toString().indexOf("eastbay") != -1
		|| window.location.toString().indexOf("footaction") != -1
		|| window.location.toString().indexOf("champssports") != -1) {
		fillBillingAddress("flocker");
	}
	else if (window.location.toString().indexOf("supremenewyork") != -1) {
		fillBillingAddress("sup");
	}
	else if (window.location.toString().indexOf("finishline") != -1) {
		fillBillingAddress("fline");
	}
}

function fillBillingAddress(site) {
	if (site == "flocker") {
		// fill fname
		document.getElementById("billFirstName").value = fname;
		// fill lname
		document.getElementById("billLastName").value = lname;
		// fill street
		document.getElementById("billAddress1").value = street;
		// fill apt/unit
		if (apt !== "") {
			document.getElementById("billAddress2").value = apt;
		}
		// fill zipcode
		document.getElementById("billPostalCode").value = zipcode;
		// fill city
		document.getElementById("billCity").value = city;
		// fill state
		document.getElementById("billState").value = state;
		// fill phone
		document.getElementById("billHomePhone").value = phone;
		// fill email
		document.getElementById("billEmailAddress").value = email;
		document.getElementById("billConfirmEmail").value = email;
		window.setTimeout(function(){document.getElementById("billPaneContinue").click()}, 1000);
		window.setTimeout(function(){document.getElementById("shipMethodPaneContinue").click()}, 3000);
		window.setTimeout(function(){
			if (ccnumber != "") {
				document.getElementById("CardNumber").value = ccnumber;
				document.getElementById("CardExpireDateMM").value = ccmonth;
				document.getElementById("CardExpireDateYY").value = ccyear;
				document.getElementById("CardCCV").value = ccv;
			}
		}, 4500);
		window.setTimeout(function(){document.getElementById("payMethodPaneContinue").click()}, 5000);
	}
	else if (site == "sup") {
		// fill fname + lname
		document.getElementById("order_billing_name").value = fname + " " + lname;
		// fill email
		document.getElementById("order_email").value = email;
		// fill tel
		document.getElementById("order_tel").value = phone;
		// fill address
		document.getElementById("bo").value = street;
		// fill apt if applicable
		if (apt !== "") {
			document.getElementById("oba3").value = apt;
		}
		// fill zip
		document.getElementById("order_billing_zip").value = zipcode;
		// fill city 
		document.getElementById("order_billing_city").value = city;
		// fill state
		document.getElementById("order_billing_state").value = state;
		if (ccnumber != "") {
			document.getElementById("cnb").value = ccnumber;
			document.getElementById("credit_card_month").value = ccmonth;
			document.getElementById("credit_card_year").value = "20" + ccyear;
			document.getElementById("vval").value = ccv;
			document.getElementById("credit_card_type").value = cardtype;
		}	
	}
	else if (site == "fline") {
		// fill fname
		document.getElementById("firstName").value = fname;
		// fill lname
		document.getElementById("shippingLastName").value = lname;
		// fill street
		document.getElementById("shippingAddress1").value = street;
		// fill apt/unit
		if (apt !== "") {
			document.getElementById("shippingAddress2").value = apt;
		}
		// fill city
		document.getElementById("shippingCity").value = city;
		// fill state
		document.getElementById("shippingState").value = state;
		// fill zipcode
		document.getElementById("shippingZip").value = zipcode;
		// fill phone
		document.getElementById("shippingPhone").value = phone;
		// fill email
		document.getElementById("email").value = email;
		window.setTimeout(function(){document.getElementById("shippingContinue").click()}, 1000);
		// FINISH BILLING
	}
}

var okay = true;
var i;
for (i in required) {
	if (required[i] == "") {
		okay = false;
		alert(i + " is blank");
	}
}

if (okay) {
	chrome.storage.sync.get('autofillData',
	function(items){
		fname = items.autofillData[0];
		lname = items.autofillData[1];
		street = items.autofillData[2];
		apt = items.autofillData[3];
		state = items.autofillData[4];
		zipcode = items.autofillData[5];
		city = items.autofillData[6];
		phone = items.autofillData[7];
		email = items.autofillData[8];
		ccnumber = items.autofillData[9];
		ccmonth = items.autofillData[10];
		ccyear = items.autofillData[11];
		ccv = items.autofillData[12];
		cardtype = items.autofillData[13];
		autofill();
	})
}
