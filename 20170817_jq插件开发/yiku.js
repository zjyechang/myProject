(function(){

    var yiku = function(select){

            return new yiku.fn.init(select);
    }

    yiku.fn = {
        init:function(select){

            if( select.substr(0,1) === "#"){
                var o = document.getElementById(select.substr(1));

                this[0] = o;
                this.length = 1;
            }else if(select.substr(0,1) === "."){
                var o = document.getElementsByClassName(select.substr(1));

                for(var i=0;i<o.length;i++){
                    this[i] = o[i];
                    this.length = o.length;
                    
                }
            }else{
                 var o = document.getElementsByTagName(select);

                for(var i=0;i<o.length;i++){
                    this[i] = o[i];
                    this.length = o.length;
                }
            }
        },
        css : function(name,value){

            for(var i=0;i<this.length;i++){
                this[i].style[name] = value;
            }
            return this;//实现链式调用
        },
        attr : function(){
            for(var i=0;i<this.length;i++){
                this[i].setAttribute(name, value)
            }
            return this;//实现链式调用
        },
        html: function(html){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML = html;
            }
            return this;//实现链式调用
        },
        eq : function(num){
            this[0] = this[num];
            for(var i=1;i<this.length;i++){
                delete this[i];
            }
            // temp = this[num];
            
            // this[0] = temp;
            this.length = 1;    
            return this;//实现链式调用
        },
        empty: function(){
            this.html("");
        },
        each: function(idx,callback){
            for(var i=0;i<this.length;i++){
                idx=i;
                if(typeof callback === "function"){
                    callback();
                }

            }
            return this;
        },
        size:function(){
            return this.length;
        },
        animate: function(json,time,callback){

            for (var i=0;i<this.length;i++){
                console.log(this[i])
                // this[i].is(":animated") =true;
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
                    // this[i].is(":animated") = false;
                }


                },interval)
            }
        },
    }

    //设置init的属性
    yiku.fn.init.prototype = yiku.fn;


    // 在window中添加yk方法
    window.yk = yiku;
})();