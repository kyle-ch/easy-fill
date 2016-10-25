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

function fill(id, value) {
	document.getElementById(id).value = value;
}

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
		fill("billFirstName", fname);
		// fill lname
		fill("billLastName", lname);
		// fill street
		fill("billAddress1", street);
		// fill apt/unit
		if (apt !== "") {
			fill("billAddress2", apt);
		}
		// fill zipcode
		fill("billPostalCode", zipcode);
		// fill city
		fill("billCity", city);
		// fill state
		fill("billState", state);
		// fill phone
		fill("billHomePhone", phone);
		// fill email
		fill("billEmailAddress", email);
		fill("billConfirmEmail", email);
		window.setTimeout(function(){document.getElementById("billPaneContinue").click()}, 1000);
		window.setTimeout(function(){document.getElementById("shipMethodPaneContinue").click()}, 3000);
		window.setTimeout(function(){
			if (ccnumber != "") {
				fill("CardNumber", ccnumber);
				fill("CardExpireDateMM", ccmonth);
				fill("CardExpireDateYY", ccyear);
				fill("CardCCV", ccv);
			}
		}, 4500);
		window.setTimeout(function(){document.getElementById("payMethodPaneContinue").click()}, 5000);
	}
	else if (site == "sup") {
		// fill fname + lname
		fill("order_billing_name", fname + " " + lname);
		// fill email
		fill("order_email", email);
		// fill tel
		fill("order_tel", phone);
		// fill address
		fill("bo", street);
		// fill apt if applicable
		if (apt !== "") {
			fill("oba3", apt);
		}
		// fill zip
		fill("order_billing_zip", zipcode);
		// fill city 
		fill("order_billing_city", city);
		// fill state
		fill("order_billing_state", state);
		if (ccnumber != "") {
			fill("cnb", ccnumber);
			fill("credit_card_month", ccmonth);
			fill("credit_card_year", "20" + ccyear);
			fill("vval", ccv);
			fill("credit_card_type", cardtype);
		}	
	}
	else if (site == "fline") {
		// fill fname
		fill("firstName", name);
		// fill lname
		fill("shippingLastName", lname);
		// fill street
		fill("shippingAddress1", street);
		// fill apt/unit
		if (apt !== "") {
			fill("shippingAddress2", apt);
		}
		// fill city
		fill("shippingCity", city);
		// fill state
		fill("shippingState", state);
		// fill zipcode
		fill("shippingZip", zipcode);
		// fill phone
		fill("shippingPhone", phone);
		// fill email
		fill("email", email);
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
