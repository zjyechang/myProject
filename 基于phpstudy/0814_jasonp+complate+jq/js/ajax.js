var $ ={
				ajax: function(options){
					//判断如果没有传递参数url的时候，弹出一个异常
					var url = options.url; //先得到地址
					if( url === undefined){
						throw new Error("ajax一定要传URL");
						return; //程序终止
					}
					//请求类型，如果为空 默认为GET
					var type = options.type || "GET";
					
					//返回的数据类型，默认为字符串
					var dataType = options.dataType || "string";
					
					var xhr = null;
					
					if( window.XMLHttpRequest ){
						xhr = new XMLHttpRequest();
					}else{ //IE需要使用一下的方式创建
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					}
					
					//当准备状态值改变的时候触发事件
					xhr.onreadystatechange=function(){
						//4表示请求已完成
						if( xhr.readyState == 4){
							
							//判断一下HTTP请求的状态码，如果成功或者缓存
							if( xhr.status >= 200 && xhr.status < 300 
								|| xhr.status == 304){
									
								//如果传进来的参数里面success是一个函数	
									if( (typeof options.success) === "function" ){
										
										//响应的结果
										var response = '';
										
										if( dataType == "string"){//如果数据类型是string
											//响应的结果直接就是字符串
											response = xhr.responseText;
										}else if( dataType == "json"){//如果数据类型是json
											//将字符串反序列化
											response = JSON.parse( xhr.responseText );
										}
										
										//回调函数 把获取的数据以参数的形式传递
										options.success( response );
									}
								}
						}
						
					}
					
					
					xhr.open(type,url);
					
					xhr.send();
					
				}
			}