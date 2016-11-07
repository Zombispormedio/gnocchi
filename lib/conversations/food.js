const foods=
["hotdog","taco","burrito","chestnut","hot_pepper", "corn", "ear_of_rice", "herb", "mushroom", 
"tomato", "eggplant","grapes","melon","watermelon", "tangerine",
"lemon","banana","pineapple","apple","green_apple","pear","peach","cherries","strawberry","hamburger","pizza","meat_on_bone",
"poultry_leg","rice_cracker","rice_ball","rice","curry","ramen","spaghetti","bread","fries",
"sweet_potato","dango","oden","sushi","fried_shrimp","fish_cake","icecream","shaved_ice","ice_cream","doughnut","cookie",
"chocolate_bar","candy","lollipop","custard","honey_po","cake","bento","stew","egg",
"fork_and_knife","tea","sake","wine_glass","cocktail","tropical_drink","beer",
"beers","baby_bottle","knife_fork_plate","champagne","popcorn","ribbon","gift","birthday",
"bamboo","chicken","snail","snake","octopus","fish","tropical_fish","blowfish","ant","bird","horse","cow","rabbit","cat","dog",
"dromedary_camel","camel","pig","frog","bear"]


module.exports= {

    is:function(name){
        let formatName=name.toLowerCase().replace(" ", "_")
        return foods.includes(formatName)?formatName:false
    }

}