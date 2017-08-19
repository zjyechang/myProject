(function(){
    youyiku = function(seletor){
        return new youyiku.fn.init(seletor);
    }

    youyiku = {
        init: function(seletor){
            if(seletor.substr(0,1) === "#"){
                var obj = document.getElementById(seletor.substr(1));
                this[0] = obj;
                this.length = 1;
            }else if(seletor.substr(0,1) === "."){
                var obj = document.getElementsByClassName(seletor.substr(1));
                this[0] = obj;
                this.length = obj.length;
            }else{
                var obj = document.getElementsByTagName(seletor.substr(1));
                this[0] = obj;
                this.length = obj.length;
            }
           
        },
        css: function(name,value){
            for(var i=0 ;i<this.length;i++){
                this[i].style[name] = value;
            }
            return this;
        },
        attr: function(name,value){
            for (var i = 0;i<this.length;i++){
                this[i].setAttribute(name,value)
            }
            return this;
        },
        eq: function(idx){
            this[0] = this[idx]
            this.length = 1;
            for(var i=1;i<this.length;i++){
                delete this[i];
            }
            return this;
        },
        animate: function(json,time,callback){

            for (var i=0;i<this.length;i++){
                this[i].is(":animated") =true;
                var interval = 50;
                var frame = 0;
                var maxframe = time/maxframe;

                var timer = setInterval(function(){
                    for(var k in json){
                        if(k != "opacity"){
                            this[i].style[k] = json[k]+"px";
                        }else{
                            this[i].style[k] = json[k];
                            this[i].style[k].filter = "alpha(opacity="+100*json[k]+")";     
                        }
                    }
                frame++;
                if(frame == maxframe){
                    clearInterval(timer);
                    this[i].is(":animated") = false;
                }


                },interval)
            }
        }
    }









    youyiku.fn.init.prototype = youyiku.fn;

    window.mmp = youyiku;
})