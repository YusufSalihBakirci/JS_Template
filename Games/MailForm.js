var color = "#227eba";
var textColor = "#ffffff";
var startText = "Are you ready to collect your Black Friday discounts?";
var formText = "Please enter e-mail address to start the game.";
var promText = "I want to receive special offer and promotions.";
var dashoardText = "Your Discount Rate";
var copyCouponCodeTextP1 = "Your Coupon Code is";
var copyCouponCodeTextP2 = "Click to copy and paste this code at the check-out page.";
var copiedText = "Your coupon code has been copied : ";
var placeHolderText = "Enter your email address";
var formSubmitButtonText = "Send";
var tryAgainButtonText="Try Again";
var noItemText = "You did not win promotions. Please try again.";

function createMailSubForm() {
    var div = document.createElement("DIV");
        div.id="vlmailform";
        div.style.width="400px";
        div.style.height="400px";
        div.style.backgroundColor="#6b6969";
        div.style.borderRadius="20px";
        div.style.padding="10px";
        div.style.position="fixed";
        div.style.transition="all 1s";
        div.style.position="fixed";
        div.style.transform= "translate(-50%, -50%)";
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.zIndex="9999";
        div.style.display="flex";
        div.style.justifyContent="center";
        div.style.flexDirection="column";
        div.style.alignItems="center";
    
    var header = document.createElement("div");
        header.innerHTML=formText;
        header.style.width="360px";
        header.style.padding="20px";
        header.style.border="0";
        header.style.fontSize="26px";
        header.style.textAlign="center";
        header.style.color="white";
        header.style.borderRadius="12px";
        header.style.marginBottom="15px";

    var img = document.createElement("img");
        img.src = "https://img.visilabs.net/banner/uploaded_images/237_1228_20191121110247243.png";
        img.style.width="30px";

    // header.appendChild(img);

    div.appendChild(header);

    var input = document.createElement("INPUT");
        input.setAttribute("type","text");
        input.setAttribute("placeholder","Email Adresiniz");
        input.style.backgroundColor="white";
        input.style.width="100%";
        input.style.padding="20px";
        input.style.border="0";
        input.style.maxWidth="-webkit-fill-available";
        input.style.fontSize="19px";
        input.style.fontWeight="bold";
        input.style.color="black";
        input.style.borderRadius="12px";
        input.style.marginBottom="45px";

    div.appendChild(input);

    var row = document.createElement("DIV");
        row.style.color="white";
        row.style.marginBottom="15px";
        row.style.fontSize="16px";
        row.innerHTML="<input style='width:20px;height:20px;display:block;margin-right:7px;float:left' id='vlPromCheck' type='checkbox'>"+promText;

        div.appendChild(row);

    var row2 = document.createElement("DIV");
        row2.style.color="white";
        row2.style.fontSize="16px";
        row2.innerHTML="<input style='width:20px;height:20px;display:block;margin-right:7px;float:left' id='vlRulesCheck' type='checkbox'>"+
        "I agree the <a href='https://www.otel.com/terms-conditions/' style='text-decoration: underline;'>Terms and Conditions</a> and <a href='https://www.otel.com/accounts/signup/privacy/' style='text-decoration: underline;'>Privacy Policy.</a>";

        div.appendChild(row2);

    var vlCloseButton = document.createElement("BUTTON");
        vlCloseButton.id="vlCloseBtnMailForm";
        vlCloseButton.innerHTML="&#10006;";
        vlCloseButton.style.position="absolute";
        vlCloseButton.style.right="0px";
        vlCloseButton.style.top="0px";
        vlCloseButton.style.border="0";
        vlCloseButton.style.color="#fff";
        vlCloseButton.style.padding="5px 10px";
        vlCloseButton.style.cursor="pointer";
        vlCloseButton.style.backgroundColor="black";
        vlCloseButton.style.fontSize="30px";

    div.appendChild(vlCloseButton);

    vlCloseButton.addEventListener("click",function () {
        document.querySelector("#vlmailform").remove();
        document.documentElement.style.overflow = 'auto';
    });

    var submit = document.createElement("div");
        submit.id="vlFormSubmit";
        submit.style.backgroundColor="white";
        submit.style.color=color;
        submit.style.padding="15px";
        submit.style.marginTop="15px";
        submit.style.borderRadius="10px";
        submit.style.width="100px";
        submit.style.cursor="pointer";
        submit.style.fontWeight="bolder";
        submit.style.textAlign="center";
        submit.innerText=formSubmitButtonText;

    submit.addEventListener("click",function () {
        div.style.opacity="0";
        setTimeout(() => {
            div.remove();
            
        }, 1000);
        setTimeout(() => {
            if (document.querySelector("#hediyeyagmuru")) {
                document.querySelector("#hediyeyagmuru").style.backgroundColor="rgba(255,255,255,1)";
            }
        }, 1100);
    });

    div.appendChild(submit);
    document.body.appendChild(div);
}