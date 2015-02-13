$(document).ready(function(){ 
  $('.navbar').click(function(){
    $('header nav').toggleClass('shownav');
  });
  var myWidth = 0;
  function getSize(){
    if( typeof( window.innerWidth ) == 'number' ) {
      myWidth = window.innerWidth;
    } else if( document.documentElement && document.documentElement.clientWidth) {
      myWidth = document.documentElement.clientWidth;
    };
  };
  var m = $('#main'),
      a = $('#asidepart'),
      c = $('.closeaside'),
      o = $('.openaside');
  $(window).resize(function(){
    getSize(); 
    if (myWidth >= 1024) {
      $('header nav').removeClass('shownav');
    }else
    {
      m.removeClass('moveMain');
      a.css('display', 'block').removeClass('fadeOut');
      o.css('display', 'none');
      if(window.cacman_var.post_toc_aside){
    	  $('#toc.toc-aside').css('display', 'none');
      }
    }
  });
  c.click(function(){
    a.addClass('fadeOut').css('display', 'none');
    o.css('display', 'block').addClass('fadeIn');
    m.addClass('moveMain');
  });
  o.click(function(){
    o.css('display', 'none').removeClass('beforeFadeIn');
    a.css('display', 'block').removeClass('fadeOut').addClass('fadeIn');      
    m.removeClass('moveMain');
  });
  $(window).scroll(function(){
    o.css("top",Math.max(80,260-$(this).scrollTop()));
  });
  
  if(window.cacman_var.is_post){
	  var ai = $('.article-content>iframe'),
      ae = $('.article-content>embed'),
      t  = $('#toc'),
      h  = $('article h2')
      ah = $('article h2'),
      ta = $('#toc.toc-aside'),
      o  = $('.openaside'),
      c  = $('.closeaside');
	  if(ai.length>0){
	    ai.wrap('<div class="video-container" />');
	  };
	  if(ae.length>0){
	   ae.wrap('<div class="video-container" />');
	  };
	  if(ah.length==0){
	    t.css('display','none');
	  }else{
	    c.click(function(){
	      ta.css('display', 'block').addClass('fadeIn');
	    });
	    o.click(function(){
	      ta.css('display', 'none');
	    });
	    $(window).scroll(function(){
	      ta.css("top",Math.max(140,320-$(this).scrollTop()));
	    });
	  };  
  }
  
  if(window.cacman_var.post_page_photo){
	  var $this = $('.share'),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      title = $this.attr('data-title'),
      tsina = $this.attr('data-tsina'),
      description = $this.attr('description');
  var html = [
  '<a href="#" class="overlay" id="qrcode"></a>',
  '<div class="qrcode clearfix"><span>扫描二维码分享到微信朋友圈</span><a class="qrclose" href="#nothing"></a><strong>Loading...Please wait</strong><img id="qrcode-pic" data-src="http://s.jiathis.com/qrcode.php?url=' + encodedUrl + '"/></div>',
  '<a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"></a>',
  '<a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
  '<a href="#qrcode" class="article-share-qrcode" title="微信"></a>',
  '<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodedUrl + '" class="article-share-qqzone" target="_blank"></a>',
  '<a href="http://widget.renren.com/dialog/share?resourceUrl=' + encodedUrl + '&srcUrl=' + encodedUrl + '&title=' + title +'" class="article-share-renren" target="_blank" title="人人"></a>',
  '<a href="http://service.weibo.com/share/share.php?title='+title+'&url='+encodedUrl +'&ralateUid='+ tsina +'&searchPic=true&style=number' +'" class="article-share-weibo" target="_blank" title="微博"></a>',
  '<span title="Share to"></span>'
  ].join('');
  $this.append(html);
  $('.article-share-qrcode').click(function(){
    var imgSrc = $('#qrcode-pic').attr('data-src');
    $('#qrcode-pic').attr('src', imgSrc);
    $('#qrcode-pic').load(function(){
        $('.qrcode strong').text(' ');
    });
  });
  }
  
  if(window.cacman_var.tags_categories){
	  var list    = $('.archive-title a'),
      box     = $('.all-list-box'),
      first   = $('.archive-title a:first-of-type');
      box.load(first.attr('data-src').toString()+' #archive-page');
      first.addClass('current');
	  list.each(function(){
	    $(this).click(function(){
	      var listSrc=$(this).attr('data-src').toString()+' #archive-page';
	      box.load(listSrc);
	      list.removeClass('current');
	      $(this).addClass('current');
	     });  
	    });
  }
  
  if(window.cacman_var.post_page_photo_fancybox){
	  $('.article-content').each(function(i){
		    $(this).find('img').each(function(){
		      if ($(this).parent().hasClass('fancybox')) return;
		      var alt = this.alt;
		      if (alt) $(this).after('<span class="caption"><i class="caption-alt-icon"></i> ' + alt + '</span>');
		      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
		    });
		    $(this).find('.fancybox').each(function(){
		      $(this).attr('rel', 'article' + i);
		    });
		  });
		  if($.fancybox){
		    $('.fancybox').fancybox();
		  }
  }
  
  
});
if(window.cacman_var.duoshuo_shortname){
	var duoshuoQuery = {short_name:window.cacman_var.duoshuo_shortname};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = '//static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		|| document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
}

