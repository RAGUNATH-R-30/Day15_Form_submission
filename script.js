function create_table(){
    var table = document.createElement("table");
    table.className = "table"
    return table;
}

function create_thead(){
 var thead = document.createElement("thead")
 thead.className = "thead-dark";
 return thead;
}


function trow_tdata(content){
    var td = document.createElement("td");
    td.innerHTML=content;
 return td;
}

function trow_th(throw_content){
    var th = document.createElement("th")
    th.setAttribute("scope","col")
    th.innerHTML = throw_content;
    return th;
}

function table_body(){
    var tbody = document.createElement("tbody");
    return tbody;
}

function trow(){
    var tabelerow = document.createElement("tr");
    return tabelerow;
}

function row_creation(firstname,lastname,address,pincode,gender,food,state,country){
var tr = document.createElement("tr");
var firstname_ele = document.createElement("td");
firstname_ele.innerHTML = firstname
var lastname_ele = document.createElement("td");
lastname_ele.innerHTML =lastname
var address_ele = document.createElement("td");
address_ele.innerHTML = address
var pincode_ele = document.createElement("td");
pincode_ele.innerHTML = pincode
var gender_ele= document.createElement("td");
gender_ele.innerHTML = gender
var food_ele = document.createElement("td");
food_ele.innerHTML = food
var state_ele = document.createElement("td");
state_ele.innerHTML = state
var country_ele = document.createElement("td");
country_ele.innerHTML = country
tr.append(firstname_ele,lastname_ele,address_ele,pincode_ele,gender_ele,food_ele,state_ele,country_ele)
return tr;
}


function row_insertion(){

    var gender = document.getElementsByName("gender")
    var gendervalue;
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            gendervalue = gender[i].value
        }
    }

    var food = document.getElementsByName("food")
    var food_list=[]
    for(var j=0;j<food.length;j++){
        if(food[j].checked){
            food_list.push(food[j].value)
        }
    }
    

    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var address = document.getElementById("address").value
    var pincode = document.getElementById("pincode").value
    var food_value = food_list.join(", ")
    var state = document.getElementById("state").value
    var country = document.getElementById("country").value
    
    var row_insert = row_creation(firstname,lastname,address,pincode,gendervalue,food_value,state,country)
    tbody.append(row_insert);
    document.getElementById("myform").reset();
}


