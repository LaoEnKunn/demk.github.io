var infoWindow = new AMap.InfoWindow({
            content: "<div id='echartBox'></div>"  //使用默认信息窗体框样式，显示信息内容
        });

        
        var timer=setInterval(function(){
            var dom = document.getElementById("echartBox");
            if(dom){
                echartsInit()
                clearInterval(timer)
            }
        },1000)
        
    function echartsInit(){
        var dom = document.getElementById("echartBox");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '济南市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 5, name: '国际机场占比'},
                {value: 11, name: '国内航线占比'},
                {value: 8, name: '火车线路占比'},
                {value: 20, name: '地铁线路占比'},
                {value: 9, name: '城市公交线路占比'},
            	{value: 7, name: '运营公交车占比'},
            	{value: 23, name: '运营线路总长占比'},
            	{value: 8, name: '出租车占比'},
            	{value: 10, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
            myChart.setOption(option, true);
    }
	
	
	var infoWindow2 = new AMap.InfoWindow({
	        content: "<div id='echartBox2'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer2=setInterval(function(){
	        var dom2 = document.getElementById("echartBox2");
	        if(dom2){
	            echartsInit2()
	            clearInterval(timer2)
	        }
	    },1000)
	    
	
	
	function echartsInit2(){
	    var dom2 = document.getElementById("echartBox2");
	    var myChart2 = echarts.init(dom2);
	    var app2 = {};
	    option2 = null;
	    option2 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '青岛市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 5, name: '国际机场占比'},
                {value: 15, name: '国内航线占比'},
                {value: 4, name: '火车线路占比'},
                {value: 26, name: '地铁线路占比'},
                {value: 14, name: '城市公交线路占比'},
                {value: 9, name: '运营公交车占比'},
                {value: 5, name: '运营线路总长占比'},
                {value: 9, name: '出租车占比'},
                {value: 13, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart2.setOption(option2, true);
	}
	
	var infoWindow3 = new AMap.InfoWindow({
	        content: "<div id='echartBox3'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer3=setInterval(function(){
	        var dom3 = document.getElementById("echartBox3");
	        if(dom3){
	            echartsInit3()
	            clearInterval(timer3)
	        }
	    },1000)
	    
	
	
	function echartsInit3(){
	    var dom3 = document.getElementById("echartBox3");
	    var myChart3 = echarts.init(dom3);
	    var app3 = {};
	    option3 = null;
	    option3 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '淄博市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 21, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 13, name: '城市公交线路占比'},
                {value: 16, name: '运营公交车占比'},
                {value: 9, name: '运营线路总长占比'},
                {value: 30, name: '出租车占比'},
                {value: 11, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart3.setOption(option3, true);
	}
	
	var infoWindow4 = new AMap.InfoWindow({
	        content: "<div id='echartBox4'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer4=setInterval(function(){
	        var dom4 = document.getElementById("echartBox4");
	        if(dom4){
	            echartsInit4()
	            clearInterval(timer4)
	        }
	    },1000)
	    
	
	
	function echartsInit4(){
	    var dom4 = document.getElementById("echartBox4");
	    var myChart4 = echarts.init(dom4);
	    var app4 = {};
	    option4 = null;
	    option4 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '枣庄市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 14, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 12, name: '城市公交线路占比'},
                {value: 26, name: '运营公交车占比'},
                {value: 15, name: '运营线路总长占比'},
                {value: 13, name: '出租车占比'},
                {value: 20, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart4.setOption(option4, true);
	}
	
	var infoWindow5 = new AMap.InfoWindow({
	        content: "<div id='echartBox5'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer5=setInterval(function(){
	        var dom5 = document.getElementById("echartBox5");
	        if(dom5){
	            echartsInit5()
	            clearInterval(timer5)
	        }
	    },1000)
	    
	
	
	function echartsInit5(){
	    var dom5 = document.getElementById("echartBox5");
	    var myChart5 = echarts.init(dom5);
	    var app5 = {};
	    option5 = null;
	    option5 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '东营市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 33, name: '国际机场占比'},
                {value: 5, name: '国内航线占比'},
                {value: 20, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 13, name: '城市公交线路占比'},
                {value: 6, name: '运营公交车占比'},
                {value: 5, name: '运营线路总长占比'},
                {value: 14, name: '出租车占比'},
                {value: 4, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart5.setOption(option5, true);
	}
	
	
	var infoWindow6 = new AMap.InfoWindow({
	        content: "<div id='echartBox6'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer6=setInterval(function(){
	        var dom6 = document.getElementById("echartBox6");
	        if(dom6){
	            echartsInit6()
	            clearInterval(timer6)
	        }
	    },1000)
	    
	
	
	function echartsInit6(){
	    var dom6 = document.getElementById("echartBox6");
	    var myChart6 = echarts.init(dom6);
	    var app6 = {};
	    option6 = null;
	    option6 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '烟台市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 14, name: '国际机场占比'},
                {value: 32, name: '国内航线占比'},
                {value: 6, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 8, name: '城市公交线路占比'},
                {value: 10, name: '运营公交车占比'},
                {value: 6, name: '运营线路总长占比'},
                {value: 11, name: '出租车占比'},
                {value: 14, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart6.setOption(option6, true);
	}
	
	var infoWindow7 = new AMap.InfoWindow({
	        content: "<div id='echartBox7'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer7=setInterval(function(){
	        var dom7 = document.getElementById("echartBox7");
	        if(dom7){
	            echartsInit7()
	            clearInterval(timer7)
	        }
	    },1000)
	    
	
	
	function echartsInit7(){
	    var dom7 = document.getElementById("echartBox7");
	    var myChart7 = echarts.init(dom7);
	    var app7 = {};
	    option7 = null;
	    option7 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '潍坊市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 23, name: '国际机场占比'},
                {value: 3, name: '国内航线占比'},
                {value: 8, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 13, name: '城市公交线路占比'},
                {value: 16, name: '运营公交车占比'},
                {value: 9, name: '运营线路总长占比'},
                {value: 14, name: '出租车占比'},
                {value: 12, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart7.setOption(option7, true);
	}
	
	var infoWindow8 = new AMap.InfoWindow({
	        content: "<div id='echartBox8'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer8=setInterval(function(){
	        var dom8 = document.getElementById("echartBox8");
	        if(dom8){
	            echartsInit8()
	            clearInterval(timer8)
	        }
	    },1000)
	    
	
	
	function echartsInit8(){
	    var dom8 = document.getElementById("echartBox8");
	    var myChart8 = echarts.init(dom8);
	    var app8 = {};
	    option8 = null;
	    option8 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '济宁市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 30, name: '国际机场占比'},
                {value: 4, name: '国内航线占比'},
                {value: 5, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 9, name: '城市公交线路占比'},
                {value: 20, name: '运营公交车占比'},
                {value: 8, name: '运营线路总长占比'},
                {value: 13, name: '出租车占比'},
                {value: 10, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart8.setOption(option8, true);
	}
	
	var infoWindow9 = new AMap.InfoWindow({
	        content: "<div id='echartBox9'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer9=setInterval(function(){
	        var dom9 = document.getElementById("echartBox9");
	        if(dom9){
	            echartsInit9()
	            clearInterval(timer9)
	        }
	    },1000)
	    
	
	
	function echartsInit9(){
	    var dom9 = document.getElementById("echartBox9");
	    var myChart9 = echarts.init(dom9);
	    var app9 = {};
	    option9 = null;
	    option9 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '泰安市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 9, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 17, name: '城市公交线路占比'},
                {value: 30, name: '运营公交车占比'},
                {value: 15, name: '运营线路总长占比'},
                {value: 14, name: '出租车占比'},
                {value: 14, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart9.setOption(option9, true);
	}
	
	var infoWindow10 = new AMap.InfoWindow({
	        content: "<div id='echartBox10'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer10=setInterval(function(){
	        var dom10 = document.getElementById("echartBox10");
	        if(dom10){
	            echartsInit10()
	            clearInterval(timer10)
	        }
	    },1000)
	    
	
	
	function echartsInit10(){
	    var dom10 = document.getElementById("echartBox10");
	    var myChart10 = echarts.init(dom10);
	    var app10 = {};
	    option10 = null;
	    option10 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '威海市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 28, name: '国际机场占比'},
                {value: 12, name: '国内航线占比'},
                {value: 8, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 8, name: '城市公交线路占比'},
                {value: 10, name: '运营公交车占比'},
                {value: 11, name: '运营线路总长占比'},
                {value: 10, name: '出租车占比'},
                {value: 14, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart10.setOption(option10, true);
	}
	
	//11
	var infoWindow11 = new AMap.InfoWindow({
	        content: "<div id='echartBox11'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer11=setInterval(function(){
	        var dom11 = document.getElementById("echartBox11");
	        if(dom11){
	            echartsInit11()
	            clearInterval(timer11)
	        }
	    },1000)
	    
	
	
	function echartsInit11(){
	    var dom11 = document.getElementById("echartBox11");
	    var myChart11 = echarts.init(dom11);
	    var app11 = {};
	    option11 = null;
	    option11= {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '日照市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 27, name: '国际机场占比'},
                {value: 6, name: '国内航线占比'},
                {value: 21, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 6, name: '城市公交线路占比'},
                {value: 12, name: '运营公交车占比'},
                {value: 13, name: '运营线路总长占比'},
                {value: 4, name: '出租车占比'},
                {value: 11, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart11.setOption(option11, true);
	}
	
	//12
	var infoWindow12 = new AMap.InfoWindow({
	        content: "<div id='echartBox12'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer12=setInterval(function(){
	        var dom12 = document.getElementById("echartBox12");
	        if(dom12){
	            echartsInit12()
	            clearInterval(timer12)
	        }
	    },1000)
	    
	
	
	function echartsInit12(){
	    var dom12 = document.getElementById("echartBox12");
	    var myChart12 = echarts.init(dom12);
	    var app12 = {};
	    option12 = null;
	    option12 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '临沂市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 28, name: '国际机场占比'},
                {value: 17, name: '国内航线占比'},
                {value: 12, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 13, name: '城市公交线路占比'},
                {value: 11, name: '运营公交车占比'},
                {value: 3, name: '运营线路总长占比'},
                {value: 11, name: '出租车占比'},
                {value: 6, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart12.setOption(option12, true);
	}
	
	//13
	var infoWindow13 = new AMap.InfoWindow({
	        content: "<div id='echartBox13'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer13=setInterval(function(){
	        var dom13 = document.getElementById("echartBox13");
	        if(dom13){
	            echartsInit13()
	            clearInterval(timer13)
	        }
	    },1000)
	    
	
	
	function echartsInit13(){
	    var dom13 = document.getElementById("echartBox13");
	    var myChart13 = echarts.init(dom13);
	    var app13 = {};
	    option13 = null;
	    option13 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '德州市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 45, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 9, name: '城市公交线路占比'},
                {value: 9, name: '运营公交车占比'},
                {value: 5, name: '运营线路总长占比'},
                {value: 29, name: '出租车占比'},
                {value: 4, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart13.setOption(option13, true);
	}
	
	
	//14
	var infoWindow14 = new AMap.InfoWindow({
	        content: "<div id='echartBox14'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer14=setInterval(function(){
	        var dom14 = document.getElementById("echartBox14");
	        if(dom14){
	            echartsInit14()
	            clearInterval(timer14)
	        }
	    },1000)
	    
	
	
	function echartsInit14(){
	    var dom14 = document.getElementById("echartBox14");
	    var myChart14 = echarts.init(dom14);
	    var app14 = {};
	    option14 = null;
	    option14 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '聊城市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 25, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 14, name: '城市公交线路占比'},
                {value: 21, name: '运营公交车占比'},
                {value: 9, name: '运营线路总长占比'},
                {value: 21, name: '出租车占比'},
                {value: 9, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart14.setOption(option14, true);
	}
	
	
	//15
	var infoWindow15 = new AMap.InfoWindow({
	        content: "<div id='echartBox15'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer15=setInterval(function(){
	        var dom15 = document.getElementById("echartBox15");
	        if(dom15){
	            echartsInit15()
	            clearInterval(timer15)
	        }
	    },1000)
	    
	
	
	function echartsInit15(){
	    var dom15 = document.getElementById("echartBox15");
	    var myChart15 = echarts.init(dom15);
	    var app15 = {};
	    option15 = null;
	    option15 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '滨州市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 38, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 13, name: '城市公交线路占比'},
                {value: 15, name: '运营公交车占比'},
                {value: 14, name: '运营线路总长占比'},
                {value: 10, name: '出租车占比'},
                {value: 10, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart15.setOption(option15, true);
	}
	
	//16
	var infoWindow16 = new AMap.InfoWindow({
	        content: "<div id='echartBox16'></div>"  //使用默认信息窗体框样式，显示信息内容
	    });
	
	    
	    var timer16=setInterval(function(){
	        var dom16 = document.getElementById("echartBox16");
	        if(dom16){
	            echartsInit16()
	            clearInterval(timer16)
	        }
	    },1000)
	    
	
	
	function echartsInit16(){
	    var dom16 = document.getElementById("echartBox16");
	    var myChart16 = echarts.init(dom16);
	    var app16 = {};
	    option16 = null;
	    option16 = {
    
    tooltip: {
        trigger: 'item',
		formatter: '{a} <br/>{b} :  {d}%'
    },
    legend: {
            top: '4%',
            left: 'center'
        },
    series: [
        {
            name: '菏泽市',
            center:[175,283],
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
                {value: 0, name: '国际机场占比'},
                {value: 0, name: '国内航线占比'},
                {value: 34, name: '火车线路占比'},
                {value: 0, name: '地铁线路占比'},
                {value: 13, name: '城市公交线路占比'},
                {value: 19, name: '运营公交车占比'},
                {value: 10, name: '运营线路总长占比'},
                {value: 14, name: '出租车占比'},
                {value: 10, name: '客运总量占比'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(68, 193, 199, 0.5)'
                }
            }
        }
    ]
};
	        myChart16.setOption(option16, true);
	}