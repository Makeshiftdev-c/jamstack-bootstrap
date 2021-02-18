---
layout: layouts/home.njk
title: JavaScript
templateClass: tmpl-post
eleventyNavigation:
  key: JavaScript
  order: 5
---

<div class="container mt-4">
<h1>Basic JavaScript Task</h1>
<p>Open the console to view the result.</p>
</div>
<script>
    var message = "Abdi is cool";
    /* this is a
     multiline comment */
     //alert message
    alert(message);
    //write message to console
    console.log(message);
    //append message to body tag
    document.write(message);
    var a = 10, b = 5, operation;
    operation = a + b;
    console.log('addition: ' + operation);
    operation = a - b;
    console.log('subtraction ' + operation);
    operation = a * b;
    console.log('multiplication: ' + operation);
    operation = a / b;
    console.log('division: ' + operation);
    operation = a % b;
    console.log('modular division: ' + operation);
    var first_name = 'abdirisak';
    var last_name = 'arr';
    var full_name = first_name + ' ' + last_name;
    console.log(full_name);
    /*
    bill with tip program
    */
    var pre_tip_total = 35.86;
    var one_percent = pre_tip_total / 100;
    var tip_percent = 15;
    var tip_amount = one_percent * tip_percent;
    // console.log(tip_amount);
    tip_amount = tip_amount.toFixed(2);
    var bill_total = parseFloat(pre_tip_total) + parseFloat(tip_amount)
    // console.log(bill_total);
    str_message = 'Your food bill was £' + pre_tip_total + ', you have tipped ' + tip_percent + '% which equals £' + tip_amount + ', brining your total bill to £' + bill_total;
    console.log(str_message)
</script>