function labelcreate(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function input_create(tagname,att1name,attr1value,attr2name,attr2value){
    var element = document.createElement(tagname);
    element.setAttribute(att1name,attr1value)
    element.setAttribute(attr2name,attr2value);
    return element
}

function break_create(){
    var break_ele = document.createElement("br");
    return break_ele;
}

//Form-Elements

var firstname_label = labelcreate("label","for","firstname","Firstname");
var firstname_break = break_create();
var firstname_input = input_create("input","type","text","id","firstname")
firstname_input.setAttribute("class","input-boxes")

var lastname_label = labelcreate("label","for","lastname","Lastname");
var lastname_break = break_create();
var lastname_input = input_create("input","type","text","id","lastname")
lastname_input.setAttribute("class","input-boxes")

var address_label = labelcreate("label","for","address","Address");
var address_break = break_create();
var address_input = input_create("input","type","text","id","address")
address_input.setAttribute("class","input-boxes")

var pincode_label = labelcreate("label","for","pincode","Pincode");
var pincode_break = break_create();
var pincode_input = input_create("input","type","text","id","pincode")
pincode_input.setAttribute("class","input-boxes")

var gender_label = labelcreate("label","for","gender","Gender");

var gender_break = break_create();
var gender1_label = labelcreate("label","for","gender","Male")
var gender_input1 = input_create("input","type","radio","id","gender")
gender_input1.setAttribute("name","gender")
gender_input1.setAttribute("id","gender")
gender_input1.setAttribute("value","Male")

var gender2_label = labelcreate("label","for","gender","Female")
var gender_input2 = input_create("input","type","radio","id","gender")
gender_input2.setAttribute("name","gender")
gender_input2.setAttribute("id","gender")
gender_input2.setAttribute("value","Female")

var food_label = labelcreate("label","for","food","Choice of Food");
var food_label_break = break_create();

var food1_input = document.createElement("input")
food1_input.setAttribute("type","checkbox")
food1_input.setAttribute("name","food")
food1_input.setAttribute("id","food")
food1_input.setAttribute("value","North-Indian")
var food1_input_break = break_create();
var food1_label =labelcreate("label","for","food","North-Indian")

var food2_input = document.createElement("input")
food2_input.setAttribute("type","checkbox")
food2_input.setAttribute("name","food")
food2_input.setAttribute("id","food")
food2_input.setAttribute("value","South-Indian")
var food2_input_break = break_create();
var food2_label =labelcreate("label","for","food","South-Indian")

var food3_input = document.createElement("input")
food3_input.setAttribute("type","checkbox")
food3_input.setAttribute("name","food")
food3_input.setAttribute("id","food")
food3_input.setAttribute("value","Japanese")
var food3_input_break = break_create();
var food3_label =labelcreate("label","for","food","Japanese")

var food4_input = document.createElement("input")
food4_input.setAttribute("type","checkbox")
food4_input.setAttribute("name","food")
food4_input.setAttribute("id","food")
food4_input.setAttribute("value","Chinese")
var food4_input_break = break_create();
var food4_label =labelcreate("label","for","food","Chinese")

var food5_input = document.createElement("input")
food5_input.setAttribute("type","checkbox")
food5_input.setAttribute("name","food")
food5_input.setAttribute("id","food")
food5_input.setAttribute("value","Sea-Food")
var food5_input_break = break_create();
var food5_label =labelcreate("label","for","food","Sea-Food")

var food_div = document.createElement("div")

food_div.append(food_label,food_label_break,food1_input,food1_label,food1_input_break)
food_div.append(food2_input,food2_label,food2_input_break)
food_div.append(food3_input,food3_label,food3_input_break)
food_div.append(food4_input,food4_label,food4_input_break)
food_div.append(food5_input,food5_label,food5_input_break)


var state_label = labelcreate("label","for","state","State");
var state_break = break_create();
var state_input = input_create("input","type","text","id","state")
state_input.setAttribute("class","input-boxes")

var country_label = labelcreate("label","for","country","Country");
var country_break = break_create();
var country_input = input_create("input","type","text","id","country")
country_input.setAttribute("class","input-boxes")

var br1 = break_create();
var br2 = break_create();
var br3 = break_create();
var br4 = break_create();
var br5 = break_create();
var br6 = break_create();
var br7 = break_create();
var br8 = break_create();

var button = document.createElement("button")
button.setAttribute("type","button")
button.setAttribute("onclick","row_insertion()")
button.innerHTML = "Submit"

var form = document.createElement("form")
form.id = "myform"
form.append(firstname_label,firstname_break,firstname_input,br1,lastname_label,lastname_break,lastname_input,br2,address_label,address_break,address_input,br3,pincode_label,pincode_break,pincode_input,br4,gender_label,gender_break,gender_input1,gender1_label,gender_input2,gender2_label,br5,food_div,br6,state_label,state_break,state_input,br7,country_label,country_break,country_input,br8,button) 



//Table-Elements
var table1 = create_table();
var table_heading = create_thead();
var trwithhead = trow();
var h_firstname = trow_th("FirstName");
var h_lastname = trow_th("LastName");
var h_address = trow_th("Address");
var h_pincode = trow_th("Pincode");
var h_gender = trow_th("Gender");
var h_food = trow_th("Food");
var h_state = trow_th("State");
var h_country = trow_th("Country");

var tbody = table_body();

table1.append(table_heading);
table_heading.append(trwithhead);
trwithhead.append(h_firstname,h_lastname,h_address,h_pincode,h_gender,h_food,h_state,h_country);

table1.append(tbody)

var container = document.createElement("div")
container.className = "container"; 
container.append(form,table1)
document.body.append(container)
