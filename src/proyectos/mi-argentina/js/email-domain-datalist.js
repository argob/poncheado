var EmailDomainSuggester = {

  domains: ["yahoo.com.ar", "gmail.com", "hotmail.com", "live.com", "outlook.com"],
  
  bindTo: $('#email'),
  
  init: function() {
    this.addElements();
    this.bindEvents();
  },
  
  addElements: function() {
    this.datalist = $("<datalist />", {
      id: 'email-options'
    }).insertAfter(this.bindTo);
    this.bindTo.attr("list", "email-options");
  },
  
  bindEvents: function() {
    this.bindTo.on("keyup", this.testValue);
  },

  testValue: function(event) {
    var el = $(this),
    value = el.val();

    if (value.indexOf("@") != -1) {
      value = value.split("@")[0];
      EmailDomainSuggester.addDatalist(value); 
    } else {

      EmailDomainSuggester.datalist.empty();
    }

  },
  
  addDatalist: function(value) {
    var i, newOptionsString = "";
    for (i = 0; i < this.domains.length; i++) {
      newOptionsString += 
      "<option value='" + 
      value + 
      "@" +
      this.domains[i] +
      "'>";
    }
    

    this.datalist.html(newOptionsString);
  }
  
}

EmailDomainSuggester.init();