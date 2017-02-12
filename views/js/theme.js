var cms = {};
cms = {
    init: function() {
		//cms.imageLoaded($('img'));

        $(window).scroll(function(){
    		if ($(this).scrollTop() > 100) {
    			$('.scrollToTop').fadeIn();
                $('.navbar-fixed-top').addClass('navbar-scroll');
    		} else {
    			$('.scrollToTop').fadeOut();
                $('.navbar-fixed-top').removeClass('navbar-scroll');
    		}
    	});

    	//Click event to scroll to top
    	$('.scrollToTop').click(function(){
    		$('html, body').animate({scrollTop : 0},800);
    		return false;
    	});
	},
    layerShow:function(ele,pos) {
    	var border=2;
    	layerSidePadding=parseInt(ele.css('padding-left'))+1;

    	var mt=0,ml=0,eleWidth='auto',t=0,l=0;

    	if(!pos) {
    		t='50%';
    		l='50%';
    		eleWidth=wd.width()-(layerSidePadding*2);
    		mt=-(((wd.height()/2)-ele.height())-$(window).scrollTop());
    		ml=((wd.width()/2)-(ele.width()+layerSidePadding*2));
    	} else {
    		mt=pos.top;
    		ml=pos.left;
    	}

    	ele.show().css({
    		'position':'absolute',
    		'top':t,
    		'left':l,
    		'width':eleWidth,
    		'margin-top':mt,
    		'margin-left':ml
    	});

    },
    aniLayer:function(overlayItem,action,aniTime,aniEffect) {
    	var mTop={};
    	mTop=(action!='over') ? {'top':'-100%'} : {'top':0};
        if(aniEffect){
            overlayItem.stop(true,true).animate(mTop,aniTime,aniEffect);
        }else{
            if(action =='over'){
                overlayItem.css("top","0").hide();
                overlayItem.stop(true,true).fadeIn(aniTime);
            }else{
                overlayItem.stop(true,true).fadeOut(aniTime);
            }
        }
    },
    scrollIntoView:function (ele) {
        var offsetTop = $(ele).offset().top;
        var adjustment = Math.max(0,( $(window).height() - $(ele).outerHeight(true) ) / 2);
        var scrollTop = offsetTop - adjustment;

        $('html,body').animate({
            scrollTop: scrollTop
        }, 200);
    },
    scrollPosition:function (ele, coverBox) {
        if(ele.length > 0){
            var $window    = $(window),
            offset     = ele.offset(),
            topPadding = 200;
            $window.scroll(function() {
                if ($window.scrollTop() > offset.top) {
                    if (($window.scrollTop()) < (coverBox.offset().top + coverBox.height() - ele.height() - topPadding)) {
                        ele.stop().animate({
                            marginTop: $window.scrollTop() - offset.top + topPadding
                        }, 400);
                    }
                } else {
                    ele.stop().animate({
                        marginTop: 0
                    }, 400);
                }
            });
        }

    },
    ajaxFilePost: function(dest, id, cb) {

        var fileData = new FormData;
        fileData.append('file', $('#' + id)[0].files[0]);
        console.log($('#' + id)[0].files[0]);

        $.ajax({
            type: "post",
            url: dest,
            data: fileData,
            processData: false,
            contentType: false,
            cache: false,
            success: function(result) {
                if (result.result.resCode == "0000") {
                    cb(result.data);
                } else {
                    alert(result.result.resMsg);
                }
            },
            error: function(result) {
                alert("시스템 에러 입니다. 관리자에게 문의하세요");
            }
        });
    },
    fileInputDesign: function(ele, options) {
		// Default Options
		var defaults = {
			"fileInputRoot": $('input[type=file]'),
            "fileBtnClass": 'button.file-button',
			"fileBtn": '<button type="button" class="file-button">파일선택</button>'
		};
        var options = $.extend(defaults, options);

		// Radio Default Value
		$(options.fileInputRoot).each(function(){
            var thisId = $(this).attr("id");
            options.fileInputRoot.hide();
            $(this).after('<span class="select-file-name"></span>');
            $(this).after('<input type="hidden" id="'+thisId+'Url" name="fileUrl" class="input-file-url">');
            $(this).before(options.fileBtn);
		});

		// event
		function fileBtnClickEvent(){
			$(this).next('input[type=file]').click();
		};

		$(options.fileBtnClass).click(fileBtnClickEvent);

		$(options.fileInputRoot).change(function(){
            var fileValue = $(this).val().split("\\");
            var fileName = fileValue[fileValue.length-1]; // 파일명
            $(this).parent().find(".select-file-name").text(fileName);
            var thisId = $(this).attr("id");
            var fileNo = $(this).attr("id").replace("file","");
            var saveId = thisId+"Url";
            cms.ajaxFilePost("/upload", thisId, function(data) {
                $('#'+saveId).val(data.uploadUrl + "&mimeType=" + data.mimeType + "&originFileName=" + data.originFileName + "&fileNo="+fileNo);
                // console.log("fileNo:"+fileNo +", fileUrl:"+data);
            });
		});
	},
    pageNavigation: function(options){
        // Default Options
		var defaults = {
            "target": ".pagination",
			"pageUrl": '/admin',
            "formId": 'searchForm',
            "parameter": '?startIdx='
		};
        var options = $.extend(defaults, options);
        var locationHref = options.pageUrl+options.parameter;

		$(options.target).find("li").each(function(){
            var thisValue = $(this).data("value");
            if(!$(this).hasClass("active")){
                $(this).find("a").attr("href", locationHref + Number(thisValue));
            }
		});

        $(options.target).find("a").click(function(){
            var idx = $(this).parent().data("value")? $(this).parent().data("value"): 0;

            var searchType = $("#"+options.formId).find("input[name=searchType]").val()? $("#"+options.formId).find("input[name=searchKeyword]").val(): "";
            var searchInput = $("#"+options.formId).find("input[name=searchKeyword]").val()? $("#"+options.formId).find("input[name=searchKeyword]").val(): "";

            if(searchType != ""){
                event.preventDefault();
                $("input[name=startIdx]").val(idx);
                $("input[name=searchSelect]").val(searchType);
                $("input[name=searchInput]").val(searchInput);

                $("#searchForm").submit();
            }
        });

    },
    beforeSubmitSearch: function() {
        $("#searchForm").find("button").click(function() {
            var evnet = "";
            $("#searchForm").submit(function(e) {
                $("input[name=startIdx]").val(0);
                evnet = e;
            });
            e.preventDefault();
        });

    },
    makeNewIcon: function(tableId){
        var dt = new Date();
        var month = dt.getMonth() < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth() + 1;
        var day = dt.getDate() < 10 ? "0"+dt.getDate() : dt.getDate();
        var year = dt.getFullYear();
        var currentDate = year +""+ month +""+ day;

        $("#" + tableId + " tbody tr").each(function(index){
            var listDate = $(this).find(".list-date").text().split(" ")[0].replace(/-/g, "");
            if(currentDate <= listDate){
                $(this).find(".title-area").append('<img class="icon-new" src="/img/icon_new.gif" alt="new">');
            }
        });

    },
    phoneNumberFormat: function(phoneNum){
        if (phoneNum.length == 9) {
          phoneNum = phoneNum.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
        } else if (phoneNum.length == 10) {
          phoneNum = phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        } else if (phoneNum.length == 11) {
          phoneNum = phoneNum.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
        }
        return phoneNum;
    },
    commentListAjax: function(form, ajaxUrl, type){
        var dataCollection = $("#"+form).serialize();

        $.ajax({
            type: "GET",
            dataType: "json",
            url: ajaxUrl,
            data: dataCollection,
            cache: false,
            success: function(result) {
                if (result.result.resCode == "0000") {
                    $(result.data).each(function(index, data){
                        var cntnButton = "";

                        if(type == data.Admin || type == "all"){
                            cntnButton = '<div class="comment-list-btn"><button data-toggle="modal" data-target="#passwordModal" class="comment-btn comment-btn-delete">&times;</button></div>'
                        }

                        var cntn = '';
                            cntn += '<div class="comment-item-box" data-seq="'+data.Seq+'" data-relseq="'+data.ReplSeq+'" data-commentseq="'+data.CommentSeq+'">';
                            cntn += '<div class="comment-list-info"><strong class="comment-list-name">'+data.Name+'</strong>';
                            cntn += '<span class="comment-list-date">'+data.CreateDate+'</span></div>';
                            cntn += cntnButton;
                            cntn += '<div class="comment-list-comment">'+data.Comment+'</div>';
                            cntn += '</div>';
                        $( ".comment-list" ).append( cntn );
                    });
                } else {
                    alert(result.result.resMsg);
                }
            },
            error: function(result) {
                alert("시스템 에러 입니다. 관리자에게 문의하세요");
            }
        });

    }



}
cms.init();