//img-loaded//
(function(c,n){var l="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function m(){var b=c(i),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function j(b,a){b.src===l||-1!==c.inArray(b,k)||(k.push(b),a?h.push(b):i.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(i),c(h)]),e.length===k.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():
	0,o=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),k=[],i=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){j(b.target,"error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)j(a,e.isBroken);else if(a.complete&&a.naturalWidth!==n)j(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=l,a.src=d}):m();return d?d.promise(g):
	g}})(jQuery);
//img-loaded//
(function($) {
    
	
	//gallery begin//
	// Caption
	  $('.entry').each(function(i){
	    $(this).find('img').each(function(){
	      if (!$(this).hasClass('nofancybox')){
	        var alt = this.alt;

	        if (alt){
	          $(this).after('<span class="caption">' + alt + '</span>');
	        }

	        $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + i + '" />');
	      }
	    });
	  });

	  // Gallery
	  var play = function(parent, item, callback){
	    var width = parent.width();

	    item.imagesLoaded(function(){
	      var _this = this[0],
	        nWidth = _this.naturalWidth,
	        nHeight = _this.naturalHeight;

	      callback();
	      this.animate({opacity: 1}, 500);
	      parent.animate({height: width * nHeight / nWidth}, 500);
	    });
	  };

	  $('.gallery').each(function(){
	    var $this = $(this),
	      current = 0,
	      photoset = $this.children('.photoset').children(),
	      all = photoset.length,
	      loading = true;

	    play($this, photoset.eq(0), function(){
	      loading = false;
	    });

	    $this.on('click', '.prev', function(){
	      if (!loading){
	        var next = (current - 1) % all;
	        loading = true;

	        play($this, photoset.eq(next), function(){
	          photoset.eq(current).animate({opacity: 0}, 500);
	          loading = false;
	          current = next;
	        });
	      }
	    }).on('click', '.next', function(){
	      if (!loading){
	        var next = (current + 1) % all;
	        loading = true;

	        play($this, photoset.eq(next), function(){
	          photoset.eq(current).animate({opacity: 0}, 500);
	          loading = false;
	          current = next;
	        });
	      }
	    });
	  });
	//gallery end//
	
	
    // When to show the scroll link
    // higher number = scroll link appears further down the page    
    var upperLimit = 1000; 
        
    // Our scroll link element
    var scrollElem = $('#totop');
    
    // Scroll to top speed
    var scrollSpeed = 500;
    
    // Show and hide the scroll to top link based on scroll position    
    scrollElem.hide();
    $(window).scroll(function () {             
        var scrollTop = $(document).scrollTop();        
        if ( scrollTop > upperLimit ) {
            $(scrollElem).stop().fadeTo(300, 1); // fade back in            
        }else{        
            $(scrollElem).stop().fadeTo(300, 0); // fade out
        }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function(){ 
        $('html, body').animate({scrollTop:0}, scrollSpeed); return false; 
    });

})(jQuery);